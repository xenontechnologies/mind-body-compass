import { Phone } from "lucide-react";
import { CRISIS_LINES } from "../../lib/crisis";

export function CrisisBanner() {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 border-b border-border bg-surface px-4 py-2 text-[11px] text-muted-foreground md:px-6">
      <span className="inline-flex items-center gap-1.5 text-secondary-foreground">
        <Phone className="h-3 w-3" strokeWidth={1.6} />
        In crisis? Contact your local emergency number now.
      </span>
      {CRISIS_LINES.map((line) => (
        <span key={line.region}>
          <span className="text-foreground">{line.contact}</span> · {line.region}
        </span>
      ))}
    </div>
  );
}
