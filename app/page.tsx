import Details from "@/components/detail/detail";
import CoupDeCoeur from "@/components/home/coup-de-coeur/coup-de-coeur";
import { ExclusiveListings } from "@/components/home/exclusive-listings/exclusive-listings";
import FilterForm from "@/components/home/filter-form";
import HeroSection from "@/components/home/hero/hero-section";
import LogoShowcase from "@/components/home/logo-showcase/logo-showcase";
import { PropertyCarousel } from "@/components/home/property/property";
import { ServicesSection } from "@/components/home/services-section/services-section";
import { ValuesContactSection } from "@/components/home/values-contact/values-contact-section";
import { WhyChooseUs } from "@/components/home/why-choose-us/why-choose-us";
import WhyChooseUsSection from "@/components/pourquoi/why-choose-us-section";
import { TeamSection } from "@/components/team/team-section";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="max-w-[2550px] mx-auto">
      <HeroSection />
      {/*<Suspense fallback={<div>Loading...</div>}>*/}
      {/*  <FilterForm />  */}
      {/*</Suspense>*/}
      <CoupDeCoeur/>
      <WhyChooseUsSection/>
      <ServicesSection/>
      <ValuesContactSection/>
      <ExclusiveListings />
      {/*<PropertyCarousel />*/}
      {/* <Details/> */}
      {/*<LogoShowcase />*/}
      <TeamSection/>
      {/* <MrLHA/> */}
    </div>
  );
}
