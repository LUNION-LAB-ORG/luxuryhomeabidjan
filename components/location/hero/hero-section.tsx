import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full bg-black text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Circular images row */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 mb-16">
          <div className="w-64 h-64 md:w-96 md:h-96 overflow-hidden">
            <Image
              src="/assets/images/illustrations/location/hero.png"
              alt="Modern property exterior"
              fill
              priority
              sizes="100vw"
              className="object-contain rounded-lg"
            />
          </div>
        </div>

        {/* Text content */}
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-xl mb-4">Location</p>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
            Retrouvez tout type de propriété de standing chez nous
          </h1>
        </div>
      </div>
    </section>
  );
}
