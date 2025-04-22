"use client";

import CardLogements from "@/components/proprite/card-logements";
import CardLieux from "@/components/proprite/card-logements";
import { useMemo } from "react"
import { parse } from "date-fns"
import { fr } from "date-fns/locale"
import { useSearchParams } from "next/navigation"
import SearchPropriete from "@/components/proprite/search-propriete";
import { SearchBar } from "@/components/home/searchbar/search-bar";
import { SearchBarPropriete } from "@/components/home/searchbar/search-bar-propriete";


export interface Logements {
  typeLogement: string;
  piece: number;
  emplacement: string;
  prix: number;
  calandar:{depart:string,fin:string},
  description:string,
  images: string[];
}

const logements:Logements[] = [
    {
      typeLogement: "studios",
      piece: 1,
      emplacement: "abidjan",
      prix: 1500000,
      calandar: {
        depart: "21/04/2025",
        fin: "07/04/2025"
      },
      description: "Appartement lumineux avec vue sur la Tour Eiffel, idéalement situé dans le 7e arrondissement.",
      images: [
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      ]
    },
    {
      typeLogement: "studios",
      piece: 1,
      emplacement: "abidjan",
      prix: 1400000,
      calandar: {
        depart: "01/06/2025",
        fin: "30/06/2025"
      },
      description: "Charmant appartement de 3 pièces dans le Marais, rénové récemment et proche des transports en commun.",
      images: [
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      ]
    },
    {
      typeLogement: "studios",
      piece: 1,
      emplacement: "abidjan",
      prix: 1600000,
      calandar: {
        depart: "15/05/2025",
        fin: "15/06/2025"
      },
      description: "Appartement spacieux de 3 pièces avec terrasse privée dans le quartier chic de Saint-Germain-des-Prés.",
      images: [
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      ]
    },
    {
      typeLogement: "Appartement",
      piece: 3,
      emplacement: "abidjan",
      prix: 1450000,
      calandar: {
        depart: "01/05/2025",
        fin: "31/05/2025"
      },
      description: "Appartement élégant à proximité du Louvre, avec une cuisine moderne et un grand salon.",
      images: [
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      ]
    },
    {
      typeLogement: "Appartement",
      piece: 3,
      emplacement: "abidjan",
      prix: 1550000,
      calandar: {
        depart: "10/06/2025",
        fin: "10/07/2025"
      },
      description: "Appartement de luxe avec vue dégagée sur les Champs-Élysées, 3 pièces entièrement rénovées.",
      images: [
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      ]
    },
    {
      typeLogement: "Appartement",
      piece: 3,
      emplacement: "abidjan",
      prix: 1480000,
      calandar: {
        depart: "01/07/2025",
        fin: "31/07/2025"
      },
      description: "Appartement moderne à quelques pas du Sacré-Cœur, lumineux et bien aménagé.",
      images: [
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      ]
    },
    {
      typeLogement: "Appartement",
      piece: 3,
      emplacement: "abidjan",
      prix: 1350000,
      calandar: {
        depart: "01/06/2025",
        fin: "30/06/2025"
      },
      description: "Appartement de charme dans le quartier Latin, avec un grand séjour et une chambre principale spacieuse.",
      images: [
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      ]
    }
  ];
  

export default function Content() {

    const searchParams = useSearchParams()

    const typeLogement = searchParams.get("typeLogement")
    const piece = searchParams.get("piece")
    const emplacement = searchParams.get("emplacement")
    const prixDepart = searchParams.get("prixDepart")
    const prixFin = searchParams.get("prixFin")
    const reservationDebut = searchParams.get("reservationDebut")
    const reservationFin = searchParams.get("reservationFin")


    // console.log({typeLogement,piece,emplacement});
    
    
      const filtered = useMemo(() => {
        return logements.filter((logement) => {
          const matchesType = typeLogement ? logement.typeLogement === typeLogement : true
          const matchesPiece = piece ? logement.piece === parseInt(piece) : true
          const matchesEmplacement = emplacement ? logement.emplacement === emplacement : true
          const matchesPrix =
            logement.prix >= (prixDepart ? parseInt(prixDepart) : 0) &&
            logement.prix <= (prixFin ? parseInt(prixFin) : Infinity)
    
          const dateDebutUser = reservationDebut
            ? parse(reservationDebut, "dd/MM/yyyy", new Date(), { locale: fr })
            : null
          const dateFinUser = reservationFin
            ? parse(reservationFin, "dd/MM/yyyy", new Date(), { locale: fr })
            : null
    
          const dateDebutLogement = parse(logement.calandar.depart, "dd/MM/yyyy", new Date(), {
            locale: fr,
          })
          
          const dateFinLogement = parse(logement.calandar.fin, "dd/MM/yyyy", new Date(), {
            locale: fr,
          })
    
          const matchesDate =
            !dateDebutUser ||
            !dateFinUser ||
            (dateDebutUser >= dateDebutLogement && dateFinUser <= dateFinLogement)
    
          return matchesType && matchesPiece && matchesEmplacement 
        })
      }, [
        typeLogement,
        piece,
        emplacement,
        prixDepart,
        prixFin,
        reservationDebut,
        reservationFin,
      ])

      console.log({filtered:filtered});
      
  return (
    <div>
         <SearchBarPropriete/>      
        {/* <SearchPropriete /> */}
        {/* <CardLogements data={logements} /> */}
        {
            filtered.length > 0 ? <CardLogements data={filtered} />:
            <p>Aucun logement ne correspond à votre recherche.</p>
        }
      
    </div>
  );
}
