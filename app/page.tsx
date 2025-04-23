"use client";
import HeroSection from "@/components/home/hero/hero-section";
import { SearchBar } from "../components/home/searchbar/search-bar";
import { WhyChooseUs } from "../components/home/why-choose-us/why-choose-us";
import { ServicesSection } from "../components/home/services-section/services-section";
import { PropertyCarousel } from "../components/home/property/property";
import { ValuesContactSection } from "../components/home/values-contact/values-contact-section";
import { ExclusiveListings } from "../components/home/exclusive-listings/exclusive-listings";
import LogoShowcase from "../components/home/logo-showcase/logo-showcase";
import MrLHA from "../components/home/mrlha/mrlha";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <SearchBar />
      <WhyChooseUs />
      <ServicesSection />
      <PropertyCarousel />
      <ValuesContactSection />
      <ExclusiveListings />
      <LogoShowcase />
      <MrLHA />
    </div>
  );
}
