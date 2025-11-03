import { useQuery } from "@tanstack/react-query";
import getQueryClient from "@/lib/get-query-client";
import { propertyKeyQuery } from "./index.query";
import React from "react";
import { toast } from 'sonner';
import { IPropertySearchParams } from '@/features/properties/types/property.type';
import { getListPropertiesAction } from '@/features/properties/actions/property.action';

const queryClient = getQueryClient();


// Option de requête
export const propertyListQueryOption = (propertySearchParams: IPropertySearchParams) => {
  return {
    queryKey: propertyKeyQuery('list', propertySearchParams),
    queryFn: async () => {
      const result = await getListPropertiesAction(propertySearchParams);
      if (!result.success) {
        throw new Error(result.error!);
      }
      return result.data!;
    },
    keepPreviousData: true,
    staleTime: 5 * 60 * 1000,
    enable: true,
  };
}

// Hook pour récupérer les proprietes
export const usePropertiesListQuery = (propertySearchParams: IPropertySearchParams) => {
  const query = useQuery(propertyListQueryOption(propertySearchParams));

  React.useEffect(() => {
    if (query.isError || query.error) {
      toast.error(query.error?.message);
    }
  }, [query]);

  return query;
};

// Hook pour précharger les proprietes
export const prefetchPropertiesListQuery = (propertySearchParams: IPropertySearchParams) => {
  return queryClient.prefetchQuery(propertyListQueryOption(propertySearchParams));
}
