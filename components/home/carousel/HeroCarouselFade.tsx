"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

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

export default function HeroCarouselFade({
  slides,
  autoplayDelay = 5000,
  className = "",
}: HeroCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, autoplayDelay);

    return () => clearTimeout(timer);
  }, [currentSlide, autoplayDelay, slides.length]);

  return (
    <div className={cn("bg-blue-800 relative w-full h-full overflow-hidden", className)}>
      {slides.map((slide, i) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            i === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title?.toString() || ""}
            fill
            className="object-cover"
            priority={i === 0}
          />
          <div className="absolute z-20 w-full bottom-24 left-1/2 -translate-x-1/2 text-white text-3xl md:text-7xl font-bold text-center px-4 drop-shadow-xl">
            {slide.title}
          </div>
          <div className="absolute z-10 w-full h-full bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        </div>
      ))}

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 backdrop-blur-md bg-[#333]/50 px-4 py-2 rounded-full flex items-center gap-2 z-30">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
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
