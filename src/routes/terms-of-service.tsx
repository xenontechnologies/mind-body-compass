import { createFileRoute, Link } from "@tanstack/react-router";
import { LegalPageShell } from "../components/landing/legal-page-shell";

const sections = [
  {
    title: "Acceptable use",
    body: [
      "Use Plight lawfully and respectfully. Do not attempt to exploit the service, disrupt availability, or submit content that is illegal, abusive, or harmful.",
      "The platform is intended to support wellbeing and guidance. It is not designed to replace licensed clinical care or emergency services.",
    ],
  },
  {
    title: "Medical and safety limits",
    body: [
      "Health Guide provides general guidance and a severity scale, not diagnosis or treatment.",
      "Mind Support provides supportive conversation and escalation to human help when needed, but it is not therapy and cannot guarantee immediate professional response everywhere.",
    ],
  },
  {
    title: "Accounts and access",
    body: [
      "You are responsible for keeping your account credentials secure and for activity that occurs under your account.",
      "We may suspend or limit access if we detect abuse, safety risks, or violations of these terms.",
    ],
  },
  {
    title: "Intellectual property",
    body: [
      "The product, design system, branding, and content are owned by Plight or its licensors and are protected by applicable law.",
      "You may not copy, resell, or distribute the service content without permission, except where permitted by law.",
    ],
  },
  {
    title: "Liability",
    body: [
      "Plight is provided on an 'as is' and 'as available' basis. To the extent allowed by law, we disclaim liability for indirect or consequential damages.",
      "Nothing in these terms limits rights that cannot legally be excluded.",
    ],
  },
];

export const Route = createFileRoute("/terms-of-service")({
  head: () => ({
    meta: [
      { title: "Terms of Service | Plight" },
      {
        name: "description",
        content: "Terms of service for Plight's mental health support and medical guidance platform.",
      },
    ],
  }),
  component: TermsOfServicePage,
});

function TermsOfServicePage() {
  return (
    <LegalPageShell
      label="Legal"
      title="Terms of Service"
      intro="The rules that govern use of Plight's website and product in the current build."
      primaryCta={{ label: "Read Privacy Policy", to: "/privacy-policy" }}
      secondaryCta={{ label: "Data Processing Addendum", to: "/data-processing" }}
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {sections.map((section, index) => (
          <article
            key={section.title}
            className={`rounded-lg border p-5 ${index % 2 === 0 ? "border-border bg-card" : "border-border bg-surface"}`}
          >
            <h2 className="text-sm font-medium text-foreground">{section.title}</h2>
            <div className="mt-3 space-y-3 text-xs leading-relaxed text-muted-foreground">
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </article>
        ))}
      </div>
    </LegalPageShell>
  );
}
