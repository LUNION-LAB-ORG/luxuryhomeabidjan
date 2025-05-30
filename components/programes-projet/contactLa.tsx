import Image from "next/image";

export default function ContactLa() {
    return (
        <div className="container  mx-auto px-6 xl:px-16 lg:py-16 pb-2 lg:pb-6 bbg-white">
            <div className="font-bold flex flex-col md:flex-row items-center border rounded-4xl gap-4 p-10">
                <Image

                    className="w-48 object-cover rounded-4xl"
                    src="/assets/images/icons/la-salut.png"
                    alt="Picture of the author"
                    width={200}
                    height={200}
                    />
                    <div className="max-w-6xl text-center md:text-start">
                        <h2 className="text-[24px] md:text-[30px] lg:text-[36px]">
                            Contacter l'Assistant M. LHA
                        </h2>
                        <p className=" text-[18px] md:text-[20px]">
                        Besoin d'aide ? Gagnez du temps en faisant une demande d'assistance à M. LHA. Nous vous mettrons en relation avec un expert.
                        </p>
                    </div>
                
            </div>
        </div>
    )

}