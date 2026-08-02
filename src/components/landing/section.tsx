import type { ReactNode } from "react";

export function Section({
  id,
  label,
  title,
  intro,
  children,
  bordered = true,
  surface = false,
}: {
  id?: string;
  label?: string;
  title?: string;
  intro?: string;
  children: ReactNode;
  bordered?: boolean;
  surface?: boolean;
}) {
  return (
    <section
      id={id}
      className={`${bordered ? "border-t border-border" : ""} ${surface ? "bg-surface" : ""}`}
    >
      <div className="mx-auto w-full max-w-6xl px-6 py-16 md:py-24">
        {(label || title || intro) && (
          <header className="max-w-2xl">
            {label && <p className="label-xs">{label}</p>}
            {title && (
              <h2 className="mt-3 text-2xl leading-snug font-semibold tracking-tight text-foreground md:text-3xl">
                {title}
              </h2>
            )}
            {intro && <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{intro}</p>}
          </header>
        )}
        <div className={label || title || intro ? "mt-10 md:mt-12" : ""}>{children}</div>
      </div>
    </section>
  );
}
