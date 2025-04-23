import HeroCarousel from "@/components/home/carousel/HeroCarousel";

const heroSlides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Découvrez nos biens d'exception au cœur d'Abidjan",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Des villas de prestige avec vue imprenable",
    description: "Confort et élégance dans les quartiers les plus prisés",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Appartements haut de gamme au design contemporain",
    description: "L'alliance parfaite entre modernité et tradition",
  },
];
export default function HeroSection() {
  return (
    <div className="w-full">
      <HeroCarousel
        slides={heroSlides}
        className="max-w-screen-xl px-4 mx-auto h-[80vh]"
      />
    </div>
  );
}
