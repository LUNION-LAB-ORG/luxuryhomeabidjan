import Image from "next/image";
import ListingsInfoBienScroll from "./listings-info-bien-scroll";
import { ChevronRight } from "lucide-react";

export default function ExpertiseDrawer() {
  return (
    <div>
      {/* header */}
      <div className="w-full ">
        <Image
          className="w-full object-cover max-h-[550px]"
          alt="image lieux "
          height={500}
          width={500}
          src="https://images.unsplash.com/photo-1662026025913-c038e4d917f9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
      {/* body */}
      <div className="text-xl text-stone-600 lg:text-[28px] leading-9">
        <div className="lg:max-w-6xl px-4 lg:px-0 max-w-2xl  mx-auto">
          <h3 className=" text-3xl md:text-4xl lg:text-[66px] text-black text-center font-bold py-8 lg:py-16">
            Expertise & Conseils en immobilier
          </h3>

          <p className="mb-12 lg:mb-16 lg:text-[28px]">
            Luxury Home Abidjan est un cabinet d’expertise et de conseil
            immobilier qui vous accompagne dans l’évaluation et l’élaboration de
            vos projets. Nous intervenons auprès de particuliers et de
            professionnels aussi bien sur le plan commercial que patrimonial.
          </p>
        </div>

        <div className="lg:max-w-6xl px-4 lg:px-0 max-w-2xl mx-auto">
          <div className=" bg-stone-100 p-6 pt-8 lg:p-8 lg:px-10 rounded-4xl">
            <h3 className="text-black font-bold text-center text-xl lg:text-[28px] mb-6  lg:mb-8">
              Qu’est-ce que l’expertise immobilière ?
            </h3>

            <p>
              C’est l’art de définir la valeur vénale ou locative d’un bien.
              C’est la valeur à laquelle il peut être vendu ou loué à une date
              précise sur le marché, grâce à une expertise rigoureuse,
              impartiale, et exempte de tout conflit d’intérêts. Cette opération
              est à confier à des professionnels expérimentés respectant le
              principe d’intégrité et de neutralité. Au bout de l'évaluation,
              est établi un document officiel, le rapport d’expertise qui prend
              en compte l’aspect technique, environnemental, juridique et
              économique du bien sur le marché.
            </p>
          </div>
        </div>

        <ListingsInfoBienScroll />

        {/* second partie */}

        <div className="px-4 lg:px-0 ">
          <div className=" max-w-2xl lg:max-w-6xl mx-auto mb-10 pb-10 rounded-3xl bg-stone-100">
            <div>
              <div className="w-full">
                <Image
                  className="w-full max-h-[600px] rounded-t-3xl"
                  alt="image lieux "
                  height={500}
                  width={500}
                  src="https://images.unsplash.com/photo-1662026025913-c038e4d917f9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
              </div>
              <div className=" px-2 sm:px-8 mb-12 lg:mb-16 ">
                <h3 className="text-xl md:text-3xl llg:text-3xl text-black text-center font-bold">
                  Notre expertise immobilière
                </h3>
                <p>
                  Elle est la conclusion officielle d’une évaluation approfondie
                  du bien basée sur l’étude de :
                </p>
                <ul className="px-6 lg:px-10 list-disc">
                  <li>la situation géographique et l’environnement immédiat</li>
                  <li>la situation juridique ( le titre de propriété )</li>
                  <li>la contenance ( superficie totale et bâtie )</li>
                  <li>l’année de construction</li>
                  <li>la valeur des matériaux utilisés</li>
                  <li>le prix du marché</li>
                </ul>
              </div>
              {/* second partie */}

              <div>
                <h3 className="pb-6 text-xl md:text-3xl  text-black text-center font-bold">
                  L’expertise LHA
                </h3>
                <ul className="px-8 lg:px-18 list-disc">
                  <li>
                    Rassurer les acteurs économiques grâce à une analyse
                    complète, aussi bien technique qu’économique du bien mis en
                    garantie.
                  </li>
                  <li>
                    Répondre aux problématiques fiscales , économiques,
                    juridiques et techniques dans le cadre d’une évaluation.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* conseil last partie*/}
        <div className="max-w-2xl lg:max-w-6xl px-4 ssm:px-8 mx-auto">
          <h3 className="pb-6 text-xl md:text-3xl  text-black text-center font-bold">
            LHA Conseils
          </h3>
          <p className="mb-12 lg:mb-16">
            Grâce à sa maîtrise de l’environnement, du Marché et de la demande,
            l’équipe LHA devient votre partenaire CONSEIL. Peu importe votre
            profil, primo accédant ou investisseur, résident ou étranger
            souhaitant investir en Côte d’ivoire, notre mission est de vous
            conseiller et vous accompagner en toute transparence tout au long de
            votre projet.
          </p>
          <div className="flex gap-4  overflow-hidden flex-col lg:flex-row">
            <div className="w-full lg:w-1/2 bg-stone-100 py-10  rounded-4xl max-w-6xl px-4 sm:px-8 mb-12 lg:mb-16">
              <h3 className="pb-6 text-xl md:text-3xl llg:text-3xl text-black font-bold">
                Investissez dans l’immobilier en Côte d’Ivoire !
              </h3>
              <p>
                Nous avons mis en place une démarche basée sur l’écoute active
                afin de cerner vos besoins et objectifs. Nous vous conseillons
                sur :
              </p>
              <ul className="pb-4 pl-4 lg:pl-0 lg:px-10 list-disc">
                <li>les types de projet</li>
                <li>les coûts de construction</li>
                <li>l’environnement fiscal et économique</li>
                <li>l’environnement juridique et administratif</li>
                <li>les secteurs géographiques clés en côte d’ivoire</li>
                <li>les revenus potentiels</li>
                <li>la rentabilité du projet</li>
                <li>
                  les différents types d’investissement immobilier en côte
                  d’ivoire et notamment les plus rentables
                </li>
              </ul>
              {/* <div> <HouseIcon className="w-6 h-6 text-gray-500" /></div> */}
              <div>
                <Image
                  // className="w-[50px]"
                  src="/assets/images/icons/house.svg"
                  alt="user"
                  height={60}
                  width={60}
                />
              </div>
            </div>
            {/* seconde div */}
            <div className="w-full lg:w-1/2 bg-stone-100 py-10 rounded-4xl max-w-6xl px-4 sm:px-8 mb-12 lg:mb-16">
              <h3 className="pb-6 text-xl md:text-3xl  text-black font-bold">
                LHA intervient
              </h3>
              <div className="flex flex-col gap-8">
                <div>
                  <h4 className="text-muted-foreground font-bold">
                    Avant le projet
                  </h4>
                  <p>
                    Conseil sur le type d’investissement, choix  du type de
                    construction, budget financier, élaboration de projets  sur
                    mesure, simulation de loyers futurs , simulation plus value,
                     étude prévisionnelle. 
                  </p>
                </div>

                <div>
                  <h4 className="text-muted-foreground font-bold">
                    Avant le projet
                  </h4>
                  <p>
                    Conseil sur le type d’investissement, choix  du type de
                    construction, budget financier, élaboration de projets  sur
                    mesure, simulation de loyers futurs , simulation plus value,
                     étude prévisionnelle. 
                  </p>
                </div>
                <div>
                  <h4 className="text-muted-foreground font-bold">
                    Avant le projet
                  </h4>
                  <p>
                    Conseil sur le type d’investissement, choix  du type de
                    construction, budget financier, élaboration de projets  sur
                    mesure, simulation de loyers futurs , simulation plus value,
                     étude prévisionnelle. 
                  </p>
                </div>
                <div>
                  <Image
                    // className="w-[50px]"
                    src="/assets/images/icons/iconHouse2.png"
                    alt="user"
                    height={60}
                    width={60}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
   
      </div>

        {/* footer */}
        <div className=" ">
        {/* icon lhA */}
        <div className="my-10 bg-gray-950 rounded-full mx-auto w-[100px] h-[100px] p-6 lg:w-[180px] lg:h-[180px] lg:p-10">
          <Image
            className="object-cover w-full h-auto sshrink-0 "
            src="/assets/images/icone.png"
            alt="user"
            height={200}
            width={200}
          />
        </div>
        <div className="border-t border-gray-700 ">
          <div className="mt-10 ml-auto max-w-xl items-end flex justify-between pr-24">
            <div >
              <p className="text-[14px]">Page suivante</p>
              <p className="font-bold text-[16px] text-black">
                Syndic de copropriété
              </p>
            </div>
            <span>
              <ChevronRight />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
