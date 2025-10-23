"use client";
import ServicesCarousel from "@/components/home/services-section/services-carousel";

export function ServicesSection() {
	return (
		<section className="mt-16">
			<h2 className="container-8xl mb-6 lg:mb-10 font-bold text-[24px] md:text-[30px] lg:text-[36px]">
				Explorez nos services
			</h2>
			<ServicesCarousel/>
		</section>
	);
}
