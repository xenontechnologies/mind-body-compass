import { useState } from "react";
import { ArrowUp } from "lucide-react";

export function ChatInput({
  disabled,
  placeholder,
  onSend,
}: {
  disabled: boolean;
  placeholder: string;
  onSend: (text: string) => void;
}) {
  const [value, setValue] = useState("");

  const submit = () => {
    if (!value.trim() || disabled) return;
    onSend(value);
    setValue("");
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        submit();
      }}
      className="flex items-end gap-2 rounded-lg border border-border bg-card p-2"
    >
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            submit();
          }
        }}
        rows={2}
        placeholder={placeholder}
        aria-label="Message"
        className="max-h-40 min-h-[44px] flex-1 resize-none bg-transparent px-2 py-2 text-xs leading-relaxed text-foreground outline-none placeholder:text-disabled md:text-[13px]"
      />
      <button
        type="submit"
        disabled={disabled || !value.trim()}
        aria-label="Send message"
        className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-border bg-surface text-secondary-foreground transition-colors duration-150 hover:bg-hover hover:text-foreground active:bg-pressed disabled:text-disabled disabled:hover:bg-surface"
      >
        <ArrowUp className="h-4 w-4" strokeWidth={1.6} />
      </button>
    </form>
  );
}
