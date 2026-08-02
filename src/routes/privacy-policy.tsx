import { createFileRoute, Link } from "@tanstack/react-router";
import { LegalPageShell } from "../components/landing/legal-page-shell";

const sections = [
  {
    title: "Overview",
    body: [
      "Plight is designed to provide supportive conversation, symptom guidance, and clear escalation paths. This policy explains how we handle information when you use the product and website.",
      "This page is written for the current marketing build and should be reviewed before launch with legal counsel and a privacy professional.",
    ],
  },
  {
    title: "Information we collect",
    body: [
      "Account details you choose to provide, such as a name, email address, and profile preferences.",
      "Conversation content, mode selection, crisis and escalation signals, and product usage data.",
      "Device and analytics data needed to keep the service running, secure, and accessible.",
    ],
  },
  {
    title: "How we use information",
    body: [
      "To deliver chat responses, maintain conversation history, and surface relevant support resources.",
      "To detect escalation signals, route users to crisis resources, and improve the quality of triage and support.",
      "To secure the platform, prevent abuse, and measure product performance.",
    ],
  },
  {
    title: "Sharing and retention",
    body: [
      "We do not sell personal information. We only share data with service providers and care partners when needed to operate the product or support escalation workflows.",
      "Conversation data is retained only as long as necessary for the product experience, safety, and legal obligations, and you may request deletion where applicable.",
    ],
  },
  {
    title: "Your choices",
    body: [
      "You can update account details, delete conversations where the feature is available, and opt out of non-essential communications.",
      "If you are in crisis, do not use this page as a substitute for emergency help. Use the crisis hotline page immediately.",
    ],
  },
];

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Plight" },
      {
        name: "description",
        content: "Privacy policy for Plight's mental health support and medical guidance platform.",
      },
    ],
  }),
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  return (
    <LegalPageShell
      label="Legal"
      title="Privacy Policy"
      intro="How Plight collects, uses, stores, and protects information in the current product build."
      primaryCta={{ label: "Read Terms of Service", to: "/terms-of-service" }}
      secondaryCta={{ label: "Data Processing Addendum", to: "/data-processing" }}
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-6">
          {sections.slice(0, 3).map((section) => (
            <article key={section.title} className="rounded-lg border border-border bg-card p-5">
              <h2 className="text-sm font-medium text-foreground">{section.title}</h2>
              <div className="mt-3 space-y-3 text-xs leading-relaxed text-muted-foreground">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="space-y-6">
          {sections.slice(3).map((section) => (
            <article key={section.title} className="rounded-lg border border-border bg-surface p-5">
              <h2 className="text-sm font-medium text-foreground">{section.title}</h2>
              <div className="mt-3 space-y-3 text-xs leading-relaxed text-muted-foreground">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </LegalPageShell>
  );
}
