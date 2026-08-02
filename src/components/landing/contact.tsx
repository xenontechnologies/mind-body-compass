import { Link } from "@tanstack/react-router";
import { ArrowRight, Mail, MessageSquare, Phone } from "lucide-react";
import { Section } from "./section";

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    body: "For partnerships, press, and product questions.",
    action: "hello@plight.health",
    href: "mailto:hello@plight.health",
  },
  {
    icon: MessageSquare,
    title: "Chat",
    body: "Try the live experience to see Mind Support and Health Guide in action.",
    action: "Open chat",
    href: "/chat",
  },
  {
    icon: Phone,
    title: "Urgent help",
    body: "If this is a crisis, use your local emergency number or a crisis hotline immediately.",
    action: "See crisis guidance",
    href: "#faq",
  },
];

export function Contact() {
  return (
    <Section
      id="contact"
      surface
      label="Contact"
      title="Reach out, start chat, or find urgent help"
      intro="This section gives visitors a direct next step without breaking the calm style of the page."
    >
      <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border lg:grid-cols-[1.2fr_1fr]">
        <div className="bg-card p-6 md:p-8">
          <p className="label-xs">Get in touch</p>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-secondary-foreground">
            If you're evaluating Plight for yourself, your team, or your organization, start with
            the chat experience or send a note by email. For anything urgent, use crisis support
            immediately.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="mailto:hello@plight.health"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-xs font-medium text-primary-foreground transition-opacity duration-150 hover:opacity-90"
            >
              Email us
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
            <Link
              to="/chat"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-4 py-2.5 text-xs text-secondary-foreground transition-colors duration-150 hover:bg-hover hover:text-foreground"
            >
              Open chat
            </Link>
          </div>
        </div>

        <div className="bg-surface p-6 md:p-8">
          <ul className="space-y-3">
            {contactMethods.map((method) => {
              const Icon = method.icon;
              return (
                <li key={method.title} className="rounded-md border border-border bg-card p-4">
                  <div className="flex items-center gap-2">
                    <Icon className="h-4 w-4 text-secondary-foreground" />
                    <h3 className="text-sm font-medium text-foreground">{method.title}</h3>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {method.body}
                  </p>
                  {method.href.startsWith("/") ? (
                    <Link
                      to={method.href}
                      className="mt-3 inline-flex items-center gap-1.5 text-xs text-foreground transition-colors duration-150 hover:text-secondary-foreground"
                    >
                      {method.action}
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  ) : (
                    <a
                      href={method.href}
                      className="mt-3 inline-flex items-center gap-1.5 text-xs text-foreground transition-colors duration-150 hover:text-secondary-foreground"
                    >
                      {method.action}
                      <ArrowRight className="h-3 w-3" />
                    </a>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Section>
  );
}