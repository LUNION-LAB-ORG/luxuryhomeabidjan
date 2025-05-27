export default function ContactForm() {
  return (
    <div className="container mb-10 lg:mb-0 mx-auto px-6 xl:px-16 lg:py-16 pb-2 lg:pb-6 bg-white">
      <div className="lg:px-16 bg-black font-bold text-white py-10 px-4 rounded-xl grid gap-6 lg:grid-cols-2">
        <div className="mx-w-[40px]">
          <h2 className="pb-2">Le bien qui correspond à votre demande.</h2>
          <p className="text-[18px] md:text-[20px] text-stone-500">
            LUXURY HOME a la volonté de vous proposer une expérience
            personnalisée en collectant, en toute sécurité, vos données
            personnelles.
          </p>
        </div>
        {/* form */}
        <div className="flex flex-col gap-2">
          <SelectForm />
          <Input  type="name" placeholder="Votre nom" />
          <Input type="name" placeholder="Votre prénom" />
          <Input type="email" placeholder="Votre email" />
          <Input type="number" placeholder="Votre numéro" />
          <Button type="submit"  >Soumettre ma demande</Button>
        </div>
      </div>
    </div>
  );
}

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export function SelectForm() {
  return (
    <Select>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="genre" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>genre</SelectLabel>
          <SelectItem value="homme">Homme</SelectItem>
          <SelectItem value="femme">Femme</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
