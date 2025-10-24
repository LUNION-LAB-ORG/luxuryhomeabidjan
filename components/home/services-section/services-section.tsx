"use client";
import ServicesCarousel from "@/components/home/services-section/services-carousel";
import SectionTitle from "@/components/SectionTitle";

export function ServicesSection() {
	return (
		<section className="my-16">
			<SectionTitle
				className="container-8xl mb-8"
				title="Nos services"
				subtitle="Sous titre des services"
			/>
			<ServicesCarousel/>
		</section>
	);
}
