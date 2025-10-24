'use client';

import { Iproduct } from '@/data/coups-de-coeur.type';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Ruler, Bed, Bath, MapPin, X } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

export default function Details({ home }: { home: Iproduct }) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [zoomImage, setZoomImage] = useState<string | null>(null); // 🔹 image cliquée

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
    <div className="min-h-screen mt-10 text-gray-900">
      {/* Titre principal */}
      <section className="py-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="px-6 md:px-12">
            <p className="text-lg text-gray-600 mt-3">{home.type}</p>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
              {home.title}
            </h1>
            <div className="mt-2 inline-block bg-black text-white font-semibold px-4 py-1 rounded-full shadow-md text-lg">
              {home.localisation}
            </div>
          </div>

          <div className="text-2xl px-6 md:px-12 font-semibold text-black mt-4 md:mt-0">
            {home.type === 'Vente' ? home.price.replace('/nuitée', '') : home.price}
          </div>
        </div>

        {/* Vidéo */}
        <div className="relative w-full h-[680px] overflow-hidden shadow-2xl">
          <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
            <source src={home.video} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>

        {/* Galerie du bien */}
        <div className="mt-12 relative">
          <div className="px-6 md:px-12 flex justify-between items-center mb-6">
            <h3 className="text-2xl font-semibold text-gray-800 border-l-4 border-black pl-3">
              Galerie du bien
            </h3>

            {/* Bouton pour ouvrir le modal */}
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <button className="bg-black cursor-pointer text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition">
                  Voir toutes les images
                </button>
              </DialogTrigger>

              {/* Premier Dialog : Galerie */}
              <DialogContent className="max-w-5xl max-h-[100vh] w-screen h-screen overflow-y-auto bg-white rounded-2xl p-6">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-semibold mb-4">
                    Galerie complète
                  </DialogTitle>
                  <DialogDescription>
                    Cliquez sur une image pour la voir en plein écran.
                  </DialogDescription>
                </DialogHeader>

                {/* 🔹 Deuxième Dialog : Zoom plein écran */}
                <Dialog open={!!zoomImage} onOpenChange={(val) => !val && setZoomImage(null)}>
                  <DialogContent className="w-screen  h-screen max-w-none p-0 bg-black flex items-center justify-center">
                    {zoomImage && (
                      <div className="relative w-full h-full">
                        <Image
                          src={zoomImage}
                          alt="Image zoomée"
                          fill
                          className="object-contain"
                        />
                        <button
                          className="absolute top-6 right-6 bg-white/80 text-black rounded-full p-2 hover:bg-white transition"
                          onClick={() => setZoomImage(null)}
                        >
                          <X className="w-6 h-6" />
                        </button>
                      </div>
                    )}
                  </DialogContent>
                </Dialog>

                {/* Grille d’images */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                  {home.gallery.map((img, idx) => (
                    <div
                      key={idx}
                      className="relative w-full h-64 rounded-lg overflow-hidden hover:scale-[1.02] transition-transform duration-300 cursor-pointer"
                      onClick={() => setZoomImage(img.url)} // 🔹 Zoom au clic
                    >
                      <Image
                        src={img.url}
                        alt={`Image ${idx + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* Carousel horizontal */}
          <div className="relative">
            <button
              onClick={() => scrollCarousel('left')}
              className="absolute left-0 top-1/2 bg-white/70 hover:bg-white -translate-y-1/2 z-10 p-3 rounded-full shadow-lg"
            >
              <ChevronLeft className="w-6 h-6 text-gray-800" />
            </button>

            <div
              ref={carouselRef}
              className="flex space-x-6 overflow-x-auto  w-full  scrollbar-hide snap-x snap-mandatory scroll-smooth px-2"
            >
              {home.gallery.map((img, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 w-full  h-[660px] relative snap-start overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 ease-out"
                >
                  <Image
                    src={img.url}
                    alt={`Image ${idx + 1}`}
                    width={2000}
                    height={2000}
                    className="object-cover w-full h-full"
                  />
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

      {/* Caractéristiques du bien */}
      <section className="px-6 md:px-12 py-16 bg-white rounded-t-3xl">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 border-l-4 border-black pl-3">
          Caractéristiques du bien
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

      <footer className="bg-black text-white mt-20 py-10 text-center text-sm tracking-wide">
        <p>© 2025 Luxury Home Abidjan — L’élégance à son apogée.</p>
      </footer>
    </div>
  );
}

/* Liste de détails */
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
