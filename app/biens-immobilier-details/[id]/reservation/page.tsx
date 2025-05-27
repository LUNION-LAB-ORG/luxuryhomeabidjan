import BtnRetour from "@/components/common/btn-retour";
import ServiceCommercial from "@/components/common/serviceCommercial";
import { ExclusiveListings } from "@/components/home/exclusive-listings/exclusive-listings";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";

export default async function PageReservation(){

    return(
        <div className="container  mx-auto px-4 lg:px-14">
           <div>
             <BtnRetour text="Demande de réservation" />
           </div>
            <Header/>
            <ServiceCommercial/>
            <ExclusiveListings />
        </div>
    )
}



function Header() {
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
      <div className="py-10 text-stone-600 mx-auto lg:px-16">  
        <div className="ww-fit mx-auto flex flex-col lg:flex-row  gap-5">
          <Image
            className="w-full lg:w-[500px] hh-[450px] llg:w-4/12 object-cover rounded-3xl"
            alt="etablissement"
            src={data.img}
            width={500}
            height={500}
          />
          <Card className="llg:w-2xl flex-1">
            <CardHeader>
                <CardTitle></CardTitle>
                <div>
                    <h3 className="pb-5 text-2xl font-bold">Villa RAY</h3>
                    <p className="text-stone-600">Coût de location</p>
                    <p className="text-2xl font-bold text-stone-600">2 000 000  FCFA/mois</p>
                </div>
            </CardHeader>
            <CardContent>
              <div className=" text-stone-600">
                {/* periode choixi avec button */}
                <div>
                    <p className="pb-5 font-bold">Période choisie</p>
                    <div className="flex items-center justify-between">
                        <span>15 juin 2025 - 24 Fév 2026</span>
                        <Button>Modifier</Button>
                    </div>   
                </div>
                {/* details */}
                <div className="flex flex-col gap-4">
                    <h3 className="font-bold">Détail du prix</h3>
                    <div className="flex items-center justify-between">
                        <span>2 000 000  FCFA x 9 mois</span>
                        <span>18 000 000 FCFA</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span>Frais de dossier</span>
                        <span>50 000 FCFA</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span>Mois d’agence</span>
                        <span>2 000 000 FCFA</span>
                    </div>
                </div>
                <div>
      
                </div>
                </div>
            </CardContent>
            <CardFooter className="text-stone-600 font-bold">
              <div>
                <span>Mois d'agence</span>
                <span>2 000 000 FCFA</span>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    );
  }