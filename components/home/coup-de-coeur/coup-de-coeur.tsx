import {Button} from "@/components/ui/button";
import {biens} from "@/data/coups-de-coeur.type";
import {cn} from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import CoupDeCoeurCard from "@/components/coup-de-coeur/coup-de-coeur-card";
import CoupsDeCoeurList from "@/components/coup-de-coeur/coups-de-coeur-list";


export default function CoupDeCoeur() {
	return (
		<div className="min-h-screen px-2 py-12 w-full overflow-x-hidden">
			{/* Header */}
			<SectionTitle
				className="mb-8 px-6"
				title="Nos coups de cœur"
				subtitle="Savourez chaque details"
			/>
			<CoupsDeCoeurList biens={biens}/>
		</div>
	);
}
