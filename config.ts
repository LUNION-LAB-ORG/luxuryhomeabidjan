import {IconName} from "lucide-react/dynamic";
import {slugify} from "@/utils/slug";
import {IBien} from "@/data/coups-de-coeur.type";

export const siteConfig = {
	name: "Luxury Home Abidjan",
	description: "Luxury Home Abidjan",
}

export const CDN_URL = process.env.NEXT_PUBLIC_CDN_URL;

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
			title: "Expertise & Conseils",
			imageSrc: "/assets/images/services/expertise.png",
			icon: "lightbulb",
		},
		{
			title: "Gestion & Syndic",
			imageSrc: "/assets/images/services/gestion.png",
			icon: "building",
		},
		{
			title: "Transactions immobilières",
			imageSrc: "/assets/images/services/transaction.png",
			icon: "hand-coins",
		},
		{
			title: "Programmes immobiliers",
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
	// {title: "Accueil", url: "/"},
	{title: "Qui sommes-nous", url: "/qui-sommes-nous"},
	{title: "Programmes", url: "/programmes/1"},
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

export const exclusiveProperties: IBien[] = [
	{
		id: 1,
		title: "VILLA LA CASA",
		price: "650 000 FCFA/nuitée",
		rating: 4.7,
		image: `${CDN_URL}/biens/alexandre/1.jpeg`,
		surface: 600,
		chambre: 3,
		salleDeBain: 4,
		localisation: "Cocody",
		type: "Location",
	},
	{
		id: 2,
		title: "VILLA PRESTIGE",
		price: "650 000 FCFA/nuitée",
		rating: 4.8,
		image: `${CDN_URL}/biens/alexandre/2.jpeg`,
		surface: 700,
		chambre: 4,
		salleDeBain: 5,
		localisation: "Bingerville",
		type: "Vente",
	},
	{
		id: 3,
		title: "VILLA PRESTIGE",
		price: "650 000 FCFA/nuitée",
		rating: 4.8,
		image: "/assets/images/coup-de-coeur/coup4.png",
		surface: 700,
		chambre: 4,
		salleDeBain: 5,
		localisation: "Bingerville",
		type: "Vente",
	},
	{
		id: 4,
		title: "Moana",
		price: "650 000 FCFA/nuitée",
		rating: 4.7,
		image: "/assets/images/coup-de-coeur/coup3.png",
		surface: 600,
		chambre: 3,
		salleDeBain: 4,
		localisation: "Cocody",
		type: "Location",
	},
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