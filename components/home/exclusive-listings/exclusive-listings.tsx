"use client";
import SectionTitle from '@/components/SectionTitle';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import PropertyCard from '@/components/biens/property-card';
import { usePropertiesList } from '@/features/properties/hooks/usePropertiesList';

export function ExclusiveListings() {
	const {
		properties,
		propertiesLoading,
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
					{propertiesLoading ? (
						<div className="flex gap-4 overflow-hidden">
							{Array.of(1, 2, 3, 4).map((index) => (
								<div
									key={index}
									className="hidden first:block sm:basis-1/2 md:block md:basis-1/3 lg:basis-1/4 w-full h-[400px] rounded-xl bg-gray-200 animate-pulse"
								/>
							))}
						</div>
					) : properties && properties.length > 0 ? (
						<Carousel
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
						</Carousel>
					) : (
						<p className="text-center text-muted-foreground py-8">
							Aucune sélection exclusive disponible pour le moment.
						</p>
					)}
				</div>
			</div>
		</section>
	);
}
