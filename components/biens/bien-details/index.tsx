"use client";

import {IBien} from "@/data/coups-de-coeur.type";
import {Bath, Bed, MapPin, Ruler} from "lucide-react";
import SectionTitle from "../../SectionTitle";
import VideoViewer from "@/components/common/video-viewer";
import CaracteristiquesBien from "@/components/biens/bien-details/caracteristiques-bien";
import PhotoModal from "@/components/biens/bien-details/photo-modal";
import BienGalerieCarousel from "@/components/biens/bien-details/bien-galerie-carousel";

export default function BienDetails({home}: { home: IBien }) {
	const features = [
		{
			icon: <Ruler className="w-6 h-6 text-black"/>,
			label: `${home.surface} m²`,
		},
		{
			icon: <Bed className="w-6 h-6 text-black"/>,
			label: `${home.chambre} Chambres`,
		},
		{
			icon: <Bath className="w-6 h-6 text-black"/>,
			label: `${home.salleDeBain} Salles de bain`,
		},
		{
			icon: <MapPin className="w-6 h-6 text-black"/>,
			label: home.localisation,
		},
	];

	return (
		<div className="min-h-screen text-gray-900">
			{/* Titre principal */}
			<section className="py-10">
				<div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 container-8xl">
					<div className="">
						<p className="text-lg text-gray-600 mt-3">{home.type}</p>
						<h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900">
							{home.title}
						</h1>
						<div className="mt-2 inline-block bg-black text-white font-semibold px-4 py-1 rounded-full md:text-lg">
							{home.localisation}
						</div>
					</div>

					<div className="text-xl md:text-2xl font-semibold text-black mt-4 md:mt-0">
						{home.type === "Vente"
							? home.price.replace("/nuitée", "")
							: home.price}
					</div>
				</div>

				{/* Vidéo */}
				{home.video && <VideoViewer animate videoSrc={home.video}/>}
			</section>

			<section className="mt-12 relative">
				<div className="flex justify-between items-center container-8xl">
					<SectionTitle
						title="Galerie du bien"
					/>
					<PhotoModal
						home={home}
					/>
				</div>
				<BienGalerieCarousel
					home={home}
				/>
			</section>

			<CaracteristiquesBien
				features={features}
				home={home}
			/>
		</div>
	);
}
