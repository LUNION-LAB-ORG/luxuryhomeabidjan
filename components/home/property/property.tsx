"use client"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Camera, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRef } from "react"
import Link from "next/link"

type PropertyCardProps = {
  location: string
  name: string
  imageSrc: string
}

function PropertyCard({ location, name, imageSrc }: PropertyCardProps) {
  return (
    <div className="relative min-w-[280px] max-w-[280px] overflow-hidden rounded-2xl bg-white shadow-md sm:min-w-[320px] sm:max-w-[320px]">
      <div className="relative h-[600px] w-full">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 280px, 320px"
        />

        {/* Location and Name Overlay */}
        <div className="absolute inset-x-0 top-0 p-4">
          <div className="text-sm font-medium text-white">{location}</div>
          <div className="text-lg font-semibold text-white">{name}</div>
        </div>

        {/* Camera Icon */}
        <Link href='propriete/detail/1'>
          <div className="absolute bottom-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm">
            <ExternalLink  />
          </div>
        </Link>
      
      </div>
    </div>
  )
}

export function PropertyCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -340, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 340, behavior: "smooth" })
    }
  }

  // Sample property data
  const properties = [
    // {
    //   location: "Cocody",
    //   name: "La cité Riviera STELLA",
    //   imageSrc: "/assets/images/illustrations/page-accueil/property-1..webp",
    // },
    {
      location: "Cocody",
      name: "La cité Riviera STELLA",
      imageSrc: "/assets/images/illustrations/page-accueil/property-2.jpg",
    },
    {
      location: "Cocody",
      name: "La cité Riviera STELLA",
      imageSrc: "/assets/images/illustrations/page-accueil/property-3.jpg",
    },
    {
      location: "Cocody",
      name: "La cité Riviera STELLA",
      imageSrc: "/assets/images/illustrations/page-accueil/property-4.jpg",
    },
    {
      location: "Cocody",
      name: "La cité Riviera STELLA",
      imageSrc: "/assets/images/illustrations/page-accueil/property-5.jpg",
    },
    {
      location: "Cocody",
      name: "La cité Riviera STELLA",
      imageSrc: "/assets/images/illustrations/page-accueil/property-6.jpg",
    },
    {
      location: "Cocody",
      name: "La cité Riviera STELLA",
      imageSrc: "/assets/images/illustrations/page-accueil/property-7.jpg",
    },
    {
      location: "Cocody",
      name: "La cité Riviera STELLA",
      imageSrc: "/assets/images/illustrations/page-accueil/property-8.jpg",
    },
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto md:px-4">
        <h2 className="mb-8 text-center text-2xl font-bold md:text-4xl">Opérations immobilières</h2>

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
            {properties.map((property, index) => (
              <PropertyCard
                key={index}
                location={property.location}
                name={property.name}
                imageSrc={property.imageSrc}
              />
            ))}
          </div>

          {/* More Details Button */}
          <div className="mt-6 flex justify-center">
            <Button variant="outline" className="rounded-full px-6">
              Plus de détails
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

