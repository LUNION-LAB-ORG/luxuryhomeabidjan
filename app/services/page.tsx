import LogoShowcase from "@/components/home/logo-showcase/logo-showcase";
import TestimonialsSection from "@/components/qui-sommes-nous/testimonials/testimonials-section";
import HeroSection from "@/components/page-service/hero/hero-section";
import ServicesBody from "@/components/page-service/service-body";
import BlogSection from "@/components/qui-sommes-nous/blog/blog-section";
import HeroService from "@/components/page-service/hero-sevices";
// import ServiceBody from "@/components/service/servicebody/servicebody2";


export default function Service(){
    return(
        <div>
            <HeroService/>
            {/* <HeroSection/> */}
            <ServicesBody/>
            <BlogSection/>
        </div>
    );
}