'use client';

import { useState } from 'react';
import Image from 'next/image';

interface TeamMember {
  id: number;
  name: string;
  position: string;
  description: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Alexandre Kouassi",
    position: "Directeur Général",
    description: "Visionnaire du luxe immobilier avec 15 ans d'expérience dans la gestion de propriétés d'exception à travers l'Afrique de l'Ouest.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80"
  },
  {
    id: 2,
    name: "Amina Traoré",
    position: "Directrice des Opérations",
    description: "Experte en excellence opérationnelle, elle orchestre chaque détail pour garantir un service irréprochable et une satisfaction client absolue.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80"
  },
  {
    id: 3,
    name: "David N'Guessan",
    position: "Chef Conciergerie",
    description: "Maître de l'anticipation et de l'excellence, il transforme chaque demande en expérience mémorable grâce à son réseau d'exception.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&q=80"
  },
  {
    id: 4,
    name: "Sophie Bamba",
    position: "Responsable Entretien Premium",
    description: "Perfectionniste de l'entretien haut de gamme, elle veille à la préservation impeccable de chaque propriété avec une attention aux moindres détails.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&q=80"
  },
  {
    id: 5,
    name: "Marc Diallo",
    position: "Directeur Technique",
    description: "Ingénieur passionné garantissant la performance optimale des installations et la mise en œuvre des technologies de pointe dans nos propriétés.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
  },
  {
    id: 6,
    name: "Élodie Yao",
    position: "Responsable Relations Clients",
    description: "Ambassadrice de l'élégance et de l'écoute, elle cultive des relations privilégiées avec notre clientèle prestigieuse à travers un service sur-mesure.",
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=800&q=80"
  }
];

export default function TeamSections() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-600/5 rounded-full blur-[100px] -z-10" />
      
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20 animate-fadeIn">
          <p className="text-amber-500 text-sm font-light tracking-[0.3em] uppercase mb-4">
            Excellence & Expertise
          </p>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light mb-6 bg-gradient-to-r from-white via-amber-100 to-amber-500 bg-clip-text text-transparent">
            Notre Équipe d'Élite
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed font-light">
            Des professionnels dévoués à l'art de la gestion immobilière de prestige, 
            alliant savoir-faire exceptionnel et service personnalisé pour vos propriétés d'exception.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className="group relative"
              onMouseEnter={() => setHoveredCard(member.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              {/* Card */}
              <div className="relative bg-white/[0.02] backdrop-blur-xl rounded-3xl overflow-hidden border border-amber-500/20 transition-all duration-500 hover:border-amber-500/60 hover:-translate-y-4 hover:shadow-2xl hover:shadow-amber-500/20">
                {/* Image Container */}
                <div className="relative h-[400px] overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className={`object-cover transition-all duration-700 ${
                      hoveredCard === member.id 
                        ? 'scale-110 grayscale-0' 
                        : 'scale-100 grayscale-[30%]'
                    }`}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent transition-opacity duration-500 ${
                    hoveredCard === member.id ? 'opacity-60' : 'opacity-90'
                  }`} />
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl md:text-3xl font-light text-white mb-3">
                    {member.name}
                  </h3>
                  
                  {/* Divider */}
                  <div className="w-16 h-[2px] bg-gradient-to-r from-amber-500 to-transparent mb-4" />
                  
                  <p className="text-amber-500 text-sm tracking-[0.2em] uppercase font-light mb-5">
                    {member.position}
                  </p>
                  
                  {/* Description with smooth reveal */}
                  <div className={`overflow-hidden transition-all duration-500 ${
                    hoveredCard === member.id 
                      ? 'max-h-40 opacity-100' 
                      : 'max-h-0 opacity-0'
                  }`}>
                    <p className="text-slate-400 text-sm leading-relaxed font-light">
                      {member.description}
                    </p>
                  </div>
                </div>

                {/* Shine Effect on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full transition-transform duration-1000 ${
                  hoveredCard === member.id ? 'translate-x-full' : ''
                }`} />
              </div>
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
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }
      `}</style>
    </section>
  );
}