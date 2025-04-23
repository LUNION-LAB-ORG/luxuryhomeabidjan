"use client"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Bed, Bath, Square } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRef } from "react"
import Link from "next/link"

type ExclusivePropertyProps = {
  name: string
  imageSrc: string
  bedrooms: number
  bathrooms: number
  area: number
}

function ExclusiveProperty({ name, imageSrc, bedrooms, bathrooms, area }: ExclusivePropertyProps) {
  return (
    <div className="relative w-4/5 md:w-3/7 min-w-[300px]] max-w-[400px]] flex-shrink-0 overflow-hidden rounded-lg">
      <Link href='propriete/detail/1'>
    
      <div className="relative aspect-[4/3] w-full">
        <Image
          src={imageSrc}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      <div className="absolute flex justify-between bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm  bg-gradient-to-t from-black/80 to-transparent p-2 md:p-6  text-white">

        <div>
        <div className="mb-2 md:text-lg font-semibold">{name}</div>
          <Button size="sm" className="rounded-full bg-blue-600 text-white hover:bg-blue-700">
          650.000FCFA/m²
          </Button>

        </div>

        <div className="mb-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 pr-2 border-r-2">
              <Bed size={16} />
              <span className="text-sm">{bedrooms}</span>
            </div>
            <div className="flex items-center gap-1 pr-2 border-r-2">
              <Bath size={16} />
              <span className="text-sm">{bathrooms}</span>
            </div>
            <div className="flex items-center gap-1">
              <Square size={16} />
              <span className="text-sm">{area} m²</span>
            </div>
          </div>
        </div>
      </div>
      </Link>
    </div>
  )
}

export function ExclusiveListings() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

//   const scrollLeft = () => {
//     if (scrollContainerRef.current) {
//       scrollContainerRef.current.scrollBy({ left: -400, behavior: "smooth" })
//     }
//   }

//   const scrollRight = () => {
//     if (scrollContainerRef.current) {
//       scrollContainerRef.current.scrollBy({ left: 400, behavior: "smooth" })
//     }
//   }

  // Sample exclusive properties data
  const exclusiveProperties = [
    {
      name: "VILLA LA CASA",
      imageSrc: "/assets/images/illustrations/page-accueil/villa1.png",
      bedrooms: 7,
      bathrooms: 7.1,
      area: 800,
    },
    {
      name: "VILLA LA CASA",
      imageSrc: "/assets/images/illustrations/page-accueil/villa2.png",
      bedrooms: 7,
      bathrooms: 7.1,
      area: 800,
    },
    {
      name: "VILLA LA CASA",
      imageSrc: "/assets/images/illustrations/page-accueil/villa1.png",
      bedrooms: 7,
      bathrooms: 7.1,
      area: 800,
    },
    {
      name: "VILLA LA CASA",
      imageSrc: "/assets/images/illustrations/page-accueil/villa2.png",
      bedrooms: 7,
      bathrooms: 7.1,
      area: 800,
    },
    {
        name: "VILLA LA CASA",
        imageSrc: "/assets/images/illustrations/page-accueil/villa1.png",
        bedrooms: 7,
        bathrooms: 7.1,
        area: 800,
      },
      {
        name: "VILLA LA CASA",
        imageSrc: "/assets/images/illustrations/page-accueil/villa2.png",
        bedrooms: 7,
        bathrooms: 7.1,
        area: 800,
      },
      {
        name: "VILLA LA CASA",
        imageSrc: "/assets/images/illustrations/page-accueil/villa1.png",
        bedrooms: 7,
        bathrooms: 7.1,
        area: 800,
      },
      {
        name: "VILLA LA CASA",
        imageSrc: "/assets/images/illustrations/page-accueil/villa2.png",
        bedrooms: 7,
        bathrooms: 7.1,
        area: 800,
      },
  ]

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto md:px-4">
        <h2 className=" mb-8 text-center text-2xl font-bold md:text-4xl">En exclusivité</h2>

        <div className="relative">
          {/* Scroll Buttons */}
          {/* <div className="absolute -left-4 top-1/2 z-10 hidden -translate-y-1/2 md:block">
            <Button
              variant="outline"
              size="icon"
              className="h-10 w-10 rounded-full bg-white shadow-md"
              onClick={scrollLeft}
            >
              <ChevronLeft className="h-6 w-6" />
              <span className="sr-only">Scroll left</span>
            </Button>
          </div>

          <div className="absolute -right-4 top-1/2 z-10 hidden -translate-y-1/2 md:block">
            <Button
              variant="outline"
              size="icon"
              className="h-10 w-10 rounded-full bg-white shadow-md"
              onClick={scrollRight}
            >
              <ChevronRight className="h-6 w-6" />
              <span className="sr-only">Scroll right</span>
            </Button>
          </div> */}

          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto pb-6 pt-2 scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {exclusiveProperties.map((property, index) => (
              <ExclusiveProperty
                key={index}
                name={property.name}
                imageSrc={property.imageSrc}
                bedrooms={property.bedrooms}
                bathrooms={property.bathrooms}
                area={property.area}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

