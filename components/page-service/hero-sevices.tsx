"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import {
  Autoplay,
  EffectCoverflow,
  Pagination,
} from "swiper/modules"; // <-- ✅ ici !
import "swiper/css"; // Importation du CSS de base
import "swiper/css/effect-coverflow"; // Importation du CSS pour l'effet Coverflow
import "swiper/css/parallax"; // Importation du CSS pour l'effet Parallax
import 'swiper/css/pagination';

const images = [
  "/assets/images/backgrounds/Slide-service1.jpg",
  "/assets/images/backgrounds/Slide-service2.jpg",
  "/assets/images/backgrounds/Slide-service2.jpg",
  "/assets/images/backgrounds/Slide-service1.jpg",
  "/assets/images/backgrounds/Slide-service2.jpg",
  "/assets/images/backgrounds/Slide-service1.jpg",
  "/assets/images/backgrounds/Slide-service2.jpg",
  "/assets/images/backgrounds/Slide-service1.jpg",
    "/assets/images/backgrounds/Slide-service1.jpg",
  "/assets/images/backgrounds/Slide-service2.jpg",
  "/assets/images/backgrounds/Slide-service1.jpg",

];

function HeroSevices() {
  return (
    //     <Swiper
    //     modules={[Autoplay, EffectCoverflow, Pagination]} // Ajout de Pagination
    //     effect="coverflow"
    //     grabCursor={true}
    //     centeredSlides={true}
    //     slidesPerView={3} // Nous gardons 3 images visibles à la fois
    //     loop={true}
    //     autoplay={{
    //       delay: 2500,
    //       disableOnInteraction: false,
    //     }}
    //     coverflowEffect={{
    //       rotate: 40, // Angle de rotation des slides (ajuste pour plus ou moins de profondeur)
    //       stretch: 20, // Augmente un peu l'écart entre les images
    //       depth: 200, // Proximité des images arrière
    //       modifier: 1.5, // Ajuste l'intensité de l'effet
    //       slideShadows: true, // Ajoute des ombres pour l'effet de profondeur
    //     }}
    //     pagination={{
    //       clickable: true,
    //       type: 'bullets', // Utilise des points de pagination
    //     }}
    //     className="w-full h-[300px] relative"
    //   >
    //     {images.map((src, index) => (
    //       <SwiperSlide key={index}>
    //         <img
    //           src={src}
    //           alt={`Slide ${index}`}
    //           className="w-full h-full object-cover rounded-lg"
    //         />
    //       </SwiperSlide>
    //     ))}
    //   </Swiper>

    <div className="w-[90%]] mx-auto overflow-hidden ">
     {/* Effet nuage à gauche */}
     {/* <div className="absolute top-0 left-0 w-[100px] h-full bg-gradient-to-r from-white grayscale blur-2xl via-transparent to-transparent"></div> */}

    {/* Effet nuage à droite */}
    {/* <div className="absolute top-0 right-0 w-[100px] h-full bg-gradient-to-l from-white via-transparent to-transparent"></div> */}


 <Swiper
  modules={[Autoplay, EffectCoverflow, Pagination]}
  effect="coverflow"
  grabCursor={true}
  centeredSlides={true}
  slidesPerView={3}
  loop={true}
  autoplay={{
    delay: 2500,
    disableOnInteraction: false,
  }}
  coverflowEffect={{
    rotate: 0,
    stretch: 50,
    depth: 200,
    modifier: 1,
    slideShadows: true,
  }}
  pagination={{
    clickable: true,
  }}
    breakpoints={{
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2, // sm
    },
    1024: {
      slidesPerView: 3, // lg et +
    },
  }}

  className="w-full h-[500px] swiper-slide-custom relative"
>
  {images.map((src, index) => (
    <SwiperSlide key={index}>
      <img
        src={src}
        alt={`Slide ${index}`}
        className="w-[90%] sm:w-full  llg:min-w-[1000px] h-full object-cover rounded-[100px]"
      />
    </SwiperSlide>
  ))}
</Swiper>


    </div>
  );
}

export default HeroSevices;
