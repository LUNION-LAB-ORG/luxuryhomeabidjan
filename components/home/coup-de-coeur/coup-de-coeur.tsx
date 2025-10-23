
import { Button } from "@/components/ui/button";
import { products } from "@/data/coups-de-coeur.type";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";



export default function CoupDeCoeur() {




  return (
    <div className="min-h-screen px-2 py-12  w-full">
      {/* Header */}
      <div className="mb-8 px-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Découvrez nos coups de cœur
        </h1>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1  md:grid-cols-2 gap-3">
        {products.map((product) => (
          <div
            key={product.id}
            className={cn(
              "relative ring-1 ring-slate-200 overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-500 w-full",
              product.id == 3 && "max-md:order-4"
            )}
          >
            {/* Image container — fond différent selon id */}
            <div
              className={cn(
                `w-full lg:h-[600px] md:h-[480px] h-[500px] flex items-center justify-center`,
                product.id === 1 || product.id === 4 ? "bg-white" : "bg-black"
              )}
            >
              <Image
                src={product.image}
                alt={product.title}
                width={500}
                height={500}
                className="max-h-[400px] w-auto object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Bouton "En savoir plus" — apparaît au survol */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <Button
                asChild
                className="bg-white text-gray-900 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-gray-900 hover:text-white transition-colors duration-300"
              >
                <Link href={`coups-de-coeur/${product.id}`}>Savourez chaque details</Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
