"use client";
import type React from "react";
import Image from "next/image";
import { Building, Briefcase, Plus, SquareArrowOutUpRight, Home, Users, Lightbulb, PaintBucket, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "../ui/drawer";
import ListingsInfoBienScroll from "./listings-info-bien-scroll";
import GestionImmobilier from "./gestion-immonilier-drawer";
import ExpertiseDrawer from "./expertise-drawer";
import Syndic from "./syndic-drower";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
type ServiceCardProps = {
  title: string;
  imageSrc: string;
  icon: React.ReactNode;
  drawerContent:React.ReactNode;
  describe: string;
  type: "link" | "drower" | string;
  linkTo?:string;
  id:string|undefined
};

function ServiceCard({
  title,
  imageSrc,
  icon,
  drawerContent,
  describe,
  type,
  linkTo,
  id,
}: ServiceCardProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerOpenChange = (open: boolean) => {
    setIsDrawerOpen(open);
  };

  const toggle = () => {
    setIsDrawerOpen((prev) => !prev);
  };


  const pathname = usePathname();

 
  useEffect(() => {
    // On ne fait ce code qu'en client-side
    const hash = window.location.hash; // e.g. "#transactions"
    if (!hash) return;

    // Décale d'un tick pour laisser React hydrater le DOM
    setTimeout(() => {
      const id = hash.substring(1);
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 0);
  }, [pathname]); // relance à chaque changement de route


  return (
    <div id={id}>
      <div className="relative overflow-hidden rounded-3xl">
        {/* Background Image */}
        <div className="relative h-[400px] md:h-[350px] lg:h-[600px] w-full">
          <Image
            src={imageSrc || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transformm duration-500 ggroup-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {/* Overlay */}
          <div className="absolute " />
        </div>

        {/* Content */}
        <div className="absolute inset-x-0 h-full z-20 top-0 p-6 text-white bg-gradient-to-t from-black/50 via-transparent to-transparent" />

        <div className="absolute w-full flex justify-center bottom-10  z-20">
          <div className="flex flex-col items-center gap-3">
            {/* Icon Circle */}
            <div className="flex h-10 w-10 lg:w-18 lg:h-18 items-center justify-center rounded-2xl bg-white backdrop-blur-sm shrink-0">
              <div className="">{icon}</div>
            </div>

            {/* Title */}
            <h3 className="px-4 text-[24px] mmd:text-3xl lg:text-4xl xl:text-5xl font-bold text-white">
              {title}
            </h3>
          </div>
          {/* <h4   className="text-lg lg:text-xl text-white pl-16 font-bold">(Louer - Acheter - Vendre)</h4>  */}
        </div>
      </div>

      <div className=" pt-5 flex gap-8 items-center justify-between cursor-pointer">
        <p className="text-[18px] lg:text-2xl font-bold"> {describe} </p>
        {type == "link" && (
          <Link  
          href={linkTo||''}
          className="bg-gray-700 p-2 lg:p-4 rounded-full text-white"
          >
            <SquareArrowOutUpRight className="shrink-0" size={20} />
          </Link>
        )}
        {type == "drower" && (
          <span
            className="cursor-pointer bg-gray-700 p-2 lg:p-4 rounded-full text-white"
            onClick={toggle}
          >
           <Plus className="shrink-0" size={20} />
          </span>
        )}
      </div>

      {type == "drower" && (
           <Drawer  onOpenChange={handleDrawerOpenChange} open={isDrawerOpen}>
          <DrawerContent className="overflow-hidden !h-screen !max-h-screen max-w-[1440px]  mx-auto p-0 rounded-[50px]">
            <div className="absolute z-50 right-10 top-10 ">
               <DrawerClose className="relative right-0" asChild>
                  <Button
                  className="py-4 px-3 bg-white/10 cursor-pointer rounded-full flex item-center"
                  variant="outline"
                  size="sm"
                >
                    <span><X /></span>
                    <span className="text-[16px]">Fermer</span>
                  </Button>
            </DrawerClose>
            </div>
            <div className="mx-auto pb-18 w-full overflow-y-scroll  text-xl text-stone-600 lg:text-[27px] leading-8">
              <DrawerHeader className="hidden">
                <DrawerTitle></DrawerTitle>
              </DrawerHeader>
              {drawerContent}
            </div>
          </DrawerContent>
        </Drawer>
       
      )}

      {/* {componentSheet} */}
    </div>
  );
}

export default function ServicesBody() {

  const services = [
    {
      title: "Transactions",
      imageSrc: "/assets/images/backgrounds/Slide-service1.jpg",
      icon: <Building className="shrink-0" size={32} />,
      iconAction: <SquareArrowOutUpRight className="shrink-0" size={20} />,
      type: "link",
      linkTo:"services/transaction",
      
      // componentSheet:<DrawerConseil  isDrawerOpen={isDrawerOpen} />,
      describe:
        "Découvrez nos biens à travers une collection riche en propriétés destinées tant aux particuliers qu'aux professionnels",
    },
    {
      title: "Expertise & Conseils en immobilier",
      imageSrc: "/assets/images/backgrounds/Slide-service2.jpg",
      icon: <Briefcase className="shrink-0" size={32} />,
      drawerContent:<ExpertiseDrawer/>,
      type: "drower",
      id:"expertise",
      describe:
        "Luxury Home Abidjan est un cabinet d’expertise et de conseil immobilier qui vous accompagne dans l’évaluation et l’élaboration de vos projets. ",
    },
    {
      title: "Gestion immobilière",
      imageSrc: "/assets/images/backgrounds/Slide-service4.jpg",
      icon: <Home className="shrink-0" size={32} />,
      drawerContent:<GestionImmobilier/>,
      type: "drower",
      id:"gestion",
      describe:"Dans le cadre de sa prestation exclusive de gestion,LHA assure non seulement vos revenus mais aussi et surtout la conservation de vos biens.",
    },
    {
      title: "Syndic de copropriété ",
      imageSrc: "/assets/images/backgrounds/Slide-service1.jpg",
      icon: <Users className="shrink-0" size={32} />,
      drawerContent:<Syndic/>,
      type: "drower",
      id:"syndic",
      describe:"Transparente, impartiale, réactive et efficace, l’agence Luxury Home Abidjan est la solution à tous vos tracas. ",
    },
    {
      title: "Home Staging",
      imageSrc: "/assets/images/backgrounds/Slide-service2.jpg",
      icon: <PaintBucket className="shrink-0" size={32} />,
      drawerContent:<GestionImmobilier/>,
      type: "link",
      id:"staging",
      describe:"Quam ob rem ut ii qui superiores sunt submittere se debent in amicitia, sic quodam modo inferiores extollere.",

    },
    {
      title: "Opérations / projets immobiliers",
      imageSrc: "/assets/images/backgrounds/Slide-service4.jpg",
      icon: <Lightbulb className="shrink-0" size={32} />,
      drawerContent:<GestionImmobilier/>,
      type: "link",
      id:"operations",
      describe:"Quam ob rem ut ii qui superiores sunt submittere se debent in amicitia, sic quodam modo inferiores extollere.",

    },
  
  ];

  return (
    <section className="py-10 md:py-16">
      <div className="container  mx-auto px-4 lg:px-16">
        <div className="text-center py-10 pb-14">
          <h2 className="text-[26px] font-bold lg:text-6xl">
            LUXURY HOME ABIDJAN,
          </h2>
          <p className="text-[24px] font-bold lg:text-6xl">
            les clés de chez vous sont chez nous
          </p>
        </div>
        <div className="flex flex-col gap-26">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              imageSrc={service.imageSrc}
              icon={service.icon}
              describe={service.describe}
              type={service.type}
              linkTo={service.linkTo}
              drawerContent={service.drawerContent}
              id={service.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
