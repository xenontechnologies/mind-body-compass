import { LifeBuoy, Phone } from "lucide-react";
import { CRISIS_LINES } from "../../lib/crisis";

export function EscalationCard({
  reason,
  onConnect,
  connected = false,
}: {
  reason: string;
  onConnect?: (() => void) | undefined;
  connected?: boolean | undefined;
}) {
  return (
    <article className="rounded-lg border border-border-strong bg-surface p-4">
      <div className="flex items-center gap-2">
        <LifeBuoy className="h-4 w-4 text-foreground" strokeWidth={1.5} />
        <p className="text-xs font-semibold tracking-[0.12em] text-foreground uppercase">
          Professional support recommended
        </p>
      </div>

      <p className="mt-3 text-xs leading-relaxed text-secondary-foreground">{reason}</p>
      <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
        This seems like something a licensed professional should be involved in. You're not being
        handed off — you can keep talking with me in the meantime.
      </p>

      <div className="mt-4 rounded-md border border-border bg-card p-3">
        <p className="label-xs">Crisis lines — available now</p>
        <ul className="mt-2.5 space-y-2">
          {CRISIS_LINES.map((line) => (
            <li
              key={line.region}
              className="flex items-start gap-2 text-xs text-secondary-foreground"
            >
              <Phone
                className="mt-0.5 h-3.5 w-3.5 shrink-0 text-muted-foreground"
                strokeWidth={1.5}
              />
              <span>
                <span className="text-foreground">{line.contact}</span>
                <span className="text-muted-foreground">
                  {" "}
                  · {line.label} ({line.region})
                </span>
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={onConnect}
          disabled={connected}
          className="rounded-md bg-primary px-3 py-2 text-xs font-medium text-primary-foreground transition-opacity duration-150 hover:opacity-90 disabled:opacity-60"
        >
          {connected
            ? "Request sent — a clinician will reach out"
            : "Connect with a licensed psychiatrist"}
        </button>
        <span className="inline-flex items-center rounded-md border border-border px-3 py-2 text-xs text-muted-foreground">
          Or keep chatting here
        </span>
      </div>
    </article>
  );
}
