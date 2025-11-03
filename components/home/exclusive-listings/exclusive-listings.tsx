"use client";
import SectionTitle from '@/components/SectionTitle';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import ExclusivePropertyCard from '@/components/biens/exclusive-property-card';
import { usePropertiesList } from '@/features/properties/hooks/usePropertiesList';

export function ExclusiveListings() {
	const {
		propertiesLoading,
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
									<ExclusivePropertyCard
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
