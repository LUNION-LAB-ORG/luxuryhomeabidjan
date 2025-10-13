import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

// 🧾 Type pour un bien immobilier
export interface BienImmobilier {
  id: number;
  titre: string;
  ville: string;
  surface: number;
  prix: number;
  type: string;
  chambres: number;
  description: string;
  statut: "vente" | "location";
  datePublication: string;
  images: string[],
}


export const biensImmobiliers: BienImmobilier[] = [
  {
    id: 201,
    titre: "Appartement moderne à Cocody",
    ville: "Abidjan",
    surface: 80,
    prix: 350000,
    type: "Appartement",
    chambres: 3,
    description: "Appartement moderne proche du lycée français, avec balcon",
    statut: "location",
    datePublication: "2025-04-21",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]
  },
  {
    id: 202,
    titre: "Villa familiale avec jardin",
    ville: "Yamoussoukro",
    surface: 150,
    prix: 45000000,
    type: "Maison",
    chambres: 4,
    description: "Grande villa sécurisée avec jardin arboré et garage",
    statut: "vente",
    datePublication: "2025-04-15",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]
  },
  {
    id: 203,
    titre: "Studio meublé au Plateau",
    ville: "Abidjan",
    surface: 25,
    prix: 150000,
    type: "Studio",
    chambres: 0,
    description: "Studio idéal pour étudiant ou jeune actif, tout équipé",
    statut: "location",
    datePublication: "2025-04-10",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]
  },
  {
    id: 204,
    titre: "Maison traditionnelle rénovée",
    ville: "Bouaké",
    surface: 120,
    prix: 32000000,
    type: "Maison",
    chambres: 3,
    description: "Charme local avec confort moderne, quartier résidentiel",
    statut: "vente",
    datePublication: "2025-03-28",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]
  },
  {
    id: 205,
    titre: "Appartement standing à Marcory",
    ville: "Abidjan",
    surface: 90,
    prix: 500000,
    type: "Appartement",
    chambres: 2,
    description: "Résidence avec piscine, sécurité 24h/24",
    statut: "location",
    datePublication: "2025-04-05",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]
  },
  {
    id: 206,
    titre: "Duplex avec vue sur la lagune",
    ville: "Abidjan",
    surface: 110,
    prix: 62000000,
    type: "Duplex",
    chambres: 4,
    description: "Idéal pour famille ou expatrié, proche commerces",
    statut: "vente",
    datePublication: "2025-03-20",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]
  },
  {
    id: 207,
    titre: "Petit appartement à proximité de l'université",
    ville: "Bouaké",
    surface: 45,
    prix: 120000,
    type: "Appartement",
    chambres: 1,
    description: "Parfait pour étudiants ou jeunes actifs",
    statut: "location",
    datePublication: "2025-04-12",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]
  }
];


const useFiltrageBiens = (): BienImmobilier[] => {
  const searchParams = useSearchParams();
  const [resultats, setResultats] = useState<BienImmobilier[]>([]);

  useEffect(() => {
    const typeLogement = searchParams.get("typeLogement");
    const piece = searchParams.get("piece");
    const emplacement = searchParams.get("emplacement");
    const prixDepart = searchParams.get("prixDepart");
    const prixFin = searchParams.get("prixFin");
    const reservationDebut = searchParams.get("reservationDebut");
    const reservationFin = searchParams.get("reservationFin");
    const status = searchParams.get("status"); // "location" ou "achat"

    const types = typeLogement?.split(",") ?? [];
    const pieces = piece ? parseInt(piece) : null;
    const prixMin = prixDepart ? parseInt(prixDepart) : null;
    const prixMax = prixFin ? parseInt(prixFin) : null;
    const dateDebut = reservationDebut ? new Date(reservationDebut) : null;
    const dateFin = reservationFin ? new Date(reservationFin) : null;

    if (!status) return;

    const resultat = biensImmobiliers.filter((bien) => {
      const dateBien = new Date(bien.datePublication);

      return (
        bien.statut === (status === "achat" ? "vente" : "location")
        // (types.length === 0 || types.includes(bien.type)) &&
        // (!pieces || bien.chambres >= pieces) &&
        // (!emplacement || bien.ville.toLowerCase() === emplacement.toLowerCase()) 
        // (!prixMin || bien.prix >= prixMin) &&
        // (!prixMax || bien.prix <= prixMax) &&
        // (!dateDebut || dateBien >= dateDebut) &&
        // (!dateFin || dateBien <= dateFin)
      );
    });

    setResultats(resultat);
  }, [searchParams]);

  return resultats;
};

export default useFiltrageBiens;
