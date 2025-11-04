import React from 'react';
import FilterColumn from '@/components/home/filter-form/filter-column';
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group';
import { Blocks } from 'lucide-react';
import useSearchbarForm from '@/hooks/use-searchbar-form';
import { Input } from '@/components/ui/input';

function SearchFilterForm() {
	const {filters, changeFilter} = useSearchbarForm();
	return (
		<>
			<FilterColumn
				icon="blocks"
				labelText="Entrez le nombre de pièces minimum"
				labelFor="search"
				className="max-lg:hidden"
			>
				<Input
					type="number"
					id="search"
					inputMode="numeric"
					value={filters.minRooms}
					onChange={(e) => changeFilter('minRooms', e.target.value)}
					className="placeholder:text-sm w-fit placeholder:text-[#595959] text-sm"
					placeholder="Nombre de pièce"
				/>
			</FilterColumn>
			<InputGroup className="col-span-full flex-1 lg:hidden w-full rounded-full">
				<InputGroupInput
					className="placeholder:text-sm placeholder:text-[#595959]"
					placeholder="Nombre de pièce"
					value={filters.minRooms}
					onChange={(e) => changeFilter('minRooms', e.target.value)}
				/>
				<InputGroupAddon>
					<Blocks/>
				</InputGroupAddon>
			</InputGroup>
		</>
	);
}

export default SearchFilterForm;