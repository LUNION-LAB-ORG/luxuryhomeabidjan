export interface IPropertyMedia {
  id: string;
  kind: 'IMAGE' | 'VIDEO';
  key: string;
  width?: number;
  height?: number;
  createdAt: Date;
  url: string;
}

export interface ICity {
  id: string;
  name: string;
  slug: string;
  countryCode: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ICommune {
  id: string;
  cityId: string;
  name: string;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IArea {
  id: string;
  cityId: string;
  communeId?: string | null;
  name: string;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IPropertyCategory {
  id: string;
  key: string;
  label: string;
  parentId?: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface IAgent {
  id: string;
  fullname: string;
  email: string;
  phone?: string | null;
  photoBucket?: string | null;
  photoKey?: string | null;
}

export enum pricePeriodEnum {
  NONE = 'NONE',
  MONTH = 'MONTH',
  WEEK = 'WEEK',
  DAY = 'DAY',
  YEAR = 'YEAR',
}

export enum currencyEnum {
  XOF = 'XOF',
  USD = 'USD',
  EUR = 'EUR',
}

export enum listingTypeEnum {
  SALE = 'SALE',
  RENT = 'RENT',
}

export enum propertyStatusEnum {
  DRAFT = 'DRAFT',
  IN_PROGRESS = 'IN_PROGRESS',
  PUBLISHED = 'PUBLISHED',
  ARCHIVED = 'ARCHIVED',
}

export interface IProperty {
  id: string;
  title: string;
  slug: string;
  description?: string | null;
  listingType: listingTypeEnum;
  currency: currencyEnum;
  price: string;
  secondaryPrice?: string | null;
  pricePeriod: pricePeriodEnum;
  area?: string | null;
  landArea?: string | null;
  rooms?: number | null;
  bedrooms?: number | null;
  bathrooms?: number | null;
  garages?: number | null;
  garageCapacity?: number | null;
  yearBuilt?: number | null;
  city: ICity;
  commune?: ICommune | null;
  areaRef?: IArea | null;
  addressLine1?: string | null;
  addressLine2?: string | null;
  latitude?: string | null;
  longitude?: string | null;
  category?: IPropertyCategory | null;
  agent?: IAgent | null;
  medias?: IPropertyMedia[];
  status: propertyStatusEnum;
  publishedAt?: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface IPropertySearchParams {
  // PAGINATION & TRI (hérité de FilterQueryDto)
  page?: number;
  limit?: number;
  sort?: 'asc' | 'desc';
  orderBy?: string;

  // RECHERCHE TEXTE
  title?: string;
  coupDeCoeur?: boolean;

  // FILTRES TYPE & STATUT
  listingType?: 'SALE' | 'RENT';
  status?: 'DRAFT' | 'IN_PROGRESS' | 'PUBLISHED' | 'ARCHIVED';

  // FILTRES PRIX
  currency?: 'XOF' | 'USD' | 'EUR';
  minPrice?: string;
  maxPrice?: string;
  pricePeriod?: 'NONE' | 'MONTH' | 'WEEK' | 'DAY' | 'YEAR';

  // FILTRES LOCALISATION
  cityId?: string;
  communeId?: string;
  areaId?: string;
  minLatitude?: number;
  maxLatitude?: number;
  minLongitude?: number;
  maxLongitude?: number;

  // FILTRES DIMENSIONS
  minArea?: number;
  maxArea?: number;
  minLandArea?: number;
  maxLandArea?: number;

  // FILTRES PIÈCES
  minRooms?: number;
  maxRooms?: number;
  minBedrooms?: number;
  maxBedrooms?: number;
  minBathrooms?: number;
  maxBathrooms?: number;
  minGarages?: number;
  maxGarages?: number;
  minGarageCapacity?: number;
  maxGarageCapacity?: number;

  // FILTRES CONSTRUCTION
  minYearBuilt?: number;
  maxYearBuilt?: number;

  // FILTRES CATÉGORIE & AGENT
  categoryId?: string;
  agentId?: string;

  // FILTRES AMÉNITÉS
  amenityIds?: string[];

  // FILTRES DATES
  minPublishedAt?: Date;
  maxPublishedAt?: Date;
  minCreatedAt?: Date;
  maxCreatedAt?: Date;

  // OPTIONS DE PRÉSENTATION
  includeMedias?: boolean;
  includePriceHistory?: boolean;
  includeAgent?: boolean;
}
