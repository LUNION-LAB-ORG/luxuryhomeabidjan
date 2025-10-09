import React from 'react';

type Props = {
	text: string;
	forHtml: string;
};

function FilterColumnLabel({text, forHtml}: Props) {
	return (
		<label htmlFor={forHtml} className="text-sm text-[#999999]">
			{text}
		</label>
	);
}

export default FilterColumnLabel;