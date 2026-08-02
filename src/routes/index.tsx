import { Link, createFileRoute } from "@tanstack/react-router";
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
import { Contact } from "../components/landing/contact";
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
        <Contact />

        <section className="border-t border-border bg-card">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-12 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="label-xs">Account</p>
              <h2 className="mt-2 text-lg font-medium text-foreground">Access your workspace</h2>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Use the auth and settings pages to explore the site structure.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/login"
                className="inline-flex items-center rounded-md bg-primary px-4 py-2.5 text-xs font-medium text-primary-foreground transition-opacity duration-150 hover:opacity-90"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="inline-flex items-center rounded-md border border-border bg-surface px-4 py-2.5 text-xs text-secondary-foreground transition-colors duration-150 hover:bg-hover hover:text-foreground"
              >
                Register
              </Link>
              <Link
                to="/settings"
                className="inline-flex items-center rounded-md border border-border bg-surface px-4 py-2.5 text-xs text-secondary-foreground transition-colors duration-150 hover:bg-hover hover:text-foreground"
              >
                Settings
              </Link>
            </div>
          </div>
        </section>
      </main>
      <LandingFooter />
    </div>
  );
}
