import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function MrLHA() {
  return (
    <div className="w-full py-5">
        <div className="relative m-auto overflow-hidden container w-full h-[200px]   md:h-screen rounded-3xl  ">
          <Image
            src="/assets/images/illustrations/page-accueil/Background+Shadow.png"
            alt="Contact banner with chat interface"
            fill
            priority
            sizes="100vw"
            className="object-cover rounded-3xl w-full h-full"
          />
          <div className="absolute flex justify-center items-center mx-auto w-full bottom-3 lg:bottom-10 ">
          <Link href="#" className="relative border-2  lg:border-3 rounded-3xl lg:p-2 px-4 lg:px-7 text-sm  md:text-2xl font-bold  bg-black border-slate-300 text-white">
         En savoir plus
         </Link>

          </div>
      
        </div>

      {/* <Link href="/" className="block w-full">
        <div className="relative w-full h-auto aspect-[16/9] sm:aspect-[16/7] md:aspect-[16/6] lg:aspect-[16/5]">
          <Image
            src="/assets/images/illustrations/page-accueil/Background+Shadow.png"
            alt="Contact banner with chat interface"
            fill
            priority
            sizes="100vw"
            className="object-contain rounded-lg"
          />
        </div>
      </Link> */}
    </div>
  )
}

