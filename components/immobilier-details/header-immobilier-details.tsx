import Image from "next/image";

const typeBien = [
  {
    icon: "/assets/images/icons/iconHouse2.png",
    txt1: "Type de propriété",
    txt2: "Villa",
  },
  {
    icon: "/assets/images/icons/iconHouse2.png",
    txt1: "Type de propriété",
    txt2: "1234 m2",
  },
  {
    icon: "/assets/images/icons/iconHouse2.png",
    txt1: "Type de propriété",
    txt2: "2 salons",
  },
  {
    icon: "/assets/images/icons/iconHouse2.png",
    txt1: "Type de propriété",
    txt2: "4 chambre",
  },
  {
    icon: "/assets/images/icons/iconHouse2.png",
    txt1: "Type de propriété",
    txt2: "4 salles de bain",
  },
];

export default function HeaderImobilierDetails() {
  return (
    <section className="container  mx-auto px-4 lg:px-14 text-[18px] lg:text-[24px] text-stone-500">
      <div className="w-full max-h-[700px] rounded-4xl overflow-hidden">
        <Image
          src="/assets/images/backgrounds/Rectangle-44.jpg"
          width={500}
          height={500}
          className="w-full object-cover h-auto"
          alt="image chambre "
        />
      </div>

      <div className="flex items-center gap-2 py-7 text-[20px] sm:text-[26px]">
        <span className="font-bold  text-stone-600">
          100.000.000 FCFA / moi
        </span>
        <span> 6 pieces</span>
      </div>

      {/* type of */}

      <div className=" flex flex-wrap  gap-4 pb-10 ">
        {typeBien.map((item, index) => {
          return (
            <div
              className="relative flexx flex-col items-center gap-2 rounded-2xl lg:rounded-3xl py-4 px lg:h-[200px] lg:w-[260px] bg-stone-100"
              key={index}
            >
              <div className="relative flex justify-end pb-2 pr-2 right-0 lg:absolute lg:right-5 lg:top-7">
                <Image src={item.icon} alt={item.txt1} width={30} height={30} />
              </div>

              <div className="lg:absolute text-[16px] bottom-[20%] px-4 lg:px-7">
                <h3 className="text-[14px] sm:text-[16px] pb-[2px] lg:pb-5 font-semibold text-stone-400">
                  {item.txt1}
                </h3>
                <h3 className="text-stone-950 text-[16px] sm:text-[20px]">{item.txt2}</h3>
              </div>
            </div>
          );
        })}
      </div>

      <div className="pb-10 flex flex-col lg:flex-row gap-4 rounded-4xl text-stone-600">
        {/* div1 */}
         <div className="lg:w-[60%] px-4 sm:px-6 pt-4 pb-5 lg:pb-10 bg-stone-100 rounded-3xl">
            <h3 className="font-bold text-black text-center pb-4 lg:pb-6">Description</h3>
             <div>
                <h4>Duplex de 7 pieces.</h4>
                <h4>Caracteristiques :</h4>
                <ul>
                    <li>05 – chambres autonomes ;</li>
                    <li>02 – Double séjours;</li>
                    <li>01 – garage de 2 voitures ;</li>
                    <li>01 – une indépendante;</li>
                    <li>01 – cuisine ;</li>
                    <li>01 – piscine .</li>
                </ul>
             </div>
         </div>
         {/* div2 */}
         <div className="lg:w-[40%] px-6 pt-4 pb-5 lg:pb-10 bg-stone-100 rounded-3xl">
          <h3 className="font-bold text-black text-center pb-4 lg:pb-6">Adresse</h3>
          <div>
            <h4>Adresse :</h4>
            <p className="font-bold text-stone-600">Riviera, Synacassi</p>
          </div>

          <div className="pt-5 lg:pt-10">
            <h4>Villa :</h4>
            <p className="font-bold text-stone-600">Abidjan</p>
          </div>

         </div>
      </div>
    </section>
  );
}
