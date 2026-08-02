import { ArrowUpRight } from "lucide-react";

export function Investors() {
  return (
    <section id="about" className="border-t border-border bg-surface">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-12 md:flex-row md:items-end md:justify-between">
        <div className="max-w-xl">
          <p className="label-xs">For investors &amp; partners</p>
          <h2 className="mt-3 text-lg leading-snug font-medium text-foreground md:text-xl">
            Building the future of accessible mental health support
          </h2>
          <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
            We're closing the gap between the moment someone needs help and the moment a qualified
            human is involved — with clinical oversight, transparent escalation, and privacy as a
            design constraint rather than a policy page.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-4 py-2.5 text-xs text-secondary-foreground transition-colors duration-150 hover:bg-hover hover:text-foreground"
          >
            Partner with us
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
          <a
            href="#severity"
            className="inline-flex items-center gap-1.5 rounded-md px-4 py-2.5 text-xs text-muted-foreground transition-colors duration-150 hover:text-foreground"
          >
            Learn about our mission
          </a>
        </div>
      </div>
    </section>
  );
}
