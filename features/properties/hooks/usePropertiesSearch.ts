import useSearchbarForm from '@/hooks/use-searchbar-form';
import { usePropertiesInfinityQuery } from '@/features/properties/queries/properties-infinite.query';

export function usePropertiesSearch() {
  const {
    filters,
    filtersValues,
    changeFilter,
  } = useSearchbarForm();

  const {
    data,
    isLoading: isLoadingProperties,
    isFetching: isFetchingProperties,
    isError: isErrorProperties,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = usePropertiesInfinityQuery(filters);

  const showLoading = isLoadingProperties || isFetchingProperties;

  return {
    filters,
    filtersValues,
    properties: data?.pages.flatMap((page) => page.data) || [],
    pagination: data?.pageParams,
    showLoading,
    isErrorProperties,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    changeFilter,
  };
}