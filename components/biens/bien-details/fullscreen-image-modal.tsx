import React, {useCallback, useEffect} from 'react';
import Image from "next/image";
import {Carousel, CarouselApi, CarouselContent, CarouselItem} from "@/components/ui/carousel";
import {cn} from "@/lib/utils";
import {IBien} from "@/data/coups-de-coeur.type";
import {Modal, ModalBody, ModalContent,} from "@heroui/react";
import ContactFixedButton from "@/components/contact-fixed-button";
import {Button} from "@/components/ui/button";
import {X} from "lucide-react";

type FullscreenImageModalProps = {
	home: IBien;
	open: boolean;
	selectedIndex: number | null;
	setSelectedIndex: (index: number | null) => void;
	setOpen: (open: boolean) => void;
};

function FullscreenImageModal({home, open, selectedIndex, setSelectedIndex, setOpen}: FullscreenImageModalProps) {
	const [api, setApi] = React.useState<CarouselApi>();
	const [thumbsApi, setThumbsApi] = React.useState<CarouselApi>();

	const handleClose = () => {
		setOpen(false);
		setSelectedIndex(null);
	};

	const onThumbClick = useCallback((index: number) => {
		if (!api) return;
		api.scrollTo(index);
	}, [api]);

	const onSelect = useCallback(() => {
		if (!api || !thumbsApi) return;
		setSelectedIndex(api.selectedScrollSnap());
		thumbsApi.scrollTo(api.selectedScrollSnap());
	}, [api, thumbsApi]);

	useEffect(() => {
		if (!api) return;
		onSelect();
		api.on('select', onSelect).on('reInit', onSelect);
	}, [api, onSelect]);

	return (
		<Modal
			isOpen={open}
			size="full"
			onClose={handleClose}
			className="bg-white/70"
			backdrop="blur"
			hideCloseButton
		>
			<ModalContent className="min-w-screen h-screen max-w-none rounded-none p-0 overflow-hidden">
				<Button
					variant="ghost"
					className="absolute top-2 right-4 z-50 bg-white/70 hover:bg-white/90 rounded-full p-2"
					onClick={handleClose}
				>
					<span className="sr-only">Close</span>
					<X/>
				</Button>
				<ModalBody className="p-0 h-full relative">
					<Carousel setApi={setApi} className="w-full h-full">
						<CarouselContent className="h-full">
							{home.gallery?.map((img, idx) => (
								<CarouselItem key={idx} className="h-screen w-full flex items-center justify-center">
									<div className="relative w-full h-full">
										<Image
											src={img.url}
											alt={`Image ${idx + 1}`}
											fill
											sizes="100vw"
											priority={idx === selectedIndex}
											className="object-contain"
										/>
									</div>
								</CarouselItem>
							))}
						</CarouselContent>
					</Carousel>
					<ContactFixedButton
						defaultMessage={`Bonjour, Je suis intéressé(e)`}
						className="max-xl:hidden"
					/>
					<div className="absolute bottom-0 left-0 right-0 w-full max-w-4xl mx-auto p-4">
						<Carousel
							setApi={setThumbsApi}
							className="w-full"
							opts={{
								loop: true,
								align: 'start',
							}}
						>
							<CarouselContent className="gap-2">
								{home.gallery?.map((img, idx) => (
									<CarouselItem key={idx} className="basis-1/4 md:basis-1/6 lg:basis-1/8 xl:basis-1/12 cursor-pointer">
										<div
											onClick={() => onThumbClick(idx)}
											className={cn(
												"relative size-14 border-2 rounded-lg overflow-hidden",
												selectedIndex === idx ? "border-slate-50" : "border-gray-600"
											)}
										>
											<Image
												src={img.url}
												alt={`Thumb ${idx + 1}`}
												width={56}
												height={56}
												className="object-cover"
											/>
										</div>
									</CarouselItem>
								))}
							</CarouselContent>
						</Carousel>
					</div>
				</ModalBody>
			</ModalContent>
		</Modal>
	);

}

export default FullscreenImageModal;
