"use client";
import type React from "react";
import Image from "next/image";
import {
  Building,
  Briefcase,
  Plus,
  SquareArrowOutUpRight,
} from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "../ui/drawer";
import ListingsInfoBienScroll from "./listings-info-bien-scroll";
type ServiceCardProps = {
  title: string;
  imageSrc: string;
  icon: React.ReactNode;
  iconAction: React.ReactNode;
  describe: string;
  type: "link" | "drower" | string;
};

// function MyComponent() {
//   return <HouseIcon className="w-6 h-6 text-gray-500" />;
// }

function ServiceCard({
  title,
  imageSrc,
  icon,
  iconAction,
  describe,
  type,
}: ServiceCardProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerOpenChange = (open: boolean) => {
    setIsDrawerOpen(open);
  };

  const toggle = () => {
    setIsDrawerOpen((prev) => !prev);
  };
  return (
    <div>
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
            <h3 className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white">
              {title}
            </h3>
          </div>
          {/* <h4   className="text-lg lg:text-xl text-white pl-16 font-bold">(Louer - Acheter - Vendre)</h4>  */}
        </div>
      </div>

      <div className=" pt-5 flex  items-center justify-between cursor-pointer">
        <p className="text-2xl font-bold"> {describe} </p>
        {type == "link" && (
          <span className="bg-gray-700 p-4 rounded-full text-white">
            {iconAction}
          </span>
        )}
        {type == "drower" && (
          <Button
            className="cursor-pointer bg-gray-700 p-4 rounded-full text-white"
            onClick={toggle}
          >
            {iconAction}
          </Button>
        )}
      </div>

      {type == "drower" && (
        <Drawer onOpenChange={handleDrawerOpenChange} open={isDrawerOpen}>
          <DrawerContent className="max-w-[1440px] mx-auto -top-[50px] p-0 rounded-3xl overflow-hidden">
            <div className="mx-auto pb-18 w-full overflow-y-scroll ">
              <DrawerHeader>
                <DrawerTitle></DrawerTitle>
              </DrawerHeader>
              <div>
                {/* header */}
                <div className="w-full">
                  <Image
                    className="w-full h-autoo"
                    alt="image lieux "
                    height={500}
                    width={500}
                    src="https://images.unsplash.com/photo-1662026025913-c038e4d917f9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  />
                </div>
                {/* body */}
                <div className=" text-xl lg:text-2xl text-stone-600">
                  <div className="max-w-6xl px-4 sm:px-8 mx-auto">
                    <h3 className="text-3xl md:text-4xl lg:text-6xl text-black text-center font-bold py-8 lg:py-16">
                      Expertise & Conseils en immobilier
                    </h3>

                    <p className="mb-12 lg:mb-16">
                      Luxury Home Abidjan est un cabinet d’expertise et de
                      conseil immobilier qui vous accompagne dans l’évaluation
                      et l’élaboration de vos projets. Nous intervenons auprès
                      de particuliers et de professionnels aussi bien sur le
                      plan commercial que patrimonial.
                    </p>
                  </div>

                  <div className="max-w-6xl px-4 sm:px-8 mx-auto bg-stone-100 p-6 pt-8 lg:p-8 lg:px-10 rounded-4xl">
                    <h3 className="text-black font-bold text-center text-xl lg:text-2xl mb-6  lg:mb-8">
                      Qu’est-ce que l’expertise immobilière ?
                    </h3>

                    <p>
                      C’est l’art de définir la valeur vénale ou locative d’un
                      bien. C’est la valeur à laquelle il peut être vendu ou
                      loué à une date précise sur le marché, grâce à une
                      expertise rigoureuse, impartiale, et exempte de tout
                      conflit d’intérêts. Cette opération est à confier à des
                      professionnels expérimentés respectant le principe
                      d’intégrité et de neutralité. Au bout de l'évaluation, est
                      établi un document officiel, le rapport d’expertise qui
                      prend en compte l’aspect technique, environnemental,
                      juridique et économique du bien sur le marché.
                    </p>
                  </div>
                  <ListingsInfoBienScroll />

                  {/* second partie */}
                  <div className="mb-10 pb-10 rounded-3xl bg-stone-100 max-w-6xl mx-auto">
                    <div >
                      <div className="w-full h-[500px]]">
                        <Image
                          className="w-full rounded-t-3xl"
                          alt="image lieux "
                          height={500}
                          width={500}
                          src="https://images.unsplash.com/photo-1662026025913-c038e4d917f9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        />
                      </div>
                      <div className=" px-4 sm:px-8 mb-12 lg:mb-16">
                        <h3 className="text-xl md:text-3xl llg:text-3xl text-black text-center font-bold">
                          Notre expertise immobilière
                        </h3>
                        <p>
                          Elle est la conclusion officielle d’une évaluation
                          approfondie du bien basée sur l’étude de :
                        </p>
                        <ul className="px-10 list-disc">
                          <li>
                            la situation géographique et l’environnement
                            immédiat
                          </li>
                          <li>
                          la situation juridique ( le titre de propriété )
                          </li>
                          <li>
                          la contenance ( superficie totale et bâtie )
                          </li>
                          <li>
                          l’année de construction
                          </li>
                          <li>
                          la valeur des matériaux utilisés
                          </li>
                          <li>
                          le prix du marché
                          </li>
                        </ul>
                      </div>
                      {/* second partie */}

                      <div >
                        <h3 className="pb-6 text-xl md:text-3xl  text-black text-center font-bold">
                          L’expertise LHA
                        </h3>
                        <ul className="px-18 list-disc">
                          <li>
                          Rassurer les acteurs économiques grâce à une analyse complète, aussi bien technique qu’économique du bien mis en garantie.
                          </li>
                          <li>
                          Répondre aux problématiques fiscales , économiques, juridiques et techniques dans le cadre d’une évaluation.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* conseil last partie*/}
                  <div className="max-w-6xl ppx-4 ssm:px-8 mx-auto">
                    <h3 className="pb-6 text-xl md:text-3xl  text-black text-center font-bold">
                      LHA Conseils
                    </h3>
                    <p className="mb-12 lg:mb-16">
                      Grâce à sa maîtrise de l’environnement, du Marché et de la
                      demande, l’équipe LHA devient votre partenaire CONSEIL.
                      Peu importe votre profil, primo accédant ou investisseur,
                      résident ou étranger souhaitant investir en Côte d’ivoire,
                      notre mission est de vous conseiller et vous accompagner
                      en toute transparence tout au long de votre projet.
                    </p>
                    <div className="flex gap-4  overflow-hidden flex-col lg:flex-row">
                      <div className="bg-stone-100 py-10 rounded-4xl max-w-6xl px-4 sm:px-8 mb-12 lg:mb-16">
                        <h3 className="pb-6 text-xl md:text-3xl llg:text-3xl text-black font-bold">
                        Investissez dans l’immobilier en Côte d’Ivoire !
                        </h3>
                        <p>
                        Nous avons mis en place une démarche basée sur l’écoute active afin de cerner vos besoins et objectifs. Nous vous conseillons sur :
                        </p>
                        <ul className="pb-4 px-10 list-disc">
                          <li>
                          les types de projet
                          </li>
                          <li>
                          les coûts de construction
                          </li>
                          <li>
                          l’environnement fiscal et économique
                          </li>
                          <li>
                          l’environnement juridique et administratif
                          </li>
                          <li>
                          les secteurs géographiques clés en côte d’ivoire
                          </li>
                          <li>
                          les revenus potentiels
                          </li>
                          <li>
                          la rentabilité du projet
                           </li>
                           <li>
                           les différents types d’investissement immobilier 
                           en côte d’ivoire et notamment les plus rentables
                           </li>
                        </ul>
                        {/* <div> <HouseIcon className="w-6 h-6 text-gray-500" /></div> */}
                        <div>
                          <Image
                            // className="w-[50px]"
                            src='/assets/images/icons/house.svg'
                            alt="user"
                              height={60} width={60}/>
                        </div>
                      </div>
                      {/* seconde div */}
                      <div className="bg-stone-100 py-10 rounded-4xl max-w-6xl px-4 sm:px-8 mb-12 lg:mb-16">
                        <h3 className="pb-6 text-xl md:text-3xl  text-black font-bold">
                        LHA intervient
                        </h3>
                        <h4 className="text-muted-foreground font-bold">Avant le projet</h4>
                        <p>
                          Elle est la conclusion officielle d’une évaluation
                          approfondie du bien basée sur l’étude de :
                        </p>
                      
                      </div>
                    </div>
                  </div>
                  {/* icon lhA */}
                  <div className="flex justify-center">

                  <div className="bg-black p-4 rounded-full">
                      <Image
                        className="object-cover w-full shrink-0 "
                        src='/assets/images/icone.png'
                        alt="user"
                        height={200} width={200}/>
                    </div>

                  </div>
                

                </div>
              </div>
            </div>
          </DrawerContent>
        </Drawer>
      )}

      {/* {componentSheet} */}
    </div>
  );
}

export default function ServicesBody() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerOpenChange = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  const services = [
    {
      title: "Transactions",
      imageSrc: "/assets/images/illustrations/page-accueil/service-2.png",
      icon: <Building className="shrink-0" size={32} />,
      iconAction: <SquareArrowOutUpRight className="shrink-0" size={20} />,
      type: "link",
      // componentSheet:<DrawerConseil  isDrawerOpen={isDrawerOpen} />,
      describe:
        "Découvrez nos biens à travers une collection riche en propriétés destinées tant aux particuliers qu'aux professionnels",
    },
    {
      title: "Expertise & Conseils en immobilier",
      imageSrc: "/assets/images/illustrations/page-accueil/service-2.png",
      icon: <Briefcase className="shrink-0" size={32} />,
      iconAction: <Plus className="shrink-0" size={20} />,
      type: "drower",
      describe:
        "Luxury Home Abidjan est un cabinet d’expertise et de conseil immobilier qui vous accompagne dans l’évaluation et l’élaboration de vos projets. ",
    },
    // {
    //   title: "Gestion immobilière",
    //   imageSrc: "/assets/images/illustrations/page-accueil/service-2.png",
    //   icon: <Home className="shrink-0" size={20} />,
    //   iconAction: <SquareArrowOutUpRight className="shrink-0" size={20}/> ,
    //   describe:"Dans le cadre de sa prestation exclusive de gestion,LHA assure non seulement vos revenus mais aussi et surtout la conservation de vos biens.",
    // },
    // {
    //   title: "Syndic de copropriété ",
    //   imageSrc: "/assets/images/illustrations/page-accueil/service-2.png",
    //   icon: <Users className="shrink-0" size={20} />,
    //   iconAction: <SquareArrowOutUpRight className="shrink-0" size={20}/> ,
    //   describe:"Transparente, impartiale, réactive et efficace, l’agence Luxury Home Abidjan est la solution à tous vos tracas. ",
    // },
    // {
    //   title: "Opérations / projets immobiliers",
    //   imageSrc: "/assets/images/illustrations/page-accueil/service-2.png",
    //   icon: <Lightbulb className="shrink-0" size={20} />,
    //   iconAction: <SquareArrowOutUpRight className="shrink-0" size={20}/> ,
    //   describe:"Quam ob rem ut ii qui superiores sunt submittere se debent in amicitia, sic quodam modo inferiores extollere.",

    // },
    // {
    //   title: "Home Staging",
    //   imageSrc: "/assets/images/illustrations/page-accueil/service-2.png",
    //   icon: <PaintBucket className="shrink-0" size={20} />,
    //   iconAction: <SquareArrowOutUpRight className="shrink-0 text-white " size={20}/> ,
    //   describe:"Quam ob rem ut ii qui superiores sunt submittere se debent in amicitia, sic quodam modo inferiores extollere.",

    // },
  ];

  return (
    <section className="py-10 md:py-16">
      <div className="container  mx-auto px-4 lg:px-16">
        <div className="text-center py-10 pb-14">
          <h2 className="text-3xl font-bold lg:text-6xl">
            LUXURY HOME ABIDJAN,
          </h2>
          <p className="text-3xl font-bold lg:text-6xl">
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
              iconAction={service.iconAction}
              type={service.type}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
