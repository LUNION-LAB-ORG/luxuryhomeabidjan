import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="w-full bg-black text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Circular images row */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 mb-16">
          <div className="w-64 h-64 md:w-80 md:h-80 overflow-hidden">
            <Image
              src="/assets/images/illustrations/service/hero.png"
              alt="Modern property exterior"
              width={320}
              height={320}
              className="w-full h-full object-contain"
            />
          </div>

          <div className="w-64 h-64 md:w-80 md:h-80 overflow-hidden">
            <Image
              src="/assets/images/illustrations/service/hero.png"
              alt="Property with pool and deck"
              width={320}
              height={320}
              className="w-full h-full object-contain"
            />
          </div>

          <div className="w-64 h-64 md:w-80 md:h-80 overflow-hidden">
            <Image
              src="/assets/images/illustrations/service/hero.png"
              alt="Luxury property with pool and garden"
              width={320}
              height={320}
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Text content */}
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-xl mb-4">Vos transactions chez LHA</p>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
            Réalisez toutes vos opérations immobilières en toute sécurité
          </h1>
        </div>
      </div>
    </section>
  )
}
