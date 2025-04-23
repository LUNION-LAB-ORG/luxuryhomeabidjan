"use client"

import Image from "next/image"

export default function PhilosophySection() {
  const slides = [
    {
      id: 1,
      image: "/assets/images/illustrations/qui-sommes-nous/philosophy.png",
      alt: "Luxury bedroom with wooden tray",
    },
    {
      id: 2,
      image: "/assets/images/illustrations/qui-sommes-nous/philosophy.png",
      alt: "Luxury property interior",
    },
    {
      id: 3,
      image: "/assets/images/illustrations/qui-sommes-nous/philosophy.png",
      alt: "Elegant living space",
    },
    {
      id: 4,
      image: "/assets/images/illustrations/qui-sommes-nous/philosophy.png",
      alt: "Premium real estate offering",
    },
  ]

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-2 md:px-4 lg:px-36">
      <div className="text-center mb-8 text-xl  md:text-3xl xl:text-5xl font-bold">
        <h2 className="">Notre philosophie s'applique à tous nos clients.</h2>
        <h3 className=" md:mt-2">Notre fierté : votre satisfaction</h3>
      </div>

      <div className="relative  md:pt-10 rounded-3xl overflow-hidden">
        <Image
          src={slides[0].image}
          alt={slides[0].alt}
          width={700}
          height={400}
          className="w-full h-auto object-cover rounded-3xl"
        />

        {/* Pagination indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/80 px-6 py-2 rounded-full flex items-center space-x-6">
          {slides.map((slide) => (
            <span
              key={slide.id}
              className="w-6 h-6 flex items-center justify-center rounded-full text-sm text-gray-500"
            >
              {slide.id}
            </span>
          ))}
        </div>
      </div>

      </div>
 
    </section>
  )
}
