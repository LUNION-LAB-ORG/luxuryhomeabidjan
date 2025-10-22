"use client";

import CardLogements from "@/components/proprite/card-logements";
// import { SearchBarPropriete } from "@/components/home/searchbar/search-bar-propriete";
import useFiltrageBiens from "./useFiltrageBiens";


export interface Mobilier {
  typeLogement: string;
  piece: number;
  emplacement: string;
  prix: number;
  calandar: { depart: string, fin: string },
  description: string,
  images: string[];
}


export default function Content() {

  const resultats = useFiltrageBiens()


  console.log({ resultats: resultats });



  return (
    <div>
      {/* <SearchBar/> */}

      {
        resultats.length > 0 ? <CardLogements data={resultats} /> :
          <div className="text xl text-center">Aucun logement ne correspond à votre recherche.</div>
      }

    </div>
  );
}
