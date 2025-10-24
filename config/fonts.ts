import localFont from 'next/font/local';
import {Geist, Montserrat, Noto_Serif} from "next/font/google";

export const fontNarnia = localFont({
	src: [
		{
			path: "../public/assets/fonts/narnia/Narnia.ttf",
			weight: "200",
			style: "normal", // Ou italic
		},
	],
	variable: "--font-narnia",
});

export const fontBubble = localFont({
	src: [
		{
			path: "../public/assets/fonts/BBH_Sans_Bartle/BBHSansBartle-Regular.ttf",
			weight: "200",
			style: "normal", // Ou italic
		},
	],
	variable: "--font-bubble",
});

export const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

export const noto = Noto_Serif({
	variable: "--font-noto",
	subsets: ["latin"],
});

export const montserrat =Montserrat({
	variable: "--font-geist-montserrat",
	subsets: ["latin"],
});