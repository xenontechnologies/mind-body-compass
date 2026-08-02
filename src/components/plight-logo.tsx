export function PlightMark({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="2.5" y="3.5" width="19" height="14" rx="3" />
      <path d="M8 17.5 6.5 21l4.2-3.5" />
      <path d="M6.8 10.6h2.1l1.4-2.9 1.9 5.6 1.5-3.4 1 1.7h2.5" />
    </svg>
  );
}

export function PlightWordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <PlightMark className="h-[18px] w-[18px] text-foreground" />
      <span className="text-sm font-semibold tracking-[0.22em] text-foreground uppercase">
        Plight
      </span>
    </span>
  );
}
