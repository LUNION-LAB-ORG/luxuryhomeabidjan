import Image from "next/image";
import ListingsInfoBienScroll from "./listings-info-bien-scroll";
import { ChevronRight } from "lucide-react";

export default function GestionImmobilier() {
  return (
    <div>
      {/* header */}
      <div className="w-full">
        <Image
          className="w-full object-cover max-h-[550px]"
          alt="image lieux "
          height={500}
          width={500}
          src="https://images.unsplash.com/photo-1662026025913-c038e4d917f9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
      {/* body */}
      <div className="">
        <div className="max-w-3xl lg:max-w-6xl px-4   mx-auto">
          <h3 className="text-3xl md:text-4xl lg:text-[66px] text-black text-center font-bold py-8 lg:py-16">
            La Gestion chez LHA
          </h3>

          <p className="mb-12 lg:mb-16">
            Dans le cadre de sa prestation exclusive de gestion, LHA assure non
            seulement vos revenus mais aussi et surtout la conservation de vos
            biens. Notre équipe se charge pour vous d’effectuer toutes les
            tâches juridiques, fiscales, financières et techniques.
             L’équipe  Luxury Home Abidjan  met en avant les valeurs qui font
            sa réputation. Quelles que soient les caractéristiques de votre
            bien, notre objectif est d’assurer aux  propriétaires, particuliers
            ou professionnels le bon déroulement du CONTRAT de location aussi
            bien sur de longues que de courtes périodes.
          </p>
        </div>
        {/* second partie */}

        <div className="px-4">
          <div className="max-w-3xl lg:max-w-6xl mx-auto mb-10 pb-10 rounded-3xl bg-stone-100 ">
            <div>
              <div className="w-full h-[500px]]">
                <Image
                  className="w-full max-h-[600px] rounded-t-3xl"
                  alt="image lieux "
                  height={500}
                  width={500}
                  src="https://images.unsplash.com/photo-1662026025913-c038e4d917f9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
              </div>
              <div className=" ppx-2 sm:px-8 mb-12 lg:mb-16">
                <h3 className="text-xl pb-4 md:pb-0 md:text-3xl llg:text-3xl text-black text-center font-bold">
                  Nos missions dans l’exercice de notre mandat
                </h3>

                <ul className=" px-10 list-disc pb-8">
                  <li>Recherche sélective du locataire</li>
                  <li>
                    Etude du dossier et de la solvabilité des futurs locataires
                  </li>
                  <li>Rédaction de tous les actes administratifs</li>
                  <li>
                    Encaissement des loyers et reversement aux propriétaires
                  </li>
                  <li>Paiement des charges liées à l’entretien du bien</li>
                  <li>Estimation des loyers</li>
                </ul>

                <ul className="px-10 list-disc">
                  <li>Paiement des impôts</li>
                  <li>Gestion du recouvrement et des contentieux</li>
                  <li>Rédaction des fichiers administratifs</li>
                  <li>Recherche des meilleurs prestataires d’entretien</li>
                  <li>
                    Proposition des devis soumis à l’accord du propriétaire
                  </li>
                  <li>Suivi des travaux</li>
                </ul>
              </div>
              {/* second partie */}
            </div>
          </div>
        </div>

        {/* unique  */}
        <div>
          <div className="w-full">
            <Image
              className="w-full object-cover max-h-[600px]"
              alt="image lieux "
              height={500}
              width={500}
              src="https://images.unsplash.com/photo-1662026025913-c038e4d917f9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
          <div className="max-w-7xl px-4 lg:px-24 sm:px-8 mx-auto">
            <p className="my-12 lg:mb-16">
              Très attachés à la relation clientèle, nos équipes sont formées
              pour vous orienter, conseiller et accompagner durant tout le
              processus de location.    Nous mettons à votre disposition
              l’ensemble des documents comptables et administratifs relatifs à
              la gestion de votre bien, vous assurant à tout instant un
              suivi détaillé.
            </p>

            <div>
              <h3 className="text-black font-bold text-3xl pb-2">
                Pourquoi nous sommes uniques   ?
              </h3>

              <p>
                Avec Luxury Home Abidjan vous avez une vue à 360 complète sur
                votre bien.  L’expertise de  nos collaborateurs, notre réseau et
                notre maîtrise du marché de l’immobilier permettent de louer vos
                biens dans les meilleures conditions.
              </p>
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
