import PropertyFilter from "@/components/filter/PropertyFilter";
import LogoShowcase from "@/components/home/logo-showcase/logo-showcase";
import { SearchBar } from "@/components/home/searchbar/search-bar";
import HeroSection from "@/components/page-service/hero/hero-section";
import ServiceSection from "@/components/page-service/services-section";
import TestimonialsSection from "@/components/qui-sommes-nous/testimonials/testimonials-section";

export default function TransactionPage(){

    return(
        <div>
         <HeroSection/>
         <PropertyFilter/>
         <ServiceSection/> 
         <LogoShowcase/>
         <TestimonialsSection/>
        </div>
    )

}