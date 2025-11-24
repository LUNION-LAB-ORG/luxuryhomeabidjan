import BienDetails from "@/components/biens/bien-details";
import {  biens } from "@/data/coups-de-coeur.type";

export default async function CoupCoeurDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // Recherche du produit correspondant à l'ID


 

  // Affichage du composant de détails
  return (
    <>
      <BienDetails
        slug={slug}
      />
    </>
  );
}
