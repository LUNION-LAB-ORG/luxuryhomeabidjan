export default function ValuesSection() {
  return (
    <section className="pb-8 lg:pb-16 container px-2 md:px-4 lg:px-24 mx-auto">
      <div className="bg-white rounded-3xl border border-slate-400 p-8  ">
        <div className="text-center mb-8">
          <h2 className="text-lg md:text-2xl font-bold">Nos valeurs</h2>
          <p className="text-gray-600 mt-4 max-w-5xl font-semibold mx-auto text-lg md:text-xl xl:text-2xl">
            Chez Luxury Home Abidjan, nous nous engageons à offrir une
            expérience immobilière haut de gamme, fondée sur des principes forts
            qui guident chacune de nos actions.
          </p>
        </div>

        <div className=" md:pt-6 grid lg:grid-cols-2 gap-4 md:gap-7">
          {/* Excellence */}
          <div className="relative bg-blue-100 rounded-3xl min-h-[250px]  lg:min-h-[400px]">
            <div className="absolute bottom-0 p-4 md:p-10">
              <h3 className="text-2xl lg:text-5xl  xl:text-6xl font-bold text-blue-500 mb-4 ">
                Excellence
              </h3>
              <p className="text-blue-600 font-semibold ">
                Nous mettons un point d'honneur à offrir un service
                irréprochable, en sélectionnant des biens d'exception et en
                accompagnant nos clients avec professionnalisme.
              </p>
            </div>
          </div>

          {/* Transparence */}
          <div className="relative bg-gray-100 rounded-3xl min-h-[250px]  pp-8 lg:min-h-[400px]">
            <div className="absolute bottom-0 p-4 md:p-10">
              <h3 className="text-2xl  lg:text-5xl  xl:text-6xl font-bold text-slate-950 mb-4 ptt-0 mdd:pt-40">
                Transparence
              </h3>
              <p className="text-slate-800 font-semibold ">
                Nous instaurons une relation de confiance avec nos clients et
                partenaires en garantissant des transactions claires et
                sécurisées.
              </p>
            </div>
          </div>

          {/* Exclusivité */}
          <div className="relative bg-blue-100 lg:bg-gray-100 rounded-3xl min-h-[250px]  pp-8 lg:min-h-[400px]">
            <div className="absolute bottom-0 p-4 md:p-10">
              <h3 className="text-2xl  lg:text-5xl  xl:text-6xl font-bold text-blue-600 lg:text-slate-950 mb-4 ptt-0 mdd:pt-40">
                Exclusivité
              </h3>
              <p className="text-blue-600 lg:text-slate-800 font-semibold ">
                Chaque bien que nous proposons reflète un standard élevé et une
                sélection minutieuse pour répondre aux attentes d’une clientèle
                exigeante.{" "}
              </p>
            </div>
          </div>

          {/* Innovation */}
          <div className="relative bg-gray-100 lg:bg-blue-100 rounded-3xl min-h-[250px]  lg:min-h-[400px]">
            <div className="absolute bottom-0 p-4 md:p-10">
              <h3 className="text-2xl lg:text-5xl  xl:text-6xl font-bold lg:text-blue-500 text-slate-950 mb-4 ">
                Innovation
              </h3>
              <p className="lg:text-blue-600 text-slate-800 font-semibold ">
                Nous utilisons les dernières technologies et tendances du marché
                pour offrir une expérience moderne et fluide.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
