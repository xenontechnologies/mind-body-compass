import { Section } from "./section";

const steps = [
  {
    title: "Create an account",
    body: "Sign up in under a minute. No insurance details, no clinical intake forms, no waiting room.",
  },
  {
    title: "Choose your assistant",
    body: "Mind Support for emotional wellbeing, or Health Guide for physical symptoms. Switch any time.",
  },
  {
    title: "Chat & get guidance",
    body: "Talk it through. You'll get coping tools, clarifying questions, and a plain-language severity read.",
  },
  {
    title: "Escalate if needed",
    body: "If the conversation suggests you need more, we connect you to a licensed professional and share hotlines instantly.",
  },
];

export function HowItWorks() {
  return (
    <Section
      id="how-it-works"
      surface
      label="How it works"
      title="Four steps from “I don't know where to start” to a clear next move"
    >
      <ol className="grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, i) => (
          <li key={step.title} className="bg-card p-5">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-border-strong text-xs text-secondary-foreground">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-3.5 text-sm font-medium text-foreground">{step.title}</h3>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{step.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
