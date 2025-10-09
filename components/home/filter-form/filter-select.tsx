import React from 'react';
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent, DropdownMenuLabel,
	DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {IOption} from "@/types/filter-select";

type Props = {
	options: IOption[];
	selected: string[];
	onChange: (selected: string[]) => void;
	label: string;
}

function FilterSelect({options, selected, onChange, label}: Props) {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<span className="text-[#595959] text-sm first-letter:capitalize">
					{
						selected.length === 0
							? label
							: selected.length > 1
								? `${selected.length} sélections`
								: `${options.filter(option => selected.includes(option.value)).map(option => option.label).join(', ')}`
					}
				</span>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuCheckboxItem
					className="font-normal text-sm"
					checked={selected.length === options.length}
					onCheckedChange={(checked) => {
						if (checked) {
							// Sélectionner toutes les options
							onChange(options.map(option => option.value));
						} else {
							// Désélectionner toutes les options
							onChange([]);
						}
					}}
				>
					{selected.length === options.length ? 'Tout désélectionner' : 'Tout sélectionner'}
				</DropdownMenuCheckboxItem>
				{options.map((option) => (
					<DropdownMenuCheckboxItem
						key={option.value}
						checked={selected.includes(option.value)}
						onCheckedChange={() => {
							if (selected.includes(option.value)) {
								onChange(selected.filter((value) => value !== option.value));
							} else {
								onChange([...selected, option.value]);
							}
						}}
					>
						{option.label}
					</DropdownMenuCheckboxItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}

export default FilterSelect;