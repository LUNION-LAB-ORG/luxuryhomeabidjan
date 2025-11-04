import { useQueryStates } from 'nuqs';
import { searchBarFilterClient } from '@/filters/search-bar-filter';
import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { propertyFiltersClient } from '@/features/properties/filters/property.filters';
import { useFiltersValuesQuery } from '@/features/properties/queries/filters-values.query';

export default function useSearchbarForm() {
	const params = useSearchParams()
	const router = useRouter();
	const [filters, setFilters] = useQueryStates(propertyFiltersClient, searchBarFilterClient.option);
	const {
		data: filtersValues,
		isLoading: isLoadingFiltersValues,
	} = useFiltersValuesQuery();
	const [filterOpen, setFilterOpen] = React.useState(false);
	const [openModal, setOpenModal] = React.useState(false);

	const changeFilter = (key: string, value: string | number | string[] | number[] | Date) => {
		void setFilters((prev) => ({
			...prev,
			[key]: value,
		}));
	}

	const handleMoreButtonClick = (value:boolean) => {
		if (window.innerWidth < 1024) {
			setOpenModal(value);
		} else {
			setFilterOpen(value);
		}
	}

	// useEffect(() => {
	// 	changeFilter('minPrice', filtersValues?.price?.min || 0);
	// 	changeFilter('maxPrice', filtersValues?.price?.max || 50000000);
	// }, [filtersValues])

	const handleSearchBarSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		router.push(`/search?${new URLSearchParams(params).toString()}`);
	};

	return {
		filters,
		filtersValues,
		isLoadingFiltersValues,
		changeFilter,
		filterOpen,
		setFilterOpen,
		openModal,
		setOpenModal,
		handleMoreButtonClick,
		handleSearchBarSubmit
	};
}