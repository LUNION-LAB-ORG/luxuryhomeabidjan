"use client";

import CardLogements from "@/components/proprite/card-logements";
import CardLieux from "@/components/proprite/card-logements";
import { useMemo } from "react"
import { parse } from "date-fns"
import { fr } from "date-fns/locale"
import { useSearchParams } from "next/navigation"
import SearchPropriete from "@/components/proprite/search-propriete";
import { SearchBar } from "@/components/home/searchbar/search-bar";
// import { SearchBarPropriete } from "@/components/home/searchbar/search-bar-propriete";
import useContext from "./useFiltrageBiens";
import useFiltrageBiens from "./useFiltrageBiens";


export interface Mobilier {
  typeLogement: string;
  piece: number;
  emplacement: string;
  prix: number;
  calandar:{depart:string,fin:string},
  description:string,
  images: string[];
}

// const logements:Mobilier[] = [
//     {
//       typeLogement: "studios",
//       piece: 1,
//       emplacement: "abidjan",
//       prix: 1500000,
//       calandar: {
//         depart: "21/04/2025",
//         fin: "07/04/2025"
//       },
//       description: "Appartement lumineux avec vue sur la Tour Eiffel, idéalement situé dans le 7e arrondissement.",
//       images: [
//         "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//       ]
//     },
//     {
//       typeLogement: "studios",
//       piece: 1,
//       emplacement: "abidjan",
//       prix: 1400000,
//       calandar: {
//         depart: "01/06/2025",
//         fin: "30/06/2025"
//       },
//       description: "Charmant appartement de 3 pièces dans le Marais, rénové récemment et proche des transports en commun.",
//       images: [
//         "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//       ]
//     },
//     {
//       typeLogement: "studios",
//       piece: 1,
//       emplacement: "abidjan",
//       prix: 1600000,
//       calandar: {
//         depart: "15/05/2025",
//         fin: "15/06/2025"
//       },
//       description: "Appartement spacieux de 3 pièces avec terrasse privée dans le quartier chic de Saint-Germain-des-Prés.",
//       images: [
//         "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//       ]
//     },
//     {
//       typeLogement: "Appartement",
//       piece: 3,
//       emplacement: "abidjan",
//       prix: 1450000,
//       calandar: {
//         depart: "01/05/2025",
//         fin: "31/05/2025"
//       },
//       description: "Appartement élégant à proximité du Louvre, avec une cuisine moderne et un grand salon.",
//       images: [
//         "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//       ]
//     },
//     {
//       typeLogement: "Appartement",
//       piece: 3,
//       emplacement: "abidjan",
//       prix: 1550000,
//       calandar: {
//         depart: "10/06/2025",
//         fin: "10/07/2025"
//       },
//       description: "Appartement de luxe avec vue dégagée sur les Champs-Élysées, 3 pièces entièrement rénovées.",
//       images: [
//         "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//       ]
//     },
//     {
//       typeLogement: "Appartement",
//       piece: 3,
//       emplacement: "abidjan",
//       prix: 1480000,
//       calandar: {
//         depart: "01/07/2025",
//         fin: "31/07/2025"
//       },
//       description: "Appartement moderne à quelques pas du Sacré-Cœur, lumineux et bien aménagé.",
//       images: [
//         "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//       ]
//     },
//     {
//       typeLogement: "Appartement",
//       piece: 3,
//       emplacement: "abidjan",
//       prix: 1350000,
//       calandar: {
//         depart: "01/06/2025",
//         fin: "30/06/2025"
//       },
//       description: "Appartement de charme dans le quartier Latin, avec un grand séjour et une chambre principale spacieuse.",
//       images: [
//         "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//       ]
//     }
//   ];
  

export default function Content() {

   const resultats =useFiltrageBiens()


   console.log({resultats:resultats});
   

      
  return (
    <div>
              {/* <SearchBar/> */}
     
        {
            resultats.length > 0 ? <CardLogements data={resultats} />:
            <div className="text xl text-center">Aucun logement ne correspond à votre recherche.</div>
        }
      
    </div>
  );
}
