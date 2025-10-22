import CardImage from "./card-image";
import {BienImmobilier} from "@/app/(public)/propriete/useFiltrageBiens";

interface Props {
  data: BienImmobilier[];
}
export default function CardLogements({ data }: Props) {


  return (
    <div className="w-full px-4 md:px-6 py-12 lg:py-16">
      <div className="container mx-auto ppy-10 gap-4 grid sm:grid-cols-2 md:grid-cols-3">
        {data.map((item, index) => (
          <CardImage key={index} item={item} />
        ))}
      </div>
    </div>
  );
}
