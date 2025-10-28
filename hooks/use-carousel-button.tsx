import {CarouselApi} from "@/components/ui/carousel";
import React from "react";

export default function useCarouselButton(api: CarouselApi) {
	const [canScrollNext, setCanScrollNext] = React.useState(true)
	const [canScrollPrev, setCanScrollPrev] = React.useState(true)
	const scrollNext = React.useCallback(() => {
		api?.scrollNext()
	}, [api])

	const scrollPrev = React.useCallback(() => {
		api?.scrollPrev()
	}, [api])

	React.useEffect(() => {
		if (!api) return

		const onSelect = () => {
			setCanScrollNext(api.canScrollNext())
			setCanScrollPrev(api.canScrollPrev())
		}

		api.on("select", onSelect)
		onSelect()

		return () => {
			api.off("select", onSelect)
		}
	}, [api]);

	return {
		canScrollNext,
		canScrollPrev,
		scrollNext,
		scrollPrev
	}
}