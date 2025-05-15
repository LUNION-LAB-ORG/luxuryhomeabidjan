'use client'
import { Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { string } from "zod";

const data = [
{
    id: 1,
    image: "/assets/images/equipe/img-1.jpg",
    nam: "Zane Sorell",
    description: "Enjoys adventurous travel, seeks new cultures and offbeat destinations",
    role: "CEO",
    fb:"fb", 
    linkeding:"linkeding",
    twitter:"twitter",
    instagram:"instagram", 
}, 
{
    id: 2,
    image: "/assets/images/equipe/img-1.jpg",
    nam: "Zane Sorell",
    description: "Enjoys adventurous travel, seeks new cultures and offbeat destinations",
    role: "CEO",
    fb:"fb", 
    linkeding:"linkeding",
    twitter:"twitter",
    instagram:"instagram", 
},
{
    id: 3,
    image: "/assets/images/equipe/img-1.jpg",
    nam: "Zane Sorell",
    description: "Enjoys adventurous travel, seeks new cultures and offbeat destinations",
    role: "CEO",
    fb:"fb", 
    linkeding:"linkeding",
    twitter:"twitter",
    instagram:"instagram", 
},

{
    id: 4,
    image: "/assets/images/equipe/img-1.jpg",
    nam: "Zane Sorell",
    description: "Enjoys adventurous travel, seeks new cultures and offbeat destinations",
    role: "CEO",
    fb:"fb", 
    linkeding:"linkeding",
    twitter:"twitter",
    instagram:"instagram", 
}, 
{
    id: 5,
    image: "/assets/images/equipe/img-1.jpg",
    nam: "Zane Sorell",
    description: "Enjoys adventurous travel, seeks new cultures and offbeat destinations",
    role: "CEO",
    fb:"fb", 
    linkeding:"linkeding",
    twitter:"twitter",
    instagram:"instagram", 
},
{
    id: 6,
    image: "/assets/images/equipe/img-1.jpg",
    nam: "Zane Sorell",
    description: "Enjoys adventurous travel, seeks new cultures and offbeat destinations",
    role: "CEO",
    fb:"fb", 
    linkeding:"linkeding",
    twitter:"twitter",
    instagram:"instagram", 
},
]



export default function Equipe() {
  return (
    <section className="pb-10 lg:pb-18 ppx-2 mmd:px-4 ">

      <div className="container  mx-auto px-4 md:px-4 lg:px-16 py-10 lg:py-16">
        <h2 className="pb-10 font-bold ppx-2 ssm:px-4 llg:px-14 text-[24px] md:text-[30px] lg:text-[36px]">Rencontrez les membres de notre équipe</h2>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 md:gap-5 lg:gap-16 llg:flex-nowrap justify-between ">
            {
                data.map((item, index) => (
                 <div key={index}  className="flex flex-wrap lg:flex-nowrap p-4 border rounded-2xl gap-6 max-w-[500px] w-full md:1/2 lg:1/3">
                    <Image height={500} width={500} className="objet-cover" src={item.image} alt={item.nam} />
                    <div className="py-4">
                    <div className="pb-2">

                        <h3 className="font-bold  tex-[13px]">{item.nam}</h3>
                        <p className="tex-[10px] ffont-semibold text-blue-400">{item.role}</p>
                        
                    </div>
                    <p className="text-[12px] text-stone-400 pb-5">{item.description}</p>
                     <div className="flex items-center gap-4">
                    
                     {item.linkeding && (
                            <Link href={item.linkeding}target="_blank" rel="noopener noreferrer">
                            <Linkedin  className="w-[16px] h-[16px]"  />
                            </Link>
                        )}
                        {item.instagram && (
                            <Link href={item.linkeding}  target="_blank" rel="noopener noreferrer">
                            <Instagram className="w-[16px] h-[16px]" />
                            </Link>
                        )}
                        {item.twitter && (
                            <Link href={item.linkeding}  target="_blank" rel="noopener noreferrer">
                              <Twitter className="w-[16px] h-[16px]"  />
                            </Link>
                        )}
                    

                     </div>
                    </div>
                    
                 </div> 
                ))
            }
        </div>

      </div>
    </section>
  );
}