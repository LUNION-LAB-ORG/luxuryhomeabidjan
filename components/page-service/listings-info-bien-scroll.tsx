"use client"
import { useRef } from "react"

type ExclusivePropertyProps = {
  service: string
  desc: string

}

function ExclusiveProperty({ service,desc}: ExclusivePropertyProps) {
  return (
    <div className="relative leading-7 text-2xl flex flex-col gap-6 pb-46 pt-18 px-8 rounded-4xl text-white bg-black w-4/5 mmd:w-3/8 md:w-2/5 flex-shrink-0 overflow-hidden ">
      <h4 className="font-bold">{service}</h4>
      <p >{desc}</p>
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
        <h3 className=" text-black font-bold text-center text-xl lg:text-2xl mb-6  lg:mb-8">À quel moment aurez-vous besoin de nous ?</h3>

        <div className="relative">

          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto pb-6 pt-2 pl-32 scrollbar-hide"
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

