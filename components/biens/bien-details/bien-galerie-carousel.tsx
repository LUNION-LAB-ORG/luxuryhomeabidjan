import React from 'react';
import {Carousel, CarouselApi, CarouselContent, CarouselItem} from "@/components/ui/carousel";
import {Button} from "@/components/ui/button";
import Image from "next/image";
import {IBien} from "@/data/coups-de-coeur.type";
import {ArrowLeft, ArrowRight} from "lucide-react";
import AutoScroll from "embla-carousel-auto-scroll";
import {cn} from "@/lib/utils";
import useCarouselButton from "@/hooks/use-carousel-button";
import {useFullscreenImageModal} from "@/hooks/use-fullscreen-image-modal";
import FullscreenImageModal from "@/components/biens/bien-details/fullscreen-image-modal";

function BienGalerieCarousel({home}: { home: IBien }) {
	const [api, setApi] = React.useState<CarouselApi>()
	const {
		canScrollNext,
		canScrollPrev,
		scrollNext,
		scrollPrev
	} = useCarouselButton(api)
	const {
		open: openImagesModal,
		setOpen: setOpenImagesModal,
		selectedIndex,
		setSelectedIndex,
		openModal
	} = useFullscreenImageModal();


	return (
		<>
			<Carousel
				setApi={setApi}
				className="w-full"
				plugins={[
					AutoScroll({
						stopOnInteraction: true,
						speed: 1,
						stopOnMouseEnter: true,
					}),
				]}
			>
				<CarouselContent>
					{home.gallery
						?.slice(0, 5)
						.map((img, idx) => (
							<CarouselItem
								key={idx}
								className="md:basis-1/3 lg:basis-1/4 cursor-pointer"
								onClick={() => openModal(idx)}
							>
								<Image
									src={img.url}
									alt={`Image ${idx + 1}`}
									width={1920}
									height={1080}
								/>
							</CarouselItem>
						))}
				</CarouselContent>
				<div className="flex items-center mt-2 justify-center container-8xl">
					<Button
						onClick={scrollPrev}
						size="icon"
						variant="ghost"
						className={cn(!canScrollPrev && "opacity-50 cursor-not-allowed")}
					>
						<ArrowLeft/>
					</Button>
					<Button
						onClick={scrollNext}
						size="icon"
						variant="ghost"
						className={cn(!canScrollNext && "opacity-50 cursor-not-allowed")}
					>
						<ArrowRight/>
					</Button>
				</div>
			</Carousel>
			<FullscreenImageModal
				home={home}
				open={openImagesModal}
				selectedIndex={selectedIndex}
				setSelectedIndex={setSelectedIndex}
				setOpen={setOpenImagesModal}
			/>
		</>
	);
}

export default BienGalerieCarousel;