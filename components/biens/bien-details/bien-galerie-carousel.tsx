import React from 'react';
import {Carousel, CarouselApi, CarouselContent, CarouselItem} from "@/components/ui/carousel";
import {Button} from "@/components/ui/button";
import Image from "next/image";
import {ArrowLeft, ArrowRight, Maximize2} from "lucide-react"; // J'ai ajouté l'icone Maximize pour le style
import AutoScroll from "embla-carousel-auto-scroll";
import {cn} from "@/lib/utils";
import useCarouselButton from "@/hooks/use-carousel-button";
import {useFullscreenImageModal} from "@/hooks/use-fullscreen-image-modal";
import FullscreenImageModal from "@/components/biens/bien-details/fullscreen-image-modal";
import {IProperty} from '@/features/properties/types/property.type';

function BienGalerieCarousel({home}: { home: IProperty }) {
	const [api, setApi] = React.useState<CarouselApi>();

	// Configuration du scroll automatique
	const plugin = React.useRef(
		AutoScroll({
			stopOnInteraction: true,
			speed: 1,
			stopOnMouseEnter: true
		})
	);

	const {
		canScrollNext,
		canScrollPrev,
		scrollNext,
		scrollPrev
	} = useCarouselButton(api);

	const {
		open: openImagesModal,
		setOpen: setOpenImagesModal,
		selectedIndex,
		setSelectedIndex,
		openModal
	} = useFullscreenImageModal();

	// Sécurité si pas de médias
	const images = home.medias?.filter((img) => img.kind === 'IMAGE') || [];

	if (images.length === 0) return null;

	return (
		<div className="w-full select-none">
			<Carousel
				setApi={setApi}
				className="w-full"
				plugins={[plugin.current]}
				opts={{
					align: "start",
					loop: true,
				}}
			>
				{/* Ajout de -ml-4 pour gérer l'espacement (gap) correctement */}
				<CarouselContent className="-ml-4 pb-4">
					{images.slice(0, 10).map((img, idx) => ( // J'ai augmenté slice à 8 pour plus de fluidité
						<CarouselItem
							key={idx}
							// RESPONSIVE :
							// basis-[85%] : Sur mobile, on voit 85% de l'image (incite au swipe)
							// sm:basis-1/2 : Tablettes portrait
							// lg:basis-1/3 : Tablettes paysage / petits ordis
							// xl:basis-1/4 : Grands écrans
							className="pl-4 basis-[85%] sm:basis-1/2 lg:basis-1/3 xl:basis-1/4 cursor-pointer"
							onClick={() => openModal(idx)}
						>
							<div
								className="group relative overflow-hidden rounded-xl bg-gray-100 border border-gray-200 shadow-sm transition-all hover:shadow-md">
								{/* Conteneur Aspect Ratio pour uniformiser la hauteur */}
								<div className="aspect-[4/3] relative">
									<Image
										src={img.url}
										alt={`Vue du bien ${idx + 1}`}
										fill
										className="object-cover transition-transform duration-700 group-hover:scale-110"
										sizes="(max-width: 768px) 85vw, (max-width: 1200px) 50vw, 25vw"
									/>

									{/* Overlay au survol avec icône d'agrandissement */}
									<div
										className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
										<Maximize2
											className="text-white opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300 w-8 h-8 drop-shadow-lg"/>
									</div>
								</div>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>

				{/* Contrôles de navigation */}
				<div className="flex items-center justify-end gap-2 pr-4 md:pr-0 mt-2">
					<Button
						onClick={scrollPrev}
						size="icon"
						variant="outline"
						className={cn(
							"rounded-full w-10 h-10 border-gray-300 hover:bg-black hover:text-white transition-colors",
							!canScrollPrev && "opacity-50 cursor-not-allowed"
						)}
						disabled={!canScrollPrev}
					>
						<ArrowLeft className="w-4 h-4"/>
					</Button>
					<Button
						onClick={scrollNext}
						size="icon"
						variant="outline"
						className={cn(
							"rounded-full w-10 h-10 border-gray-300 hover:bg-black hover:text-white transition-colors",
							!canScrollNext && "opacity-50 cursor-not-allowed"
						)}
						disabled={!canScrollNext}
					>
						<ArrowRight className="w-4 h-4"/>
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
		</div>
	);
}

export default BienGalerieCarousel;