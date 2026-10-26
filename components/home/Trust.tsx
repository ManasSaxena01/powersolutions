import { Section } from "@/components/ui/Section";
import { trustedClients } from "@/lib/content/homepage";

export function Trust() {
  return (
    <Section className="bg-surface">
      <div className="max-w-2xl">
        <p className="font-display text-xs tracking-[0.18em] text-amber uppercase">
          Customer trust
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-wide text-navy sm:text-4xl">
          Partners who rely on our work
        </h2>
      </div>

      <ul className="mt-12 grid gap-px bg-steel-muted sm:grid-cols-2 lg:grid-cols-3">
        {trustedClients.map((client) => (
          <li
            key={client}
            className="flex min-h-24 items-center justify-center bg-surface px-5 py-8 text-center"
          >
            <span className="font-display text-base font-semibold tracking-[0.06em] text-navy uppercase sm:text-lg">
              {client}
            </span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
