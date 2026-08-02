import { ArrowUpRight, ShieldAlert } from "lucide-react";
import { Section } from "./section";
import { SEVERITY_LEVELS } from "../../lib/severity";

export function SeverityExplainer() {
  return (
    <Section
      id="severity"
      label="Severity & escalation"
      title="Clear levels, honest limits"
      intro="Guidance is only useful if you know what to do with it. Health Guide grades every assessment on a five-point scale, and Mind Support hands off to a human when a conversation calls for one."
    >
      <div className="rounded-lg border border-border bg-card p-5">
        <p className="label-xs">The 5-point severity scale</p>
        <div className="mt-4 flex gap-1" aria-hidden="true">
          {SEVERITY_LEVELS.map((l) => (
            <span
              key={l.level}
              className="h-1.5 flex-1 rounded-full bg-foreground"
              style={{ opacity: 0.2 + l.level * 0.16 }}
            />
          ))}
        </div>
        <ol className="mt-5 grid gap-px overflow-hidden rounded-md border border-border bg-border md:grid-cols-5">
          {SEVERITY_LEVELS.map((l) => (
            <li key={l.level} className="bg-surface p-4">
              <div className="flex items-baseline gap-2">
                <span className="text-lg font-semibold text-foreground">{l.level}</span>
                <span className="text-xs font-medium text-foreground">{l.name}</span>
              </div>
              <p className="mt-2 text-[11px] leading-relaxed text-muted-foreground">{l.body}</p>
              <p className="mt-3 border-t border-border pt-3 text-[11px] leading-relaxed text-secondary-foreground">
                {l.next}
              </p>
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <article className="rounded-lg border border-border bg-card p-5">
          <ShieldAlert className="h-4.5 w-4.5 text-secondary-foreground" strokeWidth={1.4} />
          <h3 className="mt-3.5 text-sm font-medium text-foreground">
            How Mind Support escalates to a psychiatrist
          </h3>
          <ol className="mt-4 space-y-3 text-xs leading-relaxed text-muted-foreground">
            <li className="border-l border-border pl-3">
              <span className="text-foreground">Continuous, quiet assessment.</span> Language
              signalling hopelessness, self-harm risk, or acute crisis is flagged as the
              conversation unfolds.
            </li>
            <li className="border-l border-border pl-3">
              <span className="text-foreground">An escalation card appears inline.</span> Calm,
              plainly worded, with hotline numbers shown immediately and persistently.
            </li>
            <li className="border-l border-border pl-3">
              <span className="text-foreground">A licensed professional is offered.</span> One tap
              requests a psychiatrist from our network — you can keep chatting while you wait.
            </li>
            <li className="border-l border-border pl-3">
              <span className="text-foreground">Nothing is forced.</span> You stay in control of
              what is shared and with whom.
            </li>
          </ol>
        </article>

        <article className="flex flex-col rounded-lg border border-border bg-surface p-5">
          <p className="label-xs">Our position</p>
          <h3 className="mt-3.5 text-sm font-medium text-foreground">
            AI never replaces professional care
          </h3>
          <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
            Plight is a bridge, not a destination. Mind Support offers support, not therapy. Health
            Guide offers guidance, not diagnosis or treatment. Both are designed to shorten the
            distance between the moment you notice something and the moment a qualified human is
            involved — and to make the wait less lonely.
          </p>
          <a
            href="#faq"
            className="mt-auto inline-flex items-center gap-1.5 pt-6 text-xs text-secondary-foreground transition-colors duration-150 hover:text-foreground"
          >
            Read the clinical FAQ
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </article>
      </div>
    </Section>
  );
}
