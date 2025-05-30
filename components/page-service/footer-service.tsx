import { ChevronRight } from "lucide-react";
import Image from "next/image";

export default function FooterService({ name }: { name: string }) {
  return (
    <div className=" ">
      {/* icon lhA */}
      <div className="my-7 lg:my-10  bg-gray-950 rounded-full mx-auto w-[100px] h-[100px] p-6 lg:w-[180px] lg:h-[180px] lg:p-10">
        <Image
          className="object-cover w-full h-auto sshrink-0 "
          src="/assets/images/icone.png"
          alt="user"
          height={200}
          width={200}
        />
      </div>
      <div className="border-t border-gray-700 ">
        <div className="px-6 lg:px-0 mt-10 ml-auto max-w-xl items-end flex justify-between lg:pr-24">
          <div>
            <p className="text-[14px]">Page suivante</p>
            <p className="font-bold text-[16px] text-black">{name}</p>
          </div>
          <span>
            <ChevronRight />
          </span>
        </div>
      </div>
    </div>
  );
}
