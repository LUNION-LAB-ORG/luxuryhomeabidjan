import { api } from '@/lib/api';
import { SearchParams } from 'ak-api-http';
import { IProperty, IPropertySearchParams } from '@/features/properties/types/property.type';
import { PaginatedResponse } from '@/types';
import { IFiltersValues } from '@/features/properties/types/property-filters.type';

export interface IPropertyRequestAPI {
  getProperties: (params: IPropertySearchParams) => Promise<PaginatedResponse<IProperty>>;
  getPropertyBySlug: (slug: string) => Promise<IProperty>;
  getFiltersValues: () => Promise<IFiltersValues>;
}

// Nettoyer les paramètres vides avant l'envoi
const cleanParams = (params: IPropertySearchParams): SearchParams => {
  const cleaned: any = {};

  Object.entries(params).forEach(([key, value]) => {
    // Ignorer les valeurs nulles et undefined
    if (value === null || value === undefined) return;

    // Ignorer les tableaux vides
    if (Array.isArray(value) && value.length === 0) return;

    // Ignorer les chaînes vides
    if (typeof value === 'string' && value.trim() === '') return;

    // Inclure les autres valeurs
    cleaned[key] = value;
  });

  return cleaned as SearchParams;
};

export const propertyAPI: IPropertyRequestAPI = {
  getProperties: async (params: IPropertySearchParams): Promise<PaginatedResponse<IProperty>> => {
    const cleanedParams = cleanParams(params);
    return api.request<PaginatedResponse<IProperty>>({
      endpoint: `/properties`,
      method: 'GET',
      searchParams: cleanedParams,
    });
  },
  getPropertyBySlug: (slug): Promise<IProperty> => {
    return api.request<IProperty>({
      endpoint: `/properties/${slug}`,
      method: 'GET',
    });
  },
  getFiltersValues: (): Promise<IFiltersValues> => {
    return api.request<IFiltersValues>({
      endpoint: `/properties/filters`,
      method: 'GET',
    });
  },
};