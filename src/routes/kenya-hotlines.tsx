import { createFileRoute, Link } from "@tanstack/react-router";
import { PhoneCall, ShieldAlert } from "lucide-react";
import { LegalPageShell } from "../components/landing/legal-page-shell";

const hotlines = [
  {
    name: "Emergency services",
    contact: "999 / 112 / 911",
    notes: "Use the number that works in your area from a phone with signal right away.",
  },
  {
    name: "Kenya Red Cross",
    contact: "1199",
    notes: "For urgent support and disaster response guidance.",
  },
  {
    name: "Befrienders Kenya",
    contact: "Available via local referral and community support channels",
    notes: "Suicide prevention and emotional support resources.",
  },
  {
    name: "Gender Violence Recovery Centre (GVRC)",
    contact: "Call local emergency services or your nearest hospital for immediate intake",
    notes: "For survivors of sexual and gender-based violence needing urgent help.",
  },
  {
    name: "AAR / hospital emergency departments",
    contact: "Use the nearest emergency department",
    notes: "Go to the closest facility if you cannot wait for a callback.",
  },
  {
    name: "Samaritans (international support while in Kenya)",
    contact: "116 123 (if accessible by your carrier) or use a local emergency number",
    notes: "If the line does not connect, use emergency services or the nearest hospital.",
  },
];

const emergencySteps = [
  "Call the nearest emergency number immediately.",
  "If you cannot speak safely, go to the nearest hospital or ask someone nearby to call for you.",
  "Keep the phone on speaker if you are with someone and need support while waiting.",
  "If the risk is immediate, do not wait for a callback from an app or website.",
];

export const Route = createFileRoute("/kenya-hotlines")({
  head: () => ({
    meta: [
      { title: "Kenya Crisis Hotlines | Plight" },
      {
        name: "description",
        content: "Emergency and crisis hotline guidance for people in Kenya.",
      },
    ],
  }),
  component: KenyaHotlinesPage,
});

function KenyaHotlinesPage() {
  return (
    <LegalPageShell
      label="Emergency help"
      title="Kenya crisis hotlines"
      intro="If you or someone near you is in immediate danger, call emergency services or go to the nearest hospital now."
      primaryCta={{ label: "Back to home", to: "/" }}
      secondaryCta={{ label: "Open chat", to: "/chat" }}
    >
      <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-3 rounded-lg border border-border bg-card p-5">
          <div className="flex items-center gap-2">
            <ShieldAlert className="h-4.5 w-4.5 text-secondary-foreground" />
            <h2 className="text-sm font-medium text-foreground">What to do first</h2>
          </div>
          <ol className="space-y-2 text-xs leading-relaxed text-muted-foreground">
            {emergencySteps.map((step, index) => (
              <li key={step} className="flex gap-2">
                <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-border text-[10px] text-foreground">
                  {index + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="rounded-lg border border-border bg-surface p-5">
          <div className="flex items-center gap-2">
            <PhoneCall className="h-4.5 w-4.5 text-secondary-foreground" />
            <h2 className="text-sm font-medium text-foreground">Direct numbers and services</h2>
          </div>
          <div className="mt-4 space-y-3">
            {hotlines.map((hotline) => (
              <article key={hotline.name} className="rounded-md border border-border bg-card p-4">
                <p className="text-xs font-medium text-foreground">{hotline.name}</p>
                <p className="mt-1 text-xs text-secondary-foreground">{hotline.contact}</p>
                <p className="mt-2 text-[11px] leading-relaxed text-muted-foreground">
                  {hotline.notes}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 rounded-lg border border-border bg-card p-5 text-xs leading-relaxed text-muted-foreground">
        <p>
          This page is informational only. Plight cannot dispatch emergency services. If the
          situation is urgent, use your phone, local hospital, or nearby responders immediately.
        </p>
      </div>
    </LegalPageShell>
  );
}
