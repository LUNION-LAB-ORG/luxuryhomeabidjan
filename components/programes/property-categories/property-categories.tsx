"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const items: { image: string; title: string }[] = [
  {
    image: "/assets/images/illustrations/programs/buildings.png",
    title: "Résidences à usage commercial",
  },
  {
    image: "/assets/images/illustrations/programs/buildings.png",
    title: "Complexes résidentiels",
  },
  {
    image: "/assets/images/illustrations/programs/cocody-danga.png",
    title: "Appartements",
  },
  {
    image: "/assets/images/illustrations/programs/rivera-stella.png",
    title: "Villas",
  },
  {
    image: "/assets/images/illustrations/programs/bonsai.png",
    title: "Maisons de vacances",
  },
];

// Variantes pour le conteneur
const containerVariants = {
  initial: {
    height: "56px",
    transition: {
      duration: 0.5,
      ease: [0.33, 1, 0.68, 1],
    },
  },
  animate: {
    height: "200px",
    transition: {
      duration: 0.5,
      ease: [0.33, 1, 0.68, 1],
    },
  },
};

// Variantes pour l'image
const imageVariants = {
  initial: {
    opacity: 0,
    scale: 0.9,
    filter: "blur(8px)",
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
  animate: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    filter: "blur(4px)",
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
};

// Variantes pour le titre
const titleVariants = {
  initial: {
    y: 0,
    color: "#374151", // gray-700
    fontSize: "1.125rem", // text-lg
    fontWeight: 500,
    transition: {
      duration: 0.3,
    },
  },
  animate: {
    y: -8,
    color: "#ffffff", // white
    fontSize: "2rem", // text-xl
    fontWeight: 600,
    transition: {
      duration: 0.5,
      delay: 0.1,
    },
  },
};

export default function PropertyCategories() {
  const [counter, setCounter] = useState<number>(0);
  const [isHovering, setIsHovering] = useState<number | null>(null);

  // Gestion de l'animation automatique
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => (prev === items.length - 1 ? 0 : prev + 1));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="px-4 lg:px-8 max-w-6xl mx-auto py-6 lg:py-10 bg-white">

      {/* Grille responsive avec effet de carte */}
      <div className="grid grid-cols-1 gap-6">
        {items.map((item, index) => (
          <PropertyCard
            key={index}
            image={item.image}
            title={item.title}
            isActive={counter === index || isHovering === index}
            onMouseEnter={() => setIsHovering(index)}
            onMouseLeave={() => setIsHovering(null)}
          />
        ))}
      </div>
    </div>
  );
}

interface PropertyCardProps {
  image: string;
  title: string;
  isActive: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const PropertyCard = ({
  image,
  title,
  isActive,
  onMouseEnter,
  onMouseLeave,
}: PropertyCardProps) => {
  return (
    <motion.div
      className="relative rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-md"
      variants={containerVariants}
      initial="initial"
      animate={isActive ? "animate" : "initial"}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <AnimatePresence>
        {isActive && (
          <motion.div
            className="absolute inset-0 z-10 overflow-hidden"
            variants={imageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={image.includes("buildings")} // Priorité pour les premières images
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20" />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="relative z-20 h-full flex items-center justify-center p-4"
        variants={titleVariants}
        initial="initial"
        animate={isActive ? "animate" : "initial"}
      >
        <h3>{title}</h3>
      </motion.div>
    </motion.div>
  );
};
