import Equipement from "@/components/immobilier-details/equipement";
import FormImmobilier from "@/components/immobilier-details/form-immobilier";
import GaleriePage from "@/components/immobilier-details/galerie-page";
import HeaderImobilierDetails from "@/components/immobilier-details/header-immobilier-details";
import TestimonialsSection from "@/components/qui-sommes-nous/testimonials/testimonials-section";

export default async function Page (){

    return(
        <div>
           <HeaderImobilierDetails />
           <GaleriePage/>
           <Equipement/>  
           <FormImmobilier/>
           <TestimonialsSection/>  
        </div>
    )
} 