import { Link } from "@tanstack/react-router";
import { ArrowLeft, MessageSquarePlus, Settings, Trash2 } from "lucide-react";
import { PlightWordmark } from "../plight-logo";
import { ThemeToggle } from "../theme-toggle";
import type { Conversation } from "../../lib/chat-types";

export function ChatSidebar({
  conversations,
  activeId,
  onSelect,
  onNew,
  onDelete,
}: {
  conversations: Conversation[];
  activeId: string | null;
  onSelect: (id: string) => void;
  onNew: () => void;
  onDelete: (id: string) => void;
}) {
  return (
    <aside className="flex w-full shrink-0 flex-col border-b border-border bg-sidebar md:h-dvh md:w-64 md:border-r md:border-b-0">
      <div className="flex items-center justify-between border-b border-border px-4 py-3">
        <Link to="/" className="inline-flex items-center gap-2">
          <PlightWordmark />
        </Link>
        <ThemeToggle />
      </div>

      <div className="p-3">
        <button
          type="button"
          onClick={onNew}
          className="inline-flex w-full items-center gap-2 rounded-md border border-border bg-card px-3 py-2 text-xs text-secondary-foreground transition-colors duration-150 hover:bg-hover hover:text-foreground"
        >
          <MessageSquarePlus className="h-3.5 w-3.5" strokeWidth={1.5} />
          New chat
        </button>
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto px-3 pb-3">
        <p className="label-xs px-1 pb-2">History</p>
        <ul className="space-y-1">
          {conversations.map((c) => {
            const isActive = c.id === activeId;
            return (
              <li key={c.id} className="group relative">
                <button
                  type="button"
                  onClick={() => onSelect(c.id)}
                  className={`w-full truncate rounded-md px-2.5 py-2 pr-8 text-left text-xs transition-colors duration-150 ${
                    isActive
                      ? "bg-selected text-foreground"
                      : "text-muted-foreground hover:bg-hover hover:text-foreground"
                  }`}
                >
                  {c.title}
                </button>
                <button
                  type="button"
                  onClick={() => onDelete(c.id)}
                  aria-label={`Delete ${c.title}`}
                  className="absolute top-1.5 right-1.5 inline-flex h-6 w-6 items-center justify-center rounded-md text-disabled opacity-0 transition-opacity duration-150 group-hover:opacity-100 hover:text-foreground focus-visible:opacity-100"
                >
                  <Trash2 className="h-3.5 w-3.5" strokeWidth={1.5} />
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="mt-auto space-y-1 border-t border-border p-3">
        <button
          type="button"
          className="inline-flex w-full items-center gap-2 rounded-md px-2.5 py-2 text-xs text-muted-foreground transition-colors duration-150 hover:bg-hover hover:text-foreground"
        >
          <Settings className="h-3.5 w-3.5" strokeWidth={1.5} />
          Settings
        </button>
        <Link
          to="/"
          className="inline-flex w-full items-center gap-2 rounded-md px-2.5 py-2 text-xs text-muted-foreground transition-colors duration-150 hover:bg-hover hover:text-foreground"
        >
          <ArrowLeft className="h-3.5 w-3.5" strokeWidth={1.5} />
          Back to site
        </Link>
      </div>
    </aside>
  );
}
