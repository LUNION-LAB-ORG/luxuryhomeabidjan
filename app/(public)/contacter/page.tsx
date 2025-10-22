import CardAdresse from "@/components/contacter/card-adresse";
import CardAssistant from "@/components/contacter/card-assistant";
import HeaderPageContacter from "@/components/contacter/header-contacter";
import SectionPageContact from "@/components/contacter/section-contact";

export default function PageContacter() {
  return (
    <div>
       <HeaderPageContacter/>
       <SectionPageContact/>
       <CardAdresse/>
       <CardAssistant/>
    </div>
     
  );
}
