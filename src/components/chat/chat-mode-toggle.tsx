import { Brain, Stethoscope } from "lucide-react";
import type { ChatMode } from "../../lib/chat-types";

const options: { value: ChatMode; label: string; icon: typeof Brain }[] = [
  { value: "mind", label: "Mind Support", icon: Brain },
  { value: "health", label: "Health Guide", icon: Stethoscope },
];

export function ChatModeToggle({
  mode,
  onChange,
}: {
  mode: ChatMode;
  onChange: (mode: ChatMode) => void;
}) {
  return (
    <div
      role="tablist"
      aria-label="Assistant mode"
      className="inline-flex items-center gap-1 rounded-lg border border-border bg-surface p-1"
    >
      {options.map(({ value, label, icon: Icon }) => {
        const activeMode = mode === value;
        return (
          <button
            key={value}
            role="tab"
            type="button"
            aria-selected={activeMode}
            onClick={() => onChange(value)}
            className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs transition-colors duration-150 ${
              activeMode
                ? "bg-selected text-foreground"
                : "text-muted-foreground hover:bg-hover hover:text-foreground"
            }`}
          >
            <Icon className="h-3.5 w-3.5" strokeWidth={1.5} />
            {label}
          </button>
        );
      })}
    </div>
  );
}
