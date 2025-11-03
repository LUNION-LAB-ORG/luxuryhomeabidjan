import getQueryClient from "@/lib/get-query-client";
import {useQuery} from "@tanstack/react-query";
import {getPropertyBySlugAction} from "../actions/property.action";
import {propertyKeyQuery} from "./index.query";
import React from "react";

const queryClient = getQueryClient();

// Option de requête
export const propertyQueryOption = (slug: string) => {
  return {
    queryKey: propertyKeyQuery(slug),
    queryFn: async () => {
      const result = await getPropertyBySlugAction(slug);
      console.log('property query fn', result);
      if (!result.success) {
        throw new Error(result.error!);
      }
      return result.data!;
    },
    enabled: !!slug,
  };
}

// Hook pour récupérer un événement
export const usePropertyQuery = (slug: string) => {
  const query = useQuery(propertyQueryOption(slug));
  React.useEffect(() => {
    if (query.error || query.isError) {
      console.error("Erreur lors de la récupération de l'événement:", query.error);
    }
  }, [query]);
  return query;
};

// Hook pour précharger un événement
export const prefetchPropertyQuery = (slug: string) => {
  return queryClient.prefetchQuery(propertyQueryOption(slug));
}