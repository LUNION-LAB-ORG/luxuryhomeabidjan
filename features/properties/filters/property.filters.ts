import {
  parseAsString,
  parseAsInteger,
  parseAsStringEnum,
  parseAsBoolean, parseAsArrayOf,
} from 'nuqs';
import { IPropertySearchParams } from '@/features/properties/types/property.type';

export const propertyFiltersClient: Record<keyof IPropertySearchParams, any> = {
  // PAGINATION & TRI
  page: parseAsInteger.withDefault(1),
  limit: parseAsInteger.withDefault(8),
  sort: parseAsStringEnum(['asc', 'desc']).withDefault('desc'),
  orderBy: parseAsString.withDefault('createdAt'),

  // RECHERCHE TEXTE
  title: parseAsString.withDefault(''),
  coupDeCoeur: parseAsBoolean.withDefault(false),

  // FILTRES TYPE & STATUT
  listingType: parseAsArrayOf(parseAsStringEnum(['SALE', 'RENT'])).withDefault([]),

  // FILTRES PRIX
  currency: parseAsStringEnum(['XOF', 'USD', 'EUR']),
  minPrice: parseAsInteger.withDefault(0),
  maxPrice: parseAsInteger.withDefault(2000000000),
  pricePeriod: parseAsStringEnum(['NONE', 'MONTH', 'WEEK', 'DAY', 'YEAR']),

  // FILTRES LOCALISATION
  cityId: parseAsArrayOf(parseAsString).withDefault([]),
  communeId: parseAsArrayOf(parseAsString).withDefault([]),
  areaId: parseAsArrayOf(parseAsString).withDefault([]),

  // FILTRES DIMENSIONS
  minArea: parseAsInteger,
  maxArea: parseAsInteger,
  minLandArea: parseAsInteger,
  maxLandArea: parseAsInteger,

  // FILTRES PIÈCES
  minRooms: parseAsString.withDefault(''),
  maxRooms: parseAsString.withDefault(''),
  minBedrooms: parseAsInteger,
  maxBedrooms: parseAsInteger,
  minBathrooms: parseAsInteger,
  maxBathrooms: parseAsInteger,

  // FILTRES CATÉGORIE & AGENT
  categoryId: parseAsArrayOf(parseAsString).withDefault([]),

  // OPTIONS DE PRÉSENTATION
  includeMedias: parseAsBoolean.withDefault(true),
  includeAgent: parseAsBoolean.withDefault(true),
};
