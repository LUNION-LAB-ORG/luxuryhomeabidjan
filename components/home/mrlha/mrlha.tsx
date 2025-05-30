import { AspectRatio } from "@/components/ui/aspect-ratio"
import Image from "next/image"
import Link from "next/link"

export default function MrLHA() {
  return (
    <div className="relative w-full py-5">
       <div className="w-[450px]] w-full">
          <AspectRatio ratio={1876 / 1055}>
            <Image   fill src="/assets/images/illustrations/page-accueil/Background+Shadow.png" alt="Image" className="rounded-md object-cover" />
          </AspectRatio>
        </div>

        <div className=" absolute bottom-2/12 flex justify-center items-center mx-auto w-full">
          <Link href="#" className="relative border-2  lg:border-3 rounded-3xl lg:p-2 px-4 lg:px-7 text-sm  md:text-2xl font-bold  bg-black border-slate-300 text-white">
             En savoir plus
         </Link>

          </div>
    </div>
  )
}

