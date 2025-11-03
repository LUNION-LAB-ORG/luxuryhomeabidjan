import { useQueryClient } from '@tanstack/react-query';

// 1- Clé de cache
export const propertyKeyQuery = (...params: any[]) => {
  if (params.length === 0) {
    return ['property'];
  }
  return ['property', ...params];
};

// 2. Créez un hook personnalisé pour l'invalidation
export const useInvalidatePropertyQuery = () => {
  const queryClient = useQueryClient();

  return async (...params: any[]) => {
    await queryClient.invalidateQueries({
      queryKey: propertyKeyQuery(...params),
      exact: false
    });

    await queryClient.refetchQueries({
      queryKey:propertyKeyQuery(),
      type: 'active'
    });
  };
};