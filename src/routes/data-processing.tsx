import { createFileRoute, Link } from "@tanstack/react-router";
import { LegalPageShell } from "../components/landing/legal-page-shell";

const items = [
  {
    title: "Controller and processor roles",
    body: "Plight acts as a data controller for website and account operations, and may act as a processor for content you submit into the assistant experience depending on the deployment model and customer relationship.",
  },
  {
    title: "Categories of data",
    body: "The platform may process profile information, conversation content, support requests, telemetry, and safety signals needed to operate the service and escalate care.",
  },
  {
    title: "Processing purposes",
    body: "Data is processed to provide responses, maintain histories, route escalations, secure the platform, comply with law, and improve product quality.",
  },
  {
    title: "Subprocessors and safeguards",
    body: "We may use hosting, analytics, communications, and care-network providers under contracts that require confidentiality, security, and limited use.",
  },
  {
    title: "Data subject rights",
    body: "Where applicable, individuals may request access, correction, deletion, restriction, or portability of their data, subject to legal and safety exceptions.",
  },
];

export const Route = createFileRoute("/data-processing")({
  head: () => ({
    meta: [
      { title: "Data Processing | Plight" },
      {
        name: "description",
        content: "How Plight processes data for support, guidance, safety, and escalation workflows.",
      },
    ],
  }),
  component: DataProcessingPage,
});

function DataProcessingPage() {
  return (
    <LegalPageShell
      label="Legal"
      title="Data Processing"
      intro="A practical summary of how support, safety, and customer data flows through Plight."
      primaryCta={{ label: "Privacy Policy", to: "/privacy-policy" }}
      secondaryCta={{ label: "Terms of Service", to: "/terms-of-service" }}
    >
      <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border lg:grid-cols-2">
        {items.map((item) => (
          <article key={item.title} className="bg-card p-5">
            <h2 className="text-sm font-medium text-foreground">{item.title}</h2>
            <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{item.body}</p>
          </article>
        ))}
      </div>

      <div className="mt-8 rounded-lg border border-border bg-surface p-5 text-xs leading-relaxed text-muted-foreground">
        <p>
          This page is a build-time policy summary and should be replaced or reviewed by legal
          counsel before public launch.
        </p>
      </div>
    </LegalPageShell>
  );
}
