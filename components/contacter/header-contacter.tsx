import Image from "next/image";

export default function HeaderPageContacter(){

    return(

      <div className="w-full bg-gray-100 mx-auto px-4 pt-8 sm:px-6 lg:px-12 mb-12">
      {/* div1 : Image avec hauteur fixe */}
      <div className="w-full h-[500px] relative overflow-hidden">
        <Image
          src="/assets/images/backgrounds/contact.jpg"
          alt="Modern luxury home with swimming pool"
          fill
          className="object-cover"
        />
      </div>
    
      {/* div2 : Texte en dessous */}
      <div className="max-w-7xl mx-auto py-6 lg:py-16">
        <h1 className="text-2xl md:text-4xl px-4 lg:px-0 text-center lg:text-[80px] font-bold mb-6 lg:mb-8 bg-gradient-to-r from-purple-500 via-pink-700 to-pink-500 bg-clip-text text-transparent">
          Rejoignez notre communauté et aidez-nous à la définir.
        </h1>
      </div>
    </div>



      //   <div className="relative w-full mx-auto px-4 sm:px-6 lg:px-8 mmb-12">
      //     {/* div1 */}
      //     <div className="relative w-full max-h-[500px]">
      //       <Image
      //         src="/assets/images/illustrations/programs/hero-right.png"
      //         alt="Modern luxury home with swimming pool"
      //         width={500}
      //         height={500}
      //         className="object-cover w-full hh-auto"
      //       />
      //     </div>
         
      //    {/* div2 */}
      //     <div className="max-w-7xl mx-auto py-16">
      //       <h1 className="text-2xl md:text-4xl px-4 lg:px-0 text-center xl:text-7xl font-bold mb-6 lg:mb-16 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
      //       Rejoignez notre communauté et aidez-nous à la définir.
      //       </h1>
      //     </div>
      
      // </div>
    )
}