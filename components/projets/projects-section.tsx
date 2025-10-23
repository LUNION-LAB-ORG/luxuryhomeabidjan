'use client';

import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Villa Azure",
    location: "Cocody Ambassades, Abidjan",
    image: "/projects/villa-azure.jpg",
    description:
      "Une résidence d’exception à l’architecture contemporaine, ouverte sur un jardin tropical et une piscine à débordement.",
  },
  {
    title: "Résidence Élysée",
    location: "Zone 4, Marcory",
    image: "/projects/residence-elysee.jpg",
    description:
      "Appartements haut standing combinant confort moderne et finitions d’inspiration parisienne.",
  },
  {
    title: "Manoir des Palmiers",
    location: "Bingerville",
    image: "/projects/manoir-palmiers.jpg",
    description:
      "Une demeure élégante au cœur de la verdure, conçue pour une vie paisible et luxueuse à l’abri du tumulte urbain.",
  },
  {
    title: "Penthouse Riviera",
    location: "Riviera Golf",
    image: "/projects/penthouse-riviera.jpg",
    description:
      "Un espace de vie panoramique avec vue sur la lagune, alliance parfaite entre design et prestige.",
  },
];

export default function ProjectsSection() {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-serif tracking-wide text-[#d4af37]"
        >
          Nos Projets & Réalisations
        </motion.h2>

        <p className="text-gray-400 mt-4 mb-12 max-w-2xl mx-auto text-lg">
          Découvrez l’univers exclusif de <span className="text-white font-medium">Luxury Home Abidjan</span> — des propriétés où l’élégance, le confort et l’innovation se rencontrent.
        </p>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-[#d4af37]/30 transition-all duration-500"
            >
              <div className="relative w-full h-72 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-500"></div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
                <h3 className="text-2xl font-semibold text-[#d4af37] mb-1">
                  {project.title}
                </h3>
                <p className="text-sm uppercase tracking-wider text-gray-400 mb-2">
                  {project.location}
                </p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
