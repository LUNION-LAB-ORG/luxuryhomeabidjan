'use client'
import { Bed, SquareArrowOutUpRight } from "lucide-react";
import { motion, useAnimation } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useMediaQuery } from 'usehooks-ts'
interface Data {
  nom: string;
  piece: number;
  prix: string;
  lieux: string;
  type: string;
  chambre: {
    name: string;
    nombre: number;
  };
  salon: {
    name: string;
    nombre: number;
  };
  salleDeBain: {
    name: string;
    nombre: number;
  };
  linkPage: string;
  imgProduct: string;
}

const data: Data[] = [
  {
    nom: "VILLA RAY",
    piece: 6,
    prix: "100000000",
    lieux: "Marcory",
    type: "Location meublée",
    chambre: {
      name: "Chambre",
      nombre: 4,
    },
    salon: {
      name: "Salon",
      nombre: 4,
    },
    salleDeBain: {
      name: "salle de bain",
      nombre: 4,
    },
    linkPage: "",
    imgProduct: "/assets/images/backgrounds/Rectangle-44.jpg",
  },
  {
    nom: "VILLA RAY",
    piece: 6,
    prix: "100000000",
    lieux: "Marcory",
    type: "Location meublée",
    chambre: {
      name: "Chambre",
      nombre: 4,
    },
    salon: {
      name: "Salon",
      nombre: 4,
    },
    salleDeBain: {
      name: "salle de bain",
      nombre: 4,
    },
    linkPage: "",
    imgProduct: "/assets/images/backgrounds/Rectangle-44.jpg",
  },
  {
    nom: "VILLA RAY",
    piece: 6,
    prix: "100000000",
    lieux: "Marcory",
    type: "Location meublée",
    chambre: {
      name: "Chambre",
      nombre: 4,
    },
    salon: {
      name: "Salon",
      nombre: 4,
    },
    salleDeBain: {
      name: "salle de bain",
      nombre: 4,
    },
    linkPage: "",
    imgProduct: "/assets/images/backgrounds/Rectangle-44.jpg",
  },
  {
    nom: "VILLA RAY",
    piece: 6,
    prix: "100000000",
    lieux: "Marcory",
    type: "Location meublée",
    chambre: {
      name: "Chambre",
      nombre: 4,
    },
    salon: {
      name: "Salon",
      nombre: 4,
    },
    salleDeBain: {
      name: "salle de bain",
      nombre: 4,
    },
    linkPage: "",
    imgProduct: "/assets/images/backgrounds/Rectangle-44.jpg",
  },
];


export default function SectionCard() {

  return (
      <div className="px-4 lg:px-14">
        <div className="relative w-full mx-auto lg:py-16 flex flex-col lg:grid lg:grid-cols-2  flex-wrap gap-8 lg:gap-6 ">
          {data.map((item, index) => {
            return (
             <Card key={index} item={item}/>
            );
          })}
        </div>
      </div>
  );
}


function Card({item}:{item:Data}){
    // const { width } = useWindowSize();
    //  if (width === undefined) return null;
      const matches = useMediaQuery('(min-width: 400px)')

  const [isHovered, setIsHovered] = useState(false);

  function handleMouseEnter() {
    setIsHovered(true);
  }
  function handleMouseLeave() {
    setIsHovered(false);
  }


  const variants = {
  hover: {
    y: matches ? "23%" : "0",
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
    },
  },
  initial: {
    y: 0,
  },
};




  return(
    <div
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
      className="relative rounded-3xl sm:rounded-4xl overflow-hidden w-full llg:w-1/2 min-h-[400px] sm:h-[700px] lg:min-h-screen"
    >
      <div className="hidden lg:block px-4 py-4 bg-stone-100">
        <div className="text-black font-bold flex gap-4">
          <span className="py-2 px-4 bg-stone-300 rounded-4xl ">{item.lieux}</span>
          <span className="py-2 px-2 bg-stone-300 rounded-4xl ">{item.type}</span>
        </div>
        {/* <div className="h-2 w-full" /> */}
        {/* info */}
        <div className="border-t-2 mt-2">
          <div className="flex justify-between mt-4 ">
            <div className="flex flex-wrap gap-4 text-[13px] text-stone-600">
              <div className="flex flex-col gap-2 ">
                <div className="flex gap-2">
                  <span className="font-bold">{item.chambre.nombre}</span>
                  <span> <Bed size={20}/></span>
                </div>
                <h3>{item.chambre.name}</h3>
              </div>

              <div className="flex flex-col gap-2 ">
                <div className="flex gap-2">
                  <span className="font-bold">{item.chambre.nombre}</span>
                  <span > <Bed size={20}/></span>
                </div>
                <h3 >{item.chambre.name}</h3>
              </div>

              <div className="flex flex-col gap-2 ">
              <div className="flex gap-2">
                  <span className="font-bold">{item.chambre.nombre}</span>
                  <span> <Bed size={20}/></span>
                </div>
                <h3>{item.chambre.name}</h3>
              </div>
            </div>

            {/* second */}
            <Link href="biens-immobilier-details/1">
            <div className="flex items-center gap-2 sm:gap-6 rounded-xl px-2 py-4 sm:px-4 sm:py-6 bg-stone-200">
              <span className="font-semibold">Voir les détails</span>
              <span className="text-stone-700">
                <SquareArrowOutUpRight size={20} />
              </span>
            </div>
            </Link>
          
          </div>
        </div>
      </div>
      
  
      

      {/* img */}
      <motion.div 
        variants={variants}
        animate={isHovered ? "hover" : "initial"}
        transition={{ delay: 0.2, duration: 0.5 }}
      
      className="lg:absolute w-full top-0 inset-0">
          <Image
          className="w-full h-auto objet-cover rounded-b-4xl"
           height={700}
           width={700}
           src={item.imgProduct}
           alt=""
          />
          <div className="absolute w-full bbg-amber-300 h-full top-0 flex flex-col">
            <h3 className="text-white bg-black/20  mt-6 ml-6 w-fit p-2 px-6 rounded-4xl">Marcory</h3>
            
            <div className="absolute w-full left-[7%] text-white bottom-[15%] sm:bottom-[10%]">
              <h3 className="text-[24px] sm:text-[40px] font-bold">VILLA RAY</h3>
              <div className="text-[20px] sm:text-[36px]">
                <span>6 pieces | </span>
                <span className="font-bold">1000 000 000 fcfa</span>
              </div>
            </div>
          </div>
      </motion.div>


      {/* img mobile */}
      <Link href="/biens-immobilier-details/1" className="lg:hidden">
         <motion.div 
        variants={variants}
        animate={isHovered ? "hover" : "initial"}
        transition={{ delay: 0.2, duration: 0.5 }}
      
      className="absolute w-full top-0 inset-0">
          <Image
          className="w-full h-auto objet-cover rounded-b-4xl"
           height={700}
           width={700}
           src={item.imgProduct}
           alt=""
          />
          <div className="absolute w-full bbg-amber-300 h-full top-0 flex flex-col">
            <h3 className="bg-stone-300 mt-6 ml-6 w-fit p-2 px-6 rounded-4xl">Marcory</h3>
            
            <div className="absolute w-full left-[7%] text-white bottom-[15%] sm:bottom-[10%]">
              <h3 className="text-[24px] sm:text-[40px] font-bold">VILLA RAY</h3>
              <div className="text-[20px] sm:text-[36px]">
                <span>6 pieces | </span>
                <span className="font-bold">1000 000 000 fcfa</span>
              </div>
            </div>
          </div>
      </motion.div>
      
      </Link>
     

    </div>
  )
}