import { Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { Section } from "./section";

const plans = [
  {
    name: "Free",
    price: "$0",
    cadence: "forever",
    summary: "For anyone who needs somewhere to start.",
    features: [
      "Unlimited Mind Support conversations",
      "Health Guide severity assessments",
      "Basic coping exercise library",
      "Crisis resources always available",
    ],
    cta: "Start free",
    featured: false,
  },
  {
    name: "Plus",
    price: "$12",
    cadence: "per month",
    summary: "For building a consistent practice.",
    features: [
      "Everything in Free",
      "Mood & symptom journal history",
      "Personalized check-ins and reminders",
      "Progress dashboard and insights",
      "Full guided exercise library",
    ],
    cta: "Choose Plus",
    featured: true,
  },
  {
    name: "Care+",
    price: "$39",
    cadence: "per month",
    summary: "For when you want a human in the loop.",
    features: [
      "Everything in Plus",
      "Priority escalation to licensed professionals",
      "Two clinician sessions per month",
      "Shareable summaries for your care team",
      "Multi-language support",
    ],
    cta: "Choose Care+",
    featured: false,
  },
];

export function Pricing() {
  return (
    <Section
      id="pricing"
      surface
      label="Pricing"
      title="Support shouldn't be gated behind a paywall"
      intro="The core assistants and every crisis resource stay free. Paid plans add history, insights, and human clinician time."
    >
      <ul className="grid gap-5 lg:grid-cols-3">
        {plans.map((plan) => (
          <li
            key={plan.name}
            className={`flex flex-col rounded-lg border bg-card p-6 ${
              plan.featured ? "border-border-strong" : "border-border"
            }`}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-foreground">{plan.name}</h3>
              {plan.featured && (
                <span className="rounded-md border border-border px-2 py-0.5 text-[10px] tracking-[0.14em] text-muted-foreground uppercase">
                  Popular
                </span>
              )}
            </div>
            <p className="mt-4 flex items-baseline gap-1.5">
              <span className="text-2xl font-semibold tracking-tight text-foreground">{plan.price}</span>
              <span className="text-xs text-muted-foreground">{plan.cadence}</span>
            </p>
            <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{plan.summary}</p>
            <ul className="mt-5 space-y-2.5 border-t border-border pt-5">
              {plan.features.map((f) => (
                <li key={f} className="flex gap-2 text-xs leading-relaxed text-secondary-foreground">
                  <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-muted-foreground" strokeWidth={1.6} />
                  {f}
                </li>
              ))}
            </ul>
            <Link
              to="/chat"
              className={`mt-8 inline-flex items-center justify-center rounded-md px-4 py-2.5 text-xs font-medium transition-colors duration-150 ${
                plan.featured
                  ? "bg-primary text-primary-foreground hover:opacity-90"
                  : "border border-border text-secondary-foreground hover:bg-hover hover:text-foreground"
              }`}
            >
              {plan.cta}
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}
