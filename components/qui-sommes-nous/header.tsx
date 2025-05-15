import Image from "next/image";

export default function Header(){

    return(
    <div className="w-full object-cover ">
        <Image
          className="w-full object-cover h-[400px] lg:h-[600px]"
          alt="image lieux "
          height={500}
          width={500}
          src="/assets/images/img/expertise-img1.jpg"
        />
      </div>
    );

}