import { SignalZero } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Galerie() {
  return (
    <div>
      <div className="container mx-auto px-6 xl:px-16 lg:py-16 pb-2 lg:pb-6 bg-white">
        <div className="flex justify-between pb-10">
          <div className="flex gap-4 items-center">
            <h1 className="font-bold  text-[24px] md:text-[30px] lg:text-[36px] ">
              La cité Riviera STELLA
            </h1>
            <div className="flex gap-2 items-center">
              <Image
                className="w-3 h-3 object-cover rounded-full"
                src="/assets/images/icons/circle.png"
                alt="Picture of the author"
                height={20}
                width={20}
              />

              <span>Disponible</span>
            </div>
          </div>
          <p className="font-bold  text-[18px] md:text-[20px] ">
            Songon Kassemblé
          </p>
        </div>

        <div>
          <Image
            className="w-full h-[750px] object-cover rounded-4xl"
            src="/assets/images/backgrounds/Slide-service4.jpg"
            alt="Picture of the author"
            width={500}
            height={500}
          />
        </div>
      </div>
      {/* 4 img */}
      <div className="container grid grid-cols-2 gap-4 mx-auto px-6 xl:px-16 pb-24 bg-white">
        <Image
          className="w-full h-[400px] object-cover rounded-4xl"
          src="/assets/images/backgrounds/Slide-service4.jpg"
          alt="Picture of the author"
          width={500}
          height={500}
        />
        <Image
          className="w-full h-[400px] object-cover rounded-4xl"
          src="/assets/images/backgrounds/Slide-service4.jpg"
          alt="Picture of the author"
          width={500}
          height={500}
        />
        <Image
          className="w-full h-[400px] object-cover rounded-4xl"
          src="/assets/images/backgrounds/Slide-service4.jpg"
          alt="Picture of the author"
          width={500}
          height={500}
        />
        <Image
          className="w-full h-[400px] object-cover rounded-4xl"
          src="/assets/images/backgrounds/Slide-service4.jpg"
          alt="Picture of the author"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}
