import PropertyFilter from "@/components/filter/PropertyFilter";
import { ExclusiveListings } from "@/components/home/exclusive-listings/exclusive-listings";
import { SearchBar } from "@/components/home/searchbar/search-bar";
import TestimonialsSection from "@/components/qui-sommes-nous/testimonials/testimonials-section";
import HeaderRechercheBien from "@/components/recherche-bien/header";
import SectionCard from "@/components/recherche-bien/section-card";


export default async function page(){
    return(
        <div>
         <HeaderRechercheBien/>
         <PropertyFilter/>
         {/* <SearchBar />    */}
         <SectionCard/>
         <ExclusiveListings />
        </div>
    )
}