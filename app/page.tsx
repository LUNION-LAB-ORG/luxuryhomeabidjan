import { ExclusiveListings } from "@/components/home/exclusive-listings/exclusive-listings";
import FilterForm from "@/components/home/filter-form";
import HeroSection from "@/components/home/hero/hero-section";
import LogoShowcase from "@/components/home/logo-showcase/logo-showcase";
import { PropertyCarousel } from "@/components/home/property/property";
import { ServicesSection } from "@/components/home/services-section/services-section";
import { ValuesContactSection } from "@/components/home/values-contact/values-contact-section";
import { WhyChooseUs } from "@/components/home/why-choose-us/why-choose-us";
import WhyChoose from "@/components/home/why-choose-us/WhyChooseUs";
import WhyChooseUso from "@/components/home/why-choose-us/WhyChooseUs";
import WhyChooseUsSection from "@/components/home/why-choose-us/WhyChooseUsSection";
import ProjectsSection from "@/components/projets/projects-section";
import ProjectsSections from "@/components/projets/ProjectsSections";
import TeamSection from "@/components/team/team-section";
import TeamSections from "@/components/team/TeamSections";
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
      <TeamSection/>
      <TeamSections/>
      <ProjectsSection/>
      <ProjectsSections/>

      <WhyChooseUsSection />
      <WhyChoose/>
      {/* <MrLHA/> */}
    </>
  );
}
