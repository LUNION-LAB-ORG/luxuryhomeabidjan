import Image from "next/image"

export default function AboutSection() {
  return (
    <section className="pb-10 lg:pb-18 px-2 md:px-4 ">
      <div className="container  mx-auto md:px-4 lg:px-8">
      <div className="text-center mb-6 font-bold">
        <h2 className="text-lg lg:text-2xl">Qui sommes-nous</h2>
        <h1 className="text-3xl md:text-5xl lg:text-7xl ">
          L'immobilier en Afrique,
          <br />
          Autrement
        </h1>
      </div>

      <div className="bg-white text-lg md:text-2xl tracking-wide font-bold rounded-3xl p-6 shadow-sm border border-slate-400">
        <div className="max-w-6xl pt-6 lg:px-8 mx-auto font-semibold">
          <p className="text-zinc-600 mb-6 leading-7">
            Luxury Home Abidjan est l'histoire d'un ensemble de collaborateurs qui ont une passion commune pour la
            pierre. Notre but est d'exprimer notre propre vision de l'immobilier en Afrique. Nous sommes une agence
            animée par une vingtaine de collaborateurs et nous partageons tous un point commun : la volonté de mettre le
            client au cœur de notre métier. À votre service, une équipe diversifiée internationale qui applique la
            philosophie LHA à tous les domaines de l'immobilier : que ce soit à l'achat, à la vente, à la location, la
            gestion, la commercialisation, le syndic et le conseil. Notre approche est basée sur l'écoute, en effet
            notre conviction première est l'intérêt du client. Chez Luxury Home Abidjan, une transaction immobilière
            n'est pas une affaire, mais un projet de vie. Que vous soyez à la recherche d'un bien à louer, à acheter, à
            vendre ou à gérer, notre équipe a pour premier objectif d'apprendre à vous connaître.
          </p>

          <p className="text-zinc-700 text-lg lg:text-2xl  font-bold ">
            ECOUTER afin de COMPRENDRE, CONSEILLER et ACCOMPAGNER sont les étapes clés de la démarche LHA.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8">
          <div className="rounded-lg overflow-hidden">
            <Image
              src="/assets/images/illustrations/qui-sommes-nous/about1.png"
              alt="Luxury bedroom"
              width={300}
              height={200}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-lg overflow-hidden">
            <Image
              src="/assets/images/illustrations/qui-sommes-nous/about2.png"
              alt="Modern living room"
              width={300}
              height={200}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-lg overflow-hidden">
            <Image
              src="/assets/images/illustrations/qui-sommes-nous/about3.png"
              alt="Elegant bedroom"
              width={300}
              height={200}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-lg overflow-hidden">
            <Image
              src="/assets/images/illustrations/qui-sommes-nous/about4.png"
              alt="Luxury villa with pool"
              width={300}
              height={200}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      </div>
    </section>
  )
}

