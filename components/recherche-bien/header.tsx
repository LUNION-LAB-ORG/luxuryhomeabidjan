
export default function HeaderRechercheBien() {
  return (
    <section className="ww-full bg-black text-white pt-6 pb-8 md:pt-12 md:pb-18">
      <div className="mx-auto ">
        {/* Circular images row */}
        {/* <div className=" overflow-hidden">
           <div className="relative overflow-visible flex justify-center items-center">
            <Image
              src="/assets/images/illustrations/service/hero.png"
              alt="Image gauche"
              width={500}
              height={500}
              className="lg:-ml-46 w-[35%] lg:w-[85%]"
            />
            <Image
              src="/assets/images/illustrations/service/hero.png"
              alt="Image centre"
              width={500}
              height={500}
              className="w-[35%]  lg:w-[85%] z-10 mx-10 lg:mx-40"
            />
            <Image
              src="/assets/images/illustrations/service/hero.png"
              alt="Image droite"
              width={500}
              height={500}
              className="lg:-mr-46 w-[35%]  lg:w-[85%]"
            />
          </div>
        </div> */}

        {/* Text content */}
        <div className="text-center px-4 lg:px-8 mx-auto pt-16 lg:pt-22">
          <h2 className="text-[16px] lg:text-[24px] mb-2 font-semibold">
            Location
          </h2>
          <h1 className="pb-12 lg:pb-22 text-2xl sm:text-3xl lg:text-[80px] font-bold lg:leading-19">
            Retrouvez tout type de propriété de standing chez nous{" "}
          </h1>
        </div>
        {/* <div className="px-4 sm:px-10 lg:px-0 mx-auto max-w-xl lg:max-w-[850px]   flex justify-between items-center  lg:gap-16">

            {
         
         icons.map((item,index)=>{
            return(
                <div key={index}  className="flex flex-col items-center gap-2 
            transition duration-900 ease-in-out 
            hover:scale-115 hover:opacity-60">
                <Image
                className="w-[25px] lg:w-[65px]"
                 width={35} 
                 height={35}
                  alt="appartement"
                   src={item.srcIcon}
                   />
                <p className="text-[14px]">{item.name}</p>
            </div>        

            )
         })

            }
          
        </div> */}
      </div>
    </section>
  );
}
