import React, { useCallback, useEffect } from "react";
// Remplacement de next/image par une balise img standard et suppression des imports non résolus (@heroui/react, ContactFixedButton)
// On utilise maintenant une structure de modal basée sur Tailwind/HTML standard pour la compatibilité.

import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

// Fonctions utilitaires simulées (cn pour className conditionnel)

// Types simulés pour l'environnement de prévisualisation
type Media = {
  url: string;
  kind: "IMAGE" | "VIDEO";
};

type IProperty = {
  medias?: Media[];
};

type FullscreenImageModalProps = {
  home: IProperty;
  open: boolean;
  selectedIndex: number | null;
  setSelectedIndex: React.Dispatch<React.SetStateAction<number | null>>;
  setOpen: (open: boolean) => void;
};

// Carrousel rudimentaire/structure de base sans la bibliothèque Embla/Shadcn non disponible
// Dans cet environnement de fichier unique, on ne peut pas utiliser des libs de carrousel externes non plus.
function FullscreenImageModal({
  home,
  open,
  selectedIndex,
  setSelectedIndex,
  setOpen,
}: FullscreenImageModalProps) {
  // Simplification : nous allons utiliser selectedIndex et setSelectedIndex pour simuler le carrousel

  const handleClose = () => {
    setOpen(false);
    setSelectedIndex(null);
  };

  // Vérification de sécurité au cas où 'home' est undefined
  const images = home?.medias?.filter((img) => img.kind === "IMAGE") || [];

  const handlePrev = useCallback(() => {
    if (images.length === 0) return;
    setSelectedIndex((prevIndex) =>
      prevIndex === null || prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  }, [images.length, setSelectedIndex]);

  const handleNext = useCallback(() => {
    if (images.length === 0) return;
    setSelectedIndex((prevIndex) =>
      prevIndex === null || prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  }, [images.length, setSelectedIndex]);

  

  if (!open || images.length === 0 || selectedIndex === null) return null;

  const currentImage = images[selectedIndex];
  const imageIndex = selectedIndex + 1;

  // Rendu du Modal en HTML/Tailwind standard
  return (
    <div
      // Modal Fullscreen
      className="fixed inset-0 z-[10000] bg-white flex flex-col items-center justify-center transition-opacity duration-300"
      role="dialog"
      aria-modal="true"
      aria-label="Galerie photo plein écran"
    >
      {/* 🔥 Bouton Fermer FIXÉ (Position fixed pour une visibilité garantie sur tous les écrans) */}
      <button
        onClick={handleClose}
        className="
                    fixed top-4 right-4 md:top-6 md:right-6
                    z-[10001]
                    bg-white/90 shadow-xl backdrop-blur-sm
                    rounded-full p-2
                    border border-gray-200
                    hover:bg-gray-100 transition-all duration-200
                    w-12 h-12 flex items-center justify-center
                    text-gray-800
                "
        aria-label="Fermer la galerie photo"
      >
        <X className="w-6 h-6 stroke-[2.5]" />
      </button>

      {/* Corps du Carrousel (Image principale) */}
      <div className="w-full h-full flex items-center justify-center relative">
        {/* Image affichée */}
        <div className="relative w-full h-full max-w-7xl max-h-[85vh] p-4 md:p-8">
          <img
            src={currentImage.url}
            alt={`Image du bien ${imageIndex}`}
            className="object-contain w-full h-full"
          />
        </div>

        {/* Contrôles de Navigation */}
        <button
          onClick={handlePrev}
          className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/10 hover:bg-white/30 text-white rounded-full backdrop-blur-sm transition-all hidden sm:flex"
          aria-label="Image précédente"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/10 hover:bg-white/30 text-white rounded-full backdrop-blur-sm transition-all hidden sm:flex"
          aria-label="Image suivante"
        >
          <ChevronRight className="w-8 h-8" />
        </button>

        {/* Compteur d'images */}
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-10 px-4 py-2 bg-black/50 backdrop-blur-md rounded-full text-white text-sm font-medium tracking-widest border border-white/10">
          {imageIndex} / {images.length}
        </div>
      </div>

      {/* Zone des thumbnails en bas */}
      <div className="fixed bottom-0 left-0 right-0 w-full p-4 z-50 bg-black/50 backdrop-blur-sm">
        <div className="w-full max-w-4xl mx-auto flex justify-center space-x-2 overflow-x-auto p-2 scrollbar-hide">
          {images.map((img, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedIndex(idx)}
              className={cn(
                "relative flex-shrink-0 size-14 md:size-16 border-2 rounded-lg overflow-hidden transition-all duration-300 cursor-pointer",
                selectedIndex === idx
                  ? "border-white shadow-2xl scale-105"
                  : "border-gray-600 hover:border-white/50",
              )}
            >
              <img
                src={img.url}
                alt={`Vignette ${idx + 1}`}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Simulation de ContactFixedButton pour éviter l'erreur d'import non résolu */}
      <div className="fixed bottom-4 left-4 z-[9999] p-3 bg-blue-600 text-white rounded-full shadow-lg max-xl:hidden">
        Contact (Simulé)
      </div>
    </div>
  );
}

export default FullscreenImageModal;
