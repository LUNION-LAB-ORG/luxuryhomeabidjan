"use client";

import {Menu,} from "lucide-react";
import Link from "next/link";
import * as React from "react";

import {Button} from "@/components/ui/button";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import {cn} from "@/lib/utils";
import Image from "next/image";
import {usePathname} from "next/navigation";
import WhatsappIcon from "@/components/whatsapp-icon";
import {company, navItems} from "@/config";
import SubMenuItems from "@/components/navbar/sub-menu-item";
import NavLink from "@/components/navbar/nav-link";
import {motion} from "motion/react"

export function Navbar() {
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

	const headerVariants = {
		top: {
			backgroundColor: "rgba(255,255,255,0)",
			boxShadow: "none",
			backdropFilter: "none",
		},
		scrolled: {
			backgroundColor: "rgba(255,255,255,0.85)",
			boxShadow: "0 6px 18px rgba(15,23,42,0.06)",
			backdropFilter: "blur(8px)",
		},
		hidden: {
			y: -80,
			opacity: 0,
		},
	};

	return (
		<motion.header
			variants={headerVariants}
			initial="top"
			animate={isScrolled ? "scrolled" : "top"}
			transition={{ duration: 0.35, ease: "easeOut" }}
			className={cn(
				"fixed top-0 z-50 left-0 right-0 h-[var(--nav-height)] flex items-center",
				isScrolled ? "shadow-sm" : ""
			)}
		>
			<nav className="container-8xl flex items-center justify-between px-4 lg:px-6">
				{/* Logo */}
				<div className="flex items-center">
					<Link href="/" className="flex items-center gap-2">
						<Image
							src={`/assets/logos/logo-${isScrolled ? 'noir' : 'blanc'}.png`} // Remplace par le chemin de ton image
							alt="Avatar"
							width={50} // Ajuste la taille
							height={49}
						/>
					</Link>
				</div>

				{/* Desktop Navigation */}
				<ul className="hidden lg:flex md:items-center md:gap-6">
					{navItems.map((item) => (
						<li key={item.title}>
							{item.items?.length ?
								<SubMenuItems
									item={item}
								/> :
								<NavLink
									item={item}
									isScrolled={isScrolled}
									pathname={pathname}
								/>}
						</li>
					))}
				</ul>

				{/* Assistance Button */}
				<Button
					asChild
					variant="outline"
					size="lg"
					className=""
				>
					<Link
						target="_blank" href={`https://wa.me/${company.contacts.whatsapp}`}
						className="hidden border bg-white border-gray-200 rounded-xl shadow-md py-1 px-4 lg:flex justify-center items-center gap-2 hover:opacity-80 transition"
					>
						<WhatsappIcon className="size-7"/>
						<span className="text-sm font-bold text-black">Assistance</span>
					</Link>
				</Button>

				{/* Mobile Navigation */}
				<Sheet>
					<SheetTrigger asChild>
						<Button
							variant="ghost"
							size="icon"
							className="lg:hidden rounded-full hover:bg-gray-100 transition-colors duration-200"
						>
							<Menu className="size-5"/>
							<span className="sr-only">Toggle menu</span>
						</Button>
					</SheetTrigger>

					<SheetContent
						side="right"
						className="w-72 sm:w-80 border-l border-gray-200"
					>
						<SheetHeader className="space-y-4 pb-4 border-b border-gray-100">
							<SheetTitle className="text-xl font-bold">
								Votre Espace Immobilier
							</SheetTitle>
							<SheetDescription className="pb-2">
								<SheetClose className="w-full" asChild>
									<Link
										href="/assistance"
										className="flex items-center gap-3 p-1 border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 bg-white"
									>
                    <span className="rounded-full p-1">
                      <Image
	                      src="/assets/images/user.png"
	                      alt="Avatar"
	                      width={24}
	                      height={24}
	                      className="size-10"
                      />
                    </span>
										<span className="text-sm font-bold text-black">
                      Assistance M. LHA
                    </span>
									</Link>
								</SheetClose>
							</SheetDescription>
						</SheetHeader>

						<nav className="mt-6 px-2">
							<div className="space-y-2">
								{navItems.map((item) => (
									<SheetClose asChild key={item.title}>
										<Link
											href={item.url}
											className={cn(
												"flex items-center px-4 py-3 rounded-lg font-medium transition-all duration-200 text-muted-foreground hover:bg-black/10 hover:text-black hover:pl-5",
												pathname === item.url && "text-primary"
											)}
										>
											{/*{item.icon && (*/}
											{/*	<span className="mr-3 text-gray-500">{item.icon}</span>*/}
											{/*)}*/}
											{item.title}
										</Link>
									</SheetClose>
								))}
							</div>
						</nav>
					</SheetContent>
				</Sheet>
			</nav>
		</motion.header>
	);
}
