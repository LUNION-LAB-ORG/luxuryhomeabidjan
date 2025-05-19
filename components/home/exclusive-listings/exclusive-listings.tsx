"use client"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
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
    
      // <CarouselItem className="md:basis-1/2 lg:basis-1/3">
      //       <div className="p-1">
      //         <Card>
      //           <CardContent className="flexx aspect-square items-center justify-center pp-6">
      //           <div className="relative w-full flex-shrink-0 overflow-hidden ">
      //             <Link href='/biens-immobilier-details/1'>
                
      //             <div className="relative aspect-[4/3] w-full">
      //               <Image
      //                 src={imageSrc}
      //                 alt={name}
      //                 fill
      //                 className="object-cover"
      //                 sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      //               />
      //             </div>

      //             <div className="absolute flex justify-between bottom-0 left-0 right-0 bg-black/20 backdrop-blur-sm  bg-gradient-to-t from-black/80 to-transparent p-2 md:p-6  text-white">

      //               <div>
      //               <div className="mb-2 md:text-lg font-semibold">{name}</div>
      //                 <Button size="sm" className="rounded-full bg-blue-600 text-white hover:bg-blue-700">
      //                 650.000FCFA/m²
      //                 </Button>

      //               </div>

      //               <div className="mb-3 flex items-center justify-between">
      //                 <div className="flex items-center gap-4">
      //                   <div className="flex items-center gap-1 pr-2 border-r-2">
      //                     <Bed size={16} />
      //                     <span className="text-sm">{bedrooms}</span>
      //                   </div>
      //                   <div className="flex items-center gap-1 pr-2 border-r-2">
      //                     <Bath size={16} />
      //                     <span className="text-sm">{bathrooms}</span>
      //                   </div>
      //                   <div className="flex items-center gap-1">
      //                     <Square size={16} />
      //                     <span className="text-sm">{area} m²</span>
      //                   </div>
      //                 </div>
      //               </div>
      //             </div>
      //             </Link>
      //           </div>
      //           </CardContent>
      //         </Card>
      //       </div>
      // </CarouselItem>




    <div className="overflow-hidden  rounded-xl m-2 relative h-[300px] md:h-[400px] lg:h-[450px] w-4/5 md:w-2/4 lg:w-1/3 flex-shrink-0">
      <Link href='/biens-immobilier-details/1'>
    
      <div className="rounded-xl relative h-full aaspect-[4/3] w-full">
        <Image
          src={imageSrc}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      <div className="rounded-b-lg absolute flex justify-between bottom-0 left-0 right-0 bg-black/20 backdrop-blur-sm  bg-gradient-to-t from-black/80 to-transparent p-2 md:p-6 mmx-2  text-white">

        <div>
        <div className="mb-2  md:text-lg font-semibold">{name}</div>
          <Button size="sm" className="rounded-full text-[14px] bg-black text-white">
          650.000FCFA/nutée
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
  const plugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

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
      <div className="ccontainerr mx-auto mmdd:px-4">
        <h2 className="font-bold px-2 sm:px-4 lg:px-14 text-[24px] md:text-[30px] lg:text-[36px] mb-6 lg:mb-10">Découvrez nos coups de cœur</h2>

        <div className="relative">
        <Carousel
        plugins={[plugin.current]}
        className="overflow-x-hidden rounded-xl w-full max-w-7xll  mmx-10 mmx-auto"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={() => plugin.current.play()}
        >
          <CarouselContent className="-ml-1">

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
          </CarouselContent>
          <CarouselPrevious className=" z-50 w-10 lg:w-16 h-10 lg:h-16 ml-14 lg:ml-20"  />
          <CarouselNext className="  z-50 w-10 lg:w-16 h-10 lg:h-16 mr-14 lg:mr-20" />
        </Carousel>
        </div>
      </div>
    </section>
  )
}












// export function ExclusiveListings() {
//   const scrollContainerRef = useRef<HTMLDivElement>(null)

// //   const scrollLeft = () => {
// //     if (scrollContainerRef.current) {
// //       scrollContainerRef.current.scrollBy({ left: -400, behavior: "smooth" })
// //     }
// //   }

// //   const scrollRight = () => {
// //     if (scrollContainerRef.current) {
// //       scrollContainerRef.current.scrollBy({ left: 400, behavior: "smooth" })
// //     }
// //   }

//   // Sample exclusive properties data
//   const exclusiveProperties = [
//     {
//       name: "VILLA LA CASA",
//       imageSrc: "/assets/images/illustrations/page-accueil/villa1.png",
//       bedrooms: 7,
//       bathrooms: 7.1,
//       area: 800,
//     },
//     {
//       name: "VILLA LA CASA",
//       imageSrc: "/assets/images/illustrations/page-accueil/villa2.png",
//       bedrooms: 7,
//       bathrooms: 7.1,
//       area: 800,
//     },
//     {
//       name: "VILLA LA CASA",
//       imageSrc: "/assets/images/illustrations/page-accueil/villa1.png",
//       bedrooms: 7,
//       bathrooms: 7.1,
//       area: 800,
//     },
//     {
//       name: "VILLA LA CASA",
//       imageSrc: "/assets/images/illustrations/page-accueil/villa2.png",
//       bedrooms: 7,
//       bathrooms: 7.1,
//       area: 800,
//     },
//     {
//         name: "VILLA LA CASA",
//         imageSrc: "/assets/images/illustrations/page-accueil/villa1.png",
//         bedrooms: 7,
//         bathrooms: 7.1,
//         area: 800,
//       },
//       {
//         name: "VILLA LA CASA",
//         imageSrc: "/assets/images/illustrations/page-accueil/villa2.png",
//         bedrooms: 7,
//         bathrooms: 7.1,
//         area: 800,
//       },
//       {
//         name: "VILLA LA CASA",
//         imageSrc: "/assets/images/illustrations/page-accueil/villa1.png",
//         bedrooms: 7,
//         bathrooms: 7.1,
//         area: 800,
//       },
//       {
//         name: "VILLA LA CASA",
//         imageSrc: "/assets/images/illustrations/page-accueil/villa2.png",
//         bedrooms: 7,
//         bathrooms: 7.1,
//         area: 800,
//       },
//   ]

//   return (
//     <section className="py-12 md:py-16">
//       <div className="containerr mx-auto mdd:px-4">
//         <h2 className="font-bold px-2 sm:px-4 lg:px-14 text-[24px] md:text-[30px] lg:text-[36px] mb-6 lg:mb-10">Découvrez nos coups de cœur</h2>

//         <div className="relative">
//           {/* Scroll Buttons */}
//           {/* <div className="absolute -left-4 top-1/2 z-10 hidden -translate-y-1/2 md:block">
//             <Button
//               variant="outline"
//               size="icon"
//               className="h-10 w-10 rounded-full bg-white shadow-md"
//               onClick={scrollLeft}
//             >
//               <ChevronLeft className="h-6 w-6" />
//               <span className="sr-only">Scroll left</span>
//             </Button>
//           </div>

//           <div className="absolute -right-4 top-1/2 z-10 hidden -translate-y-1/2 md:block">
//             <Button
//               variant="outline"
//               size="icon"
//               className="h-10 w-10 rounded-full bg-white shadow-md"
//               onClick={scrollRight}
//             >
//               <ChevronRight className="h-6 w-6" />
//               <span className="sr-only">Scroll right</span>
//             </Button>
//           </div> */}

//           {/* Scrollable Container */}
//           <div
//             ref={scrollContainerRef}
//             className="flex gap-4 overflow-x-auto pb-6 pt-2 scrollbar-hide"
//             style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
//           >
//             {exclusiveProperties.map((property, index) => (
//               <ExclusiveProperty
//                 key={index}
//                 name={property.name}
//                 imageSrc={property.imageSrc}
//                 bedrooms={property.bedrooms}
//                 bathrooms={property.bathrooms}
//                 area={property.area}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

