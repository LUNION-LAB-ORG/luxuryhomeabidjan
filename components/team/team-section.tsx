'use client';

import Image from "next/image";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Aïssata Koné",
    role: "Fondatrice & Directrice Générale",
    image: "/team/aissata.jpg",
    description:
      "Visionnaire passionnée, Aïssata met son expertise du luxe au service d’expériences résidentielles uniques à Abidjan.",
  },
  {
    name: "Jean-Marc Kouadio",
    role: "Responsable Patrimoine & Architecture",
    image: "/team/jeanmarc.jpg",
    description:
      "Spécialiste de l’immobilier haut de gamme, il assure la qualité architecturale et la valeur de chaque propriété.",
  },
  {
    name: "Nadia Touré",
    role: "Chargée d’Expérience Client",
    image: "/team/nadia.jpg",
    description:
      "Nadia orchestre chaque détail pour garantir un service irréprochable, synonyme d’excellence et d’élégance.",
  },
  {
    name: "Aristide N’Guessan",
    role: "Designer Intérieur",
    image: "/team/aristide.jpg",
    description:
      "Alliant modernité et raffinement, Aristide crée des espaces qui incarnent l’art de vivre à la ivoirienne.",
  },
];

export default function TeamSection() {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-serif tracking-wide text-[#d4af37]"
        >
          Notre Équipe
        </motion.h2>

        <p className="text-gray-400 mt-4 mb-12 max-w-2xl mx-auto text-lg">
          L’excellence de <span className="text-white font-medium">Luxury Home Abidjan</span> repose sur une équipe d’experts passionnés, unis par l’amour du détail, du design et du service d’exception.
        </p>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl overflow-hidden bg-gradient-to-b from-gray-900 to-black shadow-xl hover:shadow-[#d4af37]/30 transition-all duration-500"
            >
              <div className="relative w-full h-64 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-[#d4af37] mb-1">{member.name}</h3>
                <p className="text-sm uppercase tracking-wider text-gray-400 mb-3">{member.role}</p>
                <p className="text-gray-300 text-sm leading-relaxed">{member.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
