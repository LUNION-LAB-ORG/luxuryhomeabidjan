import Details from "@/components/detail/detail";
import { IBien, biens } from "@/data/coups-de-coeur.type";

export default async function CoupCoeurDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // Recherche du produit correspondant à l'ID
  const element = biens.find((pro) => pro.id === Number(slug));

  if (!element) {
    return (
      <div className="text-center py-20 text-red-600 font-semibold text-lg">
        Produit non trouvé
      </div>
    );
  }

  // Affichage du composant de détails
  return (
    <>
      <Details home={element} />
    </>
  );
}
