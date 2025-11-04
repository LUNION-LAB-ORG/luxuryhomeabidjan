"use client";
import SectionTitle from '@/components/SectionTitle';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import PropertyCard from '@/components/biens/property-card';
import { usePropertiesList } from '@/features/properties/hooks/usePropertiesList';

export function ExclusiveListings() {
	const {
		properties
	} = usePropertiesList()

	return (
		<section className="py-12 md:py-16 fullwidth-right">
			<div>
				<SectionTitle
					className=""
					title="Nos sélections exclusives"
					subtitle="Le prestige réservé à une clientèle d'exception"
				/>

				<div className="relative">
					{properties && <Carousel
						className="overflow-x-hidden rounded-xl w-full"
					>
						<CarouselContent className="">
							{properties.map((property, index) => (
								<CarouselItem key={index} className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
									<PropertyCard
										property={property}
									/>
								</CarouselItem>
							))}
						</CarouselContent>
						<CarouselPrevious />
						<CarouselNext />
					</Carousel>}
				</div>
			</div>
		</section>
	);
}
