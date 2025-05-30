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
import "swiper/css/pagination";

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
    <div className="w-[90%]] mx-auto overflow-hidden ">

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
