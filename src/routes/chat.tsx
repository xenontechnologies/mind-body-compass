import { useEffect, useRef, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Brain, Stethoscope } from "lucide-react";
import { ChatModeToggle } from "../components/chat/chat-mode-toggle";
import { ChatSidebar } from "../components/chat/chat-sidebar";
import { ChatInput } from "../components/chat/chat-input";
import { CrisisBanner } from "../components/chat/crisis-banner";
import { MessageBubble } from "../components/chat/message-bubble";
import { TypingIndicator } from "../components/chat/typing-indicator";
import { useChatStore } from "../hooks/use-chat-store";
import { MODES } from "../lib/chat-types";
import { supabase } from "../lib/supabase";
import { redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/chat")({
  head: () => ({
    meta: [
      { title: "Chat — Mind Support & Health Guide | Plight" },
      {
        name: "description",
        content:
          "Switch between Mind Support for emotional wellbeing and Health Guide for symptom triage with a 1–5 severity read, plus escalation to licensed professionals.",
      },
      { property: "og:title", content: "Plight Chat — Mind Support & Health Guide" },
      {
        property: "og:description",
        content:
          "One calm chat surface with two assistants: supportive conversation and medical guidance, each with its own history.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  beforeLoad: async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      throw redirect({
        to: "/login",
      });
    }
  },
  component: ChatPage,
});

function ChatPage() {
  const {
    mode,
    setMode,
    hydrated,
    typing,
    active,
    conversations,
    startNew,
    selectConversation,
    deleteConversation,
    send,
  } = useChatStore();
  const [connected, setConnected] = useState(false);
  const endRef = useRef<HTMLDivElement | null>(null);
  const meta = MODES[mode];
  const ModeIcon = mode === "mind" ? Brain : Stethoscope;

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [active?.messages.length, typing]);

  return (
    <div className="flex min-h-dvh flex-col bg-background md:h-dvh md:flex-row md:overflow-hidden">
      <ChatSidebar
        conversations={conversations}
        activeId={active?.id ?? null}
        onSelect={selectConversation}
        onNew={startNew}
        onDelete={deleteConversation}
      />

      <div className="flex min-h-0 flex-1 flex-col">
        <CrisisBanner />

        <header className="border-b border-border bg-nav px-4 py-3 md:px-6">
          <ChatModeToggle mode={mode} onChange={setMode} />
          <div className="mt-3 flex items-start gap-2.5 transition-opacity duration-150">
            <ModeIcon
              className="mt-0.5 h-4 w-4 shrink-0 text-secondary-foreground"
              strokeWidth={1.5}
            />
            <div>
              <p className="text-xs font-medium text-foreground">{meta.name}</p>
              <p className="mt-0.5 text-[11px] leading-relaxed text-muted-foreground">
                {meta.description}
              </p>
            </div>
          </div>
        </header>

        <div className="min-h-0 flex-1 overflow-y-auto px-4 py-6 md:px-6">
          <div className="mx-auto w-full max-w-3xl space-y-5">
            {!hydrated && (
              <p className="text-xs text-muted-foreground">Loading your conversation…</p>
            )}
            {active?.messages.map((message) => (
              <MessageBubble
                key={message.id}
                message={message}
                connected={connected}
                onConnect={() => setConnected(true)}
              />
            ))}
            {typing && <TypingIndicator />}
            <div ref={endRef} />
          </div>
        </div>

        <div className="border-t border-border bg-nav px-4 py-3 md:px-6">
          <div className="mx-auto w-full max-w-3xl">
            <ChatInput
              disabled={typing || !hydrated}
              placeholder={
                mode === "mind" ? "Tell me how you're feeling…" : "Describe your symptoms…"
              }
              onSend={send}
            />
            <p className="mt-2 text-[11px] leading-relaxed text-muted-foreground">
              {meta.disclaimer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
