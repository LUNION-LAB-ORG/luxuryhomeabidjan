import PropertyFilter from "@/components/filter/PropertyFilter";
import LogoShowcase from "@/components/home/logo-showcase/logo-showcase";
import HeroSection from "@/components/page-service/hero/hero-section";
import ServiceSection from "@/components/page-service/services-section";
import TestimonialsSection from "@/components/qui-sommes-nous/testimonials/testimonials-section";
import { Suspense } from "react";

export default function Content(){

    return(
        <div>
         <HeroSection/>
         <Suspense fallback={<div>Chargement...</div>}>
          <PropertyFilter/>
         </Suspense>
        
         <ServiceSection/> 
         <LogoShowcase/>
         <TestimonialsSection/>
        </div>
    )

}