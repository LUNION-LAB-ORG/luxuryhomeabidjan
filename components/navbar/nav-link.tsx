import React from 'react';
import {IMenuItem} from "@/config";
import Link from "next/link";
import {cn} from "@/lib/utils";

const NavLink = ({item, isScrolled, pathname}: { item: IMenuItem; isScrolled: boolean; pathname: string; }) => {
	return (
		<Link
			href={item.url}
			className={cn(
				"text-base font-semibold transition-colors",
				isScrolled ? "text-muted-foreground hover:text-primary" : "text-[#F5F5F5] hover:text-white",
				pathname === item.url && `${isScrolled ? "text-primary" : "text-white"}`,
			)}
		>
			{item.title}
		</Link>
	)
}

export default NavLink;