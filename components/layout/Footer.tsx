import { Container } from "@/components/ui/Container";
import { navLinks, site, telHref } from "@/lib/content/homepage";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-deep text-steel-light">
      <Container className="grid gap-10 py-14 sm:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-display text-2xl font-semibold tracking-[0.04em] text-white">
            {site.name}
          </p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-steel-light">
            {site.tagline}
          </p>
        </div>

        <div>
          <p className="font-display text-xs tracking-[0.16em] text-amber uppercase">
            Navigate
          </p>
          <ul className="mt-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-steel-light transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-display text-xs tracking-[0.16em] text-amber uppercase">
            Contact
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {site.phones.map((phone) => (
              <li key={phone}>
                <a
                  href={telHref(phone)}
                  className="transition-colors hover:text-white"
                >
                  {phone}
                </a>
              </li>
            ))}
            {site.emails.map((email) => (
              <li key={email}>
                <a
                  href={`mailto:${email}`}
                  className="transition-colors hover:text-white"
                >
                  {email}
                </a>
              </li>
            ))}
            <li>{site.address}</li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-5 text-xs text-steel sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {site.name}. All rights reserved.</p>
          <p>Industrial electrical engineering</p>
        </Container>
      </div>
    </footer>
  );
}
