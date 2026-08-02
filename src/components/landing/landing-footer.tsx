import { Link } from "@tanstack/react-router";
import { PlightWordmark } from "../plight-logo";
import { CRISIS_NOTE } from "../../lib/crisis";

const columns = [
  {
    title: "Product",
    links: ["Mind Support", "Health Guide", "Severity scale", "Progress insights", "Pricing"],
  },
  { title: "Company", links: ["About", "Mission", "Careers", "Press", "Partner with us"] },
  { title: "Legal", links: ["Privacy policy", "Terms of service", "Data processing", "Accessibility"] },
  { title: "Resources", links: ["Article library", "Crisis hotlines", "Self-help tools", "For clinicians"] },
];

export function LandingFooter() {
  return (
    <footer id="contact" className="border-t border-border bg-nav">
      <div className="mx-auto w-full max-w-6xl px-6 py-12">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_2.4fr]">
          <div>
            <PlightWordmark />
            <p className="mt-4 max-w-xs text-xs leading-relaxed text-muted-foreground">
              A calm place for mental health support and medical guidance — with a real professional on
              the other side when you need one.
            </p>
            <Link
              to="/chat"
              className="mt-5 inline-flex rounded-md border border-border bg-card px-3 py-2 text-xs text-secondary-foreground transition-colors duration-150 hover:bg-hover hover:text-foreground"
            >
              Start a conversation
            </Link>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {columns.map((col) => (
              <div key={col.title}>
                <p className="label-xs">{col.title}</p>
                <ul className="mt-3 space-y-2">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#top"
                        className="text-xs text-muted-foreground transition-colors duration-150 hover:text-foreground"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 rounded-md border border-border-strong bg-surface p-4">
          <p className="label-xs">Crisis notice</p>
          <p className="mt-2 text-xs leading-relaxed text-secondary-foreground">{CRISIS_NOTE}</p>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-border pt-6 text-[11px] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Plight. All rights reserved.</p>
          <ul className="flex gap-4">
            {["X", "LinkedIn", "Instagram", "GitHub"].map((s) => (
              <li key={s}>
                <a href="#top" className="transition-colors duration-150 hover:text-foreground">
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
