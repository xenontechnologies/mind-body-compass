import type { ChatMessage } from "../../lib/chat-types";
import { EscalationCard } from "./escalation-card";
import { SeverityCard } from "./severity-card";

export function MessageBubble({
  message,
  onConnect,
  connected,
}: {
  message: ChatMessage;
  onConnect?: () => void;
  connected?: boolean;
}) {
  const isUser = message.role === "user";

  return (
    <div className="fade-up space-y-3">
      <div className={isUser ? "flex justify-end" : "flex justify-start"}>
        <div className={`max-w-[85%] ${isUser ? "text-right" : ""}`}>
          <p className="label-xs mb-1.5">{isUser ? "You" : "Assistant"}</p>
          <p
            className={`rounded-md border border-border px-3.5 py-2.5 text-left text-xs leading-relaxed whitespace-pre-wrap md:text-[13px] ${
              isUser ? "bg-selected text-foreground" : "bg-surface text-secondary-foreground"
            }`}
          >
            {message.text}
          </p>
        </div>
      </div>

      {message.card?.kind === "escalation" && (
        <EscalationCard reason={message.card.reason} onConnect={onConnect} connected={connected} />
      )}
      {message.card?.kind === "severity" && (
        <SeverityCard level={message.card.level} explanation={message.card.explanation} />
      )}
    </div>
  );
}
