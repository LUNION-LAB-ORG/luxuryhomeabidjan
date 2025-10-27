import React from 'react';
import {IBien} from "@/data/coups-de-coeur.type";
import Image from "next/image";
import {CDN_URL} from "@/config";
import {ArrowRight, Bath, Bed, MapPin} from "lucide-react";
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";

function ProgrammeBiensItem({bien, reverse=false}: { bien: IBien, reverse?: boolean }) {
	return (
		<div className="group bg-white flex flex-col rounded-t-[35px] rounded-b-[20px] shadow-md overflow-hidden">
			<div className="relative w-full h-[35rem] overflow-hidden rounded-b-[35px]">
				<img
					src={bien.image}
					alt={bien.title}
					loading="lazy"
					className="object-cover object-center w-full h-full transform group-hover:scale-105 transition-transform duration-300"
				/>
				<div className="font-serif absolute bottom-4 left-4 bg-[#09090999] min-w-1/4 backdrop-blur-2xl text-white px-3 py-3 rounded-lg text-4xl">
					{bien.title}
				</div>
			</div>
			<div className={cn("px-10 pt-7 pb-10 flex flex-col-reverse lg:flex-row flex-grow", reverse && "lg:flex-row-reverse")}>
				<div className="relative aspect-[4/5] w-[32rem] overflow-hidden rounded-lg max-lg:hidden">
					<Image
						src={bien.image}
						alt={bien.title}
						fill
						loading="lazy"
						className="object-cover object-center"
					/>
				</div>
				<div className={cn("flex flex-col mt-6 lg:mt-0", reverse ? "lg:items-end lg:mr-10" : "lg:items-start lg:ml-10", "lg:flex-1")}>
					<div className={cn("grid md:grid-cols-2 gap-4")}>
						<div className={cn("relative max-w-sm overflow-hidden rounded-lg", reverse && "order-2")}>
							<Image
								src={`${CDN_URL}/programmes/mangrove/plan-bien.png`}
								alt="Plan du bien"
								width={600}
								height={400}
								className="object-cover object-center"
								loading="lazy"
							/>
						</div>
						<div className="md:max-w-sm">
							<h2 className="text-3xl font-semibold mb-4">{bien.title}</h2>
							<address className="text-md not-italic mb-4 text-gray-600 inline-flex items-center">
								<MapPin/>
								{bien.localisation}
							</address>
							<p className="text-lg mb-6">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
							</p>
						</div>
					</div>
					<div className={cn("mt-8 text-[#1A1A1A] flex flex-col")} >
						<div className="flex items-center divide-x space-x-4 mb-4">
							<div className="flex items-center gap-1 pr-3">
								<Bed size={18}/> <span>{bien.chambre}</span>
							</div>
							<div className="flex items-center gap-1 pr-3">
								<Bath size={18}/> <span>{bien.salleDeBain}</span>
							</div>
							<div className="flex items-center gap-1 pr-3">
								{bien.surface} m²
							</div>
						</div>
						<span className="text-3xl mb-6">{bien.price}</span>
						<Button size="lg">
							<span>En savoir plus</span>
							<ArrowRight/>
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProgrammeBiensItem;