import type { ChatMessage } from "../../lib/chat-types";
import { EscalationCard } from "./escalation-card";
import { SeverityCard } from "./severity-card";
import ReactMarkdown from "react-markdown";

export function MessageBubble({
  message,
  onConnect,
  connected,
}: {
  message: ChatMessage;
  onConnect?: (() => void) | undefined;
  connected?: boolean | undefined;
}) {
  const isUser = message.role === "user";

  return (
    <div className="fade-up space-y-3">
      <div className={isUser ? "flex justify-end" : "flex justify-start"}>
        <div className={`max-w-[85%] ${isUser ? "text-right" : ""}`}>
          <p className="label-xs mb-1.5">{isUser ? "You" : "Assistant"}</p>
          <div
            className={`rounded-md border border-border px-3.5 py-2.5 text-left text-xs leading-relaxed md:text-[13px] ${
              isUser ? "bg-selected text-foreground" : "bg-surface text-secondary-foreground"
            } [&>p]:mb-2 [&>p:last-child]:mb-0 [&>ul]:list-disc [&>ul]:ml-4 [&>ul]:mb-2 [&>ol]:list-decimal [&>ol]:ml-4 [&>ol]:mb-2 [&>pre]:bg-muted [&>pre]:p-2 [&>pre]:rounded-md [&>pre]:mb-2 [&>code]:bg-muted [&>code]:px-1 [&>code]:rounded-sm`}
          >
            <ReactMarkdown>{message.text}</ReactMarkdown>
          </div>
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
