import { AdditionalServices } from "@/components/home/AdditionalServices";
import { Contact } from "@/components/home/Contact";
import { DrillingFeature } from "@/components/home/DrillingFeature";
import { HeroCarousel } from "@/components/home/HeroCarousel";
import { SolarDivision } from "@/components/home/SolarDivision";
import { TransformerDivision } from "@/components/home/TransformerDivision";
import { Trust } from "@/components/home/Trust";
import { WorkGallery } from "@/components/home/WorkGallery";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <HeroCarousel />
        <TransformerDivision />
        <SolarDivision />
        <DrillingFeature />
        <AdditionalServices />
        <WorkGallery />
        <Trust />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
