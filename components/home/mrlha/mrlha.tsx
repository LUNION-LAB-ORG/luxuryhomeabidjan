import Image from "next/image"
import Link from "next/link"

export default function MrLHA() {
  return (
    <div className="w-full py-5">
        <div className="relative m-auto overflow-hidden container w-full h-[200px]  md:h-screen rounded-3xl  ">
          <Image
            src="/assets/images/illustrations/page-accueil/Background+Shadow.png"
            alt="Contact banner with chat interface"
            fill
            priority
            sizes="100vw"
            className="object-cover rounded-3xl w-full h-full"
          />
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

