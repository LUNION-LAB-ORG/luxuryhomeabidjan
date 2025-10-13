import { ExclusiveListings } from "@/components/home/exclusive-listings/exclusive-listings";
import FilterForm from "@/components/home/filter-form";
import HeroSection from "@/components/home/hero/hero-section";
import LogoShowcase from "@/components/home/logo-showcase/logo-showcase";
import { PropertyCarousel } from "@/components/home/property/property";
import { ServicesSection } from "@/components/home/services-section/services-section";
import { ValuesContactSection } from "@/components/home/values-contact/values-contact-section";
import { WhyChooseUs } from "@/components/home/why-choose-us/why-choose-us";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Suspense fallback={<div>Loading...</div>}>
        <FilterForm />
      </Suspense>
      <ExclusiveListings />
      <WhyChooseUs />
      <ServicesSection />
      <PropertyCarousel />
      <ValuesContactSection />
      <LogoShowcase />
      {/* <MrLHA/> */}
    </>
  );
}
