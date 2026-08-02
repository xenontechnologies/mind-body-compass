export const SEVERITY_LEVELS = [
  {
    level: 1,
    name: "Mild",
    short: "Self-care",
    body: "Symptoms are minor and likely to resolve on their own.",
    next: "Rest, hydrate, and use self-care measures. No appointment needed.",
  },
  {
    level: 2,
    name: "Monitor",
    short: "Watch closely",
    body: "Nothing alarming, but the pattern is worth tracking for a couple of days.",
    next: "Monitor for 48 hours and log any change. Reach out if it worsens.",
  },
  {
    level: 3,
    name: "Consult Soon",
    short: "See a clinician",
    body: "Symptoms warrant professional input, though not urgently.",
    next: "Book a routine appointment with a doctor within the next few days.",
  },
  {
    level: 4,
    name: "Seek Care Promptly",
    short: "Same-day care",
    body: "The combination of symptoms suggests you shouldn't wait.",
    next: "Contact an urgent care clinic or your doctor today.",
  },
  {
    level: 5,
    name: "Emergency",
    short: "Immediate care",
    body: "These symptoms can indicate a medical emergency.",
    next: "Seek emergency care now — call your local emergency number.",
  },
] as const;

export type SeverityLevel = (typeof SEVERITY_LEVELS)[number]["level"];

export function severityInfo(level: number) {
  return SEVERITY_LEVELS.find((l) => l.level === level) ?? SEVERITY_LEVELS[0];
}
