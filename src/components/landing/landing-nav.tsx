import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { PlightWordmark } from "../plight-logo";
import { ThemeToggle } from "../theme-toggle";

const links = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export function LandingNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const close = () => setOpen(false);
    window.addEventListener("hashchange", close);
    return () => window.removeEventListener("hashchange", close);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-nav/95 backdrop-blur-sm">
      <nav className="mx-auto flex w-full max-w-6xl items-center gap-6 px-6 py-3">
        <a href="#top" className="shrink-0">
          <PlightWordmark />
        </a>

        <ul className="hidden flex-1 items-center gap-1 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-md px-3 py-1.5 text-xs text-muted-foreground transition-colors duration-150 hover:bg-hover hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="ml-auto flex items-center gap-2">
          <ThemeToggle />
          <Link
            to="/login"
            className="hidden rounded-md border border-border px-3 py-1.5 text-xs text-secondary-foreground transition-colors duration-150 hover:bg-hover hover:text-foreground sm:inline-flex"
          >
            Sign In
          </Link>
          <Link
            to="/register"
            className="rounded-md bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground transition-opacity duration-150 hover:opacity-90"
          >
            Get Started
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation"
            aria-expanded={open}
            className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors duration-150 hover:bg-hover hover:text-foreground lg:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-nav lg:hidden">
          <ul className="mx-auto grid w-full max-w-6xl gap-1 px-6 py-3">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 text-xs text-muted-foreground transition-colors duration-150 hover:bg-hover hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
