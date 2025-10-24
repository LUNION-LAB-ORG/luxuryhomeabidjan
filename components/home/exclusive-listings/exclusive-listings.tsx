"use client";
import Autoplay from "embla-carousel-autoplay";
import {useRef} from "react";
import SectionTitle from "@/components/SectionTitle";
import {exclusiveProperties} from "@/config";
import {Bath, Bed} from "lucide-react";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";

interface Iproduct {
	id: number;
	title: string;
	price: string;
	rating: number;
	image: string;
	surface: number;
	chambre: number;
	salleDeBain: number;
	localisation: string;
	type: string;
}

function ExclusiveProperty({product}: { product: Iproduct }) {
	return (
		<div
			key={product.id}
			className="relative overflow-hidden rounded-xl shadow-md cursor-pointer hover:shadow-2xl transition-shadow duration-300 "
		>
			{/* Image */}
			<img
				src={product.image}
				alt={product.title}
				className="w-full h-[400px] object-cover transition-transform duration-500 hover:scale-105"
			/>

			{/* Overlay (dégradé noir pour lisibilité du texte) */}
			<div className="absolute inset-0 bg-gradient-to-t from-black/10 via-black/10 to-transparent"/>

			{/* Contenu positionné proprement */}
			<div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between p-4">
				{/* Haut : titre + prix */}
				<div className="flex justify-between items-start">
					<div>
						<span
							className="text-xs bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white border border-white/30"
						>{product.type}</span>
						<h3 className="mt-2 text-lg font-bold text-white drop-shadow">
							{product.title}
						</h3>
						<address className="text-white text-sm font-medium">
							{product.localisation}
						</address>
					</div>
					<div className="bg-gold-500 text-black text-sm font-semibold px-3 py-2 rounded-md bg-white shadow-md">
						{product.price}
					</div>
				</div>

				{/* Bas : infos + localisation */}
				<div className="space-y-3">
					<div className="flex justify-center gap-6 text-white text-sm">
						<div className="flex items-center gap-1">
							<Bed size={18}/> <span>{product.chambre}</span>
						</div>
						<div className="flex items-center gap-1">
							<Bath size={18}/> <span>{product.salleDeBain}</span>
						</div>
						<div className="flex items-center gap-1">
							{product.surface} m²
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export function ExclusiveListings() {
	const plugin = useRef(Autoplay({delay: 5000, stopOnInteraction: true}));

	return (
		<section className="py-12 md:py-16 fullwidth-right">
			<div>
				<SectionTitle
					className=""
					title="Nos sélections exclusives"
					subtitle="Le prestige réservé à une clientèle d'exception"
				/>

				<div className="relative">
					<Carousel
						plugins={[plugin.current]}
						className="overflow-x-hidden rounded-xl w-full"
						onMouseEnter={plugin.current.stop}
						onMouseLeave={() => plugin.current.play()}
					>
						<CarouselContent className="">
							{exclusiveProperties.map((property, index) => (
								<CarouselItem key={index} className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
									<ExclusiveProperty
										product={property}
									/>
								</CarouselItem>
							))}
						</CarouselContent>
						<CarouselPrevious/>
						<CarouselNext/>
					</Carousel>
				</div>
			</div>
		</section>
	);
}
