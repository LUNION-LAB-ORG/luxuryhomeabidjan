import Image from "next/image"
// import Link from "next/link"

export default function Hero() {
  return (
    <div className="w-full">
      <div className="block w-full py-16">
        <div className="relative w-full h-auto aspect-[16/9] sm:aspect-[16/7] md:aspect-[16/6]">
          <Image
            src="/assets/images/illustrations/qui-sommes-nous/hero.png"
            alt="Contact banner with chat interface"
            fill
            priority
            sizes="100vw"
            className="object-contain rounded-lg"
          />
        </div>
      </div>
    </div>
  )
}

