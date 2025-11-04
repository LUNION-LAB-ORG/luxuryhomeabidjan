"use client";

import React from 'react';
import FilterColumn from '@/components/home/filter-form/filter-column';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';


function AvailabilityFilter() {
	const [date, setDate] = React.useState<Date | undefined>(undefined);
	return (
		<FilterColumn
			icon={"calendar"}
			labelText="Sélectionnez une période"
			labelFor="statut"
		>
			<Popover>
				<PopoverTrigger asChild>
					<button	className="data-[empty=true]:text-muted-foreground w-[280px] justify-start text-left text-sm"
					>
						{date ? format(date, "PPP", {locale: fr}) : <span>Disponibilité</span>}
					</button>
				</PopoverTrigger>
				<PopoverContent className="w-auto p-0">
					<Calendar
						mode="single"
						className="rounded-md border shadow-sm"
						captionLayout="dropdown"
						locale={fr}
						selected={date}
						onSelect={(date) => setDate(date)}
					/>
				</PopoverContent>
			</Popover>
		</FilterColumn>
	);
}

export default AvailabilityFilter;