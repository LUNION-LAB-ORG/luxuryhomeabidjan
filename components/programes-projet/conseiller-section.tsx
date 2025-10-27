import React from 'react';
import Image from "next/image";
import {CDN_URL} from "@/config";

function ConseillerSection() {
	return (
		<section className="full-screen-section overflow-hidden px-8 py-12">
			<p className="text-center text-xl text-[#595959] max-w-6xl mx-auto mb-6">
				Nos conseillers en vente de biens de luxe mettent à votre disposition une vaste expérience pour accompagner
				propriétaires et investisseurs dans la recherche de biens parfaitement adaptés à leurs besoins.
			</p>
			<div className="relative grid lg:grid-cols-2 gap-2">
				<Image
					src={`${CDN_URL}/programmes/illustrations/1.jpg`}
					alt={`Programme illustration 1`}
					width={885}
					height={590}
					className="object-cover w-full h-full"
				/>
				<Image
					src={`${CDN_URL}/programmes/illustrations/2.jpg`}
					alt={`Programme illustration 2`}
					width={960}
					height={1080}
					className="object-cover w-full h-full"
				/>
			</div>
		</section>
	);
}

export default ConseillerSection;