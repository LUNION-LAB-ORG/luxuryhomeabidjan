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
         <Suspense fallback={<div>Chargement...</div>}>
           <PropertyFilter/>
         </Suspense>
         <SectionCard/>
         <ExclusiveListings />
         <TypeBien/>
        </div>
    )
}