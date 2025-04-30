import { SearchBar } from "@/components/home/searchbar/search-bar";
import TestimonialsSection from "@/components/qui-sommes-nous/testimonials/testimonials-section";
import HeaderRechercheBien from "@/components/recherche-bien/header";
import SectionCard from "@/components/recherche-bien/section-card";


export default function page(){
    return(
        <div>
         <HeaderRechercheBien/>
         <SearchBar />   
         <SectionCard/>
         <TestimonialsSection/>         
        </div>
    )
}