import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { galleryItems } from "@/lib/content/homepage";

export function WorkGallery() {
  return (
    <Section id="gallery" className="bg-background">
      <div className="max-w-2xl">
        <p className="font-display text-xs tracking-[0.18em] text-amber uppercase">
          Portfolio
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-wide text-navy sm:text-4xl">
          Real work from our yard & workshop
        </h2>
        <p className="mt-4 text-base leading-relaxed text-steel">
          A look at the transformers, assemblies, and site capacity behind our
          delivery.
        </p>
      </div>

      <ul className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {galleryItems.map((item, index) => (
          <li
            key={item.src}
            className={`relative overflow-hidden bg-navy ${
              index === 0 ? "sm:col-span-2 lg:col-span-2 lg:row-span-2" : ""
            }`}
          >
            <div
              className={`relative ${
                index === 0 ? "aspect-[16/10] lg:aspect-auto lg:h-full lg:min-h-[28rem]" : "aspect-[4/3]"
              }`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes={
                  index === 0
                    ? "(max-width: 1024px) 100vw, 66vw"
                    : "(max-width: 640px) 100vw, 33vw"
                }
                className="object-cover transition-transform duration-700 hover:scale-[1.03]"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-deep/85 to-transparent px-4 py-4">
                <p className="font-display text-xs tracking-[0.14em] text-white uppercase">
                  {item.caption}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
