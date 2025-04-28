"use client";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import Link from "next/link";

type PropertyCardProps = {
  location: string;
  name: string;
  imageSrc: string;
};

function PropertyCard({ location, name, imageSrc }: PropertyCardProps) {
  return (
    <div className="relative w-full shrink-0 max-w-[230px] overflow-hidden rounded-3xl bg-white shadow-md sm:max-w-[280px]">
      <div className="relative h-[400px] sm:h-[500px] w-full">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 280px, 320px"
        />

        {/* Overlay */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/70 via-transparent to-black/30" />

        {/* Location and Name */}
        <div className="absolute inset-0 z-[2] p-6 text-white">
          <div className="h-full flex flex-col justify-between">
            {/* Text */}
            <div>
              <div className="pb-2 text-sm font-light text-white">
                {location}
              </div>
              <div className="text-xl lg:text-xl max-w-[210px] font-bold">
                {name}
              </div>
            </div>
            {/* Camera Icon */}
            <Link href="propriete/detail/1">
              <div className="justify-self-end flex h-8 w-8 p-2 items-center justify-center rounded-full bg-black/70 text-white backdrop-blur-sm">
                <ExternalLink className="text-white" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export function PropertyCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

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
  ];

  return (
    <section className="py-16">
      <div className="px-4 md:px-16">
        <h2 className="mb-8 lg:mb-10 text-center text-3xl font-bold md:text-5xl">
          Opérations immobilières
        </h2>

        <div className="relative">
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
            <Button
              variant="outline"
              className="rounded-full px-6 cursor-pointer"
            >
              <span>
                <ExternalLink />
              </span>
              <span>Plus de détails</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
