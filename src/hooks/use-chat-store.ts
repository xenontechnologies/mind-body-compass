import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { generateReply } from "../lib/chat-mock";
import { createId, MODES, type ChatMode, type Conversation } from "../lib/chat-types";

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
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    let loaded: Conversation[] = [];
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

    const seeded = [...loaded];
    (["mind", "health"] as ChatMode[]).forEach((m) => {
      if (!seeded.some((c) => c.mode === m)) seeded.push(newConversation(m));
    });

    setConversations(seeded);
    setActiveIds({
      mind: seeded.filter((c) => c.mode === "mind").sort((a, b) => b.updatedAt - a.updatedAt)[0]?.id ?? null,
      health:
        seeded.filter((c) => c.mode === "health").sort((a, b) => b.updatedAt - a.updatedAt)[0]?.id ?? null,
    });
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ conversations, mode }));
    } catch {
      /* storage unavailable */
    }
  }, [conversations, mode, hydrated]);

  useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);

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
  }, [mode]);

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
        setActiveIds((ids) => (ids[mode] === id ? { ...ids, [mode]: remaining[0].id } : ids));
        return next;
      });
    },
    [mode],
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

      setConversations((prev) =>
        prev.map((c) =>
          c.id === conversationId
            ? {
                ...c,
                title: c.messages.some((m) => m.role === "user") ? c.title : titleFrom(trimmed),
                messages: [...c.messages, userMessage],
                updatedAt: Date.now(),
              }
            : c,
        ),
      );

      setTyping(true);
      const historyForReply = [...active.messages, userMessage];
      timer.current = setTimeout(
        () => {
          const reply = generateReply(active.mode, trimmed, historyForReply);
          setConversations((prev) =>
            prev.map((c) =>
              c.id === conversationId
                ? { ...c, messages: [...c.messages, reply], updatedAt: Date.now() }
                : c,
            ),
          );
          setTyping(false);
        },
        700 + Math.random() * 500,
      );
    },
    [active, typing],
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
