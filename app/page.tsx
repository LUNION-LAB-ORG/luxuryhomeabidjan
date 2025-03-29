import { HeroSection } from '@/components/home/hero/hero-section';
import Lead from '../components/home/navbar/lead';
import { SearchBar } from '../components/home/searchbar/search-bar';
import { WhyChooseUs } from '../components/home/why-choose-us/why-choose-us';
import { ServicesSection } from '../components/home/services-section/services-section';
import { PropertyCarousel } from '../components/home/property/property';
import { ValuesContactSection } from '../components/home/values-contact/values-contact-section';
import { ExclusiveListings } from '../components/home/exclusive-listings/exclusive-listings';



export default function Home() {
  return (
    <div>
      <Lead/>
      <HeroSection/>
      <SearchBar/>
      <WhyChooseUs/>
      <ServicesSection/>
      <PropertyCarousel/>
      <ValuesContactSection/>
      <ExclusiveListings/>
    </div>
  );
}
