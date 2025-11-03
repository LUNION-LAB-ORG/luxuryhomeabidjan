'use client';

import { IBien } from '@/data/coups-de-coeur.type';
import { Bath, Bed, MapPin, Ruler } from 'lucide-react';
import SectionTitle from '../../SectionTitle';
import VideoViewer from '@/components/common/video-viewer';
import CaracteristiquesBien from '@/components/biens/bien-details/caracteristiques-bien';
import PhotoModal from '@/components/biens/bien-details/photo-modal';
import BienGalerieCarousel from '@/components/biens/bien-details/bien-galerie-carousel';
import { usePropertyQuery } from '@/features/properties/queries/property-details.query';
import { notFound } from 'next/navigation';
import { getListingTypeLabel, getPricePeriodLabel } from '@/features/properties/utils/enum-to-label';
import { formatCurrency } from '@/utils/currency';
import PriceViewer from '@/components/biens/price-viewer';

export default function BienDetails({ slug }: { slug: string }) {
  const {
    data: property,
    isLoading,
    isError,
    error,
    refetch,
  } = usePropertyQuery(slug);

  if (!isLoading && !property) {
    notFound();
  }

  const videoSrc = property?.medias?.find(media => media.kind === 'VIDEO')?.url || null;

  if (!property) {
    return <div className="h-screen"></div>;
  }

  return (
    <div className="min-h-screen text-gray-900">
      {/* Titre principal */}
      <section className="py-10">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 container-8xl">
          <div className="">
            <p className="text-lg text-gray-600 mt-3">{getListingTypeLabel(property.listingType)}</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900">
              {property.title}
            </h1>
            <div className="mt-2 inline-block bg-black text-white font-semibold px-4 py-1 rounded-full md:text-lg">
              {property.city.name}
            </div>
          </div>

          <div className="text-xl md:text-2xl font-semibold text-black mt-4 md:mt-0">
            <PriceViewer property={property} />
          </div>
        </div>

        {/* Vidéo */}
        {videoSrc && <VideoViewer animate videoSrc={videoSrc} />}
      </section>

      <section className="mt-12 relative">
        <div className="flex justify-between items-center container-8xl">
          <SectionTitle
            title="Galerie du bien"
          />
          <PhotoModal
            home={property}
          />
        </div>
        <BienGalerieCarousel
          home={property}
        />
      </section>

      {/*<CaracteristiquesBien*/}
      {/*  property={property}*/}
      {/*/>*/}
    </div>
  );
}
