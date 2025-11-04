import React from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import getQueryClient from '@/lib/get-query-client';
import { IProperty, IPropertySearchParams } from '../types/property.type';
import { PaginatedResponse } from '@/types';
import { getListPropertiesAction } from '../actions/property.action';
import { propertyKeyQuery } from './index.query';
import { X } from 'lucide-react';
import { toast } from 'sonner';

const queryClient = getQueryClient();

// 1- Option de requête
export const propertiesInfinityQueryOption = (
  propertyParamsDTO: IPropertySearchParams,
) => {
  return {
    queryKey: propertyKeyQuery('list', propertyParamsDTO),
    queryFn: async ({ pageParam = 1 }) => {
      const result = await getListPropertiesAction({
        ...propertyParamsDTO,
        page: pageParam,
      });

      if (!result.success) {
        throw new Error(
          result.error || 'Erreur lors de la récupération des propriétés',
        );
      }

      return result.data!;
    },

    initialPageParam: 1,
    getNextPageParam: (lastPage: PaginatedResponse<IProperty>) => {
      const hasNextPage = lastPage.pagination.pages > lastPage.pagination.page;
      return hasNextPage ? lastPage.pagination.page + 1 : undefined;
    },
  };
};

// 2- Hook pour récupérer les propriétés
export const usePropertiesInfinityQuery = (
  propertyParamsDTO: IPropertySearchParams,
) => {
  const query = useInfiniteQuery(
    propertiesInfinityQueryOption(propertyParamsDTO),
  );

  React.useEffect(() => {
    if (query.isError && query.error) {
      toast.error("Erreur lors de la récupération des propriétés", {
        icon: <X />,
      });
    }
  }, [query]);

  return query;
};

// 3- Fonction pour précharger les propriétés
export const prefetchPropertiesInfinityQuery = (
  propertyParamsDTO: IPropertySearchParams,
) => {
  return queryClient.prefetchInfiniteQuery(
    propertiesInfinityQueryOption(propertyParamsDTO),
  );
};
