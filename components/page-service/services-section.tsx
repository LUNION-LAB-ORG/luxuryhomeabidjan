import Image from "next/image";
import Link from "next/link";

export default function ServiceSection() {
  return (
    <div className="max-w-5xl  mx-auto my-20">
      <div className="px-4">
        <div className=" flex flex-col md:flex-row gap-10">
        <Link href="">
            <div className="relative group">
                <Image
                className="rounded-4xl"
                width={500}
                height={500}
                src="/assets/images/img/page-transation-img2.jpg"
                alt=""
                />
                <div className="absolute bottom-0 text-[26px] group-hover:bg-black/30 transition-colors duration-1000 w-full bg-black text-white h-[120px] rounded-b-4xl">
                <h3 className="text-center relative top-[30%] text-[24px] lg:text-[26px]  transform group-hover:scale-165 transition-all duration-500 ease-in-out font-semibold">
                    Location
                </h3>
                </div>
            </div>
         </Link>
       
         <Link href="">
            <div className="relative group">
                <Image
                className="rounded-4xl"
                width={500}
                height={500}
                src="/assets/images/img/page-transation-img1.jpg"
                alt=""
                />
                <div className="absolute bottom-0 text-[26px] group-hover:bg-black/30 transition-colors duration-1000 w-full bg-black text-white h-[120px] rounded-b-4xl">
                <h3 className="text-center relative top-[30%] text-[24px] lg:text-[26px]  transform group-hover:scale-165 transition-all duration-500 ease-in-out font-semibold">
                    Vente
                </h3>
                </div>
            </div>
         </Link>
         
        </div>

        <div className="bg-stone-100 text-xl text-stone-600 text-[20px] lg:text-[24px] leading-9 text-center px-4 py-5 lg:p-5 rounded-4xl mt-10">
          <h3 className="text-black pb-5 text-[24px] lg:text-[26px] font-bold">Pourquoi nous confier votre besoin ?</h3>

          <p className="">
            Parce que chez nous, une opération n'est pas gérée comme une affaire
            mais comme un véritable projet de vie. L'univers de l'immobilier
            exige Rigueur et Respect des normes. Spécialistes en droit
            immobilier, en fiscalité, en comptabilité et dotées d'une expérience
            connue sur le marché, nos équipes sont un atout dans le déroulement
            de toutes vos transactions. Nous faisons de chaque étape un contrôle
            qualité afin d'assurer une sécurité optimale.
          </p>
        </div>
      </div>
    </div>
  );
}
