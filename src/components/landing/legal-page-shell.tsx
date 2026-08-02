import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Section } from "./section";

export function LegalPageShell({
  label,
  title,
  intro,
  children,
  primaryCta,
  secondaryCta,
}: {
  label: string;
  title: string;
  intro: string;
  children: ReactNode;
  primaryCta: { label: string; to: string };
  secondaryCta?: { label: string; to: string };
}) {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <Section label={label} title={title} intro={intro}>
          {children}

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to={primaryCta.to}
              className="inline-flex items-center rounded-md bg-primary px-4 py-2.5 text-xs font-medium text-primary-foreground transition-opacity duration-150 hover:opacity-90"
            >
              {primaryCta.label}
            </Link>
            {secondaryCta ? (
              <Link
                to={secondaryCta.to}
                className="inline-flex items-center rounded-md border border-border bg-card px-4 py-2.5 text-xs text-secondary-foreground transition-colors duration-150 hover:bg-hover hover:text-foreground"
              >
                {secondaryCta.label}
              </Link>
            ) : null}
          </div>
        </Section>
      </main>
    </div>
  );
}