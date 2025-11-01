import React from 'react';
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import Image from "next/image";

const textFake = [
	{
		title: "un gain de temps et de sérénité considérable",
		content: "Gérer soi-même son bien demande un investissement personnel important, surtout si l’on possède plusieurs logements ou que l’on habite loin de son bien. Entre la recherche de locataires, la rédaction des baux, la perception des ...",
		image: "/assets/images/services/gestion.png"
	},
	{
		title: "une expertise juridique et administrative",
		content: "La gestion locative est encadrée par de nombreuses lois et réglementations qui évoluent régulièrement. En confiant la gestion de votre bien à des professionnels, vous bénéficiez de leur expertise pour assurer la conformité juridique et administrative de votre location.",
		image: "/assets/images/services/expertise.png"
	},
	{
		title: "une optimisation financière de votre investissement",
		content: "Les professionnels de la gestion locative ont une connaissance approfondie du marché immobilier local et peuvent vous aider à fixer un loyer compétitif, à minimiser les périodes de vacance locative et à maximiser le rendement de votre investissement.",
		image: "/assets/images/services/transaction.png"
	},
];

function ServiceDetailsGallery() {
	const gallery = React.useRef<HTMLDivElement>(null);
	const rightImage = React.useRef<HTMLDivElement>(null);
	const textRefs = React.useRef<(HTMLDivElement | null)[]>([]);

	useGSAP(() => {
		gsap.set(".photo:not(:first-child)", {
			opacity: 0,
			scale: 0.5,
			x: 100,
			y: 50
		})

		const animation = gsap.to(".photo:not(:first-child)", {
			opacity: 1,
			scale: 1,
			duration: 0.5,
			stagger: 1,
			x: 0,
			y: 0,
			ease: "power1.inOut"
		})

		ScrollTrigger.create({
			trigger: gallery.current,
			start: "top 9%",
			end: "bottom bottom",
			pin: rightImage.current,
			animation: animation,
			scrub: true,
		});
	}, {scope: gallery});

	return (
		<section ref={gallery} className="flex flex-wrap">
			<div className="md:w-1/2 px-2 text-center md:text-left">
				{textFake.map((item) => (
					<ServicesTextItem
						key={item.title}
						title={item.title}
						content={item.content}
						image={item.image}
					/>
				))}
			</div>
			<div className="w-1/2 viewport-minus-nav max-md:hidden" ref={rightImage}>
				{textFake.map((item, idx) => (
					<div
						key={item.image + idx}
						className="photo absolute w-full h-full bg-cover bg-center"
						style={{backgroundImage: `url(${item.image})`}}
					/>
				))}
			</div>
		</section>
	);
}

function ServicesTextItem({title, content, image}: { title: string, content: string, image: string }) {
	const containerRef = React.useRef<HTMLDivElement>(null);
	const titleRef = React.useRef<HTMLDivElement>(null);
	const contentRef = React.useRef<HTMLDivElement>(null);
	const imageRef = React.useRef<HTMLDivElement>(null);

	useGSAP(() => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: containerRef.current,
				start: "top bottom",
				end: "bottom center",
				scrub: 1,
				markers: false
			}
		});

		tl.from(imageRef.current, {
			opacity: 0,
			scale: 0.8,
			y: 50,
			duration: 1
		}, 0)
			.from(titleRef.current, {
				opacity: 0,
				y: 30,
				duration: 0.8
			}, 0.3)
			.from(contentRef.current, {
				opacity: 0,
				y: 30,
				duration: 0.8
			}, 0.5);
	}, {scope: containerRef});

	return (
		<div ref={containerRef} className="max-w-sm viewport-minus-nav flex flex-col justify-center mx-auto">
			<div ref={imageRef}>
				<Image
					src={image}
					alt={title}
					width={400}
					height={300}
					className="mb-6 rounded-lg md:hidden"
				/>
			</div>
			<h3 className="uppercase font-semibold text-3xl mb-4" ref={titleRef}>
				{title}
			</h3>
			<p className="text-sm text-[#595959]" ref={contentRef}>
				{content}
			</p>
		</div>
	);
}

export default ServiceDetailsGallery;