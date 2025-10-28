import Header from "@/components/qui-sommes-nous/header";
import AboutSection2 from "@/components/qui-sommes-nous/about-section2";
import Conseil from "@/components/qui-sommes-nous/conseil";
import {TeamSection} from "@/components/team/team-section";


export default function QuiSommesNous(){
    return(
        <div>
            <Header/>
            <AboutSection2/>
            <Conseil/>
            <TeamSection/>
            {/*<PhilosophySection/>*/}
            {/*<LogoShowcase/>*/}
            {/*<TestimonialsSection/>*/}
            {/*<BlogSection/>*/}
        </div>
    );
}