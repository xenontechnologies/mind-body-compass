import { createFileRoute } from "@tanstack/react-router";
import { LandingNav } from "../components/landing/landing-nav";
import { Hero } from "../components/landing/hero";
import { TrustBar } from "../components/landing/trust-bar";
import { Features } from "../components/landing/features";
import { HowItWorks } from "../components/landing/how-it-works";
import { SeverityExplainer } from "../components/landing/severity-explainer";
import { Testimonials } from "../components/landing/testimonials";
import { Stats } from "../components/landing/stats";
import { Pricing } from "../components/landing/pricing";
import { Faq } from "../components/landing/faq";
import { Investors } from "../components/landing/investors";
import { LandingFooter } from "../components/landing/landing-footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Plight — Mental Health Support & Medical Guidance" },
      {
        name: "description",
        content:
          "Plight pairs Mind Support, a mental health companion, with Health Guide, a symptom triage assistant using a clear 5-point severity scale — and escalates to licensed professionals.",
      },
      { property: "og:title", content: "Plight — Support that listens. Guidance you can trust." },
      {
        property: "og:description",
        content:
          "Two purpose-built assistants in one calm space: emotional support and medical guidance, with human escalation when it matters.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <LandingNav />
      <main>
        <Hero />
        <TrustBar />
        <Features />
        <HowItWorks />
        <SeverityExplainer />
        <Testimonials />
        <Stats />
        <Pricing />
        <Faq />
        <Investors />
      </main>
      <LandingFooter />
    </div>
  );
}
