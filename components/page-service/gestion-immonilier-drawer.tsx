import Image from "next/image";
import FooterService from "./footer-service";

export default function GestionImmobilier() {
  return (
    <div>
      {/* header */}
      <div className="w-full">
        <Image
          className="w-full object-cover h-[350px] max-h-[550px]"
          alt="image lieux "
          height={500}
          width={500}
          src="/assets/images/img/gestion-img1.jpg"
        />
      </div>
      {/* body */}
      <div>
        <div className="max-w-3xl lg:max-w-6xl px-4 lg:px-0   mx-auto">
          <h3 className=" text-[24px] md:text-4xl lg:text-[66px] text-black text-center font-bold py-4 lg:pt-10 lg:pb-14">
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
          <div className="max-w-3xl lg:max-w-6xl mx-auto lg:mb-16 pb-10 rounded-3xl ">
            <div>
              <div className="w-full">
                <Image
                  className="w-full object-cover h-[350px] lg:h-[600px] rounded-t-4xl lg:rounded-t-[50px]"
                  alt="image lieux "
                  height={500}
                  width={500}
                  src="/assets/images/img/gestion-img2.jpg"
                />
              </div>
              <div className="bg-stone-100 rounded-b-4xl lg:rounded-b-[50px] sm:px-8 pb-10 ">
                <h3 className="text-xl pt-2 pb-4 md:pb-6 md:text-[26px] text-black text-center font-bold">
                  Nos missions dans l’exercice de notre mandat
                </h3>

                <ul className=" px-10 list-disc pb-8 leading-7">
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
              className="w-full object-cover h-[350px] max-h-[600px]"
              alt="image lieux "
              height={500}
              width={500}
              src="/assets/images/img/gestion-img3.jpg"
            />
          </div>
          <div className="max-w-3xl lg:max-w-6xl px-4 lg:px-0  sm:px-8 mx-auto">
            <p className="mt-10 lg:mt-14 lg:mb-10">
              Très attachés à la relation clientèle, nos équipes sont formées
              pour vous orienter, conseiller et accompagner durant tout le
              processus de location.    Nous mettons à votre disposition
              l’ensemble des documents comptables et administratifs relatifs à
              la gestion de votre bien, vous assurant à tout instant un
              suivi détaillé.
            </p>

            <div>
              <h3 className="pt-6 text-black font-bold text-[26px]">
                Pourquoi nous sommes uniques   ?
              </h3>

              <p className="pt-6">
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
      <FooterService name=" Syndic de copropriété" />
    </div>
  );
}
