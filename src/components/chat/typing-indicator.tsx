export function TypingIndicator() {
  return (
    <div className="flex justify-start">
      <div className="inline-flex items-center gap-1.5 rounded-md border border-border bg-surface px-3 py-2.5">
        <span className="sr-only">Assistant is typing</span>
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="h-1.5 w-1.5 rounded-full bg-muted-foreground"
            style={{ animation: `plight-pulse 1.2s ease-in-out ${i * 0.15}s infinite` }}
          />
        ))}
      </div>
      <style>{`@keyframes plight-pulse{0%,100%{opacity:.3}50%{opacity:1}}`}</style>
    </div>
  );
}
