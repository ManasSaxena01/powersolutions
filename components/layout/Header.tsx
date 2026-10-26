import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { navLinks, site } from "@/lib/content/homepage";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy/95 text-white backdrop-blur-sm">
      <Container className="flex h-16 items-center justify-between gap-6">
        <Link
          href="/"
          className="font-display text-xl font-semibold tracking-[0.04em] text-white sm:text-2xl"
        >
          {site.name}
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-8 md:flex"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-display text-sm font-medium tracking-[0.12em] text-steel-light uppercase transition-colors hover:text-amber"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="font-display text-sm font-semibold tracking-[0.12em] text-amber uppercase transition-colors hover:text-white md:hidden"
        >
          Contact
        </a>
      </Container>
    </header>
  );
}
