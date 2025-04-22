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

import { useRouter } from "next/navigation"


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
    id: "Villas",
    label: "villas",
  },
  {
    id: "Duplex-triplex",
    label: "Duplex & Triplex",
  },
  {
    id: "bureaux-entrepots",
    label: "Bureaux & Entrepots",
  },
  {
    id: "commerces",
    label: "Commerces",
  },
  {
    id: "coworking",
    label: "Coworking",
  },
  {
    id: "espaces-evenementiels",
    label: "Espaces évenementiels",
  },
] as const;

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
  handleDialogLieuxOpen:(value:boolean) => void;
}

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

export default function FormLocation({ setIsSelectOpen,handleDialogLieuxOpen }: Props) {
  const [openDialogLieux,setOpenDialogLieux] = useState(false)
  const [priceRange, setPriceRange] = useState<[number, number]>([10, 100]);
  const [range, setRange] = useState<DateRange | undefined>(undefined);
  const [valuePiece, setValuePiece] = useState<number>(1);

  const router = useRouter()

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      typeLogement: [ "studios"],
      piece: 1,
      emplacement: "abidjan",
    },
  });

  useEffect(()=>{
    if(!range?.from || !range?.to){
      setOpenDialogLieux(false)

      return
    
    }
    setOpenDialogLieux(true)

  },[range])

  function onSubmit(data: z.infer<typeof FormSchema>) {
    if (!range?.from || !range?.to) {
      toast("Veillez rempli le calandrier de reservation", {
        description: "Sunday, December 03, 2023 at 9:00 AM",
        action: {
          label: "Undo",
          onClick: () => console.log("Undo"),
        },
      });

    return;
  }

  const newData:NewData = {
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
  const searchParams = new URLSearchParams()

  searchParams.set("typeLogement", newData.typeLogement.toString())
  searchParams.set("piece", newData.piece.toString())
  searchParams.set("emplacement", newData.emplacement)
  searchParams.set("prixDepart", newData.prix.depart.toString())
  searchParams.set("prixFin", newData.prix.fin.toString())

if (newData.calandar.depart) {
  searchParams.set("reservationDebut", newData.calandar.depart)
}
if (newData.calandar.fin) {
  searchParams.set("reservationFin", newData.calandar.fin)
}

  router.push(`/propriete?${searchParams.toString()}`)

  console.log({ myData: newData });

  }

  return (
    <div className="relative">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className=" space-y-8 p-4 pb-0 "
        >
          <div className="w-full justify-between flex gap-5 flex-col lg:flex-row ">
            <div className="w-full max-w-sm rounded-3xl border p-5 py-7">
              <FormField
                control={form.control}
                name="typeLogement"
                render={() => (
                  <FormItem>
                    <div className="mb-4">
                      <FormLabel className="text-base">
                        Sélectionnez le type de logement
                      </FormLabel>
                      {/* <FormDescription>
                      Select the items you want to display in the sidebar.
                    </FormDescription> */}
                    </div>
                    {typeLogement.map((item) => (
                      <FormField
                        key={item.id}
                        control={form.control}
                        name="typeLogement"
                        render={({ field }) => {
                          return (
                            <FormItem
                              key={item.id}
                              className="flex flex-row items-start space-x-3 space-y-0"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(item.id)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([
                                          ...field.value,
                                          item.id,
                                        ])
                                      : field.onChange(
                                          field.value?.filter(
                                            (value) => value !== item.id
                                          )
                                        );
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="text-sm font-normal">
                                {item.label}
                              </FormLabel>
                            </FormItem>
                          );
                        }}
                      />
                    ))}
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex-grow flex flex-col items-center gap-2">
              <div className="w-full h-fit mx-auto max-w-sm flex  items-center space-x-2 border rounded-3xl p-5 py-7">
                <FormField
                  control={form.control}
                  name="piece"
                  render={({ field }) => (
                    <FormItem className=" w-full">
                      <FormLabel className="pb-4">Nombre de chambres</FormLabel>
                      <div className="flex items-center justify-between gap-2 ">
                        <span>{valuePiece} piece</span>

                        <FormControl>
                          <div className="flex items-center space-x-2 border p-2 rounded-3xl">
                            <Button
                              className="rounded-3xl "
                              type="button"
                              variant="outline"
                              onClick={() => {
                                field.onChange(Math.max(field.value - 1, 1));
                                setValuePiece(Math.max(field.value - 1, 1));
                              }}
                            >
                              <ChevronLeft size="md" />
                            </Button>
                            <Input
                              {...field}
                              // type="number"
                              // value={field.value}
                              onChange={(e) => {
                                field.onChange(
                                  Math.max(Number(e.target.value), 1)
                                );
                              }}
                              min={1}
                              className="w-14 text-center"
                            />
                            <Button
                              className="rounded-3xl"
                              type="button"
                              variant="outline"
                              onClick={() => {
                                field.onChange(field.value + 1);
                                setValuePiece(field.value + 1);
                              }}
                            >
                              <ChevronRight />
                            </Button>
                          </div>
                        </FormControl>
                      </div>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="w-full h-fit max-w-sm flex  items-center space-x-2 border rounded-3xl p-5 py-7">
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
                        {/* <Select
                        // open={open}
                        // onOpenChange={setOpen}
                        value={field.value} // 1️⃣ Valeur contrôlée
                        onValueChange={field.onChange} // 2️⃣ Événement attendu
                        name={field.name} // 3️⃣ Nom du champ
                        // ref={field.ref} // 4️⃣ Référence pour React Hook Form
                      >
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Sélectionnez une ville" />
                        </SelectTrigger>
                        <SelectContent className="select-content">
                          <SelectItem value="abidjan">Abidjan</SelectItem>
                          <SelectItem value="bouaké">Bouaké</SelectItem>
                          <SelectItem value="san-pédro">San-Pédro</SelectItem>
                        </SelectContent>
                      </Select> */}
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className=" w-full h-fit max-w-sm flex  items-center space-x-2 border rounded-3xl p-5 py-7">
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
            {/* {
              !openDialogLieux &&    <div>
              <Button type="submit">Rechercher</Button>
            </div>
            } */}
       </form>
      </Form>

      {/* {
        openDialogLieux&& <div className="absolute w-full bg-amber-300 h-screen -top-50">TTTTTTTTTT</div>

      } */}
  {/* {
    openDialogLieux && <DialogLieux handleDialogLieuxOpen={handleDialogLieuxOpen} openDialogLieux={openDialogLieux}/>

  } */}
    </div>
  );
}

interface PropsReservation {
  range: DateRange | undefined;
  setRange: (range: DateRange | undefined) => void;
}

function ReservationCalendar({ range, setRange }: PropsReservation) {
  // const [date, setDate] = useState<Date | undefined>(new Date())
  const handleSelect = (selectedRange: DateRange | undefined) => {
    // Cas 1 : aucun début sélectionné → on commence
    if (!range?.from || (range.from && range.to)) {
      setRange({ from: selectedRange?.from, to: undefined });
    }
    // Cas 2 : un début existe, et une fin choisie → on met à jour
    else if (range?.from && !range.to && selectedRange?.to) {
      setRange({ from: range.from, to: selectedRange.to });
    }
    // Cas 3 : on reclique une nouvelle date → recommencer
    else if (selectedRange?.from && isBefore(selectedRange.from, range.from)) {
      setRange({ from: selectedRange.from, to: undefined });
    } else {
      setRange(selectedRange);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <p className="mb-2 font-medium">Dates de réservation</p>
      <Calendar
        mode="range"
        selected={range}
        onSelect={handleSelect}
        numberOfMonths={2}
        disabled={(date) => date < new Date()}
        className="rounded-md border shadow"
      />

      <div className="mt-4 text-sm text-muted-foreground">
        {range?.from && range?.to ? (
          <>
            Réservation du{" "}
            <span className="font-medium">
              {range.from.toLocaleDateString("fr-FR")}
            </span>{" "}
            au{" "}
            <span className="font-medium">
              {range.to.toLocaleDateString("fr-FR")}
            </span>
          </>
        ) : range?.from ? (
          <>Date d’arrivée : {range.from.toLocaleDateString("fr-FR")}</>
        ) : (
          <>Aucune date sélectionnée</>
        )}
      </div>
    </div>
  );
}

interface PropsPriceRange {
  priceRange: [number, number];
  setPriceRange: (priceRange: [number, number]) => void;
}

function PriceRangeSlider({ priceRange, setPriceRange }: PropsPriceRange) {
  const handleChange = (value: [number, number]) => {
    setPriceRange(value);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <p className="mb-2 font-medium">Choisissez une plage de prix :</p>
      <Slider
        min={0}
        max={15000000}
        step={1}
        defaultValue={priceRange}
        value={priceRange}
        onValueChange={handleChange}
        className="my-4"
        minStepsBetweenThumbs={1}
        // range
      />
      <div className="flex justify-between text-sm text-muted-foreground">
        <span>{priceRange[0]} fcfa</span>
        <span>{priceRange[1]} fcfa</span>
      </div>
    </div>
  );
}

interface PropsSelect {
  field: any;
  setIsSelectOpen: (open: boolean) => void;
}

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
        <SelectItem value="abidjan">Abidjan</SelectItem>
        <SelectItem value="bouaké">Bouaké</SelectItem>
        <SelectItem value="san-pédro">San‑Pédro</SelectItem>
      </SelectContent>
    </Select>
  );
}
