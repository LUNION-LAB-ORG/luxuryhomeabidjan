import { motion, useAnimation } from "motion/react";
import Image from "next/image";

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
  imgProduct:string
}

const data: Data[] = [
  {
    nom: "VILLA RAY",
    piece: 6,
    prix: "100000000",
    lieux: "Marcory",
    type: "Location meubler",
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
    imgProduct:"/assets/images/illustrations/page-accueil/service-2.png",
  },
  {
    nom: "VILLA RAY",
    piece: 6,
    prix: "100000000",
    lieux: "Marcory",
    type: "Location meubler",
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
    imgProduct:"/assets/images/illustrations/page-accueil/service-2.png",

  },
];

export default function SectionCard() {
  return (
    <div>
      <div className="px-16 ">
        <div className="mx-auto flex flex-col lg:flex-row ">
          {data.map((item, index) => {
            return (
              <div key={index}  className="bg-stone-100 min-h-screen lg:h-screen w-full lg:w-1/2 rounded-4xl">
                <div>
                  <div>
                    <span className="py-3 px-5">{item.lieux}</span>
                    <span className="py-3 px-5">{item.type}</span>
                  </div>
                  <div className="h-2 w-full" />
                  {/* info */}
                  <div>
                    <div>
                      <div>
                        <div>
                          <span>{item.chambre.nombre}</span>
                          <span>icon</span>
                        </div>
                        <h3>{item.chambre.name}</h3>
                      </div>
                    </div>
                  </div>
                </div>
                {/* img */}
                <div>
                    <Image
                    className="w-full  objet-cover h-auto"
                     height={500}
                     width={500}
                     src={item.imgProduct}
                     alt=""
                    />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
