'use client'
import { Copy, CornerDownRight, Share2, X } from "lucide-react";
import Image from "next/image"
import { ChevronLeft, ChevronRight, Camera, ExternalLink } from "lucide-react"
// import { useRef } from "react"
import Link from "next/link"

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRef } from "react";

export default function GalerieDropDown() {
  return (
   <Dialog>
      <DialogTrigger asChild>
        <div className="cursor-pointer absolute text-white rounded-2xl md:rounded-3xl bottom-5 left-5 p-4 md:p-5   bg-black/30 backdrop-blur-[4px] bg-gradient-to-t from-black/30 to-transparent">
          <h3 className="font-bold   text-stone-400">Galerie</h3>
          <div className="flex items-center gap-10">
            <span className="font-bold ">12 photos</span>
            <span className="text-[14px] backdrop-blur-sm bg-gradient-to-t  to-transparent   px-6 py-2 rounded-xl">
              {" "}
              Voir
            </span>
          </div>
        </div>
        {/* <Button variant="outline">Share</Button> */}
      </DialogTrigger>
      <DialogContent className="block mt-[30%] sm:mt-[40%] md:mt-[30%] lg:mt-16 bottom-0 p-0 !overflow-scroll !w-screen lg: !h-screen !max-w-none ">
        <DialogHeader className="p-0 m-0 h-fit text-start">
          <DialogTitle className="py-4 px-2 md:px-4 lg:px-19 font-bold text-[24px] lg:text-[30px]">12 photos</DialogTitle>
        </DialogHeader>

          <div className="relative overflow-scroll h-fit">
            {/* <div className="font-bold text-[30px] px-[46px]">12 photos</div> */}
            <PropertyCarousel/>

            <div className="max-w-container px-2 md:px-4 lg:px-19 pb-4 md:pb-16 flex items-center justify-between">
              <div className="flex gap-5  text-stone-700">
                 <DialogClose asChild>
                  <Button
                  className="py-4 px-3 bg-white cursor-pointer rounded-full flex item-center border border-stone-400"
                  variant="outline"
                  size="sm"
                >
                    <span><X /></span>
                    <span className="text-[16px]">Fermer</span>
                  </Button>
                </DialogClose>

                <Button
                className="cursor-pointer rounded-full flex item-center border-stone-400"
                variant="outline"
                 size="sm"
                >
                  <span ><Share2 /></span>
                  <span className="text-[16px]">Partager</span>
                  </Button>

              </div>
              <div className="hidden text-muted-foreground md:flex items-center gap-2 text-[14px]">
                <span ><CornerDownRight className="w-4 h-4" /></span>
                <span >Glissez vers la gauche</span>
              </div>
                
            </div>
          </div>

        {/* <DialogFooter className="w-full flex top-0 bbottom-0 mmt-[100px] h-[[100px] -bbottom-16  sm:justify-start px-16">
          <DialogClose asChild>
            <Button
            className="bg-white cursor-pointer rounded-full flex item-center border border-stone-400"
            variant="outline"
          >
              <span><X/></span>
              <span>Fermer</span>
            </Button>
          </DialogClose>

          <Button
          className="cursor-pointer rounded-full flex item-center border-stone-400"
          variant="outline"
          >
            <span><X/></span>
            <span>Partager</span>
            </Button>
        </DialogFooter> */}
      </DialogContent>
     
    </Dialog>
 
  );
}

type PropertyCardProps = {
  location: string
  name: string
  imageSrc: string
}

function PropertyCard({ location, name, imageSrc }: PropertyCardProps) {
  return (
    <div className="relative min-w-[300px] max-w-[300px] overflow-hidden rounded-3xl bg-white shadow-md  sm:min-w-[420px] sm:max-w-[420px]">
      <div className="relative h-[500px] md:h-[600px] w-full">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 280px, 320px"
        />      
      </div>
    </div>
  )
}

export function PropertyCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const properties = [
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
    <section >
      <div className=" mx-auto mmd:px-4 llg:px-16">
        <div className="relative ">
          <div
            ref={scrollContainerRef}
            className="flex gap-4 !overflow-x-auto pb-6 pt-2 scrollbar-hide"
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

        </div>
      </div>
    </section>
  )
}

