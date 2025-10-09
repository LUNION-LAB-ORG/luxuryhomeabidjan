import React from 'react';
import {DynamicIcon} from "lucide-react/dynamic";
import {Slider} from "@/components/ui/slider";
import {formatCurrency} from "@/utils/currency";
import useSearchbarForm from "@/hooks/use-searchbar-form";

function BudgetFilter() {
	const [budget, setBudget] = React.useState<number>(0);
	const maxBudget = 2000000;
	const minBudget = 1000;
	const budgetStep = 10000;

	const {
		filters,
		changeFilter
	} = useSearchbarForm();

	return (
		<div className="flex min-w-[250px] w-full max-w-lg items-center gap-4">
			<DynamicIcon name="wallet" className="text-[#595959] size-5 mr-2"/>
			<div className="flex flex-col gap-2 w-full">
				<label className={"text-[#595959] text-sm"}>Budget</label>
				<div className="flex items-center gap-4">
					<Slider
						min={minBudget}
						max={maxBudget}
						step={budgetStep}
						defaultValue={[maxBudget]}
						value={[filters.budget]}
						onValueChange={(value) => changeFilter('budget',value[0])}
						className="w-[40%]"
					/>
					<span className="text-sm text-[#999999]">
					 De 0 FCFA à {formatCurrency(filters.budget)}
					</span>
				</div>
			</div>
		</div>
	);
}

export default BudgetFilter;