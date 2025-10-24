import {IconName} from "lucide-react/dynamic";
import {Briefcase, Building, Home, Phone, Users} from "lucide-react";
import * as React from "react";
import {slugify} from "@/utils/slug";

export const company: ICompany = {
	contacts: {
		whatsapp: "+2250749871713",
		phone: "(+225) 07 49 87 17 13",
		email: "info@luxuryhomeabidjan.com",
		fixe: "(+225) 27 22 23 83 80",
		address: "Cocody Abidjan, Côte d'Ivoire"
	},
	socials: {
		facebook: "https://www.facebook.com/share/1Jkn1tZrZA",
		instagram: "https://www.instagram.com/luxury.home.abidjan",
		linkedin: "https://www.linkedin.com/company/luxuryhomeabidjan/",
		youtube: "https://www.youtube.com/@Luxuryhome_abidjan",
	},
	services: [
		{
			title: "expertise & conseils",
			imageSrc: "/assets/images/services/expertise.png",
			icon: "lightbulb",
		},
		{
			title: "gestion & syndic",
			imageSrc: "/assets/images/services/gestion.png",
			icon: "building",
		},
		{
			title: "transactions immobilières",
			imageSrc: "/assets/images/services/transaction.png",
			icon: "hand-coins",
		},
		{
			title: "programmes immobiliers",
			imageSrc: "/assets/images/services/promotion.png",
			icon: "home",
		},
		{
			title: "Home staging",
			imageSrc: "/assets/images/services/home-staging.png",
			icon: "paint-bucket",
		}
	]
}

export const navItems: IMenuItem[] = [
	{title: "Accueil", url: "/"},
	{title: "Qui sommes-nous", url: "/qui-sommes-nous"},
	{title: "Programmes", url: "/programmes"},
	{
		title: "Services",
		url: "#",
		items: company.services.map((service) => ({
			title: service.title,
			url: `/services/${slugify(service.title)}`,
		})),
	},
	{title: "Contacts", url: "/contacter"},
];

export interface IMenuItem {
	title: string;
	url: string;
	items?: IMenuItem[];
}

export interface ICompany {
	contacts: {
		[key: string]: string;
	};
	socials: {
		[key: string]: string;
	};
	services: IService[];
}

export interface IService {
	title: string;
	imageSrc: string;
	icon: IconName;
}