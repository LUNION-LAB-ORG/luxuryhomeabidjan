"use client";

import {Briefcase, Building, Home, Menu, Phone, Users,} from "lucide-react";
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
import {company} from "@/config";

const navItems = [
	{name: "Accueil", href: "/", icon: <Home size={18}/>},
	{
		name: "Qui sommes-nous",
		href: "/qui-sommes-nous",
		icon: <Users size={18}/>,
	},
	{name: "Programmes", href: "/programmes", icon: <Building size={18}/>},
	{name: "Services", href: "/services", icon: <Briefcase size={18}/>},
	{name: "Contacts", href: "/contacter", icon: <Phone size={18}/>},
];

export function Navbar() {
	const [isScrolled, setIsScrolled] = React.useState(false);
	const pathname = usePathname();

	React.useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 10);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header
			className={cn(
				"fixed top-0 z-50 w-full transition-all duration-200 h-[var(--nav-height)] flex items-center",
				isScrolled ? "backdrop-blur-md bg-white/80 shadow-sm" : "bg-transparent"
			)}
		>
			<div className="container-8xl flex items-center justify-between px-4 lg:px-6">
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
				<nav className="hidden lg:flex md:items-center md:gap-6">
					{navItems.map((item) => (
						<Link
							key={item.name}
							href={item.href}
							className={cn(
								"text-base font-semibold transition-colors",
								isScrolled ? "text-muted-foreground hover:text-primary" : "text-[#F5F5F5] hover:text-white",
								pathname === item.href && `${isScrolled ? "text-primary" : "text-white"}`,
							)}
						>
							{item.name}
						</Link>
					))}
				</nav>

				{/* Assistance Button */}
				<Button
					asChild
					variant="outline"
					size="lg"
					className=""
				>
					<Link target="_blank" href={`https://wa.me/${company.contacts.whatsapp}`}
					      className="hidden border bg-white border-gray-200 rounded-xl shadow-md py-1 px-4 lg:flex justify-center items-center gap-2 hover:opacity-80 transition">
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
									<SheetClose asChild key={item.name}>
										<Link
											href={item.href}
											className={cn(
												"flex items-center px-4 py-3 rounded-lg font-medium transition-all duration-200 text-muted-foreground hover:bg-black/10 hover:text-black hover:pl-5",
												pathname === item.href && "text-primary"
											)}
										>
											{item.icon && (
												<span className="mr-3 text-gray-500">{item.icon}</span>
											)}
											{item.name}
										</Link>
									</SheetClose>
								))}
							</div>
						</nav>
					</SheetContent>
				</Sheet>
			</div>
		</header>
	);
}
