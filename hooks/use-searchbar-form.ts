import { useQueryStates } from 'nuqs';
import { searchBarFilterClient } from '@/filters/search-bar-filter';
import React from 'react';
import { useRouter } from 'next/navigation';
import { propertyFiltersClient } from '@/features/properties/filters/property.filters';
import { useFiltersValuesQuery } from '@/features/properties/queries/filters-values.query';

export default function useSearchbarForm() {
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

	const handleSearchBarSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		const queryString = new URLSearchParams(Object.entries(filters).map(([key, value]) => [key, String(value)])).toString();
		router.push(`/search?${queryString}`);
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