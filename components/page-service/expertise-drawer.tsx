import Image from "next/image";
import ListingsInfoBienScroll from "./listings-info-bien-scroll";
import FooterService from "./footer-service";

export default function ExpertiseDrawer() {
  return (
    <div >
      {/* header */}
      <div className="w-full object-cover ">
        <Image
          className="w-full object-cover h-[350px] lg:h-[550px]"
          alt="image lieux "
          height={500}
          width={500}
          src="/assets/images/img/expertise-img1.jpg"
        />
      </div>
      {/* body */}
      <div className="text-xl text-stone-600 lg:text-[28px] lg:leading-9">
        <div className="lg:max-w-6xl px-4 lg:px-0 max-w-2xl  mx-auto">
          <h3 className=" text-[24px] md:text-4xl lg:text-[66px] text-black text-center font-bold py-4 lg:pt-10 lg:pb-14">
            Expertise & Conseils en immobilier
          </h3>

          <p className="mb-12 lg:mb-16 lg:text-[28px] leading-7 ">
            Luxury Home Abidjan est un cabinet d’expertise et de conseil
            immobilier qui vous accompagne dans l’évaluation et l’élaboration de
            vos projets. Nous intervenons auprès de particuliers et de
            professionnels aussi bien sur le plan commercial que patrimonial.
          </p>
        </div>

        <div className="lg:max-w-6xl px-4 lg:px-0 max-w-2xl mx-auto">
          <div className="leading-7 lg:leading-9 bg-stone-100 p-6 pt-8 lg:p-7 lg:px-10 rounded-4xl">
            <h3 className="leading-7 lg:leading-9 text-black font-bold text-center text-xl lg:text-[26px] mb-4 lg:mb-6">
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
          <div className="max-w-2xl lg:max-w-6xl mx-auto mb-10 pb-10 rounded-3xl bg-stone-100">
            <div>
              <div className="w-full">
                <Image
                  className="w-full object-cover h-[350px] lg:h-[600px] rounded-t-3xl"
                  alt="image lieux "
                  height={500}
                  width={500}
                  src="/assets/images/img/expertise-img2.jpg"
                />
              </div>
              <div className=" px-2 sm:px-8 mb-10 lg:mb-16 ">
                <h3 className="pb-4 pt-2 lg:pb-0 text-xl md:text-[26px]  text-black text-center font-bold">
                  Notre expertise immobilière
                </h3>
                <p className="leading-7 lg:leading-9">
                  Elle est la conclusion officielle d’une évaluation approfondie
                  du bien basée sur l’étude de :
                </p>
                <ul className="px-6 lg:px-10 list-disc leading-7">
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
                <h3 className="pb-4 lg:pb-6 text-xl md:text-[26px] text-black text-center font-bold">
                  L’expertise LHA
                </h3>
                <ul className="px-8 lg:px-18 list-disc leading-7 lg:leading-9">
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
        <div className="max-w-2xl lg:max-w-6xl px-4 lgm:px-0 mx-auto">
          <h3 className="pb-4 lg:pb-6 text-xl md:text-[26px]  text-black text-center font-bold">
            LHA Conseils
          </h3>
          <p className="mb-12 lg:mb-16 leading-7">
            Grâce à sa maîtrise de l’environnement, du Marché et de la demande,
            l’équipe LHA devient votre partenaire CONSEIL. Peu importe votre
            profil, primo accédant ou investisseur, résident ou étranger
            souhaitant investir en Côte d’ivoire, notre mission est de vous
            conseiller et vous accompagner en toute transparence tout au long de
            votre projet.
          </p>
          <div className="flex lg:gap-4  overflow-hidden flex-col lg:flex-row">
            <div className="leading-7 lg:leading-9 relative w-full lg:w-1/2 bg-stone-100 py-10  rounded-4xl max-w-6xl px-4 sm:px-8 mb-12 lg:mb-16">
              <h3 className=" pb-4 lg:pb-6 text-xl lg:max-w-3/4 md:text-[26px] leading-8 text-black font-bold">
                Investissez dans l’immobilier en Côte d’Ivoire !
              </h3>
              <p>
                Nous avons mis en place une démarche basée sur l’écoute active
                afin de cerner vos besoins et objectifs. Nous vous conseillons
                sur :
              </p>
              <ul className="pb-18 pl-4 lg:pl-16list-disc">
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
              {/* logo home */}
              <div className="absolute bottom-0 pb-10 py-26">
                <Image
                  className="w-[40px] lg:w-[60px]"
                  src="/assets/images/icons/house.svg"
                  alt="user"
                  height={60}
                  width={60}
                />
              </div>
            </div>
            {/* seconde div */}
            <div className="relative w-full lg:w-1/2 bg-stone-100 py-10 rounded-4xl max-w-6xl px-4 sm:px-8 mb-12 lg:mb-16">
              <h3 className="pb-4 lg:pb-6 text-xl md:text-3xl  text-black font-bold">
                LHA intervient
              </h3>
              <div className="flex flex-col gap-4 lg:gap-8 leading-7 lg:leading-9">
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
                    Pendant le projet 
                  </h4>
                  <p>
                 Conseil aménagement, assistance administrative (permis de construire, plans…) 
                  </p>
                </div>
                <div className="pb-18 ">
                  <h4 className="text-muted-foreground font-bold">
                    Après le projet
                  </h4>
                  <p>
                     Gestion locative, vente, syndic de copropriété , commercialisation pour les professionnels.                  </p>
                </div>
                <div className="absolute bottom-0 pb-10">
                  <Image
                   className="w-[40px] lg:w-[60px]"

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
      <FooterService name="Gestion immobiliere"/>
    </div>
  );
}
