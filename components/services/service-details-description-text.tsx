"use client";
import React, {useRef} from 'react';
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

function ServiceDetailsDescriptionText() {
	const textRef = useRef(null);

	useGSAP(() => {
		gsap.from(textRef.current, {
			opacity: 0,
			yPercent: 20,
			scrollTrigger: {
				trigger: textRef.current,
				start: "top 80%",
				end: "bottom top",
			},
			ease: "none",
		});
	}, {scope: textRef});
	return (
		<div className="max-w-7xl mx-auto px-6 lg:px-8 pt-[220px] pb-20">
			<p className="text-lg text-[#595959] text-justify" ref={textRef}>
				Posséder un bien immobilier destiné à la location est une excellente manière de se constituer un
				patrimoine et de générer des revenus passifs. Cependant, la gestion locative implique de nombreuses
				responsabilités, du choix du locataire à l’entretien du bien, en passant par la gestion des loyers et les
				démarches administratives. Tous ces aspects peuvent vite devenir chronophages et source de stress.
				Alors, faut-il gérer son bien soi-même ou faire appel à une agence spécialisée ? Découvrez pourquoi de
				plus en plus de propriétaires choisissent de déléguer cette mission à des experts et quels sont les réels
				bénéfices d’une gestion locative professionnelle.
			</p>
		</div>
	);
}

export default ServiceDetailsDescriptionText;