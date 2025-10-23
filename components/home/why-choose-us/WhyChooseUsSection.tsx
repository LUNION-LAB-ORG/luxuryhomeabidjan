'use client';

import { useState } from 'react';

interface Feature {
  id: number;
  icon: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    id: 1,
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    title: "Expertise Complète",
    description:
      "Accompagnement administratif, juridique, comptable et financier pour sécuriser chaque transaction."
  },
  {
    id: 2,
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    title: "Prix Justes",
    description:
      "Une approche qualitative et esthétique pour vous proposer les meilleurs biens au prix le plus juste du marché."
  },
  {
    id: 3,
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
    title: "Approche Client",
    description:
      "Le client avant l'agence : une véritable démarche conseil personnalisée pour particuliers, professionnels et institutionnels."
  },
  {
    id: 4,
    icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
    title: "Transparence & Confidentialité",
    description:
      "Un engagement total pour la transparence et la confidentialité avant, pendant et après votre projet."
  }
];

export default function WhyChooseUsSection() {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-black via-neutral-950 to-black py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Lines */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <p className="text-white/60 text-sm font-light tracking-[0.3em] uppercase animate-fadeIn">
                L'Excellence à Votre Service
              </p>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight text-white animate-fadeIn">
                Pourquoi Nous Choisir
              </h2>
              <div className="w-24 h-[1px] bg-white/30 animate-fadeIn" />
            </div>

            {/* Main Text Content */}
            <div className="space-y-6 text-white/90 text-justify leading-relaxed">
              <p className="text-lg font-light animate-slideIn" style={{ animationDelay: '0.2s' }}>
                Parce que la Côte d&apos;Ivoire connaît un engouement et une effervescence immobilière incroyable, une
                demande toujours grandissante : vous proposer les meilleurs biens disponibles sur le marché
                s&apos;inscrit dans notre démarche.
              </p>
              <p className="text-lg font-light animate-slideIn" style={{ animationDelay: '0.3s' }}>
                Notre éthique est une approche qualitative, esthétique et attentive du bien, afin de vous le proposer au
                prix juste.
              </p>
              <p className="text-lg font-light animate-slideIn" style={{ animationDelay: '0.4s' }}>
                Chez <span className="text-white font-semibold">LHA</span>, le client passe avant l&apos;agence. Nous avons développé une véritable approche conseil, basée
                sur une expertise aussi bien sur le plan administratif, juridique, que comptable et financier.
              </p>
              <p className="text-lg font-light animate-slideIn" style={{ animationDelay: '0.5s' }}>
                Particuliers, professionnels, institutionnels, notre équipe s&apos;engage à vous fournir transparence et
                confidentialité avant, pendant et après votre projet.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-4 animate-fadeIn" style={{ animationDelay: '0.6s' }}>
              <button className="group relative px-8 py-4 bg-white text-black rounded-xl font-light tracking-wider overflow-hidden transition-all duration-300 hover:bg-neutral-200 hover:scale-105">
                <span className="relative z-10">Découvrir Nos Services</span>
              </button>
            </div>
          </div>

          {/* Right Side - Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.id}
                className="group relative"
                onMouseEnter={() => setHoveredFeature(feature.id)}
                onMouseLeave={() => setHoveredFeature(null)}
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.15}s both`
                }}
              >
                <div
                  className={`relative p-8 bg-white/[0.02] backdrop-blur-xl rounded-2xl border transition-all duration-500 ${
                    hoveredFeature === feature.id
                      ? 'border-white/60 -translate-y-2 shadow-2xl shadow-white/10'
                      : 'border-white/20'
                  }`}
                >
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 mb-6 rounded-xl flex items-center justify-center transition-all duration-500 ${
                      hoveredFeature === feature.id
                        ? 'bg-white text-black'
                        : 'bg-white/10 text-white'
                    }`}
                  >
                    <svg
                      className="w-7 h-7"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={feature.icon}
                      />
                    </svg>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-light text-white mb-3 transition-colors duration-300">
                    {feature.title}
                  </h3>

                  <div className="w-12 h-[2px] bg-white/20 mb-4 transition-all duration-500" />

                  <p className="text-slate-400 text-sm leading-relaxed font-light">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "100%", label: "Satisfaction Client" },
            { value: "15+", label: "Ans d'Expérience" },
            { value: "200+", label: "Clients Accompagnés" },
            { value: "24/7", label: "Disponibilité" }
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="text-center py-6 bg-white/[0.02] backdrop-blur-xl rounded-xl border border-white/10 hover:border-white/30 transition-all duration-300 hover:-translate-y-1"
              style={{
                animation: `fadeInUp 0.6s ease-out ${0.8 + index * 0.1}s both`
              }}
            >
              <p className="text-4xl font-light text-white mb-2">
                {stat.value}
              </p>
              <p className="text-gray-400 text-sm uppercase tracking-wider font-light">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out both;
        }
        .animate-slideIn {
          animation: slideIn 0.8s ease-out both;
        }
      `}</style>
    </section>
  );
}
