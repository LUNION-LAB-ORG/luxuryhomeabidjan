'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  category: string;
  location: string;
  surface: string;
  value: string;
  description: string;
  image: string;
  year: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Villa Émeraude",
    category: "Résidence Privée",
    location: "Cocody, Abidjan",
    surface: "850 m²",
    value: "2.5M €",
    description: "Villa d'exception avec vue panoramique sur la lagune, piscine à débordement, home cinéma et spa privé. Architecture contemporaine et finitions haut de gamme.",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80",
    year: "2024"
  },
  {
    id: 2,
    title: "Penthouse Royal",
    category: "Appartement de Prestige",
    location: "Plateau, Abidjan",
    surface: "450 m²",
    value: "1.8M €",
    description: "Penthouse sur deux niveaux au cœur du quartier des affaires. Terrasse de 200m² avec jardin suspendu et vue à 360° sur la ville.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
    year: "2024"
  },
  {
    id: 3,
    title: "Domaine Azur",
    category: "Complexe Résidentiel",
    location: "Riviera Golf, Abidjan",
    surface: "3500 m²",
    value: "8M €",
    description: "Ensemble de 4 villas de luxe avec clubhouse privé, court de tennis, et conciergerie 24/7. Sécurité maximale et services premium.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
    year: "2023"
  },
  {
    id: 4,
    title: "Loft Diamant",
    category: "Loft Contemporain",
    location: "Zone 4, Abidjan",
    surface: "320 m²",
    value: "950K €",
    description: "Loft ultra-moderne avec double hauteur sous plafond, domotique intégrée et espaces modulables. Design minimaliste et épuré.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
    year: "2024"
  },
  {
    id: 5,
    title: "Villa Cristal",
    category: "Résidence de Luxe",
    location: "Bingerville, Abidjan",
    surface: "1200 m²",
    value: "4.2M €",
    description: "Propriété exceptionnelle avec parc paysager de 5000m², piscine olympique, salle de sport équipée et appartements pour le personnel.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80",
    year: "2023"
  },
  {
    id: 6,
    title: "Résidence Saphir",
    category: "Immeuble de Standing",
    location: "Marcory, Abidjan",
    surface: "6000 m²",
    value: "12M €",
    description: "Immeuble de 12 appartements de standing avec lobby luxueux, piscine commune, salle de fitness et parking sécurisé souterrain.",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80",
    year: "2023"
  }
];

const categories = ["Tous", "Résidence Privée", "Appartement de Prestige", "Complexe Résidentiel", "Loft Contemporain", "Résidence de Luxe", "Immeuble de Standing"];

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = selectedCategory === "Tous" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[150px] -z-10" />
      
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-amber-500 text-sm font-light tracking-[0.3em] uppercase mb-4 animate-fadeIn">
            Portfolio d'Excellence
          </p>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light mb-6 bg-gradient-to-r from-white via-amber-100 to-amber-500 bg-clip-text text-transparent animate-fadeIn">
            Nos Réalisations
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed font-light animate-fadeIn">
            Découvrez nos projets emblématiques qui incarnent l'excellence de la gestion immobilière de luxe à Abidjan. 
            Chaque propriété témoigne de notre engagement pour la qualité et le raffinement.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category, index) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full text-sm font-light tracking-wider transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg shadow-amber-500/30'
                  : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white border border-amber-500/20'
              }`}
              style={{
                animation: `fadeInUp 0.5s ease-out ${index * 0.05}s both`
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              {/* Card */}
              <div className="relative bg-white/[0.02] backdrop-blur-xl rounded-3xl overflow-hidden border border-amber-500/20 transition-all duration-500 hover:border-amber-500/60 hover:-translate-y-3 hover:shadow-2xl hover:shadow-amber-500/20">
                {/* Image */}
                <div className="relative h-[350px] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className={`object-cover transition-all duration-700 ${
                      hoveredProject === project.id 
                        ? 'scale-110' 
                        : 'scale-100'
                    }`}
                  />
                  
                  {/* Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent transition-opacity duration-500 ${
                    hoveredProject === project.id ? 'opacity-70' : 'opacity-90'
                  }`} />

                  {/* Year Badge */}
                  <div className="absolute top-4 right-4 bg-amber-500/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-xs font-light tracking-wider">
                    {project.year}
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-md text-white px-4 py-2 rounded-full text-xs font-light tracking-wider border border-white/20">
                    {project.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl md:text-3xl font-light text-white mb-3">
                    {project.title}
                  </h3>
                  
                  {/* Divider */}
                  <div className="w-16 h-[2px] bg-gradient-to-r from-amber-500 to-transparent mb-4" />

                  {/* Info Grid */}
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    <div className="text-center py-2 bg-white/5 rounded-lg border border-amber-500/10">
                      <p className="text-amber-500 text-xs uppercase tracking-wider font-light mb-1">Surface</p>
                      <p className="text-white text-sm font-light">{project.surface}</p>
                    </div>
                    <div className="text-center py-2 bg-white/5 rounded-lg border border-amber-500/10">
                      <p className="text-amber-500 text-xs uppercase tracking-wider font-light mb-1">Valeur</p>
                      <p className="text-white text-sm font-light">{project.value}</p>
                    </div>
                    <div className="text-center py-2 bg-white/5 rounded-lg border border-amber-500/10">
                      <p className="text-amber-500 text-xs uppercase tracking-wider font-light mb-1">Ville</p>
                      <p className="text-white text-xs font-light">Abidjan</p>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-2 mb-4 text-slate-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-sm font-light">{project.location}</span>
                  </div>
                  
                  {/* Description */}
                  <div className={`overflow-hidden transition-all duration-500 ${
                    hoveredProject === project.id 
                      ? 'max-h-32 opacity-100' 
                      : 'max-h-0 opacity-0'
                  }`}>
                    <p className="text-slate-400 text-sm leading-relaxed font-light">
                      {project.description}
                    </p>
                  </div>

                  {/* CTA Button */}
                  <div className={`mt-4 transition-all duration-500 ${
                    hoveredProject === project.id 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-2'
                  }`}>
                    <button className="w-full py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-xl font-light tracking-wider hover:shadow-lg hover:shadow-amber-500/30 transition-all duration-300">
                      Voir les détails
                    </button>
                  </div>
                </div>

                {/* Shine Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full transition-transform duration-1000 ${
                  hoveredProject === project.id ? 'translate-x-full' : ''
                }`} />
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Projets Réalisés", value: "50+" },
            { label: "Clients Satisfaits", value: "200+" },
            { label: "Années d'Expérience", value: "15+" },
            { label: "Valeur Gérée", value: "100M€+" }
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="text-center py-8 bg-white/[0.02] backdrop-blur-xl rounded-2xl border border-amber-500/20 hover:border-amber-500/40 transition-all duration-300"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              <p className="text-4xl md:text-5xl font-light bg-gradient-to-r from-amber-500 to-amber-300 bg-clip-text text-transparent mb-2">
                {stat.value}
              </p>
              <p className="text-slate-400 text-sm uppercase tracking-wider font-light">
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
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }
      `}</style>
    </section>
  );
}