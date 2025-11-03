import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { IBien } from '@/data/coups-de-coeur.type';
import { IProperty } from '@/features/properties/types/property.type';

function CoupDeCoeurCard({ propriete, idx, ...props }: {
  propriete: IProperty,
  idx: number
} & React.HTMLAttributes<HTMLAnchorElement>) {
  return (
    <Link
      {...props}
      href={`/biens/${propriete.slug}`}
      key={propriete.id}
      className={cn(
        'relative ring-1 ring-slate-200 overflow-hidden group cursor-pointer transition-all duration-500 w-full',
        idx == 3 && 'max-md:order-4',
      )}
    >
      {/* Image container — fond différent selon id */}
      <div
        className={cn(
          `w-full lg:h-[600px] md:h-[480px] h-[500px] flex items-center justify-center`,
          idx === 1 || idx === 4 ? 'bg-white' : 'bg-black',
        )}
      >
        <Image
          src={propriete.medias?.[0].url || '/placeholder.png'}
          alt={propriete.title}
          width={500}
          height={500}
          className="max-h-[400px] w-auto object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    </Link>
  );
}

export default CoupDeCoeurCard;