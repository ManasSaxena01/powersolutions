import { Section } from "@/components/ui/Section";
import { site, telHref } from "@/lib/content/homepage";

export function Contact() {
  return (
    <Section id="contact" className="bg-charcoal text-white">
      <div className="max-w-3xl">
        <p className="font-display text-xs tracking-[0.18em] text-amber uppercase">
          Contact
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-wide sm:text-4xl">
          Get in touch
        </h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-steel-light">
          Reach Power Solutions directly for transformer work, solar projects,
          drilling enquiries, and industrial support.
        </p>
      </div>

      <dl className="mt-12 grid gap-8 border-t border-white/15 pt-10 sm:grid-cols-3">
        <div>
          <dt className="font-display text-xs tracking-[0.14em] text-amber uppercase">
            Phone
          </dt>
          <dd className="mt-3 grid gap-2 text-base text-white sm:text-lg">
            {site.phones.map((phone) => (
              <a
                key={phone}
                href={telHref(phone)}
                className="transition-colors hover:text-amber"
              >
                {phone}
              </a>
            ))}
          </dd>
        </div>

        <div>
          <dt className="font-display text-xs tracking-[0.14em] text-amber uppercase">
            Email
          </dt>
          <dd className="mt-3 grid gap-2 text-base text-white sm:text-lg">
            {site.emails.map((email) => (
              <a
                key={email}
                href={`mailto:${email}`}
                className="break-all transition-colors hover:text-amber"
              >
                {email}
              </a>
            ))}
          </dd>
        </div>

        <div>
          <dt className="font-display text-xs tracking-[0.14em] text-amber uppercase">
            Address
          </dt>
          <dd className="mt-3 text-base leading-relaxed text-steel-muted sm:text-lg">
            {site.address}
          </dd>
        </div>
      </dl>
    </Section>
  );
}
