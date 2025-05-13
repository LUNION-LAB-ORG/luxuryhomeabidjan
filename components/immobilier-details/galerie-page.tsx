import Image from "next/image";
import GalerieDropDown from "./galerie-drop-down";

export default function GaleriePage() {
  return (
    <section className="lg:px-18 lg:pb-16">
      <div className="lg:grid lg:grid-cols-3 lg:gap-3 rounded-3xl w-full h-[600px] overflow-hidden">
         {/* img 1 */}
        <div className="relative w-full h-full">
          <div className="px-4 lg:px-0 w-full h-full">
            <Image
              className="w-full object-cover h-full rounded-3xl lg:rounded-none"
              src="/assets/images/backgrounds/Rectangle-44.jpg"
              width={500}
              height={500}
              alt="image lieux"
            />
          </div>
          <GalerieDropDown/>
        </div>
         {/* img */}
        <div>
          <Image
            className="w-full object-cover h-full"
            src="/assets/images/img/page-transation-img2.jpg"
            width={500}
            height={500}
            alt="image lieux"
          />
        </div>
        <div>
          <Image
            className="w-full object-cover h-full"
            src="/assets/images/img/page-transation-img2.jpg"
            width={500}
            height={500}
            alt="image lieux"
          />
        </div>
      </div>
    </section>
  );
}
