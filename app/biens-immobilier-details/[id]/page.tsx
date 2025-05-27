import { ExclusiveListings } from "@/components/home/exclusive-listings/exclusive-listings";
import BodyImmobilierDetail from "@/components/immobilier-details/bodyImmobilierDetail";
import Equipement from "@/components/immobilier-details/equipement";
import FormImmobilier from "@/components/immobilier-details/form-immobilier";
import GaleriePage from "@/components/immobilier-details/galerie-page";
import HeaderImobilierDetails from "@/components/immobilier-details/header-immobilier-details";
import TypeBien from "@/components/immobilier-details/TypeBien";
import TestimonialsSection from "@/components/qui-sommes-nous/testimonials/testimonials-section";

export default async function Page (){

    return(
        <div>
           <HeaderImobilierDetails />
           <BodyImmobilierDetail/>
           <FormImmobilier/>
           <ExclusiveListings />
           <TypeBien/>
        </div>
    )
} 