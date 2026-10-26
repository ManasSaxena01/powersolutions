import { Section } from "@/components/ui/Section";
import { additionalServices } from "@/lib/content/homepage";

export function AdditionalServices() {
  const { eyebrow, heading, intro, items } = additionalServices;

  return (
    <Section id="additional-services" className="bg-surface">
      <div className="max-w-2xl">
        <p className="font-display text-xs tracking-[0.18em] text-amber uppercase">
          {eyebrow}
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-wide text-navy sm:text-4xl">
          {heading}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-steel">{intro}</p>
      </div>

      <ol className="mt-12 divide-y divide-steel-muted border-y border-steel-muted">
        {items.map((item, index) => (
          <li
            key={item.title}
            className="grid gap-4 py-8 sm:grid-cols-[5rem_1fr] sm:gap-10"
          >
            <span className="font-display text-3xl font-semibold text-gray-500">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className="font-display text-xl font-semibold text-charcoal sm:text-2xl">
                {item.title}
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-steel sm:text-base">
                {item.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
