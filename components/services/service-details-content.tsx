"use client";
import React, {useRef} from 'react';
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {IconFileDescription} from "@tabler/icons-react";
import Image from "next/image";
import ServiceDetailsDescriptionText from "@/components/services/service-details-description-text";
import ServiceDetailsGallery from "@/components/services/service-details-gallery";
import ServiceNavButtons from "@/components/services/service-nav-buttons";


function ServiceDetailsContent() {
	const containerRef = useRef(null);
	useGSAP(() => {
		gsap.to(containerRef.current, {
			transform: "translate(0px, 50px)",
			scrollTrigger: {
				trigger: containerRef.current,
				start: "top 33%",
				end: "bottom top",
				scrub: true,
			},
			ease: "none",
		});
	}, {scope: containerRef});

	return (
		<div>
			<section className="relative z-[2]">
				<div
					className="pt-20 relative z-1 min-h-[900px] h-screen max-md:min-h-[765px] max-lg:min-h-[720px] max-lg:max-h-[790px] flex flex-col items-center bg-[#F5F5F5]">
					<div className="bg-white rounded-2xl py-2 px-3">
						<IconFileDescription size={55} stroke={1}/>
					</div>
					<div className="font-medium text-center text-[#090909] leading-14 mt-10">
						<h2 className="text-base md:text-lg lg:text-2xl">
							Gestion plus saine transparente
						</h2>
						<h1 className="font-extrabold text-3xl md:text-4xl lg:text-7xl mt-4">
							Gestion & Syndic.
						</h1>
					</div>
				</div>
				<div className="relative bg-white z-[2]">
					<div className="will-change-transform absolute -top-[450px] w-full" ref={containerRef}>
						<figure className="px-10 absolute w-full">
							<Image
								src="/assets/images/img/gestion-img1.jpg"
								alt="Service Details Image"
								width={1920}
								height={1080}
								className="w-full h-auto object-cover"
							/>
						</figure>
					</div>
					<ServiceDetailsDescriptionText/>
				</div>
			</section>
			<ServiceDetailsGallery/>
			<ServiceNavButtons/>
		</div>
	);
}

export default ServiceDetailsContent;