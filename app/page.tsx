import HeroSection from "@/components/home/hero/hero-section";
import {WhyChooseUs} from "@/components/home/why-choose-us/why-choose-us";
import {ServicesSection} from "@/components/home/services-section/services-section";
import {PropertyCarousel} from "@/components/home/property/property";
import {ValuesContactSection} from "@/components/home/values-contact/values-contact-section";
import {ExclusiveListings} from "@/components/home/exclusive-listings/exclusive-listings";
import LogoShowcase from "@/components/home/logo-showcase/logo-showcase";
import MrLHA from "@/components/home/mrlha/mrlha";
import FilterForm from "@/components/home/filter-form";

export default function Home() {
	return (
		<>
			<HeroSection/>
			<FilterForm/>
			<ExclusiveListings/>
			<WhyChooseUs/>
			<ServicesSection/>
			<PropertyCarousel/>
			<ValuesContactSection/>
			<LogoShowcase/>
			<MrLHA/>
		</>
	);
}
