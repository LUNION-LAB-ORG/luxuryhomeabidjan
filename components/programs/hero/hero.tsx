import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full bg-black text-white pt-20 scroll-mt-24">
      {/* Images container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="rounded-3xl overflow-hidden">
          <div className="w-full flex  gap-2 md:gap-4">
            <div className="w-2/3 relative h-[300px] md:h-[400px]">
              <Image
                src="/assets/images/illustrations/programs/bonsai.png"
                alt="Luxury home with infinity pool at sunset"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-1/3 h-[300px] md:h-[400px]">
              <Image
                src="/assets/images/illustrations/programs/hero-right.png"
                alt="Modern luxury home with swimming pool"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="relative px-4 ssm:px-6 pb-8 lg:pb-21">
        <div className="max-w-4xl mx-auto ">
          <p className="font-bold text-xl md:text-2xl text-center mb-2">
            Programmes
          </p>
          <h1 className="text-2xl md:text-4xl px-4 lg:px-0 text-center xl:text-7xl font-bold mb-6 lg:mb-16 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Nous répondons aux problèmes de logements
          </h1>
        </div>
        <div className="relative max-w-5xl lg:pl-14">
          <p className="text-lg leading-normal md:text-xl xl:text-2xl text-gray-400  ">
            Découvrez nos programmes immobiliers conçus pour répondre aux
            attentes des investisseurs et des particuliers en quête
            d'excellence. Que vous recherchiez un appartement moderne, une villa
            de prestige ou un espace commercial stratégiquement situé, nous
            avons des solutions adaptées à vos besoins.
          </p>
        </div>
      </div>
    </section>
  );
}
