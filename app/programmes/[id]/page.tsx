import ContactForm from "@/components/programes-projet/contactForm";
import ContactLa from "@/components/programes-projet/contactLa";
import Galerie from "@/components/programes-projet/galerie";
import { SignalZero } from "lucide-react";
import Image from "next/image";

export default async function  page(){

    return (
      <div>
        <Galerie/>
        <ContactForm/>
        <ContactLa/>

      </div>
    )

}