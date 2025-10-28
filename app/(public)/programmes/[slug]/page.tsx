import React from 'react';
import VideoViewer from "@/components/common/video-viewer";
import {CDN_URL, exclusiveProperties} from "@/config";
import ContactFixedButton from "@/components/contact-fixed-button";
import Image from "next/image";
import ProgrammeBiensItem from "@/components/programes-projet/programme-biens-item";
import ConseillerSection from "@/components/programes-projet/conseiller-section";
import SectionTitle from "@/components/SectionTitle";
import {Button} from "@/components/ui/button";
import Link from "next/link";

type Props = {
	params: Promise<{
		slug: string;
	}>;
};

async function ProgrammeDetailsPage({params}: Props) {
	const {slug} = await params;
	return (
		<div className="min-h-screen">
			<VideoViewer videoSrc={`${CDN_URL}/assets/videos/bg-video.mp4`}/>
			<ContactFixedButton
				defaultMessage={`Bonjour, Je suis intéressé(e) par ${slug}`}
			/>
			<section className="full-screen-section mt-0">
				<picture>
					<source
						media="(min-width:1280px)"
						srcSet={`${CDN_URL}/programmes/mangrove/hero/vous_meritez_un_heritage_1920X1080px.jpg`}
					/>
					<source
						media="(min-width:768px)"
						srcSet={`${CDN_URL}/programmes/mangrove/hero/vous_meritez_un_heritage_1024X768px.png`}
					/>
					<img
						src={`${CDN_URL}/programmes/mangrove/hero/vous_meritez_un_heritage_600X800px.png`}
						alt={`Programme ${slug}`}
						className="w-full h-full object-cover"
					/>
				</picture>
			</section>
			<section className="min-h-screen py-20 lg:px-8 bg-black flex flex-col space-y-20 -mt-0.5">
				{exclusiveProperties.slice(0, 2).map((bien, index) => (
					<ProgrammeBiensItem
						key={bien.id}
						bien={bien}
						reverse={index % 2 != 0}
					/>
				))}
			</section>
			<ConseillerSection/>
			<section className="min-h-screen pb-20 px-8 bg-white flex flex-col items-baseline">
				<SectionTitle
					title="Emplacement"
					subtitle="Découvrez où se situe notre programme exclusif"
				/>
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d46561.630416443644!2d-3.979655094254752!3d5.40772574987806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2sci!4v1761535441416!5m2!1sfr!2sci"
					allowFullScreen={false}
					loading="lazy"
					className="border-none w-full h-96 rounded-lg mb-10"
					referrerPolicy="no-referrer-when-downgrade"
				/>
				<Button
					variant="outline"
					asChild
				>
					<Link
						href="https://www.google.com/maps/place/Abidjan,+C%C3%B4te+d'Ivoire/@5.4077257,-3.9796551,12z/data=!3m1!4b1!4m5!3m4!1s0xfb6c8b9f4f1f3d1:0x3c13b5f5e5e5e5e5!8m2!3d5.3096609!4d-4.0126596"
						target="_blank"
						rel="noopener noreferrer"
					>
						Voir sur Google Maps
					</Link>
				</Button>
			</section>
		</div>
	);
}

export default ProgrammeDetailsPage;