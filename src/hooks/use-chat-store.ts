import { useCallback, useEffect, useMemo, useState } from "react";
import { generateReply } from "../lib/chat-engine";
import { createId, MODES, type ChatMode, type Conversation, type ChatMessage } from "../lib/chat-types";
import { supabase } from "../lib/supabase";

const STORAGE_KEY = "plight-chat-v1";

function newConversation(mode: ChatMode): Conversation {
  return {
    id: createId(),
    mode,
    title: "New conversation",
    updatedAt: Date.now(),
    messages: [
      { id: createId(), role: "assistant", text: MODES[mode].greeting, createdAt: Date.now() },
    ],
  };
}

function titleFrom(text: string) {
  const clean = text.trim().replace(/\s+/g, " ");
  return clean.length > 42 ? `${clean.slice(0, 42)}…` : clean || "New conversation";
}

export function useChatStore() {
  const [mode, setMode] = useState<ChatMode>("mind");
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [activeIds, setActiveIds] = useState<Record<ChatMode, string | null>>({
    mind: null,
    health: null,
  });
  const [typing, setTyping] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  const [sessionUser, setSessionUser] = useState<any>(null);

  useEffect(() => {
    async function initStore() {
      const { data: { session } } = await supabase.auth.getSession();
      setSessionUser(session?.user || null);

      let loaded: Conversation[] = [];
      
      if (session?.user) {
        // Fetch from Supabase
        const { data: chats } = await supabase
          .from("chats")
          .select("*")
          .eq("user_id", session.user.id)
          .order("updated_at", { ascending: false });

        if (chats && chats.length > 0) {
          const { data: messages } = await supabase
            .from("messages")
            .select("*")
            .in("chat_id", chats.map(c => c.id))
            .order("created_at", { ascending: true });

          loaded = chats.map(chat => ({
            id: chat.id,
            mode: chat.mode as ChatMode,
            title: chat.title,
            updatedAt: chat.updated_at,
            messages: (messages || [])
              .filter(m => m.chat_id === chat.id)
              .map(m => ({
                id: m.id,
                role: m.role as "user" | "assistant",
                text: m.text,
                createdAt: m.created_at
              }))
          }));
        }
      }

      // Fallback to local storage if no DB chats exist
      if (loaded.length === 0) {
        try {
          const raw = localStorage.getItem(STORAGE_KEY);
          if (raw) {
            const parsed = JSON.parse(raw) as { conversations?: Conversation[]; mode?: ChatMode };
            loaded = Array.isArray(parsed.conversations) ? parsed.conversations : [];
            if (parsed.mode === "mind" || parsed.mode === "health") setMode(parsed.mode);
          }
        } catch {
          loaded = [];
        }
      }

      const seeded = [...loaded];
      (["mind", "health"] as ChatMode[]).forEach((m) => {
        if (!seeded.some((c) => c.mode === m)) seeded.push(newConversation(m));
      });

      setConversations(seeded);
      setActiveIds({
        mind: seeded.filter((c) => c.mode === "mind").sort((a, b) => b.updatedAt - a.updatedAt)[0]?.id ?? null,
        health: seeded.filter((c) => c.mode === "health").sort((a, b) => b.updatedAt - a.updatedAt)[0]?.id ?? null,
      });
      setHydrated(true);
    }
    
    initStore();
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ conversations, mode }));
    } catch {
      /* storage unavailable */
    }
  }, [conversations, mode, hydrated]);

  const modeConversations = useMemo(
    () => conversations.filter((c) => c.mode === mode).sort((a, b) => b.updatedAt - a.updatedAt),
    [conversations, mode],
  );

  const activeId = activeIds[mode];
  const active = useMemo(
    () => conversations.find((c) => c.id === activeId) ?? modeConversations[0] ?? null,
    [conversations, activeId, modeConversations],
  );

  const startNew = useCallback(() => {
    const conv = newConversation(mode);
    setConversations((prev) => [conv, ...prev]);
    setActiveIds((prev) => ({ ...prev, [mode]: conv.id }));
    
    if (sessionUser) {
      supabase.from("chats").insert({
        id: conv.id,
        user_id: sessionUser.id,
        mode: conv.mode,
        title: conv.title,
        updated_at: conv.updatedAt
      }).then();
      
      supabase.from("messages").insert(conv.messages.map(m => ({
        id: m.id,
        chat_id: conv.id,
        role: m.role,
        text: m.text,
        created_at: m.createdAt
      }))).then();
    }
  }, [mode, sessionUser]);

  const selectConversation = useCallback(
    (id: string) => setActiveIds((prev) => ({ ...prev, [mode]: id })),
    [mode],
  );

  const deleteConversation = useCallback(
    (id: string) => {
      setConversations((prev) => {
        const next = prev.filter((c) => c.id !== id);
        const remaining = next.filter((c) => c.mode === mode);
        if (remaining.length === 0) {
          const conv = newConversation(mode);
          setActiveIds((ids) => ({ ...ids, [mode]: conv.id }));
          return [conv, ...next];
        }
        const fallback = remaining[0];
        setActiveIds((ids) =>
          ids[mode] === id && fallback ? { ...ids, [mode]: fallback.id } : ids,
        );
        return next;
      });
      
      if (sessionUser) {
        supabase.from("chats").delete().eq("id", id).then();
      }
    },
    [mode, sessionUser],
  );

  const send = useCallback(
    (text: string) => {
      const trimmed = text.trim();
      if (!trimmed || !active || typing) return;
      const conversationId = active.id;
      const userMessage = {
        id: createId(),
        role: "user" as const,
        text: trimmed,
        createdAt: Date.now(),
      };
      
      const newTitle = active.messages.some((m) => m.role === "user") ? active.title : titleFrom(trimmed);

      setConversations((prev) =>
        prev.map((c) =>
          c.id === conversationId
            ? {
                ...c,
                title: newTitle,
                messages: [...c.messages, userMessage],
                updatedAt: Date.now(),
              }
            : c,
        ),
      );

      if (sessionUser) {
        supabase.from("chats").update({ title: newTitle, updated_at: Date.now() }).eq("id", conversationId).then();
        supabase.from("messages").insert({
          id: userMessage.id,
          chat_id: conversationId,
          role: userMessage.role,
          text: userMessage.text,
          created_at: userMessage.createdAt
        }).then();
      }

      setTyping(true);
      const historyForReply = [...active.messages, userMessage];
      const fetchReply = async () => {
        const reply = await generateReply(active.mode, trimmed, historyForReply);
        setConversations((prev) =>
          prev.map((c) =>
            c.id === conversationId
              ? { ...c, messages: [...c.messages, reply], updatedAt: Date.now() }
              : c,
          ),
        );
        
        if (sessionUser) {
          supabase.from("chats").update({ updated_at: Date.now() }).eq("id", conversationId).then();
          supabase.from("messages").insert({
            id: reply.id,
            chat_id: conversationId,
            role: reply.role,
            text: reply.text,
            created_at: reply.createdAt
          }).then();
        }
        
        setTyping(false);
      };
      fetchReply();
    },
    [active, typing, sessionUser],
  );

  return {
    mode,
    setMode,
    hydrated,
    typing,
    active,
    conversations: modeConversations,
    startNew,
    selectConversation,
    deleteConversation,
    send,
  };
}
