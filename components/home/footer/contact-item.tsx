import React from 'react';
import {DynamicIcon, IconName} from "lucide-react/dynamic";
import Link from "next/link";

function ContactItem({info, icon, url}: { info: string; icon: IconName; url: string }) {
	return (
		<Link
			href={url}
			className="flex items-center border border-white text-white rounded-full py-2.5 px-5"
		>
			<DynamicIcon
				name={icon}
				className="mr-4"
			/>
			<div className="font-bold text-sm">
				{info}
			</div>
		</Link>
	);
}

export default ContactItem;