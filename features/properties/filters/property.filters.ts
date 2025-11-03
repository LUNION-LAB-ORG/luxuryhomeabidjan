import {
  parseAsString,
  parseAsInteger,
  parseAsStringEnum,
  parseAsBoolean,
} from 'nuqs';
import { IPropertySearchParams } from '@/features/properties/types/property.type';

export const propertyFiltersClient: Record<keyof IPropertySearchParams, any> = {
  // PAGINATION & TRI
  page: parseAsInteger.withDefault(1),
  limit: parseAsInteger.withDefault(10),
  sort: parseAsStringEnum(['asc', 'desc']).withDefault('desc'),
  orderBy: parseAsString.withDefault('createdAt'),

  // RECHERCHE TEXTE
  title: parseAsString.withDefault(''),
  coupDeCoeur: parseAsBoolean.withDefault(false),

  // FILTRES TYPE & STATUT
  listingType: parseAsStringEnum(['SALE', 'RENT']),
  status: parseAsStringEnum(['DRAFT', 'IN_PROGRESS', 'PUBLISHED', 'ARCHIVED']),

  // FILTRES PRIX
  currency: parseAsStringEnum(['XOF', 'USD', 'EUR']),
  minPrice: parseAsString.withDefault(''),
  maxPrice: parseAsString.withDefault(''),
  pricePeriod: parseAsStringEnum(['NONE', 'MONTH', 'WEEK', 'DAY', 'YEAR']),

  // FILTRES LOCALISATION
  cityId: parseAsString.withDefault(''),
  communeId: parseAsString.withDefault(''),
  areaId: parseAsString.withDefault(''),
  minLatitude: parseAsInteger,
  maxLatitude: parseAsInteger,
  minLongitude: parseAsInteger,
  maxLongitude: parseAsInteger,

  // FILTRES DIMENSIONS
  minArea: parseAsInteger,
  maxArea: parseAsInteger,
  minLandArea: parseAsInteger,
  maxLandArea: parseAsInteger,

  // FILTRES PIÈCES
  minRooms: parseAsInteger,
  maxRooms: parseAsInteger,
  minBedrooms: parseAsInteger,
  maxBedrooms: parseAsInteger,
  minBathrooms: parseAsInteger,
  maxBathrooms: parseAsInteger,
  minGarages: parseAsInteger,
  maxGarages: parseAsInteger,
  minGarageCapacity: parseAsInteger,
  maxGarageCapacity: parseAsInteger,

  // FILTRES CONSTRUCTION
  minYearBuilt: parseAsInteger,
  maxYearBuilt: parseAsInteger,

  // FILTRES CATÉGORIE & AGENT
  categoryId: parseAsString.withDefault(''),
  agentId: parseAsString.withDefault(''),

  // FILTRES AMÉNITÉS
  amenityIds: parseAsString.withDefault(''), // Géré comme string, splitter en array si nécessaire

  // FILTRES DATES
  minPublishedAt: parseAsString.withDefault(''),
  maxPublishedAt: parseAsString.withDefault(''),
  minCreatedAt: parseAsString.withDefault(''),
  maxCreatedAt: parseAsString.withDefault(''),

  // OPTIONS DE PRÉSENTATION
  includeMedias: parseAsBoolean.withDefault(true),
  includePriceHistory: parseAsBoolean.withDefault(false),
  includeAgent: parseAsBoolean.withDefault(true),
};
