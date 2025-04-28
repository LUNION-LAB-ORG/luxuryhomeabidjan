"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input"; // Assurez-vous que le chemin est correct
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Calendar } from "@/components/ui/calendar";
import { DateRange } from "react-day-picker";
import { isAfter, isBefore } from "date-fns";
import { toast } from "sonner";
import DialogLieux from "./dialog-lieux";

import { useRouter } from "next/navigation";
import PieceSelector from "@/components/common/piece-selector";
import ReservationCalendar from "@/components/common/reservation-calendare";
import PriceRangeSlider from "@/components/common/price-range-slader";
import TypeLogement from "@/components/common/type-logement";

const typeLogement = [




  {
    id: "appartements",
    label: "Appartements",
  },
  {
    id: "studios",
    label: "Studios",
  },
  {
    id: "Maison",
    label: "villas",
  },
  {
    id: "Duplex",
    label: "Duplex & Triplex",
  },
  // {
  //   id: "bureaux-entrepots",
  //   label: "Bureaux & Entrepots",
  // },
  // {
  //   id: "commerces",
  //   label: "Commerces",
  // },
  // {
  //   id: "coworking",
  //   label: "Coworking",
  // },
  // {
  //   id: "espaces-evenementiels",
  //   label: "Espaces évenementiels",
  // },
];

export type TypeLogements = (typeof typeLogement)[number]; // 'typeof' infère le type des éléments du tableau

const FormSchema = z.object({
  typeLogement: z
    .array(z.string())
    .refine((value) => value.some((item) => item), {
      message: "You have to select at least one item.",
    }),
  piece: z.number().min(1, "veillez entrer un valeur superieur a 0"),
  emplacement: z.string(),
});

interface Props {
  setIsSelectOpen: (value: boolean) => void;
  handleDialogLieuxOpen: (value: boolean) => void;
  service:string,}

interface NewData {
  typeLogement: string[];
  piece: number;
  emplacement: string;
  prix: {
    depart: number;
    fin: number;
  };
  calandar: {
    depart: string | undefined;
    fin: string | undefined;
  };
}

export default function FormLocation({
  setIsSelectOpen,
  handleDialogLieuxOpen,
  service
}: Props) {
  const [openDialogLieux, setOpenDialogLieux] = useState(false);
  const [priceRange, setPriceRange] = useState<[number, number]>([
    10000, 15000000,
  ]);
  const [range, setRange] = useState<DateRange | undefined>(undefined);
  const [valuePiece, setValuePiece] = useState<number>(1);

  const router = useRouter();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      typeLogement: ["studios"],
      piece: 1,
      emplacement: "abidjan",
    },
  });

  // useEffect(()=>{
  //   if(!range?.from || !range?.to){
  //     setOpenDialogLieux(false)

  //     return

  //   }
  //   setOpenDialogLieux(true)

  // },[range])

  function onSubmit(data: z.infer<typeof FormSchema>) {
    //   if (!range?.from || !range?.to) {
    //     toast("Veillez rempli le calandrier de reservation", {
    //       description: "Sunday, December 03, 2023 at 9:00 AM",
    //       action: {
    //         label: "Undo",
    //         onClick: () => console.log("Undo"),
    //       },
    //     });

    //   return;
    // }

    const newData: NewData = {
      typeLogement: data.typeLogement,
      piece: data.piece,
      emplacement: data.emplacement,
      prix: {
        depart: priceRange[0],
        fin: priceRange[1],
      },
      calandar: {
        depart: range?.from?.toLocaleDateString("fr-FR"),
        fin: range?.to?.toLocaleDateString("fr-FR"),
      },
    };
    const searchParams = new URLSearchParams();

    searchParams.set("typeLogement", newData.typeLogement.toString());
    searchParams.set("piece", newData.piece.toString());
    searchParams.set("emplacement", newData.emplacement);
    searchParams.set("prixDepart", newData.prix.depart.toString());
    searchParams.set("prixFin", newData.prix.fin.toString());
    searchParams.set("status",service);


    if (newData.calandar.depart) {
      searchParams.set("reservationDebut", newData.calandar.depart);
    }
    if (newData.calandar.fin) {
      searchParams.set("reservationFin", newData.calandar.fin);
    }

    router.push(`/propriete?${searchParams.toString()}`);

    console.log({ myData: newData });
  }

  return (
    <div className="relative text-md overflow-auto h-[600px] px-8 ppb-36 ">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className=" space-y-8 p-4 pb-0 "
        >
          <div className="w-full  flex justify-center gap-5 flex-col lg:flex-row ">
            <div className="w-full  md:max-w-sm rounded-3xl border px-3 py-5">
              <TypeLogement form={form} typeLogement={typeLogement} />
            </div>
            <div className="w-full max-w-lg flex flex-col items-center gap-2">
              <div className="w-full h-fit flex items-center space-x-2 border rounded-3xl p-3 py-5">
                <PieceSelector
                  form={form}
                  valuePiece={valuePiece}
                  setValuePiece={setValuePiece}
                />
              </div>

              <div className="w-full h-fit flex  items-center space-x-2 border rounded-3xl p-5 py-7">
                <FormField
                  control={form.control}
                  name="emplacement"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Choisissez votre ville</FormLabel>
                      <FormControl>
                        <MySelect
                          field={field}
                          setIsSelectOpen={setIsSelectOpen}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className=" w-full h-fitflex  items-center space-x-2 border rounded-3xl p-5 py-7">
                <PriceRangeSlider
                  priceRange={priceRange}
                  setPriceRange={setPriceRange}
                />
              </div>
            </div>
            <ReservationCalendar range={range} setRange={setRange} />
          </div>

          <div>
            <Button type="submit">Appliquer</Button>
          </div>
        </form>
      </Form>
    </div>
  );
}

interface PropsSelect {
  field: any;
  setIsSelectOpen: (open: boolean) => void;
}

const dataVille=[
  {
    label:"Abidjan",
    value:"abidjan"
  },
  {
    label:"Bouake",
    value:"bouake"
  },
  {
    label:"San‑Pédro",
    value:"san-Pédro"
  },

]
function MySelect({ field, setIsSelectOpen }: PropsSelect) {
  return (
    <Select
      // open={open}
      onOpenChange={setIsSelectOpen}
      value={field.value}
      onValueChange={field.onChange}
      name={field.name}
      // ref={field.ref}
    >
      <SelectTrigger
      // onClick={() => setIsSelectOpen(true)}
      >
        <SelectValue placeholder="Sélectionnez une ville" />
      </SelectTrigger>
      {/**
       * On monte `SelectContent` **dans un Portal** ou un container
       * séparé pour qu’un clic en dehors ne ferme QUE ce Select.
       */}
      <SelectContent className="select-drower">
        {
          dataVille.map(item=>{
            return <SelectItem key={item.value} value={item.value}>{item.label}</SelectItem>

          })
        }
     
      </SelectContent>
    </Select>
  );
}
