import Image from "next/image"

export default function PropertyListings() {
  return (
    <div className="container mx-auto px-2 md:px-4 py-8 bg-white">
      <h1 className="text-center text-black font-bold text-xl lg:text-2xl mb-6">Programmes immobiliers</h1>

      {/* First Property */}
      <div className="mb-6 md:px-8">
        <div className="w-full relative rounded-3xl overflow-hidden">
          <Image
            src="/assets/images/illustrations/programs/rivera-stella.png"
            alt="La cité Riviera STELLA"
            width={500}
            height={500}
            className="w-full min-h-[250px] h-auto object-cover"
          />
          <div className="absolute  lg:w-full md:max-w-2xl font-bold rounded-2xl lg:rounded-3xl bottom-5 left-5 p-4 md:p-6   bg-black/50 backdrop-blur-md  bg-gradient-to-t from-black/50 to-transparent">
            <p className="text-white text-sm xl:text-xl ">SONGON KASSEMBLE</p>
            <h2 className="text-white pt-2 md:pt-5 text-xl md:text-2xl xl:text-4xl">La cité Riviera STELLA</h2>
          </div>
        </div>

        <div className="max-w-5xl font-semibold text-lg mx-auto flex my-10">

          <div className="flex-shrink-0 mr-4">
          <span className="text-gray-600 text-3xl xl:text-6xl font-bold">1</span>

            {/* <div className="w-12 h-12 rounded-full font-bold bbg-gray-100 flex items-center justify-center">
              <span className="text-gray-700 text-4xl font-bold">1</span>
            </div> */}
          </div>
          <p className="text-gray-700 leading-snug">
          Situé dans un quartier chic et en plein essor d'Abidjan, ce programme immobilier se distingue par son architecture élégante et ses finitions haut de gamme. Conçu pour répondre aux besoins et aspirations , le projet Résidences Riviera offre un cadre de vie idéal.
          </p>
        </div>
      </div>

      {/* Second Property */}
      <div className="mb-6 md:px-8">
        <div className="w-full relative rounded-3xl overflow-hidden">
          <Image
            src="/assets/images/illustrations/programs/rivera-stella.png"
            alt="La cité Riviera STELLA"
            width={500}
            height={500}
            className="w-full min-h-[250px] h-auto object-cover"
          />
          <div className="absolute  lg:w-full max-w-2xl font-bold rounded-2xl md:rounded-3xl bottom-5 left-5 p-4 md:p-6   bg-black/50 backdrop-blur-md  bg-gradient-to-t from-black/50 to-transparent">
            <p className="text-white text-sm xl:text-xl ">SONGON KASSEMBLE</p>
            <h2 className="text-white pt-2 md:pt-5 text-xl md:text-2xl xl:text-4xl">La cité Riviera STELLA</h2>
          </div>
        </div>

        <div className="max-w-5xl font-semibold text-lg mx-auto flex my-10">

          <div className="flex-shrink-0 mr-4">
          <span className="text-gray-600 text-3xl xl:text-6xl font-bold">2</span>

            {/* <div className="w-12 h-12 rounded-full font-bold bbg-gray-100 flex items-center justify-center">
              <span className="text-gray-700 text-4xl font-bold">1</span>
            </div> */}
          </div>
          <p className="text-gray-700 leading-snug">
          Situé dans un quartier chic et en plein essor d'Abidjan, ce programme immobilier se distingue par son architecture élégante et ses finitions haut de gamme. Conçu pour répondre aux besoins et aspirations , le projet Résidences Riviera offre un cadre de vie idéal.          </p>
        </div>
      </div>
    </div>
  )
}

