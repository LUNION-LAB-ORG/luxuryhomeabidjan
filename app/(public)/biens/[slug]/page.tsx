import BienDetails from '@/components/biens/bien-details';
import type { Metadata, ResolvingMetadata } from 'next';
import { getPropertyBySlugAction } from '@/features/properties/actions/property.action';
import { prefetchPropertyQuery, usePropertyQuery } from '@/features/properties/queries/property-details.query';

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {
  const { slug } = await params;
  const { data: property } = await getPropertyBySlugAction(slug);
  if (!property) {
    return {
      title: 'Bien non trouvé',
      description: 'Le bien immobilier que vous recherchez est introuvable.',
    };
  }
  return {
    title: property.title,
    description: property.description,
    keywords: ['immobilier', 'bien immobilier', property.title, property.city.name, property.listingType, 'le luxe a abidjan'],
    openGraph: {
      title: property.title,
      description: (property.description != null) ? property.description : undefined,
      images: property.medias && property.medias.length > 0 ? {
        url: property.medias[0].url,
        width: 800,
        height: 600,
        alt: property.title,
      } : undefined,
      locale: 'fr_FR',
    },
  };
}

export default async function CoupCoeurDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  await prefetchPropertyQuery(slug)
  return (
    <>
      <BienDetails
        slug={slug}
      />
    </>
  );
}
