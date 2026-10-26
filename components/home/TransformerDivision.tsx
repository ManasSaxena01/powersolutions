import { Section } from "@/components/ui/Section";
import { transformerDivision } from "@/lib/content/homepage";

export function TransformerDivision() {
  const { eyebrow, heading, intro, transformerServices, infrastructureServices } =
    transformerDivision;

  return (
    <Section id="transformers" className="bg-surface">
      <div className="max-w-2xl">
        <p className="font-display text-xs tracking-[0.18em] text-amber uppercase">
          {eyebrow}
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-wide text-navy sm:text-4xl">
          {heading}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-steel">{intro}</p>
      </div>

      <div className="mt-14">
        <h3 className="font-display text-sm tracking-[0.16em] text-charcoal uppercase">
          Transformer services
        </h3>
        <ul className="mt-6 grid gap-0 border-t border-steel-muted sm:grid-cols-2 lg:grid-cols-3">
          {transformerServices.map((item, index) => (
            <li
              key={item.title}
              className="border-b border-steel-muted py-7 sm:border-r sm:px-5 sm:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(3n)]:border-r-0"
            >
              <p className="font-display text-xs tracking-[0.16em] text-steel uppercase">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h4 className="mt-3 font-display text-lg font-semibold text-charcoal">
                {item.title}
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-steel">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-16">
        <h3 className="font-display text-sm tracking-[0.16em] text-charcoal uppercase">
          HT / LT electrical infrastructure
        </h3>
        <ol className="mt-6 divide-y divide-steel-muted border-y border-steel-muted">
          {infrastructureServices.map((item, index) => (
            <li
              key={item.title}
              className="grid gap-3 py-7 sm:grid-cols-[4.5rem_1fr] sm:gap-8"
            >
              <span className="font-display text-2xl font-semibold text-gray-500">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h4 className="font-display text-xl font-semibold text-charcoal">
                  {item.title}
                </h4>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-steel">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
