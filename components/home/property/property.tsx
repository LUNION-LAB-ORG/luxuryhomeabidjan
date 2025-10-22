"use client";
import Image from "next/image";
import {ExternalLink} from "lucide-react";
import {Button} from "@/components/ui/button";
import {useRef} from "react";
import Link from "next/link";

type PropertyCardProps = {
	location: string;
	name: string;
	imageSrc: string;
};

function PropertyCard({location, name, imageSrc}: PropertyCardProps) {
	return (
		<div
			className="relative w-full shrink-0 max-w-[230px] overflow-hidden rounded-3xl bg-white shadow-md sm:max-w-[280px]">
			<div className="relative h-[400px] sm:h-[500px] w-full">
				<Image
					src={imageSrc || "/placeholder.svg"}
					alt={name}
					fill
					className="object-cover"
					sizes="(max-width: 640px) 280px, 320px"
				/>
				{/* Location and Name Overlay */}
				<div
					className="absolute inset-x-0 h-full z-20 top-0 p-6 text-white bg-gradient-to-t from-black/70 via-transparent to-transparent">
					<div className="pb-2 text-sm font-bold text-white">{location}</div>
					<div className="text-xl lg:text-xl max-w-[210px]  font-bold">
						{name}
					</div>
				</div>

				{/* Camera Icon */}
				<Link className="cursor-pointer" href="/biens-immobilier-details/1">
					<div
						className="absolute bottom-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-slate-800 text-white backdrop-blur-sm">
						<ExternalLink className="text-white"/>
					</div>
				</Link>
			</div>
		</div>
	);
}

export function PropertyCarousel() {
	const scrollContainerRef = useRef<HTMLDivElement>(null);

	// Sample property data
	const properties = [
		{
			location: "Cocody",
			name: "La cité Riviera STELLA",
			imageSrc: "/assets/images/illustrations/page-accueil/property-2.jpg",
		},
		{
			location: "Cocody",
			name: "La cité Riviera STELLA",
			imageSrc: "/assets/images/illustrations/page-accueil/property-3.jpg",
		},
		{
			location: "Cocody",
			name: "La cité Riviera STELLA",
			imageSrc: "/assets/images/illustrations/page-accueil/property-4.jpg",
		},
		{
			location: "Cocody",
			name: "La cité Riviera STELLA",
			imageSrc: "/assets/images/illustrations/page-accueil/property-5.jpg",
		},
		{
			location: "Cocody",
			name: "La cité Riviera STELLA",
			imageSrc: "/assets/images/illustrations/page-accueil/property-6.jpg",
		},
		{
			location: "Cocody",
			name: "La cité Riviera STELLA",
			imageSrc: "/assets/images/illustrations/page-accueil/property-7.jpg",
		},
		{
			location: "Cocody",
			name: "La cité Riviera STELLA",
			imageSrc: "/assets/images/illustrations/page-accueil/property-8.jpg",
		},
	];

	return (
		<section className="py-12 md:py-16 container-8xl">
			<h2 className="font-bold mb-8 lg:mb-10 text-[24px] md:text-[30px] lg:text-[36px] ttext-3xl mmd:text-5xl">
				Opérations immobilières
			</h2>

			<div className="relative">
				{/* Scrollable Container */}
				<div
					ref={scrollContainerRef}
					className="flex gap-4 overflow-x-auto pb-6 pt-2 scrollbar-hide"
					style={{scrollbarWidth: "none", msOverflowStyle: "none"}}
				>
					{properties.map((property, index) => (
						<PropertyCard
							key={index}
							location={property.location}
							name={property.name}
							imageSrc={property.imageSrc}
						/>
					))}
				</div>

				{/* More Details Button */}
				<Link href="/programmes" className="mt-6 flex justify-center">
					<Button
						variant="outline"
						className="rounded-full px-6 cursor-pointer"
					>
              <span>
                <ExternalLink/>
              </span>
						<span>Plus de détails</span>
					</Button>
				</Link>
			</div>
		</section>
	);
}
