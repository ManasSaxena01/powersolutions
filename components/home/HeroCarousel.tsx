"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { heroSlides, site } from "@/lib/content/homepage";

export function HeroCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % heroSlides.length);
    }, 5500);

    return () => window.clearInterval(timer);
  }, []);

  const slide = heroSlides[index];

  return (
    <section className="relative min-h-[70vh] overflow-hidden bg-navy-deep text-white">
      {heroSlides.map((item, i) => (
        <div
          key={item.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={i !== index}
        >
          <Image
            src={item.image}
            alt={item.alt}
            fill
            priority={i === 0}
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/92 via-navy/78 to-navy/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-transparent to-navy/30" />
        </div>
      ))}

      <div className="relative z-10 mx-auto flex min-h-[70vh] w-full max-w-6xl flex-col justify-end px-5 pb-16 pt-24 sm:px-8 sm:pb-20">
        <div key={slide.id} className="max-w-2xl animate-hero-fade">
          <p className="font-display text-4xl font-semibold tracking-[0.02em] text-white sm:text-6xl lg:text-7xl">
            {site.name}
          </p>
          <div className="mt-4 h-1 w-24 origin-left bg-amber animate-underline" />
          <h1 className="mt-8 font-display text-2xl font-medium tracking-wide text-white sm:text-3xl">
            {slide.title}
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-steel-muted sm:text-lg">
            {slide.caption}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-amber px-6 py-3 font-display text-base font-semibold tracking-[0.08em] text-navy-deep uppercase transition-colors hover:bg-amber-deep"
            >
              Request a consultation
            </a>
            <a
              href="#transformers"
              className="inline-flex items-center justify-center border border-white/30 px-6 py-3 font-display text-sm font-semibold tracking-[0.08em] text-white uppercase transition-colors hover:border-amber hover:text-amber"
            >
              View core services
            </a>
          </div>
        </div>

        <div className="mt-12 flex items-center gap-3">
          {heroSlides.map((item, i) => (
            <button
              key={item.id}
              type="button"
              aria-label={`Show slide: ${item.title}`}
              aria-current={i === index}
              onClick={() => setIndex(i)}
              className={`h-1.5 transition-all ${
                i === index ? "w-10 bg-amber" : "w-5 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
