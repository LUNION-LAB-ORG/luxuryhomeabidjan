'use client';

import { motion } from "framer-motion";
import Image from "next/image";

export default function WhyChoose() {
  return (
    <section className="relative bg-black py-20 px-6 md:px-16 lg:px-24 overflow-hidden">
      {/* Image d’arrière-plan subtile */}
      <div className="absolute inset-0">
        <Image
          src="/images/luxury-bg.jpg"
          alt="Luxury background"
          fill
          className="object-cover object-center opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/90"></div>
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 max-w-6xl mx-auto grid gap-12 lg:grid-cols-2 items-center">
        {/* Texte */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-[#d4af37]">
            Pourquoi Nous Choisir ?
          </h2>
          <div className="space-y-4 text-white/90 text-justify leading-relaxed">
            <p>
              Parce que la Côte d&apos;Ivoire connaît un engouement et une effervescence immobilière incroyable, une
              demande toujours grandissante : vous proposer les meilleurs biens disponibles sur le marché
              s&apos;inscrit dans notre démarche.
            </p>

            <p>
              Notre éthique est une approche qualitative, esthétique et attentive du bien, afin de vous le proposer au
              prix juste.
            </p>

            <p>
              Chez <span className="text-[#d4af37] font-semibold">Luxury Home Abidjan</span>, le client passe avant
              l&apos;agence. Nous avons développé une véritable approche conseil, basée sur une expertise aussi bien
              sur le plan administratif, juridique, que comptable et financier.
            </p>

            <p>
              Particuliers, professionnels, institutionnels, notre équipe s&apos;engage à vous fournir transparence et
              confidentialité avant, pendant et après votre projet.
            </p>
          </div>
        </motion.div>

        {/* Image droite */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden shadow-2xl group"
        >
          <Image
            src="/images/why-choose-us.jpg"
            alt="Luxury property"
            width={600}
            height={600}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
        </motion.div>
      </div>
    </section>
  );
}
