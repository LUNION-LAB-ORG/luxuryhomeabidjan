import ContactForm from "@/components/programes-projet/contactForm";
import ContactLa from "@/components/programes-projet/contactLa";
import Galerie from "@/components/programes-projet/galerie";

export default async function  Content(){

    return (
      <div>
        <Galerie/>
        <ContactForm/>
        <ContactLa/>
      </div>
    )

}