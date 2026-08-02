import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, Home } from "lucide-react";
import { Section } from "./section";
import { ThemeToggle } from "../theme-toggle";

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
      <header className="sticky top-0 z-40 border-b border-border bg-nav/95 backdrop-blur-sm">
        <nav className="mx-auto flex w-full max-w-6xl items-center gap-3 px-6 py-3">
          <div className="min-w-0 flex-1">
            <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Plight</p>
            <h1 className="truncate text-sm font-medium text-foreground">{title}</h1>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-3 py-1.5 text-xs text-secondary-foreground transition-colors duration-150 hover:bg-hover hover:text-foreground"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Back
            </button>
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-3 py-1.5 text-xs text-secondary-foreground transition-colors duration-150 hover:bg-hover hover:text-foreground"
            >
              <Home className="h-3.5 w-3.5" />
              Home
            </Link>
            <ThemeToggle />
          </div>
        </nav>
      </header>
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