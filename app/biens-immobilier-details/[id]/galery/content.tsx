import BtnRetour from "@/components/common/btn-retour";
import { MessageSquareMore, Share2 } from "lucide-react";
import Image from "next/image";

export default function Content() {
  return (
    <div className="llg:pr-18 lg:pb-16  pt-5 lg:pt-10 max-w-7xl">
      {/* header */}
      <div className="flex justify-between">
        <BtnRetour text="12 photos" />

        <div className="flex gap-2 ">
          <div className="flex gap-3 h-fit p-2 rounded-full border">
            <span>
              {" "}
              <MessageSquareMore />{" "}
            </span>
            <span> Commenter </span>
          </div>

          <div className="flex gap-3 h-fit p-2 rounded-full border">
            <span>
              {" "}
              <Share2 />{" "}
            </span>
            <span> Partager </span>
          </div>
        </div>
      </div>
      {/* body */}
      <div className="lg:mt-20">
        {/* salon */}
        <div className="lg:flex">
          <div className=" lg:w-[200px] sticky px-6">
            <h2 className="text-stone-700 font-bold text-[18px] md:text-[22px] lg:text-[30px]">
              Salon
            </h2>
          </div>
          <div className="flex-1 flex flex-col gap-4">
            {/* image haut */}
            <div className=" lg:grid lg:grid-cols-3 lg:gap-3 rounded-3xl w-full h-[450px] overflow-hidden">
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
            </div>
            {/* image milieux */}
            <div className="relative w-full h-[600px]">
              <div className="px-4 lg:px-0 w-full h-full ">
                <Image
                  className="w-full object-cover h-full rounded-3xl "
                  src="/assets/images/backgrounds/Rectangle-44.jpg"
                  width={500}
                  height={500}
                  alt="image lieux"
                />
              </div>
            </div>
            {/* image bas */}
            <div className=" lg:grid lg:grid-cols-3 lg:gap-3 rounded-3xl w-full h-[450px] overflow-hidden">
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
            </div>
          </div>
        </div>
        {/* Chambre */}
        <div className="lg:flex mt-10">
          <div className=" lg:w-[200px] sticky px-6">
            <h2 className="text-stone-700 font-bold text-[18px] md:text-[22px] lg:text-[30px]">
              Salon
            </h2>
          </div>
          <div className="flex-1 flex flex-col gap-4">
            {/* image haut */}
            <div className=" lg:grid lg:grid-cols-3 lg:gap-3 rounded-3xl w-full h-[450px] overflow-hidden">
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
            </div>
            {/* image milieux */}
            <div className="relative w-full h-[600px]">
              <div className="px-4 lg:px-0 w-full h-full ">
                <Image
                  className="w-full object-cover h-full rounded-3xl "
                  src="/assets/images/backgrounds/Rectangle-44.jpg"
                  width={500}
                  height={500}
                  alt="image lieux"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
