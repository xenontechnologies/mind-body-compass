import { Section } from "./section";

const stats = [
  { value: "120,000+", label: "conversations supported", note: "placeholder — replace with real data" },
  { value: "87%", label: "of users report feeling better after a session", note: "placeholder" },
  { value: "31", label: "states/regions with licensed professionals", note: "placeholder" },
  { value: "< 3s", label: "average assistant response time", note: "placeholder" },
];

export function Stats() {
  return (
    <Section
      label="Impact"
      title="Measured, not claimed"
      intro="All figures below are placeholders for this build. Swap them for audited metrics before publishing."
    >
      <ul className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <li key={s.label} className="bg-card p-6">
            <p className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">{s.value}</p>
            <p className="mt-2 text-xs leading-relaxed text-secondary-foreground">{s.label}</p>
            <p className="mt-3 text-[11px] text-disabled">[{s.note}]</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
