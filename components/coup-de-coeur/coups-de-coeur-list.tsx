"use client";
import React, {useRef} from 'react';
import CoupDeCoeurCard from "@/components/coup-de-coeur/coup-de-coeur-card";
import {IBien} from "@/data/coups-de-coeur.type";
import {useGSAP} from "@gsap/react";
import {gsap} from "gsap";

function CoupsDeCoeurList({biens}: { biens: IBien[] }) {
	const container = useRef<HTMLDivElement | null>(null);

	useGSAP(() => {
		if (!container.current) return;

		const cards = gsap.utils.toArray("[data-coup-card]") as HTMLElement[];

		cards.forEach((card, index) => {
			const fromDirection = index % 2 === 0 ? -30 : 30; // gauche / droite

			gsap.from(card, {
				x: fromDirection,
				opacity: 0,
				duration: 0.5,
				ease: "power1.out",
				scrollTrigger: {
					trigger: card,
					start: "top 90%",
					// toggleActions: "play none none reverse",
					// markers: true
				},
			});
		});
	}, {scope: container});

	return (
		<div ref={container} className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full py-4">
			{biens.map((bien) => (
				<CoupDeCoeurCard key={bien.id} bien={bien} data-coup-card/>
			))}
		</div>
	);
}

export default CoupsDeCoeurList;