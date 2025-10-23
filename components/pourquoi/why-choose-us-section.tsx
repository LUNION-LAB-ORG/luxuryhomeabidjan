"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

// Composant principal
export default function WhyChooseUsSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div
      className="relative bg-no-repeat bg-cover bg-center  overflow-hidden min-h-screen rounded-b-3xl bg-white shadow-lg"
      style={{ backgroundImage: "url(/assets/images/coup-de-coeur/nous.jpg)" }}
    >
      {/* Image principale */}
      <div className="relative w-full overflow-hidden">
        <Image
          src="/assets/images/coup-de-coeur/nous.jpg"
          alt="Salon moderne et élégant"
          fill
          priority
          className={`object-cover transition-opacity duration-700 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>

      {/* Overlay textuel semi-transparent */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/60  text-white p-8 pb-12 rounded-b-3xl">
        <h2 className="text-4xl font-bold text-center mb-6">
          Pourquoi nous choisir ?
        </h2>

        <p className="text-sm lg:text-xl md:text-md  leading-relaxed mb-4 max-w-4xl mx-auto">
          Luxury Home Abidjan, fondé par des passionnés de l’immobilier, incarne
          une vision nouvelle et ambitieuse du secteur immobilier en Afrique.
        </p>

        <p className="text-sm lg:text-xl md:text-md  leading-relaxed mb-4 max-w-4xl mx-auto">
          LHA, c’est la fusion entre la passion et l’excellence.
        </p>

        <p className="text-sm lg:text-xl md:text-md  leading-relaxed mb-4 max-w-4xl mx-auto">
          Notre équipe diversifier réinvente l’immobilier africain en plaçant le
          client au cœur de chaque projet.
        </p>

        <p className="text-sm lg:text-xl md:text-md leading-relaxed mb-6 max-w-4xl mx-auto">
          Plus qu’une transaction, nous créons des projets de vie, vous serez
          guidés par une écoute, un conseil immobilier et un accompagnement
        </p>

        {/* Philosophie & fierté */}
       <div className="text-center">
         <span className="font-bold text-lg">
          LHA,
        </span>
        <br />
        l'immobilier en Afrique autrement.
       </div>
      </div>
    </div>
  );
}
