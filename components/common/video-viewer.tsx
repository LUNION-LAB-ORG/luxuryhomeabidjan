"use client";
import React, {useRef} from 'react';
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

function VideoViewer({videoSrc, animate=false}: { videoSrc: string, animate?: boolean }) {
	const containerRef = useRef(null);

	useGSAP(() => {
		if (!animate) return;
		gsap.to(containerRef.current, {
			clipPath:"inset(5.25% round 44px)",
			scrollTrigger: {
				trigger: containerRef.current,
				start: "top 33%",
				end: "bottom top",
				scrub: true,
				markers: false
			},
			ease: "none",
		});
	}, {scope: containerRef});

	return (
		<div
			ref={containerRef}
			className="relative w-full h-[calc(100vh-var(--nav-height))] aspect-video overflow-hidden"
		>
			<video
				autoPlay
				loop
				muted
				playsInline
				className="absolute inset-0 w-full h-full object-cover"
			>
				<source src={videoSrc} type="video/mp4"/>
			</video>
		</div>
	);
}

export default VideoViewer;