import Image from "next/image";

export default function Header(){

    return(
    <div className="w-full object-cover ">
        <Image
          className="w-full object-cover h-[400px] lg:h-[700px] brightness-[0.7]"
          alt="image lieux "
          height={500}
          width={500}
          src="/assets/images/backgrounds/equipe.jpg"
        />
           <h1 className="absolute bottom-0 text-white font-bold px-4   lg:pl-20 text-[24px] md:text-[30px] lg:text-[46px] ">
          L'immobilier en Afrique,
          Autrement
        </h1>
      </div>
    );

}


{/* <Image
src="https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg"
alt="Medical team"
fill
className="object-cover brightness-[0.7]"
priority
/> */}