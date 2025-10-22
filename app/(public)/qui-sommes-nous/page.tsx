import PhilosophySection from "@/components/qui-sommes-nous/philosophy/philosophy-section";
import LogoShowcase from "@/components/home/logo-showcase/logo-showcase";
import TestimonialsSection from '@/components/qui-sommes-nous/testimonials/testimonials-section';
import BlogSection from '@/components/qui-sommes-nous/blog/blog-section';
import Header from "@/components/qui-sommes-nous/header";
import AboutSection2 from "@/components/qui-sommes-nous/about-section2";
import Conseil from "@/components/qui-sommes-nous/conseil";
import Equipe from "@/components/qui-sommes-nous/equipe";


export default function QuiSommesNous(){
    return(
        <div>
            <Header/>
            <AboutSection2/>
            <Conseil/>
            <Equipe/>
            <PhilosophySection/>
            <LogoShowcase/>
            <TestimonialsSection/>
            <BlogSection/>
        </div>
    );
}