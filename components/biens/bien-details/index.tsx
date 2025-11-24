"use client";

import BienGalerieCarousel from "@/components/biens/bien-details/bien-galerie-carousel";
import PhotoModal from "@/components/biens/bien-details/photo-modal";
import PriceViewer from "@/components/biens/price-viewer";
import VideoViewer from "@/components/common/video-viewer";
import { usePropertyQuery } from "@/features/properties/queries/property-details.query";
import { getListingTypeLabel } from "@/features/properties/utils/enum-to-label";
import { notFound } from "next/navigation";
import SectionTitle from "../../SectionTitle";
import MyMap from "@/components/common/map-field/my-map";
import Image from "next/image";

export default function BienDetails({ slug }: { slug: string }) {
  const { data: property, isLoading } = usePropertyQuery(slug);

  if (!isLoading && !property) notFound();
  if (!property) return <div className="h-screen"></div>;

  const videoSrc =
    property.medias?.find((m) => m.kind === "VIDEO")?.url || null;
  const coverImage =
    property.medias?.find((m) => m.kind === "IMAGE")?.url || null;

  return (
    <div className="min-h-screen text-gray-900 container-8xl py-10">

      {/* ----- LAYOUT EN 2 COLONNES ----- */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* --------- COLONNE GAUCHE --------- */}
        <div className="lg:col-span-2">

          {/* Titre */}
          <section>
            <p className="text-lg text-gray-600 mt-3">
              {getListingTypeLabel(property.listingType)}
            </p>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
              {property.title}
            </h1>

            <div className="mt-2 inline-block bg-black text-white font-semibold px-4 py-1 rounded-full md:text-lg">
              {property.city.name}
            </div>

            <div className="text-2xl font-semibold text-black mt-4">
              <PriceViewer property={property} />
            </div>
          </section>

          {/* Image ou vidéo */}
          <section className="mt-8 w-full">
            {videoSrc ? (
              <VideoViewer animate videoSrc={videoSrc} />
            ) : (
              coverImage && (
                <img
                  src={coverImage}
                  alt="Image de couverture"
                  className="w-full  "
                />
              )
            )}
          </section>

          {/* Galerie */}
          <section className="mt-12 relative">
            <div className="flex justify-between items-center">
              <SectionTitle title="Galerie du bien" />
              <PhotoModal home={property} />
            </div>

            <BienGalerieCarousel home={property} />
          </section>

          {/* Description */}
          <section className="mt-16">
            <SectionTitle title="Description du bien" />
            <p className="mt-4 text-gray-700 leading-relaxed whitespace-pre-line">
              {property.description || "Aucune description fournie."}
            </p>
          </section>

          {/* Commodités */}
          <section className="mt-16">
            <SectionTitle title="Commodités" />

            <div className="mt-4">
              {property.amenities?.length ? (
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {property.amenities.map((a: any) => (
                    <li
                      key={a.id}
                      className="px-4 py-2 bg-gray-100 rounded-lg shadow-sm text-gray-800"
                    >
                      • {a.label}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-600">Aucune commodité disponible.</p>
              )}
            </div>
          </section>

          {/* Map */}
          {property.latitude && property.longitude && (
            <section className="mt-16">
              <SectionTitle title="Localisation du bien" />
              <div className="mt-6 w-full h-96 bg-gray-50 rounded-xl overflow-hidden">
                <MyMap
                  latitude={Number(property.latitude)}
                  longitude={Number(property.longitude)}
                />
              </div>
            </section>
          )}
        </div>

        {/* --------- COLONNE DROITE (FIXE) --------- */}
        <aside className="hidden lg:block">
          <div className="sticky top-24 bg-white border rounded-xl shadow-md p-6">

            <h2 className="text-xl font-bold mb-4 text-gray-800">
              Contact agent
            </h2>

            <div className="flex flex-col items-center">

              {property.agent?.photoKey && (
                <img
                  src={property.agent.photoKey}
                  alt={property.agent.fullname}
                  className="w-14 h-28 rounded-full object-cover shadow mb-4"
                />
              )}

              <h3 className="text-2xl font-bold text-gray-800 text-center">
                {property.agent?.fullname}
              </h3>

              <p className="text-gray-600 mt-2">
                📞 {property.agent?.phone}
              </p>

              <p className="text-gray-600">
                ✉️ {property.agent?.email}
              </p>

              <button className="mt-6 w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition">
                Contacter l'agent
              </button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
