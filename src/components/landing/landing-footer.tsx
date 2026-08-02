import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PlightWordmark } from "../plight-logo";
import { CRISIS_NOTE } from "../../lib/crisis";

const columns = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "Pricing", href: "#pricing" },
      { label: "Severity scale", href: "#severity" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Testimonials", href: "#testimonials" },
      { label: "Partner with us", href: "#contact" },
      { label: "Get started", href: "/chat" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy policy", href: "#faq" },
      { label: "Terms of service", href: "#faq" },
      { label: "Data processing", href: "#faq" },
      { label: "Accessibility", href: "#faq" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "FAQ", href: "#faq" },
      { label: "Crisis hotlines", href: "#contact" },
      { label: "Chat", href: "/chat" },
      { label: "Mission", href: "#about" },
    ],
  },
];

export function LandingFooter() {
  return (
    <footer id="contact" className="border-t border-border bg-nav">
      <div className="mx-auto w-full max-w-6xl px-6 py-12">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_2.4fr]">
          <div>
            <PlightWordmark />
            <p className="mt-4 max-w-xs text-xs leading-relaxed text-muted-foreground">
              A calm place for mental health support and medical guidance — with a real professional
              on the other side when you need one.
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
                    <li key={link.label}>
                      {link.href.startsWith("/") ? (
                        <Link
                          to={link.href}
                          className="text-xs text-muted-foreground transition-colors duration-150 hover:text-foreground"
                        >
                          {link.label}
                        </Link>
                      ) : (
                        <a
                          href={link.href}
                          className="text-xs text-muted-foreground transition-colors duration-150 hover:text-foreground"
                        >
                          {link.label}
                        </a>
                      )}
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
            {[
              { label: "X", href: "#contact" },
              { label: "LinkedIn", href: "#about" },
              { label: "Instagram", href: "#testimonials" },
              { label: "GitHub", href: "/chat" },
            ].map((s) => (
              <li key={s.label}>
                {s.href.startsWith("/") ? (
                  <Link to={s.href} className="transition-colors duration-150 hover:text-foreground">
                    {s.label}
                  </Link>
                ) : (
                  <a href={s.href} className="transition-colors duration-150 hover:text-foreground">
                    {s.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
