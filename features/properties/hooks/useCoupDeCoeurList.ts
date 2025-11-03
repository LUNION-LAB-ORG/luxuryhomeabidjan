import { usePropertiesListQuery } from '@/features/properties/queries/property-list.query';

export const useCoupDeCoeurList = () => {
  const {
    data: coupDeCoeurData,
    isLoading: coupDeCoeurLoading,
    isError: coupDeCoeurError,
    refetch: refetchCoupDeCoeur,
  } = usePropertiesListQuery({ coupDeCoeur: true, limit: 4 });

  return {
    coupDeCoeur:coupDeCoeurData?.data,
    coupDeCoeurLoading,
    coupDeCoeurError,
    refetchCoupDeCoeur,
  };
};