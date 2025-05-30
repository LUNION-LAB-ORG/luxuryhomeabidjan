import HeroSection from "@/components/home/hero/hero-section";
import { SearchBar } from "../components/home/searchbar/search-bar";
import { WhyChooseUs } from "../components/home/why-choose-us/why-choose-us";
import { ServicesSection } from "../components/home/services-section/services-section";
import { PropertyCarousel } from "../components/home/property/property";
import { ValuesContactSection } from "../components/home/values-contact/values-contact-section";
import { ExclusiveListings } from "../components/home/exclusive-listings/exclusive-listings";
import LogoShowcase from "../components/home/logo-showcase/logo-showcase";
import MrLHA from "../components/home/mrlha/mrlha";
import { Suspense } from "react";
import PropertyFilterHom from "@/components/home/PropertyFilterHom";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Suspense fallback={<div>Chargement...</div>}>
         <PropertyFilterHom/>
      </Suspense>
      {/* <SearchBar /> */}
      <ExclusiveListings />
      <WhyChooseUs />
      <ServicesSection />
      <PropertyCarousel />
      <ValuesContactSection />
      <LogoShowcase />
      <MrLHA />
    </div>
  );
}
