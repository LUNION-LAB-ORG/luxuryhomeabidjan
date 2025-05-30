"use client";
import { CalendarIcon, MapPin } from "lucide-react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Calendar } from "../ui/calendar";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function BodyImmobilierDetail() {
  return (
    <section className="container  mx-auto px-4 lg:px-14">
      <div className="lg:flex">
        <div className="flex-1">
          <h2 className="text-stone-600 pt-8 pb-2 text-[22px] md:text-[30px] font-bold">
            Logement entier- Appartement
          </h2>

          <div className="pb-6 flex items-center gap-2 ">
            <span>
              <MapPin className="w-5 h-5" />
            </span>
            <span>Marcory Zone 4 rue Paul Langevin Abidjan, Côte d'Ivoire</span>
          </div>
          {/* liste equipement  */}
          <ListEquipement />

          {/* bon a savoir  */}
          <div id="bonSavoir" className="pb-6">
            <p className="p-4 py-6 bg-stone-100 rounded-3xl">
              Profitant d'un emplacement idéal au cœur de la Riviera Golf
              Beverly Hills à quelques minutes seulement des écoles françaises,
              la villa duplex BALI, neuve et de haut standing présente de très
              belles prestations. Le lumineux salon donne sur une terrasse et sa
              piscine au carrelage Balinéen. La rampe des escaliers en verre
              design, les trois chambres spacieuses et la cuisine moderne
              marbrée font de cette villa un espace de vie agréable.
            </p>
          </div>
          <Equipement />

          <Etablissement />
        </div>
        {/* container right */}
        <div className="hidden lg:block">
          <DivConatinerRight />
        </div>
      </div>
    </section>
  );
}

function ListEquipement() {
  const divRef = useRef<HTMLDivElement | null>(null);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const element = divRef.current;
    if (!element) return;

    const elementOffsetTop = element.offsetTop;

    const handleScroll = () => {
      // Si on scrolle en dessous de la div → fixed
      if (window.scrollY >= elementOffsetTop) {
        setIsFixed(true);
      } else {
        // Si on remonte au-dessus → normal
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={divRef}
      className={`overflow-x-scroll text-nowrap flex gap-4 md:text-xl  text-stone-500 ${
        isFixed
          ? " mx-auto px-4 lg:px-14 bg-white fixed top-14 py-5 left-0 w-full z-10 shadow-md"
          : "pb-10"
      }`}
    >
      <button
        className="cursor-pointer"
        onClick={() => {
          const section = document.getElementById("bonSavoir");
          section?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        Bon à savoir
      </button>
      <button
        className="cursor-pointer"
        onClick={() => {
          const section = document.getElementById("equipement");
          section?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        Equipements
      </button>
      <button className="cursor-pointer">Emplacement</button>
      <button
        className="cursor-pointer"
        onClick={() => {
          const section = document.getElementById("bonSavoir");
          section?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        Environs de l'établissement
      </button>
    </div>
  );
}

function DivConatinerRight() {
  const [date, setDate] = useState<Date>();

  return (
    <div className=" lg:w-[400px] p-5">
      <div className="border rounded-3xl p-6 text-stone-700">
        <h3 className="font-bold">Coût de location</h3>
        <p className="text-[24px] font-bold">2 000 000 FCFA</p>
        <p className="text-stone-700">par mois</p>
        <div className="space-y-2">
          <Label>Disponibilité</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? (
                  format(date, "PPP", { locale: fr })
                ) : (
                  <span>Sélectionnez une date</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
                disabled={(date) => {
                  const today = new Date();
                  today.setHours(0, 0, 0, 0);
                  return (
                    date < today || date.getDay() === 0 // Disable Sundays
                  );
                }}
              />
            </PopoverContent>
          </Popover>
        </div>
        <Link href="1/reservation">
          <Button className="cursor-pointer">Vérifier la disponibilité</Button>
        </Link>
      </div>
    </div>
  );
}

function Equipement() {
  const data = [
    {
      title: "Vidéosurveillance",
      icon: "/assets/images/icons/icon-video-surveillance.png",
    },
    {
      title: "Cuisine",
      icon: "/assets/images/icons/icon-cuisine.png",
    },
    {
      title: "Vue sur l'extérieur",
      icon: "/assets/images/icons/icon-vue-exterieur.png",
    },
    {
      title: "Connexion Wi-Fi gratuite",
      icon: "/assets/images/icons/icon-wifi.png",
    },
    {
      title: "Parking",
      icon: "/assets/images/icons/icon-parking.png",
    },
    {
      title: "High-tech",
      icon: "/assets/images/icons/icon-tele.png",
    },
    {
      title: "Chambres",
      icon: "/assets/images/icons/icon-lit.png",
    },
    {
      title: "Salon",
      icon: "/assets/images/icons/icon-canape.png",
    },
    {
      title: "Salle de bains",
      icon: "/assets/images/icons/icon-salle-de-bain.png",
    },
  ];
  return (
    <section id="equipement">
      <div>
        <h2>Equipements</h2>
        <div className="py-10 text-[14px] flex gap-4 flex-wrap">
          {/* block 1 */}
          <div className="min-w-[300px] flex flex-col space-y-4 bg-stone-100 p-6 rounded-3xl">
            {data.slice(0, 3).map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <Image
                  className="w-5 h-5"
                  alt={item.title}
                  src={item.icon}
                  width={30}
                  height={30}
                />

                <h3>{item.title}</h3>
              </div>
            ))}
          </div>

          {/* block 1 */}
          <div className="min-w-[300px] flex flex-col space-y-4 bg-stone-100 p-6 rounded-3xl">
            {data.slice(3, 6).map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <Image
                  className="w-5 h-5"
                  alt={item.title}
                  src={item.icon}
                  width={30}
                  height={30}
                />

                <h3>{item.title}</h3>
              </div>
            ))}
          </div>
          {/* block 1 */}
          <div className="min-w-[300px] flex flex-col space-y-4 bg-stone-100 p-6 rounded-3xl">
            {data.slice(6, 9).map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <Image
                  className="w-5 h-5"
                  alt={item.title}
                  src={item.icon}
                  width={30}
                  height={30}
                />

                <h3>{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Etablissement() {
  const data = {
    img: "/assets/images/backgrounds/Rectangle-44.jpg",
    lieuxPoximite: [
      "Restaurant KFC",
      "Restaurant McDonald",
      "Restaurant Burger King",
      "Restaurant Pizza Hut",
      "Restaurant Pizza Hut",
      "Restaurant Pizza Hut",
      "Restaurant Pizza Hut",
      "Restaurant Pizza Hut",
      "Restaurant Pizza Hut",
    ],
  };

  return (
    <section className="py-10 font-bold text-stone-600">
      <h2 className="pb-10">Environs de l'établissement</h2>

      <div className="flex flex-col gap-6 md:flex-row md:gap-16">
        <Image
          className="w-full md:w-2/5 h-[300px] object-cover rounded-3xl"
          alt="etablissement"
          src={data.img}
          width={500}
          height={500}
        />
        <div className="flex-1">
          <div className="flex gap-2 pb-5">
            <Image
              className="w-5 h-5"
              alt="lieux approximites"
              src="/assets/images/icons/icon-walk.png"
              width={30}
              height={30}
            />
            <span className="text-black">Lieux à proximité</span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {data.lieuxPoximite.map((item, index) => (
              <span key={index} className="text-stone-500 text-[14px]">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
