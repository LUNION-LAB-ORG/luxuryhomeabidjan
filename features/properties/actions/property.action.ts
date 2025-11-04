import { ActionResponse, PaginatedResponse } from '@/types';
import { IProperty, IPropertySearchParams } from '@/features/properties/types/property.type';
import { propertyAPI } from '@/features/properties/api/property.api';
import { handleServerActionError } from '@/utils/handleServerActionError';
import { IFiltersValues } from '@/features/properties/types/property-filters.type';

export async function getListPropertiesAction(params: IPropertySearchParams): Promise<ActionResponse<PaginatedResponse<IProperty>>> {
  try {
    const properties = await propertyAPI.getProperties(params);
    return {
      success: true,
      data: properties,
      message: 'Propriétés récupérées avec succès.',
    };
  } catch (error) {
    return handleServerActionError(error, 'Erreur lors de la récupération des proprietes.');
  }
}

export async function getPropertyBySlugAction(slug: string): Promise<ActionResponse<IProperty>> {
  try {
    const property = await propertyAPI.getPropertyBySlug(slug);
    return {
      success: true,
      data: property,
      message: 'Propriété récupérée avec succès.',
    };
  } catch (error) {
    return handleServerActionError(error, 'Erreur lors de la récupération de la propriété.');
  }
}

export async function getFiltersValuesAction(): Promise<ActionResponse<IFiltersValues>> {
  try {
    const filtersValues = await propertyAPI.getFiltersValues();
    return {
      success: true,
      data: filtersValues,
      message: 'Valeurs des filtres récupérées avec succès.',
    };
  } catch (error) {
    return handleServerActionError(error, 'Erreur lors de la récupération des valeurs des filtres.');
  }
}