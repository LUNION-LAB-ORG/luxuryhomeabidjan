import { ExclusiveListings } from "@/components/home/exclusive-listings/exclusive-listings";
import BodyImmobilierDetail from "@/components/immobilier-details/bodyImmobilierDetail";
import FormImmobilier from "@/components/immobilier-details/form-immobilier";
import HeaderImobilierDetails from "@/components/immobilier-details/header-immobilier-details";
import SessionRetour from "@/components/immobilier-details/session-retour";
import TypeBien from "@/components/immobilier-details/TypeBien";

export default async function Page (){

    return(
        <>
           <SessionRetour/>
           <HeaderImobilierDetails />
           <BodyImmobilierDetail/>
           <FormImmobilier/>
           <ExclusiveListings />
           <TypeBien/>
        </>
    )
} 