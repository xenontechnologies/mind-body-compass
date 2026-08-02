import { ClipboardList } from "lucide-react";
import { SEVERITY_LEVELS, severityInfo } from "../../lib/severity";

export function SeverityCard({ level, explanation }: { level: number; explanation: string }) {
  const info = severityInfo(level);

  return (
    <article className="rounded-lg border border-border-strong bg-surface p-4">
      <div className="flex items-center gap-2">
        <ClipboardList className="h-4 w-4 text-foreground" strokeWidth={1.5} />
        <p className="text-xs font-semibold tracking-[0.12em] text-foreground uppercase">
          Severity assessment
        </p>
      </div>

      <p className="mt-3 flex items-baseline gap-2">
        <span className="text-2xl font-semibold tracking-tight text-foreground">{info.level}</span>
        <span className="text-xs font-medium text-foreground">{info.name}</span>
        <span className="text-xs text-muted-foreground">of 5</span>
      </p>

      <div className="mt-3.5 flex gap-1" role="img" aria-label={`Severity ${info.level} of 5: ${info.name}`}>
        {SEVERITY_LEVELS.map((l) => (
          <span
            key={l.level}
            className={`h-1.5 flex-1 rounded-full ${l.level <= info.level ? "bg-foreground" : "bg-border"}`}
            style={l.level <= info.level ? { opacity: 0.4 + l.level * 0.12 } : undefined}
          />
        ))}
      </div>
      <ul className="mt-2 flex justify-between gap-1 text-[10px] text-muted-foreground">
        {SEVERITY_LEVELS.map((l) => (
          <li key={l.level} className="flex-1 text-center">
            <span className={l.level === info.level ? "text-foreground" : ""}>{l.level}</span>
          </li>
        ))}
      </ul>
      <p className="mt-1 flex justify-between text-[10px] text-disabled">
        <span>1 Mild</span>
        <span className="hidden sm:inline">3 Consult Soon</span>
        <span>5 Emergency</span>
      </p>

      <p className="mt-4 border-t border-border pt-4 text-xs leading-relaxed text-secondary-foreground">
        {explanation}
      </p>

      <div className="mt-4 rounded-md border border-border bg-card p-3">
        <p className="label-xs">Recommended next step</p>
        <p className="mt-2 text-xs leading-relaxed text-foreground">{info.next}</p>
      </div>

      <p className="mt-3 text-[11px] leading-relaxed text-muted-foreground">
        This is guidance toward the right level of care — not a diagnosis or treatment plan.
      </p>
    </article>
  );
}
