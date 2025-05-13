import { Check } from "lucide-react";
import Image from "next/image";

const data = [
  {
    name: "Chambre autonome",
    icon: "/assets/images/icons/lit.png",
  },
  {
    name: "Piscine",
    icon: "/assets/images/icons/lit.png",
  },
  {
    name: "TV Smart",
    icon: "/assets/images/icons/lit.png",
  },
  {
    name: "Chambre autonome",
    icon: "/assets/images/icons/lit.png",
  },
  {
    name: "Piscine",
    icon: "/assets/images/icons/lit.png",
  },
  {
    name: "TV Smart",
    icon: "/assets/images/icons/lit.png",
  },
];

export default function Equipement() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-18 lg:pb-24 lg:px-10 font-semibold text-stone-800">
      <div>
        <h2 className="text-[25px] py-10 lg:pt-0 text-center font-bold">Equipements</h2>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4  sm:grid-cols-3 lg:gap-13 ">
          {data.map((item, index) => (
            <div className="max-w-[350px] flex items-center justify-between" key={index}>
              <div className="flex items-center gap-4">
                <div className=" border border-stone-400 p-2 lg:p-3 rounded-xl lg:rounded-2xl">
                  <Image
                    className="w-[20px] lg:w-[36px] shrink-0"
                    src={item.icon}
                    alt="icon"
                    width={23}
                    height={23}
                  />
                </div>

                <p>{item.name}</p>
              </div>
              <div className="text-green-600 "> <Check size={20}/></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
