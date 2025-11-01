"use client";

import Image from "next/image";
import {useEffect, useState} from "react";

// Composant principal
export default function WhyChooseUsSection() {
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		setIsLoaded(true);
	}, []);

	return (
		<div
			className="relative bg-no-repeat bg-cover bg-center  overflow-hidden viewport-minus-nav bg-white shadow-lg"
			style={{backgroundImage: "url(/assets/images/coup-de-coeur/nous.jpg)"}}
		>
			{/* Image principale */}
			<div className="relative w-full overflow-hidden">
				<Image
					src="/assets/images/coup-de-coeur/nous.jpg"
					alt="Salon moderne et élégant"
					fill
					loading="lazy"
					className={`object-cover transition-opacity duration-700 ${
						isLoaded ? "opacity-100" : "opacity-0"
					}`}
				/>
			</div>

			{/* Overlay textuel semi-transparent */}
			<div className="absolute bottom-0 left-0 right-0 bg-black/60  text-white p-8 pb-12">
				<h2 className="text-4xl font-bold text-center mb-6">
					Pourquoi nous choisir ?
				</h2>

				<p className="text-sm lg:text-xl md:text-md  leading-relaxed mb-4 max-w-4xl mx-auto">
					<span className="font-bold">Luxury Home Abidjan</span>, fondée par des passionnés de l’immobilier, incarne
					une vision nouvelle et ambitieuse du secteur immobilier en Afrique, c’est la fusion entre la <span
					className="font-bold">passion</span> et
					l’<span className="font-bold">excellence</span>.
				</p>

				<p className="text-sm lg:text-xl md:text-md  leading-relaxed mb-4 max-w-4xl mx-auto">
					Notre équipe diversifiée réinvente l’immobilier africain en plaçant le
					client au cœur de chaque projet, Bien plus qu’une transaction, nous créons des projets de vie.
				</p>

				<p className="text-sm lg:text-xl md:text-md leading-relaxed mb-6 max-w-4xl mx-auto">
					Notre approche est basée sur une écoute pour <span className="font-bold">comprendre</span>, comprendre pour <span className="font-bold">conseiller</span>, conseiller pour <span className="font-bold">réussir</span>.
				</p>

				{/* Philosophie & fierté */}
				<div className="text-center">
         <span className="font-bold text-lg">
          LHA,
        </span>
					<br/>
					l'immobilier en Afrique autrement.
				</div>
			</div>
		</div>
	);
}
