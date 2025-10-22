"use client";
import { Bath, Bed } from "lucide-react";
import { useState } from "react";
import { IconMeterSquare } from "@tabler/icons-react";

interface Iproduct {
  id: number;
  title: string;
  price: string;
  rating: number;
  image: string;
  surface: number;
  chambre: number;
  salleDeBain: number;
  localisation: string;
  type: string;
}

export default function CoupDeCoeur() {
  const [selectedImage, setSelectedImage] = useState("");

  const products: Iproduct[] = [
    {
      id: 1,
      title: "VILLA LA CASA",
    price: "650 000 FCFA/nuitée",
      rating: 4.7,
      image: "/assets/images/illustrations/page-accueil/villa1.png",
      surface: 600,
      chambre: 3,
      salleDeBain: 4,
      localisation: "Cocody",
      type: "Location",
    },
    {
      id: 2,
      title: "VILLA PRESTIGE",
     price: "650 000 FCFA/nuitée",
      rating: 4.8,
      image: "/assets/images/illustrations/page-accueil/villa2.png",
      surface: 700,
      chambre: 4,
      salleDeBain: 5,
      localisation: "Bingerville",
      type: "Vente",
    },
     {
      id: 3,
      title: "VILLA PRESTIGE",
    price: "650 000 FCFA/nuitée",
      rating: 4.8,
      image: "/assets/images/illustrations/page-accueil/villa2.png",
      surface: 700,
      chambre: 4,
      salleDeBain: 5,
      localisation: "Bingerville",
      type: "Vente",
    },
    {
      id: 4,
      title: "Moana",
      price: "650 000 FCFA/nuitée",
      rating: 4.7,
      image: "/assets/images/illustrations/page-accueil/villa1.png",
      surface: 600,
      chambre: 3,
      salleDeBain: 4,
      localisation: "Cocody",
      type: "Location",
    },
  ];

  return (
    <div className="min-h-screen bg-white p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">
          Découvrez nos coups de cœur
        </h1>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative overflow-hidden rounded-xl shadow-md cursor-pointer hover:shadow-2xl transition-shadow duration-300"
            onClick={() => setSelectedImage(product.image)}
          >
            {/* Image */}
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-[400px] object-cover transition-transform duration-500 hover:scale-105"
            />

            {/* Overlay (dégradé noir pour lisibilité du texte) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-black/10 to-transparent" />

            {/* Contenu positionné proprement */}
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between p-4">
              {/* Haut : titre + prix */}
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-xs bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white border border-white/30">
                    {product.type}
                  </span>
                  <h3 className="mt-2 text-lg font-bold text-white drop-shadow">
                    {product.title}
                  </h3>
                </div>
                <div className="bg-gold-500 text-black text-sm font-semibold px-3 py-2 rounded-md bg-white shadow-md">
                  {product.price}
                </div>
              </div>

              {/* Bas : infos + localisation */}
              <div className="space-y-3">
                <div className="flex justify-center gap-6 text-white text-sm">
                  <div className="flex items-center gap-1">
                    <Bed size={18} /> <span>{product.chambre} chambres</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bath size={18} /> <span>{product.salleDeBain} salles de bains</span>
                  </div>
                  <div className="flex items-center gap-1">
                   surface
                    <span>{product.surface} m²</span>
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-white text-sm font-medium">
                    📍 {product.localisation}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
