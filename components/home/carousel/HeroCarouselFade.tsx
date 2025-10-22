"use client";

import {useState, useEffect} from "react";
import Image from "next/image";
import {cn} from "@/lib/utils";
import {motion, AnimatePresence} from "motion/react";
import {ChevronLeft, ChevronRight} from "lucide-react";

interface SlideItem {
	id: number;
	image: string;
	title: string | React.ReactNode;
	description?: string;
}

interface HeroCarouselProps {
	slides: SlideItem[];
	autoplayDelay?: number;
	className?: string;
}

export default function HeroCarouselSlide({slides, autoplayDelay = 5000, className = ""}: HeroCarouselProps) {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [direction, setDirection] = useState(0);
	const [isHovered, setIsHovered] = useState(false);

	useEffect(() => {
		if (isHovered) return;

		const t = setTimeout(() => {
			setDirection(1);
			setCurrentSlide((prev) => (prev + 1) % slides.length);
		}, autoplayDelay);
		return () => clearTimeout(t);
	}, [currentSlide, autoplayDelay, slides.length, isHovered]);

	const slideVariants = {
		enter: (dir: number) => ({
			x: dir > 0 ? "100%" : "-100%",
			opacity: 0
		}),
		center: {
			zIndex: 1,
			x: 0,
			opacity: 1
		},
		exit: (dir: number) => ({
			zIndex: 0,
			x: dir < 0 ? "100%" : "-100%",
			opacity: 0
		})
	};

	const handleNext = () => {
		setDirection(1);
		setCurrentSlide((prev) => (prev + 1) % slides.length);
	};

	const handlePrev = () => {
		setDirection(-1);
		setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
	};

	const handleDragEnd = (event: any, info: any) => {
		const dragDistance = info.offset.x;

		if (dragDistance > 50) {
			handlePrev();
		} else if (dragDistance < -50) {
			handleNext();
		}
	};

	return (
		<div
			className={cn("group relative w-full h-screen overflow-hidden", className)}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<AnimatePresence initial={false} custom={direction}>
				<motion.div
					key={currentSlide}
					custom={direction}
					variants={slideVariants}
					initial="enter"
					animate="center"
					exit="exit"
					transition={{
						x: {type: "spring", stiffness: 200, damping: 40},
						opacity: {duration: 0.8}
					}}
					drag="x"
					dragElastic={0.2}
					onDragEnd={handleDragEnd}
					className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing"
				>
					<Image
						src={slides[currentSlide].image}
						alt={typeof slides[currentSlide].title === "string" ? slides[currentSlide].title : ""}
						fill
						className="object-cover"
						priority
						draggable={false}
					/>

					{/* Dégradé */}
					<div className="absolute z-10 w-full h-full bg-gradient-to-t from-black/70 via-transparent to-transparent"/>

					{/* Titre avec animation */}
					<motion.div
						initial={{opacity: 0, y: 20}}
						animate={{opacity: 1, y: 0}}
						exit={{opacity: 0, y: -20}}
						transition={{duration: 0.6, delay: 0.2}}
						className="absolute z-20 w-full bottom-24 left-1/2 -translate-x-1/2 text-white text-3xl md:text-7xl font-bold text-center px-4 drop-shadow-xl pointer-events-none"
					>
						{slides[currentSlide].title}
					</motion.div>
				</motion.div>
			</AnimatePresence>

			{/* Flèches de navigation */}
			{/*<motion.button*/}
			{/*	whileHover={{scale: 1.1}}*/}
			{/*	whileTap={{scale: 0.95}}*/}
			{/*	onClick={handlePrev}*/}
			{/*	aria-label="Diapositive précédente"*/}
			{/*	className="absolute left-6 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/40 backdrop-blur-md p-3 rounded-full transition-colors"*/}
			{/*>*/}
			{/*	<ChevronLeft className="w-6 h-6 text-white"/>*/}
			{/*</motion.button>*/}

			{/*<motion.button*/}
			{/*	whileHover={{scale: 1.1}}*/}
			{/*	whileTap={{scale: 0.95}}*/}
			{/*	onClick={handleNext}*/}
			{/*	aria-label="Diapositive suivante"*/}
			{/*	className="absolute right-6 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/40 backdrop-blur-md p-3 rounded-full transition-colors"*/}
			{/*>*/}
			{/*	<ChevronRight className="w-6 h-6 text-white"/>*/}
			{/*</motion.button>*/}

			{/* Dots */}
			<div
				className="absolute bottom-6 left-1/2 -translate-x-1/2 backdrop-blur-md bg-[#333]/50 px-4 py-2 rounded-full flex items-center gap-2 z-30">
				{slides.map((_, i) => (
					<motion.button
						key={i}
						onClick={() => {
							setDirection(i > currentSlide ? 1 : -1);
							setCurrentSlide(i);
						}}
						aria-label={`Aller à la diapositive ${i + 1}`}
						animate={{
							width: currentSlide === i ? 24 : 8,
							backgroundColor: currentSlide === i ? "rgb(255, 255, 255)" : "rgba(255, 255, 255, 0.5)"
						}}
						transition={{duration: 0.5}}
						className="h-2 rounded-full"
					/>
				))}
			</div>
		</div>
	);
}
