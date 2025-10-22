'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

// Composant principal
export default function WhyChooseUsSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div
      className="relative bg-no-repeat bg-cover bg-center overflow-hidden min-h-screen rounded-b-3xl bg-white shadow-lg"
      style={{ backgroundImage: 'url(/assets/images/illustrations/page-accueil/villa1.png)' }}
    >
      {/* Image principale */}
      <div className="relative w-full overflow-hidden">
        <Image
          src="/assets/images/illustrations/page-accueil/villa1.png"
          alt="Salon moderne et élégant"
          fill
          priority
          className={`object-cover transition-opacity duration-700 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </div>

      {/* Overlay textuel semi-transparent */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/30  text-white p-8 pb-12 rounded-b-3xl">
        <h2 className="text-4xl font-bold text-center mb-6">Pourquoi nous choisir ?</h2>

        <p className="text-sm leading-relaxed mb-4 max-w-4xl mx-auto">
          Parce que la Côte d’Ivoire connaît un engouement et une effervescence immobilière incroyable, une demande
          toujours grandissante : vous proposer les meilleurs biens disponibles sur le marché s’inscrit dans notre
          démarche.
        </p>

        <p className="text-sm leading-relaxed mb-4 max-w-4xl mx-auto">
          Notre éthique est une approche qualitative, esthétique et attentive du bien, afin de vous le proposer au prix
          juste.
        </p>

        <p className="text-sm leading-relaxed mb-4 max-w-4xl mx-auto">
          Chez LHA le client passe avant l’agence, nous avons développé une véritable approche conseil, basée sur une
          expertise aussi bien sur le plan administratif, juridique, que comptable et financier.
        </p>

        <p className="text-sm leading-relaxed mb-6 max-w-4xl mx-auto">
          Particuliers, professionnels, institutionnels, notre équipe s’engage à vous fournir transparence et
          confidentialité avant, pendant et après votre projet.
        </p>

        {/* Philosophie & fierté */}
        <div className="text-center text-xs uppercase tracking-wider">
          <p className="font-semibold">NOTRE PHILOSOPHIE S’APPLIQUE À TOUS NOS CLIENTS.</p>
          <p className="font-bold mt-1">NOTRE FIERTÉ : VOTRE SATISFACTION</p>
        </div>
      </div>
    </div>
  );
}
