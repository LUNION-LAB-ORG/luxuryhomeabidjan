import {Button} from "@/components/ui/button";
import {products} from "@/data/coups-de-coeur.type";
import {cn} from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";


export default function CoupDeCoeur() {
	return (
		<div className="min-h-screen px-2 py-12 w-full">
			{/* Header */}
			<SectionTitle
				className="mb-8 px-6"
				title="Nos coups de cœur"
				subtitle="Savourez chaque details"
			/>

			{/* Product Grid */}
			<div className="grid grid-cols-1  md:grid-cols-2 gap-3">
				{products.map((product) => (
					<Link
						href={`coups-de-coeur/${product.id}`}
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
					</Link>
				))}
			</div>
		</div>
	);
}
