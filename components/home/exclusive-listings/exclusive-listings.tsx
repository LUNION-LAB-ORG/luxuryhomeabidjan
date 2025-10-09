"use client";
import Autoplay from "embla-carousel-autoplay";

import {Card, CardContent} from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import {ChevronLeft, ChevronRight, Bed, Bath, Square} from "lucide-react";
import {Button} from "@/components/ui/button";
import {useRef} from "react";
import Link from "next/link";

type ExclusivePropertyProps = {
	name: string;
	imageSrc: string;
	bedrooms: number;
	bathrooms: number;
	area: number;
};

function ExclusiveProperty({
	                           name,
	                           imageSrc,
	                           bedrooms,
	                           bathrooms,
	                           area,
                           }: ExclusivePropertyProps) {
	return (
		<div
			className="overflow-hidden  rounded-xl m-2 relative h-[300px] md:h-[400px] lg:h-[450px] w-4/5 md:w-2/4 lg:w-1/3 flex-shrink-0">
			<Link href="/biens-immobilier-details/1">
				<div className="rounded-xl relative h-full aaspect-[4/3] w-full">
					<Image
						src={imageSrc}
						alt={name}
						fill
						className="object-cover"
						sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
					/>
				</div>

				<div
					className="rounded-b-lg absolute flex justify-between bottom-0 left-0 right-0 bg-black/20 backdrop-blur-sm  bg-gradient-to-t from-black/80 to-transparent p-2 md:p-6 mmx-2  text-white">
					<div>
						<div className="mb-2  md:text-lg font-semibold">{name}</div>
						<Button
							size="sm"
							className="rounded-full text-[14px] bg-black text-white"
						>
							650.000FCFA/nutée
						</Button>
					</div>

					<div className="mb-3 flex items-center justify-between">
						<div className="flex items-center gap-4">
							<div className="flex items-center gap-1 pr-2 border-r-2">
								<Bed size={16}/>
								<span className="text-sm">{bedrooms}</span>
							</div>
							<div className="flex items-center gap-1 pr-2 border-r-2">
								<Bath size={16}/>
								<span className="text-sm">{bathrooms}</span>
							</div>
							<div className="flex items-center gap-1">
								<Square size={16}/>
								<span className="text-sm">{area} m²</span>
							</div>
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
}

export function ExclusiveListings() {
	const plugin = useRef(Autoplay({delay: 2000, stopOnInteraction: true}));

	const exclusiveProperties = [
		{
			name: "VILLA LA CASA",
			imageSrc: "/assets/images/illustrations/page-accueil/villa1.png",
			bedrooms: 7,
			bathrooms: 7.1,
			area: 800,
		},
		{
			name: "VILLA LA CASA",
			imageSrc: "/assets/images/illustrations/page-accueil/villa2.png",
			bedrooms: 7,
			bathrooms: 7.1,
			area: 800,
		},
		{
			name: "VILLA LA CASA",
			imageSrc: "/assets/images/illustrations/page-accueil/villa1.png",
			bedrooms: 7,
			bathrooms: 7.1,
			area: 800,
		},
		{
			name: "VILLA LA CASA",
			imageSrc: "/assets/images/illustrations/page-accueil/villa2.png",
			bedrooms: 7,
			bathrooms: 7.1,
			area: 800,
		},
		{
			name: "VILLA LA CASA",
			imageSrc: "/assets/images/illustrations/page-accueil/villa1.png",
			bedrooms: 7,
			bathrooms: 7.1,
			area: 800,
		},
		{
			name: "VILLA LA CASA",
			imageSrc: "/assets/images/illustrations/page-accueil/villa2.png",
			bedrooms: 7,
			bathrooms: 7.1,
			area: 800,
		},
		{
			name: "VILLA LA CASA",
			imageSrc: "/assets/images/illustrations/page-accueil/villa1.png",
			bedrooms: 7,
			bathrooms: 7.1,
			area: 800,
		},
		{
			name: "VILLA LA CASA",
			imageSrc: "/assets/images/illustrations/page-accueil/villa2.png",
			bedrooms: 7,
			bathrooms: 7.1,
			area: 800,
		},
	];

	return (
		<section className="py-12 md:py-16 fullwidth-right">
			<div>
				<h2 className="font-bold text-[24px] md:text-[30px] lg:text-[36px] mb-6">
					Découvrez nos coups de cœur
				</h2>

				<div className="relative group">
					<Carousel
						plugins={[plugin.current]}
						className="overflow-x-hidden rounded-xl w-full"
						onMouseEnter={plugin.current.stop}
						onMouseLeave={() => plugin.current.play()}
					>
						<CarouselContent className="-ml-1">
							{exclusiveProperties.map((property, index) => (
								<ExclusiveProperty
									key={index}
									name={property.name}
									imageSrc={property.imageSrc}
									bedrooms={property.bedrooms}
									bathrooms={property.bathrooms}
									area={property.area}
								/>
							))}
						</CarouselContent>
						<CarouselPrevious
							className="hidden group-hover:flex z-50 w-10 lg:w-16 h-10 lg:h-16 ml-14 transition-all duration-300"
						/>
						<CarouselNext
							className="hidden group-hover:flex z-50 w-10 lg:w-16 h-10 lg:h-16 mr-14 transition-all duration-300"
						/>
					</Carousel>
				</div>
			</div>
		</section>
	);
}
