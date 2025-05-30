import BtnRetour from "@/components/common/btn-retour";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="ww-full bbg-black text-white pt-6 pb-8 md:pt-12 md:pb-18">
      <div className="mx-auto ">
        <BtnRetour text="Vos transactions chez LHA" />

        <div className="flex flex-col items-center">
          <div className="relative ">
            <Image
              src="/assets/images/backgrounds/bg-transation.png"
              alt="Image gauche"
              width={500}
              height={500}
              className=" w-[1000px]"
            />
          </div>
          {/* Text content */}
          <h2 className="max-w-2xl text-black text-center font-bold leading-6 lg:leading-8 text-[18px] md:text-[24px] lg:text-[30px] ">
            Réalisez toutes vos opérations immobilières en toute sécurité
          </h2>
        </div>
      </div>
    </section>
  );
}
