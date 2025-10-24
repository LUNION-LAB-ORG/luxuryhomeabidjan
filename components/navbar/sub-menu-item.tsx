import React from 'react';
import {HoverCard, HoverCardContent, HoverCardTrigger} from "@/components/ui/hover-card";
import {IMenuItem} from "@/config";
import Link from "next/link";
import {cn} from "@/lib/utils";
import {usePathname} from "next/navigation";

export function SubNavLink({item, isScrolled, pathname}: { item: IMenuItem; isScrolled: boolean; pathname: string; }) {
	return (
		<div
			className={cn(
				"text-base font-semibold transition-colors cursor-pointer",
				isScrolled ? "text-muted-foreground hover:text-primary" : "text-[#F5F5F5] hover:text-white",
				pathname === item.url && `${isScrolled ? "text-primary" : "text-white"}`,
			)}
		>
			{item.title}
		</div>
	)
}

function SubMenuItems({item}: { item: IMenuItem }) {
	const [isScrolled, setIsScrolled] = React.useState(false);

	const pathname = usePathname();

	React.useEffect(() => {
		const handleScroll = () => {
			if (pathname !== "/") {
				setIsScrolled(true);
				return;
			}
			setIsScrolled(window.scrollY > 10);
		};
		handleScroll();
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<HoverCard openDelay={100}>
			<HoverCardTrigger>
				<SubNavLink item={item} isScrolled={isScrolled} pathname={pathname}/>
			</HoverCardTrigger>
			<HoverCardContent>
				<ul>
					{item.items?.map((subItem) => (
						<li key={subItem.title}>
							<Link
								href={subItem.url}
								className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 capitalize"
							>
								{subItem.title}
							</Link>
						</li>
					))}
				</ul>
			</HoverCardContent>
		</HoverCard>
	);
}

export default SubMenuItems;