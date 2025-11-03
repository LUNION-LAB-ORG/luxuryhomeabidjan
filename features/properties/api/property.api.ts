import { api } from '@/lib/api';
import { SearchParams } from 'ak-api-http';
import { IProperty, IPropertySearchParams } from '@/features/properties/types/property.type';
import { PaginatedResponse } from '@/types';

export interface IPropertyRequestAPI {
  getProperties: (params: IPropertySearchParams) => Promise<PaginatedResponse<IProperty>>;
  getPropertyBySlug: (slug: string) => Promise<IProperty>;
}

export const propertyAPI: IPropertyRequestAPI = {
  getProperties: async (params: IPropertySearchParams): Promise<PaginatedResponse<IProperty>> => {
    return api.request<PaginatedResponse<IProperty>>({
      endpoint: `/properties`,
      method: 'GET',
      searchParams: params as SearchParams,
    });
  },
  getPropertyBySlug: (slug): Promise<IProperty> => {
    return api.request<IProperty>({
      endpoint: `/properties/${slug}`,
      method: 'GET',
    });
  },
};