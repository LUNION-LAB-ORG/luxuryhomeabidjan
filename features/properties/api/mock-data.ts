import {
  currencyEnum,
  IProperty,
  IPropertySearchParams,
  listingTypeEnum,
  pricePeriodEnum,
  propertyStatusEnum,
} from '@/features/properties/types/property.type';
import { IFiltersValues } from '@/features/properties/types/property-filters.type';
import { PaginatedResponse } from '@/types';

// Illustrations déjà présentes dans /public, réutilisées pour éviter tout
// problème de domaine distant avec next/image (voir next.config.ts).
const MOCK_IMAGES = [
  '/assets/images/illustrations/programs/house-1.png',
  '/assets/images/illustrations/programs/house-2.png',
  '/assets/images/illustrations/programs/house-3.png',
  '/assets/images/illustrations/programs/house-4.png',
  '/assets/images/illustrations/programs/rivera-stella.png',
  '/assets/images/illustrations/programs/cocody-danga.png',
  '/assets/images/illustrations/programs/buildings.png',
  '/assets/images/illustrations/programs/bonsai.png',
];

const now = new Date();

// La description est stockée côté backend comme un état sérialisé de l'éditeur
// Lexical (voir `components/biens/bien-details/index.tsx` -> `JSON.parse(property.description)`).
const mockDescription = (text: string) =>
  JSON.stringify({
    root: {
      children: [
        {
          children: [
            {
              detail: 0,
              format: 0,
              mode: 'normal',
              style: '',
              text,
              type: 'text',
              version: 1,
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          type: 'paragraph',
          version: 1,
        },
      ],
      direction: 'ltr',
      format: '',
      indent: 0,
      type: 'root',
      version: 1,
    },
  });

const mockCity = (name: string, slug: string) => ({
  id: `city-${slug}`,
  name,
  slug,
  countryCode: 'CI',
  createdAt: now,
  updatedAt: now,
});

const mockCategory = (label: string, key: string) => ({
  id: `category-${key}`,
  key,
  label,
  parentId: null,
  createdAt: now,
  updatedAt: now,
});

const mockAgent = (fullname: string, email: string) => ({
  id: `agent-${email}`,
  fullname,
  email,
  phone: '+225 07 00 00 00 00',
  photoBucket: null,
  photoKey: null,
});

const mockMedia = (image: string, index: number) => ({
  id: `media-${image}-${index}`,
  kind: 'IMAGE' as const,
  key: image,
  width: 1200,
  height: 800,
  createdAt: now,
  url: image,
});

interface MockPropertySeed {
  title: string;
  slug: string;
  city: string;
  categoryLabel: string;
  categoryKey: string;
  listingType: listingTypeEnum;
  price: string;
  area: string;
  bedrooms: number;
  bathrooms: number;
  coupDeCoeur?: boolean;
}

const SEEDS: MockPropertySeed[] = [
  { title: 'Villa moderne avec piscine', slug: 'villa-moderne-cocody', city: 'Cocody', categoryLabel: 'Villa', categoryKey: 'villa', listingType: listingTypeEnum.SALE, price: '250000000', area: '450', bedrooms: 5, bathrooms: 4, coupDeCoeur: true },
  { title: 'Duplex vue lagune', slug: 'duplex-vue-lagune-riviera', city: 'Riviera', categoryLabel: 'Duplex', categoryKey: 'duplex', listingType: listingTypeEnum.SALE, price: '180000000', area: '320', bedrooms: 4, bathrooms: 3, coupDeCoeur: true },
  { title: 'Appartement standing centre-ville', slug: 'appartement-standing-plateau', city: 'Plateau', categoryLabel: 'Appartement', categoryKey: 'appartement', listingType: listingTypeEnum.RENT, price: '1500000', area: '140', bedrooms: 3, bathrooms: 2, coupDeCoeur: true },
  { title: 'Villa contemporaine avec jardin', slug: 'villa-contemporaine-bingerville', city: 'Bingerville', categoryLabel: 'Villa', categoryKey: 'villa', listingType: listingTypeEnum.SALE, price: '210000000', area: '500', bedrooms: 6, bathrooms: 5, coupDeCoeur: true },
  { title: 'Penthouse avec terrasse panoramique', slug: 'penthouse-terrasse-marcory', city: 'Marcory', categoryLabel: 'Penthouse', categoryKey: 'penthouse', listingType: listingTypeEnum.SALE, price: '320000000', area: '280', bedrooms: 4, bathrooms: 4 },
  { title: 'Appartement meublé haut standing', slug: 'appartement-meuble-deux-plateaux', city: 'Deux Plateaux', categoryLabel: 'Appartement', categoryKey: 'appartement', listingType: listingTypeEnum.RENT, price: '900000', area: '95', bedrooms: 2, bathrooms: 2 },
  { title: 'Villa de prestige avec piscine à débordement', slug: 'villa-prestige-riviera-golf', city: 'Riviera Golf', categoryLabel: 'Villa', categoryKey: 'villa', listingType: listingTypeEnum.SALE, price: '450000000', area: '650', bedrooms: 7, bathrooms: 6 },
  { title: 'Studio moderne proche des affaires', slug: 'studio-moderne-plateau', city: 'Plateau', categoryLabel: 'Studio', categoryKey: 'studio', listingType: listingTypeEnum.RENT, price: '450000', area: '45', bedrooms: 1, bathrooms: 1 },
  { title: 'Duplex familial avec vue jardin', slug: 'duplex-familial-angre', city: 'Angré', categoryLabel: 'Duplex', categoryKey: 'duplex', listingType: listingTypeEnum.SALE, price: '160000000', area: '300', bedrooms: 4, bathrooms: 3 },
  { title: 'Villa d’exception bord de lagune', slug: 'villa-exception-riviera-2', city: 'Riviera', categoryLabel: 'Villa', categoryKey: 'villa', listingType: listingTypeEnum.SALE, price: '580000000', area: '800', bedrooms: 8, bathrooms: 7 },
];

export const MOCK_PROPERTIES: IProperty[] = SEEDS.map((seed, index) => ({
  id: `mock-property-${index + 1}`,
  title: seed.title,
  amenities: [
    { id: `amenity-${index}-1`, name: 'Piscine' },
    { id: `amenity-${index}-2`, name: 'Climatisation' },
    { id: `amenity-${index}-3`, name: 'Sécurité 24/7' },
  ],
  coupDeCoeur: seed.coupDeCoeur ?? false,
  slug: seed.slug,
  description: mockDescription(
    "Bien fictif généré en mode démonstration (USE_MOCK_DATA=true), utilisé pour parcourir et corriger les sections du site sans backend actif.",
  ),
  listingType: seed.listingType,
  currency: currencyEnum.XOF,
  price: seed.price,
  secondaryPrice: null,
  pricePeriod: seed.listingType === listingTypeEnum.RENT ? pricePeriodEnum.MONTH : pricePeriodEnum.NONE,
  area: seed.area,
  landArea: seed.area,
  rooms: seed.bedrooms + 1,
  bedrooms: seed.bedrooms,
  bathrooms: seed.bathrooms,
  garages: 2,
  garageCapacity: 2,
  yearBuilt: 2020 + (index % 5),
  city: mockCity(seed.city, seed.city.toLowerCase().replace(/\s+/g, '-')),
  commune: null,
  areaRef: null,
  addressLine1: `Rue des Jardins, ${seed.city}`,
  addressLine2: null,
  latitude: null,
  longitude: null,
  category: mockCategory(seed.categoryLabel, seed.categoryKey),
  agent: mockAgent('Aya Kouadio', 'agent.demo@luxuryhomeabidjan.com'),
  medias: [
    mockMedia(MOCK_IMAGES[index % MOCK_IMAGES.length], index),
    mockMedia(MOCK_IMAGES[(index + 1) % MOCK_IMAGES.length], index + 1),
  ],
  status: propertyStatusEnum.PUBLISHED,
  publishedAt: now,
  createdAt: now,
  updatedAt: now,
}));

export const MOCK_FILTERS_VALUES: IFiltersValues = {
  cities: Array.from(
    new Map(MOCK_PROPERTIES.map((property) => [property.city.id, property.city])).values(),
  ).map((city) => ({ id: city.id, name: city.name })),
  categories: Array.from(
    new Map(
      MOCK_PROPERTIES.filter((property) => property.category).map((property) => [
        property.category!.id,
        property.category!,
      ]),
    ).values(),
  ).map((category) => ({ id: category.id, label: category.label })),
  price: {
    min: Math.min(...MOCK_PROPERTIES.map((property) => Number(property.price))),
    max: Math.max(...MOCK_PROPERTIES.map((property) => Number(property.price))),
  },
};

export function getMockProperties(
  params: IPropertySearchParams,
): PaginatedResponse<IProperty> {
  let filtered = MOCK_PROPERTIES;

  if (params.coupDeCoeur !== undefined) {
    filtered = filtered.filter((property) => property.coupDeCoeur === params.coupDeCoeur);
  }
  if (params.listingType?.length) {
    filtered = filtered.filter((property) => params.listingType!.includes(property.listingType));
  }
  if (params.cityId?.length) {
    filtered = filtered.filter((property) => params.cityId!.includes(property.city.id));
  }
  if (params.categoryId?.length) {
    filtered = filtered.filter((property) => params.categoryId!.includes(property.category?.id ?? ''));
  }
  if (params.title) {
    const search = params.title.toLowerCase();
    filtered = filtered.filter((property) => property.title.toLowerCase().includes(search));
  }

  const page = params.page ?? 1;
  const limit = params.limit ?? (filtered.length || 1);
  const total = filtered.length;
  const pages = Math.max(1, Math.ceil(total / limit));
  const start = (page - 1) * limit;
  const data = filtered.slice(start, start + limit);

  return {
    data,
    pagination: { total, page, limit, pages },
  };
}

export function getMockPropertyBySlug(slug: string): IProperty | undefined {
  return MOCK_PROPERTIES.find((property) => property.slug === slug);
}
