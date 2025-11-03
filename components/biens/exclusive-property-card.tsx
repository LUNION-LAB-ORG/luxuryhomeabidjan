import { Bath, Bed } from 'lucide-react';
import { IProperty } from '@/features/properties/types/property.type';
import Image from 'next/image';
import { getListingTypeLabel, getPricePeriodLabel } from '@/features/properties/utils/enum-to-label';
import { formatCurrency } from '@/utils/currency';
import Link from 'next/link';

export default function ExclusivePropertyCard({ property }: { property: IProperty }) {
  return (
    <Link
      href={`/biens/${property.slug}`}
      className="group"
    >
      <div
        key={property.id}
        className="relative overflow-hidden rounded-xl cursor-pointer"
      >
        {/* Image */}
        {property.medias && <Image
          src={property.medias[0]?.url || '/placeholder-image.jpg'}
          alt={property.title}
          width={360}
          height={400}
          className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
        />}

        {/* Overlay (dégradé noir pour lisibilité du texte) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-black/10 to-transparent" />

        {/* Contenu positionné proprement */}
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between p-4">
          {/* Haut : titre + prix */}
          <div className="flex justify-between items-start">
            <div>
						<span
              className="text-xs bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white border border-white/30"
            >
              {getListingTypeLabel(property.listingType)}
            </span>
              <h3 className="mt-2 text-lg font-bold text-white drop-shadow">
                {property.title}
              </h3>
              <address className="text-white text-sm font-medium">
                {property.city.name}
              </address>
            </div>
            <div className="bg-gold-500 text-black text-xs font-semibold px-3 py-2 rounded-md bg-white shadow-md">
              {`${formatCurrency(property.price,'fr-FR', property.currency)}/${property.pricePeriod ? getPricePeriodLabel(property.pricePeriod) : ''}`}
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex justify-center gap-6 text-white text-sm">
              <div className="flex items-center gap-1">
                <Bed size={18} /> <span>{property.bedrooms}</span>
              </div>
              <div className="flex items-center gap-1">
                <Bath size={18} /> <span>{property.bathrooms}</span>
              </div>
              <div className="flex items-center gap-1">
                {property.area} m²
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}