import {
  Activity,
  BookOpen,
  Brain,
  CalendarCheck,
  Gauge,
  Languages,
  LifeBuoy,
  LineChart,
  Lock,
  NotebookPen,
  Repeat,
  Wind,
} from "lucide-react";
import { Section } from "./section";

const features = [
  {
    icon: Brain,
    title: "AI mental health companion",
    body: "Talk through anxiety, stress, low mood, or loneliness with an assistant trained to listen before it suggests.",
  },
  {
    icon: LifeBuoy,
    title: "Crisis detection & escalation",
    body: "Conversations are quietly assessed for risk. Signs of severe distress surface an immediate route to a licensed psychiatrist.",
  },
  {
    icon: Gauge,
    title: "Medical guidance with triage",
    body: "Health Guide asks structured questions and returns a clear 1–5 severity level with a recommended next step.",
  },
  {
    icon: NotebookPen,
    title: "Mood & symptom tracking",
    body: "Every session can be logged to a private journal so patterns across weeks become visible, not guesswork.",
  },
  {
    icon: Wind,
    title: "Guided coping exercises",
    body: "Breathing, grounding, and CBT-style reframing prompts delivered step by step, in the flow of conversation.",
  },
  {
    icon: Lock,
    title: "Private by construction",
    body: "Encrypted in transit and at rest. We never sell data, and you can delete any conversation permanently.",
  },
  {
    icon: Repeat,
    title: "Switch modes instantly",
    body: "Move between Mind Support and Health Guide with one control. Each keeps its own separate history.",
  },
  {
    icon: CalendarCheck,
    title: "Personalized check-ins",
    body: "Gentle, opt-in reminders that ask how you're doing at the times of day that matter to you.",
  },
  {
    icon: Activity,
    title: "Human-in-the-loop care",
    body: "Real clinicians review escalations. The AI is a bridge to professional support, never a substitute for it.",
  },
  {
    icon: BookOpen,
    title: "Resource library",
    body: "Plain-language articles, verified hotlines, and self-help tools, organised by what you're facing right now.",
  },
  {
    icon: LineChart,
    title: "Progress insights",
    body: "A quiet dashboard showing mood trend, session frequency, and exercises that actually helped you.",
  },
  {
    icon: Languages,
    title: "Multi-language & accessible",
    body: "Screen-reader friendly, keyboard navigable, high-contrast themes, and support across multiple languages.",
  },
];

export function Features() {
  return (
    <Section
      id="features"
      label="Capabilities"
      title="Everything the platform does, in one calm surface"
      intro="Plight is built as infrastructure for accessible care: support in the moment, triage when you need direction, and a human on the other side when it matters."
    >
      <ul className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {features.map(({ icon: Icon, title, body }) => (
          <li
            key={title}
            className="bg-card p-5 transition-colors duration-150 hover:bg-hover"
          >
            <Icon className="h-4.5 w-4.5 text-secondary-foreground" strokeWidth={1.4} />
            <h3 className="mt-3.5 text-sm font-medium text-foreground">{title}</h3>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{body}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
