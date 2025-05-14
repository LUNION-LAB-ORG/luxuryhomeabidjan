"use client";
import Image from "next/image";
import Link from "next/link";
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
      <div className="relative w-full mx-auto lg:py-16 grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 ">
        {data.map((item, index) => {
          return <Card key={index} item={item} />;
        })}
      </div>
    </div>
  );
}

function Card({ item }: { item: Data }) {
  return (
    <Link href="biens-immobilier-details/1">
      <div className="relative  overflow-hidden w-full ">
        <div>
          <Image
            className="w-full objet-cover rounded-3xl sm:rounded-4xl h-[300px] sm:h-[380px] md:h-[300px] xl:h-[380px]"
            height={500}
            width={500}
            src={item.imgProduct}
            alt=""
          />
          <h3 className="absolute top-0 bg-stone-300 mt-6 ml-6 w-fit p-2 px-6 rounded-4xl">
            Marcory
          </h3>
        </div>
        <div className="">
          <h3 className="text-[24px] md:text-[30px] lg:text-[36px] font-bold">
            Logement 1
          </h3>
          <p className="text-green-400">disponible</p>
          <div>
            <span>6 pieces | </span>
            <span className="font-bold">1000 000 000 fcfa</span>
          </div>
        </div>
      </div>
    </Link>
  );
}