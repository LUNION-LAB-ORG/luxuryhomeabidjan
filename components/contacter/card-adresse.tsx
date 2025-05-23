import Image from "next/image";
import { AspectRatio } from "../ui/aspect-ratio";

export default function CardAdresse() {
  return (
    <div className="px-4 lg:px-14 mx-auto pt-16">
      <div className="max-w-lg lg:max-w-full mx-auto py-10 relative bg-gray-200 px-2 lg:py-2 rounded-4xl lg:rounded-full flex flex-col lg:flex-row items-center lg:gap-16">
        {/* icon lhA */}
        <div className="absolute top-[-15%] lg:relative bg-gray-950 rounded-full  w-[120px] h-[120px] p-6 lg:w-[210px] lg:h-[210px] lg:p-10">
          <Image
            className="object-cover w-full h-auto sshrink-0 "
            src="/assets/images/icone.png"
            alt="user"
            height={500}
            width={500}
          />
        </div>

        <div className="w-full px-4 flex flex-col flex-wrap lg:text-start gap-6 lg:gap-4 text-[16px] lg:text-[14px]">
          <h1 className="w-fit mx-auto pt-12 lg:pt-10 text-2xl sm:text-3xl ppl-4 lg:px-0  lg:text-[80px] font-bold bg-black  hover:bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Luxury Home Abidjan
          </h1>

          <div className="max-w-sm  lg:max-w-full mx-auto flex flex-col gap-4  lg:flex-row lg:justify-between w-full lg:gap-12">
            <div className="flex items-center gap-4">
              <div className="w-[20px] object-cover sm:w-[25px]">
                <Image
                  className="w-full object-cover h-auto  "
                  src="/assets/images/icons/localisation.png"
                  width={30}
                  height={30}
                  alt="icon navigation"
                />
              </div>
              <div className="text-black font-bold">
                <p>Société immobilière</p>
                <p>Angré 9e Tranche Star 14, Cocody, Abidjan, Côte d’Ivoire.</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-[20px] object-cover sm:w-[30px]">
                <Image
                  className="w-full object-cover h-auto  "
                  src="/assets/images/icons/forne.png"
                  width={30}
                  height={30}
                  alt="icon navigation"
                />
              </div>
              <div className="text-black font-bold">
                <p>(+225) 27 22 238 380</p>
                <p>(+225) 27 22 238 380</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-[20px] object-cover sm:w-[30px]">
                <Image
                  className="w-full object-cover h-auto  "
                  src="/assets/images/icons/message.png"
                  width={30}
                  height={30}
                  alt="icon navigation"
                />
              </div>
              <div className="text-black font-bold">
                <p>info@luxuryhomeabidjan.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
