import DigitalAssistantLanding from "@/components/assistance/digital-assistant/digital-assistant-landing";
import FacialExpressions from "@/components/assistance/facial-expressions/facial-expressions";
import HeroSection from "@/components/assistance/hero/hero-section";
import SocialMediaSection from "@/components/assistance/social-media/social-media-section";


export default async function  Assistance(){
    return(
        <div>
            <HeroSection/>
            <DigitalAssistantLanding/>
            <SocialMediaSection/>
            <FacialExpressions/>
        </div>
    );
}