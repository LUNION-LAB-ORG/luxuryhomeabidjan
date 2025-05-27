import HeroSection from "@/components/programes/hero/hero";
import InvestmentGuide from "@/components/programes/investment/investment-guide";
import PropertyCategories from "@/components/programes/property-categories/property-categories";
import PropertyListings from "@/components/programes/property-listing/property-listings";


export default function Program(){
    return(
        <div>
            <HeroSection/>
            <PropertyListings/>
            <InvestmentGuide/>
            <PropertyCategories/>
        </div>
    );
}