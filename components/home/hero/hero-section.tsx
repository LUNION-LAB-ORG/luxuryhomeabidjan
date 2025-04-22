// components/HeroSlider.jsx
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import Image from 'next/image'

const slides = [
  {
    src: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Slide 1',
  },
  {
    src: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Slide 2',
  },
  {
    src: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Slide 3',
  },
]

export default function HeroSection() {
  return (
    <div className="w-full h-[700px] md:rounded-2xl md:px-10">
      <Swiper
        modules={[Autoplay, Pagination]}  // On ajoute le module Autoplay ici
        autoplay={{
          delay: 3000, // Temps entre chaque slide (en ms)
          disableOnInteraction: false, // Le défilement ne sera pas arrêté après une interaction de l'utilisateur
        }}
        pagination={{ clickable: true }}
        loop={true}
        className="w-full h-full md:rounded-2xl"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Image
              src={slide.src}
              alt={slide.alt}
              layout="fill"
              objectFit="cover"
              className="w-full h-full"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}





// import Image from "next/image";
// import { Button } from "@/components/ui/button";

// export function HeroSection() {
//   return (
//     <section className="relative h-[80vh] w-full overflow-hidden">
//       {/* Image de fond */}
//       <div className="absolute inset-0">
//         <Image
//           src="/assets/images/backgrounds/hero.png"
//           alt="Luxury living room with modern furniture and large windows overlooking greenery"
//           fill
//           priority
//           className="object-cover"
//           sizes="100vw"
//         />
//         {/* Overlay sombre pour améliorer la lisibilité */}
//         <div className="absolute inset-0 bg-black/20" />
//       </div>

//       {/* Contenu du Hero */}
//       <div className="relative z-10 flex h-full w-full flex-col items-center justify-end pb-16 text-center text-white">
//         <h1 className="max-w-4xl px-4 text-4xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl">
//           L&apos;immobilier en Afrique, autrement.
//         </h1>
//       </div>
//     </section>
//   );
// }
