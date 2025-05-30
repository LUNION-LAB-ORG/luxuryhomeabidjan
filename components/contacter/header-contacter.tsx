import Image from "next/image";

export default function HeaderPageContacter() {
  return (
    <div className="w-full bg-gray-100 mx-auto   ssm:pt-8 ssm:px-6 llg:px-12 mb-12">
      {/* div1 : Image avec hauteur fixe */}
      <div className="w-full h-[350px] lg:h-[500px] relative overflow-hidden">
        <Image
          src="/assets/images/backgrounds/contact.jpg"
          alt="Modern luxury home with swimming pool"
          fill
          className="object-cover"
        />
      </div>

      {/* div2 : Texte en dessous */}
      <div className=" max-w-7xl mx-auto py-3 lg:py-16">
        <h1 className="leading-7 md:leading-10 lg:leading-22 text-2xl md:text-4xl px-4 lg:px-0 text-center lg:text-[80px] font-bold mb-6 lg:mb-8 bg-gradient-to-r from-purple-500 via-pink-700 to-pink-500 bg-clip-text text-transparent">
          Rejoignez notre communauté et aidez-nous à la définir.
        </h1>
      </div>
    </div>
  );
}
