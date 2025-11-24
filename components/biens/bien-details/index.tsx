"use client";

import BienGalerieCarousel from "@/components/biens/bien-details/bien-galerie-carousel";
import PhotoModal from "@/components/biens/bien-details/photo-modal";
import PriceViewer from "@/components/biens/price-viewer";
import VideoViewer from "@/components/common/video-viewer";
import MyMap from "@/components/common/map-field/my-map";
import SectionTitle from "../../SectionTitle"; // Assurez-vous que ce composant est stylé sobrement
import { usePropertyQuery } from "@/features/properties/queries/property-details.query";
import { getListingTypeLabel } from "@/features/properties/utils/enum-to-label";
import { notFound } from "next/navigation";

// Icônes
import {
  Bed,
  Bath,
  Building2,
  Warehouse,
  Car,
  Ruler,
  Calendar,
  MapPin,
  Share2,
  Heart
} from "lucide-react";
import { Button } from "@heroui/react";

export default function BienDetails({ slug }: { slug: string }) {
  const { data: property, isLoading } = usePropertyQuery(slug);

  if (!isLoading && !property) notFound();
  if (!property) return <div className="h-screen bg-gray-50 animate-pulse"></div>;

  const videoSrc = property.medias?.find((m) => m.kind === "VIDEO")?.url || null;
  const coverImage = property.medias?.find((m) => m.kind === "IMAGE")?.url || null;

  // Petit utilitaire pour afficher les specs proprement
  const SpecCard = ({ icon: Icon, label, value, suffix = "" }: any) => (
    <div className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all duration-300 group">
      <Icon className="w-6 h-6 text-gray-400 group-hover:text-black transition-colors mb-3" />
      <span className="text-xl font-bold text-gray-900">{value} {suffix}</span>
      <span className="text-xs uppercase tracking-wider text-gray-500 mt-1 font-medium">{label}</span>
    </div>
  );

  return (
    <div className="min-h-screen bg-white text-gray-900 pb-20">
      
      {/* --- HEADER SECTION (Titre & Prix) --- */}
      <header className="border-b border-gray-100 bg-white pt-8 pb-8 sticky top-0 z-10 bg-opacity-95 backdrop-blur-sm">
        <div className="container-8xl px-4 md:px-8 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 bg-black text-white text-xs font-bold uppercase tracking-widest rounded-full">
                  {getListingTypeLabel(property.listingType)}
                </span>
                <span className="flex items-center text-gray-500 text-sm font-medium">
                  <MapPin className="w-4 h-4 mr-1" />
                  {property.city.name}
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
                {property.title}
              </h1>
            </div>

            <div className="flex flex-col items-start md:items-end">
              <div className="text-3xl md:text-4xl font-bold text-gray-900">
                <PriceViewer property={property} />
              </div>
              <p className="text-gray-400 text-sm mt-1">Prix hors frais notaire</p>
            </div>

          </div>
        </div>
      </header>

      <div className="container-8xl px-4 md:px-8 mx-auto py-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* --- COLONNE PRINCIPALE (Gauche) --- */}
          <div className="lg:col-span-8 space-y-12">

            {/* 1. MÉDIA HERO (Vidéo ou Image large) */}
            <section className="rounded-3xl overflow-hidden shadow-2xl shadow-gray-200 border border-gray-100 relative aspect-video group">
              {videoSrc ? (
                <VideoViewer animate videoSrc={videoSrc} />
              ) : (
                coverImage && (
                  <img
                    src={coverImage}
                    alt={property.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                )
              )}
              <div className="absolute top-4 right-4 flex gap-2">
                 <button className="bg-white/90 p-2 rounded-full shadow hover:bg-white transition"><Share2 className="w-5 h-5" /></button>
                 <button className="bg-white/90 p-2 rounded-full shadow hover:bg-white transition"><Heart className="w-5 h-5" /></button>
              </div>
            </section>

            {/* 2. GALERIE (Bandeau) */}
            <section>
              <div className="flex justify-between items-end mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Galerie</h2>
                  <p className="text-gray-500 text-sm">Explorez chaque coin de la propriété</p>
                </div>
                <PhotoModal home={property} />
              </div>
              <div className="rounded-xl overflow-hidden">
                 <BienGalerieCarousel home={property} />
              </div>
            </section>

            {/* 3. CARACTÉRISTIQUES (Grid Design) */}
            <section>
             
              <SectionTitle title="Caractéristiques principales" className="text-xl"/>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <SpecCard icon={Bed} label="Chambres" value={property.bedrooms} />
                <SpecCard icon={Bath} label="Salles d'eau" value={property.bathrooms} />
                <SpecCard icon={Ruler} label="Surface" value={property.area} suffix="m²" />
                <SpecCard icon={Ruler} label="Terrain" value={property.landArea} suffix="m²" />
                <SpecCard icon={Building2} label="Pièces" value={property.rooms} />
                <SpecCard icon={Car} label="Garage" value={property.garages} />
                <SpecCard icon={Warehouse} label="Capacité" value={property.garageCapacity} />
                <SpecCard icon={Calendar} label="Année" value={property.yearBuilt} />
              </div>
            </section>

            {/* 4. DESCRIPTION (Typographie soignée) */}
            <section className="prose prose-lg max-w-none text-gray-600">
              <h2 className="text-2xl font-bold text-gray-900 not-prose mb-4">À propos de ce bien</h2>
              <div className="whitespace-pre-line leading-relaxed bg-gray-50 p-8 rounded-2xl border border-gray-100">
                {property.description || "Aucune description détaillée disponible pour ce bien d'exception."}
              </div>
            </section>

            {/* 5. COMMODITÉS (Tags modernes) */}
            <section>
              
                <SectionTitle title="Équipements & Commodités" className="text-xl"/>
              {property.amenities?.length ? (
                <div className="flex flex-wrap gap-3">
                  {property.amenities.map((a: any) => (
                    <span
                      key={a.key}
                      className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 shadow-sm hover:border-black transition-colors cursor-default"
                    >
                      {a.name}
                    </span>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 italic">Non spécifié.</p>
              )}
            </section>

            {/* 6. LOCALISATION */}
            {property.latitude && property.longitude && (
              <section>
                 <h2 className="text-2xl font-bold text-gray-900 mb-6">Localisation</h2>
                 <div className="h-[400px] w-full rounded-3xl overflow-hidden shadow-lg border border-gray-200">
                  <MyMap
                    latitude={Number(property.latitude)}
                    longitude={Number(property.longitude)}
                  />
                </div>
              </section>
            )}

          </div>

          {/* --- COLONNE LATÉRALE (Sticky Sidebar) --- */}
          <aside className="lg:col-span-4 relative">
            <div className="sticky top-32 space-y-6">
              
              {/* Carte Agent "Luxe" */}
              <div className="bg-white border border-gray-100 p-8 rounded-3xl shadow-2xl shadow-gray-200/50 text-center relative overflow-hidden">
                {/* Décoration d'arrière plan subtile */}
                <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-gray-50 to-transparent z-0"></div>
                
                <div className="relative z-10">
                    {property.agent?.photoKey ? (
                    <img
                        src={property.agent.photoKey}
                        alt={property.agent.fullname}
                        className="w-28 h-28 rounded-full object-cover mx-auto mb-5 border-4 border-white shadow-md"
                    />
                    ) : (
                    <div className="w-28 h-28 rounded-full bg-gray-200 mx-auto mb-5 flex items-center justify-center text-3xl border-4 border-white shadow-md">
                        👤
                    </div>
                    )}

                    <h3 className="text-xl font-bold text-gray-900">{property.agent?.fullname}</h3>
                    <p className="text-sm text-gray-500 font-medium mb-6 uppercase tracking-wide">Agent Immobilier</p>

                    <div className="space-y-3 w-full">
                        <Button className="w-full bg-black text-white py-4 rounded-xl font-bold hover:bg-gray-800 transition-transform hover:scale-[1.02] duration-200 shadow-lg shadow-black/20">
                            Contacter l'agent
                        </Button>
                        <button className="w-full bg-white text-black border border-gray-200 py-4 rounded-xl font-bold hover:bg-gray-50 transition duration-200">
                            Planifier une visite
                        </button>
                    </div>

                    <div className="mt-6 pt-6 border-t border-gray-100 text-sm text-gray-500 space-y-1">
                        <p>{property.agent?.phone}</p>
                        <p>{property.agent?.email}</p>
                    </div>
                </div>
              </div>

              {/* Encart Aide / Info supplémentaire */}
              <div className="bg-gray-900 text-white p-6 rounded-2xl shadow-lg">
                <h4 className="font-bold text-lg mb-2">Besoin de financement ?</h4>
                <p className="text-gray-300 text-sm mb-4">Nos partenaires bancaires peuvent vous accompagner pour l'acquisition de ce bien.</p>
                <span className="text-xs font-bold uppercase border-b border-white/30 pb-1 cursor-pointer hover:border-white transition">En savoir plus</span>
              </div>

            </div>
          </aside>

        </div>
      </div>
    </div>
  );
}