import HeroCarousel from "@/components/home/carousel/HeroCarousel";
import HeroCarouselFade from "@/components/home/carousel/HeroCarouselFade";

const heroSlides = [
  {
    id: 1,
    image: "/assets/images/carrousel/carrousel_1.png",
    title: "L’immobilier en Afrique, autrement.",
    description: "",
  },
  {
    id: 2,
    image: "/assets/images/carrousel/carrousel_2.png",
    title: "Investir en Côte d’Ivoire",
    description: "",
  },
  {
    id: 3,
    image: "/assets/images/carrousel/carrousel_3.png",
    title: <span>LUXURY HOME ABIDJAN<br/>Votre Partenaire Conseil</span>,
    description: "",
  },
  {
    id: 4,
    image: "/assets/images/carrousel/carrousel_4.png",
    title: "Découvrez nos biens d’exception au cœur d’Abidjan",
    description: "",
  },
  {
    id: 5,
    image: "/assets/images/carrousel/carrousel_5.png",
    title: "Charme, Confort et Sécurité",
    description: "",
  },
  {
    id: 6,
    image: "/assets/images/carrousel/carrousel_6.png",
    title: <span>LUXURY HOME ABIDJAN<br/>Une collection exclusive</span>,
    description: "",
  },
  {
    id: 7,
    image: "/assets/images/carrousel/carrousel_7.png",
    title: "Notre promesse: Vous faire revenir",
    description: "",
  },
];
export default function HeroSection() {
  return (
    <div className="w-full ooverflow-hidden">
      <HeroCarouselFade slides={heroSlides} autoplayDelay={5000} className="max-w-full w-full mx-auto ww-[95%] h-[calc(100vh-300px)] md:h-[calc(100vh-120px)]" />
    </div>
  );
}
