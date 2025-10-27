import React from 'react';
import Link from "next/link";
import Image from "next/image";
import {cn} from "@/lib/utils";
import {IBien} from "@/data/coups-de-coeur.type";

function CoupDeCoeurCard({bien, ...props}: { bien: IBien }) {
	return (
		<Link
			{...props}
			href={`/coups-de-coeur/${bien.id}`}
			key={bien.id}
			className={cn(
				"relative ring-1 ring-slate-200 overflow-hidden group cursor-pointer transition-all duration-500 w-full",
				bien.id == 3 && "max-md:order-4"
			)}
		>
			{/* Image container — fond différent selon id */}
			<div
				className={cn(
					`w-full lg:h-[600px] md:h-[480px] h-[500px] flex items-center justify-center`,
					bien.id === 1 || bien.id === 4 ? "bg-white" : "bg-black"
				)}
			>
				<Image
					src={bien.image}
					alt={bien.title}
					width={500}
					height={500}
					className="max-h-[400px] w-auto object-contain transition-transform duration-500 group-hover:scale-105"
				/>
			</div>
		</Link>
	);
}

export default CoupDeCoeurCard;