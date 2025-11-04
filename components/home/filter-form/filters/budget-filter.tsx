import React from 'react';
import {DynamicIcon} from "lucide-react/dynamic";
import {Slider} from "@/components/ui/slider";
import {formatCurrency} from "@/utils/currency";
import useSearchbarForm from "@/hooks/use-searchbar-form";

function BudgetFilter() {
	const budgetStep = 10000;

	const {
		filters,
		changeFilter,
		filtersValues
	} = useSearchbarForm();

	return (
		<div className="flex min-w-[250px] w-full max-w-lg items-center gap-4">
			<DynamicIcon name="wallet" className="text-[#595959] size-5 mr-2"/>
			<div className="flex flex-col gap-2 w-full">
				<label className={"text-[#595959] text-sm"}>Budget</label>
				<div className="flex items-center gap-4">
					<Slider
						min={filtersValues?.price.min}
						max={filtersValues?.price.max}
						step={budgetStep}
						value={[filters.minPrice, filters.maxPrice]}
						onValueChange={(value) => {
							changeFilter('minPrice',value[0])
							changeFilter('maxPrice',value[1])
						}}
						className="w-[40%]"
					/>
					<span className="text-sm text-[#999999]">
					 {formatCurrency(filters.minPrice)} - {formatCurrency(filters.maxPrice)}
					</span>
				</div>
			</div>
		</div>
	);
}

export default BudgetFilter;