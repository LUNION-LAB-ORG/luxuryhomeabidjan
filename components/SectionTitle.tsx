import React from 'react';
import {cn} from "@/lib/utils";

function SectionTitle({title, subtitle, className}: { title?: string, subtitle?: string, className?: string }) {
	return (
		<div className={cn("mb-8",className)}>
			<h1 className="text-5xl font-bold text-gray-900 mb-2">
				{title}
			</h1>
			<h2 className="text-xl font-semibold text-gray-900">
				{subtitle}
			</h2>
		</div>
	);
}

export default SectionTitle;