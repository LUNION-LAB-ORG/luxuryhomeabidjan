import { Logements } from "@/app/propriete/content";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function CardImage({ item }: { item: Logements }) {

    const [currentImage,setCurrentImage] = useState(0)

    function handleChange(value: number) {
        setCurrentImage(prev => {
          const nextIndex = prev + value
      
          if (nextIndex < 0 || nextIndex >= item.images.length) {
            return prev // Ne bouge pas si hors limite
          }
      
          return nextIndex
        })
      }


    useEffect(()=>{

    },[currentImage])
  return (
    <div>
      <div className="relative group">
        <Link href='/propriete/detail/1'>
        <Image
          alt={item.typeLogement}
          className="w-full object-cover h-[140px]] rounded-3xl"
          src={item.images[currentImage]}
          width={500}
          height={500}
        />
        </Link>

        <button 
          onClick={() => handleChange(-1)}
          disabled={currentImage === 0}
        
        className="absolute left-5 top-1/2 opacity-0 group-hover:opacity-100 group-hover:text-slate-900  group-hover:bg-amber-50 rounded-3xl p-2 cursor-pointer">
          <ChevronLeft/>
        </button>
       
        <button 
        onClick={() => handleChange(1)}
        disabled={currentImage === item.images.length - 1}
          className="absolute group-hover:text-slate-900  group-hover:bg-amber-50 rounded-3xl p-2 right-5 top-1/2 cursor-pointer">
          <ChevronRight className="opacity-0 group-hover:opacity-100  group-hover:text-slate-900" />
        </button>
      </div>
      <div className="px-2 pt-2">
        <h2 className="font-semibold text-lg">{item.emplacement} </h2>
        <h3>{item.typeLogement}</h3>

        <p>
          <span className="font-semibold">{item.prix} </span>fcfa par nuit
        </p>
      </div>
    </div>
  );
}
