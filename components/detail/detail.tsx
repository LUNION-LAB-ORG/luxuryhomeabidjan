'use client';

import { Iproduct } from '@/data/coups-de-coeur.type';
import Image from 'next/image';
import { useRef } from 'react';
import { ChevronLeft, ChevronRight, Ruler, Bed, Bath, MapPin } from 'lucide-react';

export default function Details({ home }: { home: Iproduct }) {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (direction: 'left' | 'right') => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    const scrollAmount = 350;
    carousel.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  const features = [
    { icon: <Ruler className="w-6 h-6 text-black" />, label: `${home.surface} m²` },
    { icon: <Bed className="w-6 h-6 text-black" />, label: `${home.chambre} Chambres` },
    { icon: <Bath className="w-6 h-6 text-black" />, label: `${home.salleDeBain} Salles de bain` },
    { icon: <MapPin className="w-6 h-6 text-black" />, label: home.localisation },
  ];

  return (
    <div className="min-h-screen text-gray-900">
      {/* Titre principal */}
      <section className=" py-10">
        <div className="flex flex-col md:flex-row justify-between items-start mb-6">
          <div className='px-6 md:px-12'>
            <p className="text-lg text-gray-600 mt-3">{home.type}</p>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
              {home.title}
            </h1>

            {/* Localisation en exergue */}
            <div className="mt-2 inline-block bg-black text-white font-semibold px-4 py-1 rounded-full shadow-md text-lg">
              {home.localisation}
            </div>
          </div>

          {/* Prix selon type */}
          <div className="text-2xl px-6 md:px-12 font-semibold text-black mt-4 md:mt-0">
            {home.type === 'Vente' ? home.price.replace('/nuitée', '') : home.price}
          </div>
        </div>

        {/* Vidéo d’arrière-plan */}
        <div className="relative w-full h-[520px] overflow-hidden shadow-2xl">
          <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
            <source src={home.video} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          
        </div>

        {/* Galerie */}
        <div className="mt-12  relative">
        <div className='px-6 md:px-12'>
              <h3 className="text-2xl  font-semibold mb-6 text-gray-800 border-l-4 border-black pl-3">
            Galerie du bien
          </h3>
        </div>

          <div className="relative">
            <button
              onClick={() => scrollCarousel('left')}
              className="absolute left-0 top-1/2 bg-white/70 hover:bg-white -translate-y-1/2 z-10 p-3 rounded-full shadow-lg"
            >
              <ChevronLeft className="w-6 h-6 text-gray-800" />
            </button>

            <div
              ref={carouselRef}
              className="flex space-x-6 overflow-x-auto  scrollbar-hide snap-x snap-mandatory scroll-smooth px-2"
            >
              {home.gallery.map((img, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 w-full h-[660px] relative snap-start  overflow-hidden shadow-sm  hover:shadow-2xl transition-all duration-500 ease-out"
                >
                  <Image src={img.url} alt={`Image ${idx + 1}`} fill className="object-cover w-full h-full" />
                </div>
              ))}
            </div>

            <button
              onClick={() => scrollCarousel('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/70 hover:bg-white p-3 rounded-full shadow-lg backdrop-blur-md"
            >
              <ChevronRight className="w-6 h-6 text-gray-800" />
            </button>
          </div>
        </div>
      </section>

      {/* À propos */}
      <section className="px-6 md:px-12 py-16 bg-white rounded-t-3xl">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 border-l-4 border-black pl-3">
          À propos de la propriété
        </h2>

        <div className="p-8 rounded-2xl ring ring-black mb-12">
          <h3 className="font-semibold text-lg mb-6 text-gray-800">Aperçu</h3>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-6">
            {features.map((feat, idx) => (
              <div key={idx} className="flex items-center gap-3 text-black text-base">
                {feat.icon}
                <span>{feat.label}</span>
              </div>
            ))}
          </div>

          <p className="text-gray-700 leading-relaxed text-[15px]">
            Découvrez la <strong>{home.title}</strong>, un bien d’exception situé à{' '}
            <strong>{home.localisation}</strong>. Cet espace allie design moderne,
            matériaux nobles et confort absolu. Chaque détail a été pensé pour offrir
            une expérience résidentielle haut de gamme.
          </p>
        </div>

        {/* Commodités */}
        <div className="bg-white p-8 rounded-2xl ring ring-black">
          <h3 className="text-2xl font-semibold mb-8 text-gray-800">
            Commodités et prestations
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <DetailList title="Interior Details" items={home.interiorDetails} />
            <DetailList title="Outdoor Details" items={home.outdoorDetails} />
            <DetailList title="Utilities" items={home.utilities} />
            <div className="sm:col-span-2 lg:col-span-3">
              <DetailList title="Other Features" items={home.otherFeatures} grid />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white mt-20 py-10 text-center text-sm tracking-wide">
        <p>© 2025 Luxury Home Abidjan — L’élégance à son apogée.</p>
      </footer>
    </div>
  );
}

function DetailList({
  title,
  items,
  grid,
}: {
  title: string;
  items: string[];
  grid?: boolean;
}) {
  return (
    <div>
      <h4 className="text-base font-medium text-black mb-3">{title}</h4>
      <ul className={`${grid ? 'grid grid-cols-2 sm:grid-cols-3 gap-3' : 'space-y-2'}`}>
        {items.map((item, i) => (
          <li
            key={i}
            className="flex items-center text-sm text-gray-700 hover:text-gray-900 transition-colors"
          >
            <span className="mr-2 text-black">✔️</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
