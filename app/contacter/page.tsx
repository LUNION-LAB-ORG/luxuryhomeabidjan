import CardAdresse from "@/components/contacter/card-adresse";
import CardAssistant from "@/components/contacter/card-assistant";
import CardContact from "@/components/contacter/card-contact";
import HeaderPageContacter from "@/components/contacter/header-contacter";
import SectionPageContact from "@/components/contacter/section-contact";
import Image from "next/image";

export default function PageContacter() {
  return (
    <div>
       <HeaderPageContacter/>
       <SectionPageContact/>
       <CardAdresse/>
       {/* <CardContact/> */}
       <CardAssistant/>

    </div>
     
  );
}
