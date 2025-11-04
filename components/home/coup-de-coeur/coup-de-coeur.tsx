import SectionTitle from '@/components/SectionTitle';
import CoupsDeCoeurList from '@/components/coup-de-coeur/coups-de-coeur-list';


export default function CoupDeCoeur() {

	return (
		<div className="min-h-screen px-2 py-12 w-full overflow-x-hidden">
			{/* Header */}
			<SectionTitle
				className="mb-8 px-6"
				title="Nos coups de cœur"
				subtitle="Savourez chaque details"
			/>
			<CoupsDeCoeurList/>
		</div>
	);
}
