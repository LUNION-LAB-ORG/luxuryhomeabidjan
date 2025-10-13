import React, {PropsWithChildren} from 'react';
import {DynamicIcon, IconName} from 'lucide-react/dynamic';
import FilterColumnLabel from "@/components/home/filter-form/filter-column-label";
import {cn} from "@/lib/utils";

function FilterColumn(props: PropsWithChildren<{
	icon: IconName;
	labelText: string;
	labelFor: string;
	className?: string;
}>) {
	return (
		<div className={cn("flex min-w-fit", props.className)}>
			<DynamicIcon name={props.icon} className="text-[#595959] size-5 mr-2"/>
			<div className="flex flex-col gap-2">
				{props.children}
				<FilterColumnLabel text={props.labelText} forHtml={props.labelFor}/>
			</div>
		</div>
	);
}

export default FilterColumn;