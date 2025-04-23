"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useState, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

// Types pour les slides
interface SlideItem {
  id: number;
  image: string;
  title: string | React.ReactNode;
  description?: string;
}

interface HeroCarouselProps {
  slides: SlideItem[];
  autoplayDelay?: number;
  className?: string;
}

export default function HeroCarousel({
  slides,
  autoplayDelay = 0,
  className = "",
}: HeroCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slideChanged: (slider) => setCurrentSlide(slider.track.details.rel),
  });

  // Autoplay
  useEffect(() => {
    const autoplay = () => {
      instanceRef.current?.next();
    };
    if (autoplayDelay > 0) {
      const interval = setInterval(autoplay, autoplayDelay);
      return () => clearInterval(interval);
    }
  }, [autoplayDelay, instanceRef]);

  return (
    <div className={cn("relative w-full overflow-hidden rounded-2xl", className)}>
      <div ref={sliderRef} className="keen-slider h-full">
        {slides.map((slide, i) => (
          <div
            key={i}
            className="keen-slider__slide relative flex items-center justify-center"
          >
            <Image
              src={slide.image}
              alt={slide.title?.toString() || ""}
              fill
              className="object-cover"
              priority={i === 0}
            />
            <div className="absolute z-[2] w-full bottom-24 left-1/2 -translate-x-1/2 text-white text-3xl md:text-7xl font-bold text-center px-4 drop-shadow-xl">
              {slide.title}
            </div>
            {/* Overlay black transparent */}
            <div className="absolute z-[1] w-full h-full bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          </div>
        ))}
      </div>
      {/* Dots glass effect */}
      <div className="absolute  bottom-6 left-1/2 -translate-x-1/2 backdrop-blur-md bg-[#333]/50 px-4 py-2 rounded-full flex items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => instanceRef.current?.moveToIdx(i)}
            className={`transition-all duration-300 ${
              currentSlide === i
                ? "w-6 h-2 rounded-full bg-white"
                : "w-2 h-2 rounded-full bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
