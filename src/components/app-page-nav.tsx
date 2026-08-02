import { Link, useRouter } from "@tanstack/react-router";
import { ArrowLeft, Home } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

export function AppPageNav({
  title,
  backLabel = "Back",
  homeLabel = "Home",
  showBack = true,
}: {
  title: string;
  backLabel?: string;
  homeLabel?: string;
  showBack?: boolean;
}) {
  const router = useRouter();

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-nav/95 backdrop-blur-sm">
      <nav className="mx-auto flex w-full max-w-6xl items-center gap-3 px-6 py-3">
        <div className="min-w-0 flex-1">
          <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Plight</p>
          <h1 className="truncate text-sm font-medium text-foreground">{title}</h1>
        </div>

        <div className="flex items-center gap-2">
          {showBack ? (
            <button
              type="button"
              onClick={() => {
                if (window.history.length > 1) {
                  window.history.back();
                  return;
                }
                router.navigate({ to: "/" });
              }}
              className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-3 py-1.5 text-xs text-secondary-foreground transition-colors duration-150 hover:bg-hover hover:text-foreground"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              {backLabel}
            </button>
          ) : null}
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-3 py-1.5 text-xs text-secondary-foreground transition-colors duration-150 hover:bg-hover hover:text-foreground"
          >
            <Home className="h-3.5 w-3.5" />
            {homeLabel}
          </Link>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}