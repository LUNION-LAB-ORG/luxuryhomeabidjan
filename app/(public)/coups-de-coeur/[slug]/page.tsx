import Details from "@/components/detail/detail";
import { Iproduct, products } from "@/data/coups-de-coeur.type";

export default async function CoupCoeurDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // Recherche du produit correspondant à l'ID
  const element = products.find((pro) => pro.id === Number(slug));
 
  console.log(element)
  // Gestion du cas où le produit n'existe pas
  if (!element) {
    return (
      <div className="text-center py-20 text-red-600 font-semibold text-lg">
        Produit non trouvé
      </div>
    );
  }

  // Affichage du composant de détails
  return (
    <div>
      <Details home={element} />
    </div>
  );
}
