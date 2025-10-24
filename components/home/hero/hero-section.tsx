"use client";
import {useState, useRef, useEffect} from "react";
// import HeroCarousel from "@/components/home/carousel/HeroCarousel";
// import HeroCarouselFade from "@/components/home/carousel/HeroCarouselFade";
import {Navbar} from "@/components/home/navbar/navbar";
import {Button} from "@/components/ui/button";
import {motion} from "motion/react";
import {fontNarnia, fontBubble} from "@/config/fonts";

export default function HeroSection() {
	const [videoReady, setVideoReady] = useState(false);
	const videoRef = useRef<HTMLVideoElement | null>(null);

	// Vérifie si la vidéo a déjà assez de données (readyState >= 2)
	useEffect(() => {
		const video = videoRef.current;
		if (!video) return;
		if (video.readyState >= 2) {
			setVideoReady(true);
		}
	}, []);

	return (
		<section className={`flex flex-col min-h-screen ${fontNarnia.variable} ${fontBubble.variable}`}>
			<Navbar/>
			<div className="relative flex-1 overflow-hidden">
				{!videoReady && (
					<img
						src="/assets/videos/video-thumbnail.png"
						alt="hero placeholder"
						className="absolute inset-0 w-full h-full object-cover"
					/>
				)}

				<video
					ref={videoRef}
					preload="auto"
					poster="/assets/videos/video-thumbnail.png"
					autoPlay
					loop
					muted
					playsInline
					onLoadedData={() => setVideoReady(true)} // se déclenche plus tôt que canplay
					onCanPlay={() => setVideoReady((v) => v || true)} // fallback si nécessaire
					className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
						videoReady ? "opacity-100" : "opacity-0"
					}`}
				>
					<source src="/assets/videos/bg-video.mp4"/>
				</video>

				<div className="absolute inset-0 bg-black/20 bg-opacity-50"/>

				<motion.div
					initial={{opacity: 0, y: 20}}
					animate={{opacity: 1, y: 0}}
					transition={{duration: 0.8, delay: 0.5}}
					className="absolute inset-0 flex flex-col items-center justify-end text-center px-4 pb-20"
				>
					<motion.div
						initial={{opacity: 0, scale: 0.9}}
						animate={{opacity: 1, scale: 1}}
						transition={{
							duration: 0.6,
							delay: 0.8,
							type: "spring",
							stiffness: 120,
							damping: 15,
						}}
						whileHover={{scale: 1.05, y: -2}}
						whileTap={{scale: 0.95}}
						className="relative"
					>
						<motion.div
							className="absolute inset-0 bg-gradient-to-r from-gray-900 to-black rounded-md blur-lg opacity-0"
							animate={{opacity: [0, 0.2, 0]}}
							transition={{
								duration: 2.5,
								repeat: Infinity,
								ease: "easeInOut",
							}}
						/>
						<Button
							className="relative shadow-2xl text-2xl px-4 py-6 font-sans"
						>
							Explorer
						</Button>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}
