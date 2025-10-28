import React from 'react';
import {Check} from "lucide-react";
import SectionTitle from "@/components/SectionTitle";

function CaracteristiquesBien({features, home}: {features: Array<{icon: React.ReactNode; label: string}>; home: any}) {
	return (
		<section className="px-6 md:px-12 py-16 bg-white rounded-t-3xl">
			<SectionTitle
				title="Caractéristiques"
			/>

			<div className="p-8 rounded-2xl ring ring-black mb-12">
				<h3 className="font-semibold text-lg mb-6 text-gray-800">Aperçu</h3>

				<div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-6">
					{features.map((feat, idx) => (
						<div
							key={idx}
							className="flex items-center gap-3 text-black text-base"
						>
							{feat.icon}
							<span>{feat.label}</span>
						</div>
					))}
				</div>

				<p className="text-gray-700 leading-relaxed text-[15px]">
					Découvrez la <strong>{home.title}</strong>, un bien d’exception
					situé à <strong>{home.localisation}</strong>. Cet espace allie
					design moderne, matériaux nobles et confort absolu. Chaque détail a
					été pensé pour offrir une expérience résidentielle haut de gamme.
				</p>
			</div>

			{/* Commodités */}
			<div className="bg-white p-8 rounded-2xl ring ring-black">
				<h3 className="text-2xl font-semibold mb-8 text-gray-800">
					Commodités et prestations
				</h3>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
					{home.interiorDetails && <DetailList title="Interior Details" items={home.interiorDetails}/>}
					{home.outdoorDetails && <DetailList title="Outdoor Details" items={home.outdoorDetails}/>}
					{home.utilities && <DetailList title="Utilities" items={home.utilities}/>}
					{home.otherFeatures && <div className="sm:col-span-2 lg:col-span-3 gap-10">
						<DetailList
							title="Other Features"
							items={home.otherFeatures}
							grid
						/>
					</div>}
				</div>
			</div>
		</section>
	);
}

/* Liste de détails */
function DetailList({title, items, grid}: {
	title: string;
	items: string[];
	grid?: boolean;
}) {
	return (
		<div>
			<h4 className="text-base font-medium text-black mb-3">{title}</h4>
			<ul
				className={`${
					grid ? "grid grid-cols-2 sm:grid-cols-3 gap-3" : "space-y-2"
				}`}
			>
				{items.map((item, i) => (
					<li
						key={i}
						className="flex items-center  text-sm text-gray-700 hover:text-gray-900 transition-colors"
					>
						<Check className="mr-2 size-4"/>
						<span>{item}</span>
					</li>
				))}
			</ul>
		</div>
	);
}

export default CaracteristiquesBien;