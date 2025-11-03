import { useQueryStates } from 'nuqs';
import { useMemo } from 'react';
import { propertyFiltersClient } from '@/features/properties/filters/property.filters';
import { IPropertySearchParams } from '@/features/properties/types/property.type';
import { usePropertiesListQuery } from '@/features/properties/queries/property-list.query';

export const usePropertiesList = () => {
  const [filters, setFilters] = useQueryStates(propertyFiltersClient, {
    clearOnDefault: true,
  });

  const currentSearchParams = useMemo(() => {
    const params: IPropertySearchParams = {
      page: filters.page,
      limit: filters.limit,
      sort: filters.sort,
      orderBy: filters.orderBy,
    };
    return params;
  }, [filters]);

  const {
    data: propertiesData,
    isLoading: propertiesLoading,
    isError: propertiesError,
    refetch: refetchProperties,
  } = usePropertiesListQuery(currentSearchParams);

  const handleFilterChange = (key: keyof IPropertySearchParams, value: any) => {
    void setFilters((prev) => ({
      ...prev,
      [key]: value,
      page: key !== 'page' ? 1 : prev.page, // Reset to first page on filter change
    }));
  };
  const handleMultipleFiltersChange = (updates: Partial<IPropertySearchParams>) => {
    void setFilters((prev) => ({
      ...prev, ...updates,
      page: Object.keys(updates).some(key => key !== 'page') ? 1 : prev.page,
    }));
  };

  return {
    properties: propertiesData?.data,
    pagination: {
      currentPage: propertiesData?.meta?.page,
      totalPages: propertiesData?.meta?.pages,
      itemsPerPage: propertiesData?.meta?.limit,
      totalItems: propertiesData?.meta?.total,
    },
    propertiesLoading,
    propertiesError,
    refetchProperties,
    filters,
    handleFilterChange,
    handleMultipleFiltersChange,
  };
};