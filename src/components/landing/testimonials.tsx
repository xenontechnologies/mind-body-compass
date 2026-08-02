import { Star } from "lucide-react";
import { Section } from "./section";

const testimonials = [
  {
    quote:
      "I used it at 2am when my chest was tight and I couldn't call anyone. It walked me through breathing until I could sleep.",
    name: "Amara O.",
    role: "User since 2024",
    rating: 5,
  },
  {
    quote:
      "Health Guide graded my symptoms a 4 and told me not to wait. Turned out it was right. That nudge mattered.",
    name: "Daniel K.",
    role: "Symptom triage",
    rating: 5,
  },
  {
    quote:
      "It noticed I was slipping and offered to connect me to a psychiatrist. I said yes. First time I'd ever asked for help.",
    name: "Rosa M.",
    role: "Escalated to care",
    rating: 5,
  },
  {
    quote:
      "The nightly check-in is the only habit I've kept. Two lines about my mood and it remembers the context next time.",
    name: "Toby L.",
    role: "Daily check-ins",
    rating: 4,
  },
  {
    quote:
      "I have insomnia and I've read every article. This actually asked questions instead of listing generic tips.",
    name: "Priya S.",
    role: "Sleep issues",
    rating: 5,
  },
  {
    quote:
      "Switching between modes is the whole thing for me. My anxiety and my stomach problems are not separate.",
    name: "Marcus B.",
    role: "User since 2025",
    rating: 5,
  },
  {
    quote:
      "No bright red warnings, no upselling. It just told me plainly that a doctor should look at it and gave me the words to use.",
    name: "Elena V.",
    role: "General guidance",
    rating: 4,
  },
  {
    quote:
      "As a carer, the mood history gave me something concrete to bring to my son's appointment.",
    name: "Jonah W.",
    role: "Family member",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <Section
      id="testimonials"
      surface
      label="Testimonials"
      title="What people tell us afterwards"
      intro="Names shortened at users' request. Quotes are illustrative examples for this build — replace with verified reviews before launch."
    >
      <ul className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {testimonials.map((t) => (
          <li key={t.name} className="flex flex-col bg-card p-5">
            <div className="flex items-center gap-0.5" aria-label={`${t.rating} out of 5`}>
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  className={`h-3 w-3 ${i <= t.rating ? "text-foreground" : "text-disabled"}`}
                  strokeWidth={1.4}
                  fill={i <= t.rating ? "currentColor" : "none"}
                />
              ))}
            </div>
            <p className="mt-3.5 text-xs leading-relaxed text-secondary-foreground">“{t.quote}”</p>
            <div className="mt-auto pt-4">
              <p className="text-xs font-medium text-foreground">{t.name}</p>
              <p className="mt-0.5 text-[11px] text-muted-foreground">{t.role}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
