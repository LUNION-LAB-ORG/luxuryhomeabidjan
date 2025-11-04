import { useQuery } from '@tanstack/react-query';
import getQueryClient from '@/lib/get-query-client';
import { propertyKeyQuery } from './index.query';
import React from 'react';
import { toast } from 'sonner';
import { getFiltersValuesAction } from '@/features/properties/actions/property.action';

const queryClient = getQueryClient();

// Option de requête
export const filtersValuesQueryOption = () => {
  return {
    queryKey: propertyKeyQuery('filters-values'),
    queryFn: async () => {
      const result = await getFiltersValuesAction();
      if (!result.success) {
        throw new Error(result.error!);
      }
      return result.data!;
    },
    staleTime: 10 * 60 * 1000, // 10 minutes
    gcTime: 15 * 60 * 1000, // 15 minutes
  };
};

// Hook pour récupérer les valeurs des filtres
export const useFiltersValuesQuery = () => {
  const query = useQuery(filtersValuesQueryOption());

  React.useEffect(() => {
    if (query.isError || query.error) {
      toast.error(query.error?.message);
    }
  }, [query]);

  return query;
};

// Hook pour précharger les valeurs des filtres
export const prefetchFiltersValuesQuery = () => {
  return queryClient.prefetchQuery(filtersValuesQueryOption());
};

