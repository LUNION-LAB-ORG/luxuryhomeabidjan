import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="ww-full bg-black text-white pt-6 pb-8 md:pt-12 md:pb-18">
      <div className="mx-auto ">
        {/* Circular images row */}
        <div className=" overflow-hidden">
           <div className="relative overflow-visible flex justify-center items-center">
            <Image
              src="/assets/images/illustrations/service/hero.png"
              alt="Image gauche"
              width={500}
              height={500}
              className="lg:-ml-46 w-[35%] lg:w-[85%]"
            />
            <Image
              src="/assets/images/illustrations/service/hero.png"
              alt="Image centre"
              width={500}
              height={500}
              className="w-[35%]  lg:w-[85%] z-10 mx-10 lg:mx-40"
            />
            <Image
              src="/assets/images/illustrations/service/hero.png"
              alt="Image droite"
              width={500}
              height={500}
              className="lg:-mr-46 w-[35%]  lg:w-[85%]"
            />
          </div>
        </div>

        {/* Text content */}
        <div className="text-center px-4 lg:px-8 mx-auto pt-16 lg:pt-22">
          <p className="text-[16px] lg:text-[24px] mb-2 font-semibold">
            Vos transactions chez LHA
          </p>
          <h1 className="text-2xl md:text-3xl lg:text-[80px] font-bold lg:leading-19">
            Réalisez toutes vos opérations immobilières en toute sécurité
          </h1>
        </div>
      </div>
    </section>
  );
}
