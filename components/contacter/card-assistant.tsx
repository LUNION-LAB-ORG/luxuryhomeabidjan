import Image from "next/image";

export default function CardAssistant(){

    return(
        <div className="px-4 lg:px-14 mx-auto py-10 lg:py-16">
            <h2 className="leading-8 lg:leading-9 pb-10 text-[26px] font-bold text-black text-center">
                Obtenez de l'aide avec l’assistant Mr LHA
                </h2>
            <div className="text-stone-600 leading-7 lg:leading-10 text-[22px] sm:text-[33px] font-bold flex flex-col lg:flex-row gap-8 ">
                <div className="relative lg:w-1/2 h-[200px] lg:h-[300px] bg-stone-100 rounded-4xl">
                    <p className="relative top-[40%] mmax-w-xl px-4 sm:px-8 ">
                    Vous pouvez parler au conseiller de LHA via Whatsapp
                    </p>
                    <div className="absolute right-[3%] bottom-[5%]">
                        <Image
                        className="w-[47px] sm:w-[53px] "
                        src="/assets/images/icons/link.png"
                        width={30}
                        height={30}
                        alt="icon navigation"
                        />
                    </div>
                </div>


                <div className="relative lg:w-1/2 h-[250px] lg:h-[300px] bg-stone-100 rounded-4xl">
                    <p className="relative top-[40%] mmax-w-xl px-4 sm:px-10 ">
                    Ecrivez à Mr LHA sur les réseaux sociaux
                    </p>
                    <div className="absolute right-[5%] bottom-[10%] flex gap-3">
                        <Image
                        className="w-[47px] sm:w-[53px]"
                        src="/assets/images/icons/fb.png"
                        width={30}
                        height={30}
                        alt="icon navigation"
                        />
                           <Image
                        className="w-[47px] sm:w-[53px]"
                        src="/assets/images/icons/tw.png"
                        width={30}
                        height={30}
                        alt="icon navigation"
                        />
                           <Image
                        className="w-[47px] sm:w-[53px]"
                        src="/assets/images/icons/telegram.png"
                        width={30}
                        height={30}
                        alt="icon navigation"
                        />
                           <Image
                        className="w-[47px] sm:w-[53px]"
                        src="/assets/images/icons/linkeding.png"
                        width={30}
                        height={30}
                        alt="icon navigation"
                        />
                           <Image
                        className="w-[47px] sm:w-[53px]"
                        src="/assets/images/icons/tictoc.png"
                        width={30}
                        height={30}
                        alt="icon navigation"
                        />
                    </div>
                </div>
               
                

            </div>
        </div>
    )
}