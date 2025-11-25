import CoupDeCoeur from '@/components/home/coup-de-coeur/coup-de-coeur';
import { ExclusiveListings } from '@/components/home/exclusive-listings/exclusive-listings';
import HeroSection from '@/components/home/hero/hero-section';
import { ServicesSection } from '@/components/home/services-section/services-section';
import { ValuesContactSection } from '@/components/home/values-contact/values-contact-section';
import WhyChooseUsSection from '@/components/pourquoi/why-choose-us-section';
import { TeamSection } from '@/components/team/team-section';
import { Suspense } from 'react';
import FilterForm from '@/components/home/filter-form';

export default function Home() {
  return (
    <div className="max-w-[2550px] mx-auto">
      <HeroSection />
      <Suspense fallback={<div className="container-8xl py-2 h-32 bg-gray-50 rounded-lg mt-12 animate-pulse" />}>
        <FilterForm />
      </Suspense>
      <CoupDeCoeur />
      <WhyChooseUsSection />
      <ServicesSection />
      <ValuesContactSection />
      <ExclusiveListings />
      <TeamSection />
    </div>
  );
}
