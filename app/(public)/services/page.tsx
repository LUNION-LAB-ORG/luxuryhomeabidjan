import ServicesBody from "@/components/page-service/service-body";
import BlogSection from "@/components/qui-sommes-nous/blog/blog-section";
import HeroService from "@/components/page-service/hero-sevices";


export default function Service(){
    return(
        <div>
            <HeroService/>
            <ServicesBody/>
            <BlogSection/>
        </div>
    );
}