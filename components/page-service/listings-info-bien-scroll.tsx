"use client"
import { useRef } from "react"

type ExclusivePropertyProps = {
  service: string
  desc: string

}

function ExclusiveProperty({ service,desc}: ExclusivePropertyProps) {
  return (
    <div className="relative leading-7 text-[18px] lg:text-[26px] flex flex-col lg:gap-6 pb-12 px-6 pt-12 lg:pb-46 lg:pt-20 lg:px-8 rounded-4xl text-white bg-black w-[90%] sm:w-[60%]  lg:w-[44%] flex-shrink-0 overflow-hidden ">
      <h4 className="font-bold pb-6 lg:pb-8 lg:max-w-2/3">{service}</h4>
      <p className="" >{desc}</p>
    </div>
  )
}

export default function ListingsInfoBienScroll() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const exclusiveProperties = [
    {
     service:"Evaluer votre patrimoine de manière générale",
     desc:"Désireux de simplement connaître la valeur réelle de votre bien immobilier sur le marché ou de maitriser la valeur hypothécaire de votre propriété et ainsi mieux appréhender les possibilités de financement.",
    },
    {
    service:"Evaluer votre patrimoine de manière générale",
    desc:"Désireux de simplement connaître la valeur réelle de votre bien immobilier sur le marché ou de maitriser la valeur hypothécaire de votre propriété et ainsi mieux appréhender les possibilités de financement.",
    },
    {
    service:"Evaluer votre patrimoine de manière générale",
    desc:"Désireux de simplement connaître la valeur réelle de votre bien immobilier sur le marché ou de maitriser la valeur hypothécaire de votre propriété et ainsi mieux appréhender les possibilités de financement.",
    },
    {
    service:"Evaluer votre patrimoine de manière générale",
    desc:"Désireux de simplement connaître la valeur réelle de votre bien immobilier sur le marché ou de maitriser la valeur hypothécaire de votre propriété et ainsi mieux appréhender les possibilités de financement.",
    },
  ]

  return (
    <section className="py-12 md:py-16">
      <div >
        <h3 className="px-4 text-black font-bold text-center text-xl lg:text-[28px]  mb-6  lg:mb-8">À quel moment aurez-vous besoin de nous ?</h3>
        <div className="relative">
          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto pb-6 pt-2 pl-4 md:pl-12 lg:pl-32 scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {exclusiveProperties.map((property, index) => (
              <ExclusiveProperty
                key={index}
                service={property.service}
                desc={property.desc}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

