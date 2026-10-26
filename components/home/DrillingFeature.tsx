import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { drillingDivision } from "@/lib/content/homepage";

export function DrillingFeature() {
  const {
    eyebrow,
    tagline,
    supportingText,
    image,
    imageAlt,
    capabilities,
    cta,
  } = drillingDivision;

  return (
    <section
      id="drilling"
      className="relative overflow-hidden bg-navy-deep text-white"
    >
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="100vw"
          className="object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/92 to-navy/75" />
      </div>

      <Container className="relative z-10 py-12 sm:py-16">
        <p className="font-display text-xs tracking-[0.18em] text-amber uppercase">
          {eyebrow}
        </p>
        <h2 className="mt-4 max-w-4xl font-display text-2xl font-semibold tracking-[0.04em] text-white uppercase sm:text-4xl sm:leading-tight">
          {tagline}
        </h2>
        <div className="mt-5 h-1 w-24 bg-amber" />
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-steel-muted sm:text-lg">
          {supportingText}
        </p>

        <ul className="mt-12 grid gap-8 border-t border-white/15 pt-10 sm:grid-cols-3">
          {capabilities.map((item, index) => (
            <li key={item.title}>
              <p className="font-display text-xs tracking-[0.16em] text-amber uppercase">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 font-display text-lg font-semibold tracking-wide text-white sm:text-xl">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-steel-light">
                {item.description}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-12">
          <a
            href={cta.href}
            className="inline-flex items-center justify-center bg-amber px-6 py-3 font-display text-sm font-semibold tracking-[0.08em] text-navy-deep uppercase transition-colors hover:bg-amber-deep"
          >
            {cta.label}
          </a>
        </div>
      </Container>
    </section>
  );
}
