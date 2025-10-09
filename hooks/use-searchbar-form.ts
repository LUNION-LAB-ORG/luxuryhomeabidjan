import {useQueryStates} from "nuqs";
import {searchBarFilterClient} from "@/filters/search-bar-filter";
import React from "react";

export default function useSearchbarForm() {
	const [filters, setFilters] = useQueryStates(searchBarFilterClient.filter, searchBarFilterClient.option);
	const [filterOpen, setFilterOpen] = React.useState(false);
	const [openModal, setOpenModal] = React.useState(false);

	const defaultFilters = {
		keywords: filters.keywords,
		actions: filters.actions,
		types: filters.types,
		piece: filters.piece,
		zone: filters.zone,
	};

	const changeFilter = (key: string, value: string | number | string[] | number[]) => {
		setFilters((prev) => ({
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

	return {
		filters,
		changeFilter,
		filterOpen,
		setFilterOpen,
		openModal,
		setOpenModal,
		handleMoreButtonClick
	};
}