import { Link } from "@tanstack/react-router";
import { ArrowRight, Brain, Stethoscope } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="bg-background">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-16 md:py-24 lg:grid-cols-[1.05fr_1fr] lg:items-center">
        <div>
          <p className="label-xs">Mental health &amp; medical guidance</p>
          <h1 className="mt-4 text-3xl leading-[1.15] font-semibold tracking-tight text-foreground md:text-[2.75rem]">
            Support that listens.
            <br />
            Guidance you can trust.
          </h1>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-secondary-foreground md:text-base">
            Plight pairs two purpose-built assistants in one calm space: <em className="not-italic text-foreground">Mind Support</em> for
            emotional wellbeing, and <em className="not-italic text-foreground">Health Guide</em> for understanding physical symptoms
            with a clear 5-point severity scale. When something looks serious, we bridge you to a real
            licensed professional.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              to="/chat"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-xs font-medium text-primary-foreground transition-opacity duration-150 hover:opacity-90"
            >
              Start a conversation
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-2.5 text-xs text-secondary-foreground transition-colors duration-150 hover:bg-hover hover:text-foreground"
            >
              See how it works
            </a>
          </div>

          <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
            Plight is a support and guidance tool. It does not diagnose, treat, or replace professional
            care.
          </p>
        </div>

        <ChatPreview />
      </div>
    </section>
  );
}

function ChatPreview() {
  return (
    <div className="rounded-lg border border-border bg-card p-4">
      <div className="flex items-center gap-2 border-b border-border pb-3">
        <span className="inline-flex items-center gap-1.5 rounded-md bg-selected px-2 py-1 text-[11px] text-foreground">
          <Brain className="h-3.5 w-3.5" /> Mind Support
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-[11px] text-muted-foreground">
          <Stethoscope className="h-3.5 w-3.5" /> Health Guide
        </span>
      </div>

      <div className="space-y-3 pt-4">
        <PreviewBubble role="user">
          I've been anxious all week and I'm not sleeping much.
        </PreviewBubble>
        <PreviewBubble role="assistant">
          That sounds exhausting. Let's slow it down together — when did the restless nights start, and
          what does the anxiety feel like in your body?
        </PreviewBubble>
        <PreviewBubble role="user">Mostly a tight chest. It starts around midnight.</PreviewBubble>
        <div className="rounded-md border border-border-strong bg-surface p-3">
          <p className="label-xs">Suggested exercise</p>
          <p className="mt-2 text-xs leading-relaxed text-secondary-foreground">
            4-7-8 breathing · 3 rounds · grounding follow-up
          </p>
          <div className="mt-3 flex gap-1" aria-hidden="true">
            {[0, 1, 2, 3, 4].map((i) => (
              <span
                key={i}
                className={`h-1 flex-1 rounded-full ${i < 2 ? "bg-foreground/70" : "bg-border"}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-2 rounded-md border border-border bg-surface px-3 py-2">
        <span className="text-xs text-disabled">Type how you're feeling…</span>
        <span className="ml-auto h-3.5 w-3.5 rounded-sm border border-border-strong" aria-hidden="true" />
      </div>
    </div>
  );
}

function PreviewBubble({ role, children }: { role: "user" | "assistant"; children: string }) {
  const isUser = role === "user";
  return (
    <div className={isUser ? "flex justify-end" : "flex justify-start"}>
      <p
        className={`max-w-[85%] rounded-md border border-border px-3 py-2 text-xs leading-relaxed ${
          isUser ? "bg-selected text-foreground" : "bg-surface text-secondary-foreground"
        }`}
      >
        {children}
      </p>
    </div>
  );
}
