import React from 'react';
import FilterColumn from "@/components/home/filter-form/filter-column";
import {InputGroup, InputGroupAddon, InputGroupInput} from "@/components/ui/input-group";
import {Search} from "lucide-react";
import useSearchbarForm from "@/hooks/use-searchbar-form";

function SearchFilterForm() {
	const {filters, changeFilter} = useSearchbarForm();
	return (
		<>
			<FilterColumn
				icon="search"
				labelText="Entrez un mot-clé"
				labelFor="search"
				className="max-lg:hidden"
			>
				<input
					type="text"
					id="search"
					value={filters.keywords}
					onChange={(e) => changeFilter('keywords', e.target.value)}
					className="border-0 focus:ring-0 outline-0 placeholder:text-sm w-32 sm:w-48 placeholder:text-[#595959] text-sm"
					placeholder="Trouver mon logement"
				/>
			</FilterColumn>
			<InputGroup className="col-span-full flex-1 lg:hidden w-full rounded-full">
				<InputGroupInput
					className="placeholder:text-sm placeholder:text-[#595959]"
					placeholder="Entrez un mot-clé"
					value={filters.keywords}
					onChange={(e) => changeFilter('keywords', e.target.value)}
				/>
				<InputGroupAddon>
					<Search/>
				</InputGroupAddon>
			</InputGroup>
		</>
	);
}

export default SearchFilterForm;