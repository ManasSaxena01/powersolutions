import { Section } from "@/components/ui/Section";
import { solarDivision } from "@/lib/content/homepage";

export function SolarDivision() {
  const { eyebrow, heading, intro, subgroups } = solarDivision;

  return (
    <Section id="solar" className="bg-background">
      <div className="max-w-2xl">
        <p className="font-display text-xs tracking-[0.18em] text-amber uppercase">
          {eyebrow}
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-wide text-navy sm:text-4xl">
          {heading}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-steel">{intro}</p>
      </div>

      <ul className="mt-12 grid gap-0 border-t border-steel-muted sm:grid-cols-2">
        {subgroups.map((item, index) => (
          <li
            key={item.title}
            className={`border-b border-steel-muted py-8 sm:px-6 ${
              index % 2 === 0 ? "sm:border-r" : ""
            }`}
          >
            <p className="font-display text-xs tracking-[0.16em] text-steel uppercase">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-3 font-display text-xl font-semibold text-charcoal">
              {item.title}
            </h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-steel">
              {item.description}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
