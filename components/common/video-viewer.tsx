"use client";
import React, {useRef} from 'react';
import {motion, useMotionValueEvent, useScroll, useTransform, type Variants} from "motion/react";

const videoVariants: Variants = {
	topScroll: {}
};

function VideoViewer({videoSrc}: { videoSrc: string }) {
	const containerRef = useRef(null);

	const {scrollYProgress} = useScroll({
		container: containerRef,
	});

	useMotionValueEvent(scrollYProgress, "change", (latest) => {
		console.log("Scroll Y Progress:", latest);
	})

	const scale = useTransform(scrollYProgress, [0, 1], [0, 1]);
	const borderRadius = useTransform(scrollYProgress, [0, 1], ["0%", "24px"])
	const y = useTransform(scrollYProgress, [0, 1], ["0vh", "-20vh"]);
	console.log(scale)
	return (
		<div ref={containerRef}>
			<motion.div
				className="relative w-full h-[calc(100vh-var(--nav-height))] aspect-video"
				variants={videoVariants}
				initial="hidden"
				animate="visible"
				style={{
					scale
				}}
			>
				<motion.video
					autoPlay
					loop
					muted
					playsInline
					className="absolute inset-0 w-full h-full object-cover"
				>
					<source src={videoSrc} type="video/mp4"/>
				</motion.video>
			</motion.div>
		</div>
	);
}

export default VideoViewer;