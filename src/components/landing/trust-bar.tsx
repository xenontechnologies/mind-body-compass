import { Clock, Lock, ShieldCheck, Stethoscope } from "lucide-react";

const markers = [
  { icon: ShieldCheck, label: "HIPAA-conscious design" },
  { icon: Stethoscope, label: "Licensed professional network" },
  { icon: Clock, label: "24/7 availability" },
  { icon: Lock, label: "Data encrypted end-to-end" },
];

export function TrustBar() {
  return (
    <section className="border-y border-border bg-surface">
      <ul className="mx-auto grid w-full max-w-6xl gap-4 px-6 py-6 sm:grid-cols-2 lg:grid-cols-4">
        {markers.map(({ icon: Icon, label }) => (
          <li key={label} className="flex items-center gap-2.5 text-xs text-muted-foreground">
            <Icon className="h-4 w-4 shrink-0 text-secondary-foreground" />
            {label}
          </li>
        ))}
      </ul>
    </section>
  );
}
