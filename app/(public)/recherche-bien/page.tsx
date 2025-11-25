import PropertyFilter from "@/components/filter/PropertyFilter";
import { ExclusiveListings } from "@/components/home/exclusive-listings/exclusive-listings";
import TypeBien from "@/components/immobilier-details/TypeBien";
import HeaderRechercheBien from "@/components/recherche-bien/header";
import SectionCard from "@/components/recherche-bien/section-card";
import { Suspense } from "react";


export default async function page(){
    return(
        <div>
         <HeaderRechercheBien/>
         <Suspense fallback={<div className="container-8xl py-2 h-32 bg-gray-50 rounded-lg mt-4 animate-pulse" />}>
           <PropertyFilter/>
         </Suspense>
         <SectionCard/>
         <ExclusiveListings />
         <TypeBien/>
        </div>
    )
}