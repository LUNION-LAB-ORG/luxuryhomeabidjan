"use client";
import React from 'react';
import {cn} from "@/lib/utils";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {SplitText} from 'gsap/SplitText';


function SectionTitle({title, subtitle, className}: { title?: string, subtitle?: string, className?: string }) {
	const sectionTitleRef = React.useRef<HTMLDivElement>(null);
	const heading = React.useRef<HTMLHeadingElement>(null);
	const subheading = React.useRef<HTMLHeadingElement>(null);

	useGSAP(
		(context) => {
			const text = new SplitText(heading.current, {type: "words"});
			const subText = new SplitText(subheading.current, {type: "words"});

			gsap.from(text.words, {
				opacity: 0,
				yPercent: 100,
				duration: 1,
				stagger: 0.05,
				ease: "power3.out",
				scrollTrigger: {
					trigger: heading.current,
					start: "top 90%",
					end: "bottom top",
					// toggleActions: "play none none reverse",
					markers: false,
				},
			});

			gsap.from(subText.words, {
				opacity: 0,
				yPercent: 100,
				duration: 1,
				stagger: 0.05,
				ease: "power3.out",
				delay: 0.5,
				scrollTrigger: {
					trigger: subheading.current,
					start: "top 90%",
					end: "bottom top",
					// toggleActions: "play none none reverse",
					markers: false,
				},
			});
		},
		{scope: sectionTitleRef}
	);

	return (
		<div ref={sectionTitleRef} className={cn("mb-8", className)}>
			<h1 ref={heading} className="text-5xl font-bold text-gray-900 mb-2">
				{title}
			</h1>
			<h2 ref={subheading} className="text-xl font-semibold text-gray-900">
				{subtitle}
			</h2>
		</div>
	);
}

export default SectionTitle;