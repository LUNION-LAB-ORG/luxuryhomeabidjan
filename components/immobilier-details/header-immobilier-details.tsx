import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

export default function HeaderImobilierDetails() {
  return (
    <section className="container  mx-auto px-4 lg:px-14 text-[18px] lg:text-[24px] text-stone-500">
      <div className="w-full grid md:grid-cols-2 gap-2  rounded-4xl overflow-hidden">
        <div className="">
         <Link href="1/galery" className=" lg:hidden ">
            <div className="absolute right-0 flex items-center gap-3 bg-white z-10 m-5 p-2 px-4 rounded-full">
             
                <span className="text-black text-[16px]">12 photos</span>
                <Button className="cursor-pointer">
                    voir
                </Button>        
            </div>
            </Link>
          <Image
            src="/assets/images/backgrounds/Rectangle-44.jpg"
            width={500}
            height={500}
            className="w-full h-auto object-cover"
            alt="image chambre "
          />
        </div>
     
        <div className="grid grid-cols-2 gap-2">
          <div className="">
            <Image
              src="/assets/images/backgrounds/Rectangle-44.jpg"
              width={500}
              height={500}
              className="w-full object-cover h-auto"
              alt="image chambre "
            />
          </div>
          <div className="relative">
            <Link href="1/galery" className="hidden lg:block">
            <div className="absolute flex items-center gap-3 bg-white z-10 m-5 p-2 px-4 rounded-full">
             
                <span className="text-black text-[16px]">12 photos</span>
                <Button className="cursor-pointer">
                    voir
                </Button>        
            </div>
            </Link>
            <Image
              src="/assets/images/backgrounds/Rectangle-44.jpg"
              width={500}
              height={500}
              className="w-full object-cover h-auto"
              alt="image chambre "
            />
          </div>
          <div className="">
            <Image
              src="/assets/images/backgrounds/Rectangle-44.jpg"
              width={500}
              height={500}
              className="w-full object-cover h-auto"
              alt="image chambre "
            />
          </div>
          <div className="">
            <Image
              src="/assets/images/backgrounds/Rectangle-44.jpg"
              width={500}
              height={500}
              className="w-full object-cover h-auto"
              alt="image chambre "
            />
          </div>

        </div>
      </div>

    </section>
  );
}
