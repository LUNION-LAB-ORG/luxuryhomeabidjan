import Image from "next/image";
import ListingsInfoBienScroll from "./listings-info-bien-scroll";
import { AspectRatio } from "../ui/aspect-ratio";
import { ChevronRight } from "lucide-react";
import FooterService from "./footer-service";

export default function Syndic() {
  return (
    <div>
      {/* header */}
      <div className="w-full">
        <Image
          className="w-full object-cover h-[350px] lg:h-[550px] "
          alt="image lieux "
          height={500}
          width={500}
          src="https://images.unsplash.com/photo-1662026025913-c038e4d917f9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
      {/* body */}
      <div className="leading-7 lg:leading-8">
        <div className="max-w-6xl px-4 sm:px-8 mx-auto">
          <h3 className="text-[28px] md:text-4xl lg:text-[66px] text-black text-center font-bold pt-4 lg:pt-10">
          Syndic de copropriété 
          </h3>

          <h4 className="text-center font-bold text-black text-[24px] py-4">
          Et si vous nous confiez la gestion de votre copropriété ?
          </h4>

          <p className="mb-12 lg:mb-16">
          De nombreux propriétaires à Abidjan, une fois leurs biens acquis, se retrouvent confrontés à de nombreuses difficultés liées à la copropriété. Espaces communs dégradés, règlements non respectés, litiges entre copropriétaires, non-paiement des cotisations, budgets mal répartis sont de nombreux exemples courants que vous rencontrez au quotidien. 
          Transparente, impartiale, réactive et efficace, l’agence Luxury Home Abidjan est la solution à tous vos tracas. 
          </p>
        </div>
        {/* second partie */}
        <div className="px-4 mb-10 pb-10 rounded-3xl bg-stone-100 max-w-6xl mx-auto">
          <div>
            <div className="w-full h-[500px]]">
              <Image
                className="w-full objet-cover max-h-[600px] rounded-t-3xl"
                alt="image lieux "
                height={500}
                width={500}
                src="https://images.unsplash.com/photo-1662026025913-c038e4d917f9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </div>
            <div className=" px-4 sm:px-8 mb-10 lg:mb-14">
              <h3 className="pb-3 pt-2 text-xl md:text-3xl llg:text-3xl text-black text-center font-bold">
              Pourquoi confier la gestion de votre copropriété à LHA ?
              </h3>
              <h3 className="text-stone-800 pb-2 text-xl lg:text-[28px]  text-center font-semibold ">
                Parce que vivre en communauté mérite d’être agréable.
              </h3>
              <p>
              La mission LHA est de veiller au respect du règlement, gérer les finances et d’assurer la bonne conservation des espaces communs.
              Grâce à notre équipe expérimentée et conformément à la législation et aux procédures en vigueur.
              </p>
            </div>

            <div className=" px-4 sm:px-8 mb-12 lg:mb-16">
              <h3 className="pb-4 text-xl md:text-3xl llg:text-3xl text-black text-center font-bold">
              Nos missions :
              </h3>
              <ul className=" ">
                <li>Assurer la gestion de la maintenance quotidienne.</li>
                <li>Faire une étude des petits et gros travaux prévisionnels à venir</li>
                <li>Etablir les budgets de fonctionnement</li>
                <li>Faire le rappel régulier des charges de la copropriété.</li>
                <li>Assurer une gestion comptable rigoureuse selon les normes spécifiques à votre bâtiment</li>
              </ul>
            </div>
            {/* second partie */}
          </div>
        </div>

        {/* unique  */}
        <div>
          <div className="w-full">
            <Image
              className="w-full object-cover h-[350px] lg:h-[600px]"
              alt="image lieux "
              height={500}
              width={500}
              src="https://images.unsplash.com/photo-1662026025913-c038e4d917f9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
          <div className="max-w-7xl lg:px-24 sm:px-8 mx-auto py-10 lg:py-16">
          <ul className="pl-10 px-10 list-disc">
                <li>
                    Nous conseillons les copropriétaires et intervenons dans l’entretien courant des parties communes, la coordination des travaux de maintenance ou d’amélioration, la gestion des budgets de la copropriété et le respect des normes en vigueur. 
                </li>
                <li>
                Nous négocions et signons les meilleurs contrats d’assurance et d’entretien des services collectifs et des parties communes (ascenseurs, jardins, piscines…) 
                </li>
                <li>
                Nous proposons les meilleurs prestataires,  et veillons à la bonne exécution des missions confiées aux entreprises retenues. 
                </li>
                <li>
                Nous organisons et animons les assemblées générales de propriétaires, veillons à leur bon déroulement et rédigeons les procès-verbaux. Nous présentons les dépenses, les budgets de gros et petits travaux et nous proposons les entretiens à réaliser .
                </li>
              </ul>
            
          </div>

        </div>

          
          </div>

            {/* footer */}
           <FooterService name=" Home Staging"/>
             
       
    </div>
  );
}
