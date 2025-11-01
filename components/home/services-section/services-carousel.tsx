import React, {useCallback, useEffect, useRef} from 'react';
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import {EmblaCarouselType, EmblaEventType, EmblaOptionsType} from "embla-carousel";
import {DotButton, useDotButton} from "@/components/home/services-section/services-dot-button";
import {cn} from "@/lib/utils";
import Link from "next/link";
import {company} from "@/config";
import {DynamicIcon} from "lucide-react/dynamic";
import Autoplay from 'embla-carousel-autoplay'
import {slugify} from "@/utils/slug";

const TWEEN_FACTOR_BASE = 0.84;

const numberWithinRange = (number: number, min: number, max: number): number =>
	Math.min(Math.max(number, min), max)

function ServicesCarousel() {
	const options: EmblaOptionsType = {loop: true};
	const [emblaRef, emblaApi] = useEmblaCarousel(options, [
		Autoplay({
			delay: 4000,
			stopOnMouseEnter: true,
			stopOnInteraction: false
		})
	]);
	const {selectedIndex, scrollSnaps, onDotButtonClick} =
		useDotButton(emblaApi);
	const tweenFactor = useRef(0);

	const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
		tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length
	}, [])

	const tweenOpacity = useCallback(
		(emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
			const engine = emblaApi.internalEngine()
			const scrollProgress = emblaApi.scrollProgress()
			const slidesInView = emblaApi.slidesInView()
			const isScrollEvent = eventName === 'scroll'

			emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
				let diffToTarget = scrollSnap - scrollProgress
				const slidesInSnap = engine.slideRegistry[snapIndex]

				slidesInSnap.forEach((slideIndex) => {
					if (isScrollEvent && !slidesInView.includes(slideIndex)) return

					if (engine.options.loop) {
						engine.slideLooper.loopPoints.forEach((loopItem) => {
							const target = loopItem.target()

							if (slideIndex === loopItem.index && target !== 0) {
								const sign = Math.sign(target)

								if (sign === -1) {
									diffToTarget = scrollSnap - (1 + scrollProgress)
								}
								if (sign === 1) {
									diffToTarget = scrollSnap + (1 - scrollProgress)
								}
							}
						})
					}

					const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current)
					emblaApi.slideNodes()[slideIndex].style.opacity = numberWithinRange(tweenValue, 0.3, 1).toString()
				})
			})
		},
		[]
	)

	useEffect(() => {
		if (!emblaApi) return

		setTweenFactor(emblaApi)
		tweenOpacity(emblaApi)
		emblaApi
			.on('reInit', setTweenFactor)
			.on('reInit', tweenOpacity)
			.on('scroll', tweenOpacity)
			.on('slideFocus', tweenOpacity)
	}, [emblaApi, tweenOpacity])

	return (
		<div>
			<div className="overflow-hidden" ref={emblaRef}>
				<div className="flex ml-[calc(1rem*-1)] touch-pan-y">
					{company
						.services
						.map((service, index) => (
							<Link
								href={`/services/${slugify(service.title)}`}
								className="relative overflow-hidden"
								key={index}
								style={{
									transform: "translate3d(0, 0, 0)",
									flex: '0 0 80%',
									minWidth: '0',
									paddingLeft: '1rem'
								}}
							>
								<Image
									src={service.imageSrc}
									alt={service.title}
									width={400}
									height={300}
									className="block w-full h-[550px] md:h-[600px] object-cover"
								/>
								<div
									className="flex flex-col gap-2 absolute bottom-0 left-0 right-0 items-center justify-center pt-2 pb-8 text-white ml-4 bg-gradient-to-b from-transparent to-black/40 to-40%"
								>
									<div className="bg-white p-2 rounded-xl">
										<DynamicIcon
											className="size-12 text-gray-700"
											name={service.icon}
										/>
									</div>
									<h3 className="text-3xl md:text-5xl font-bold text-center md:text-left">
										{service.title}
									</h3>
								</div>
							</Link>
						))}
				</div>
			</div>
			<div className="flex flex-wrap items-center justify-center space-x-2 mt-5">
				{scrollSnaps.map((_, index) => (
					<DotButton
						key={index}
						onClick={() => onDotButtonClick(index)}
						aria-label={`Go to slide ${index + 1}`}
						className={cn(`size-2.5 rounded-full`, index === selectedIndex ? 'bg-black' : 'bg-gray-300')}
					/>
				))}
			</div>
		</div>
	);
}

export default ServicesCarousel;
