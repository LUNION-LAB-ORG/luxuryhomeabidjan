import Image from "next/image";

export default function Header() {
	return (
		<div className="w-full relative min-h-[calc(100vh-var(--nav-height))] overflow-hidden">
			<Image
				className="absolute object-cover brightness-[0.7]"
				alt="image lieux"
				width={1920}
				height={1080}
				src="/assets/images/backgrounds/equipe.jpg"
			/>
			<h1
				className="absolute bottom-0 text-white font-bold px-4 text-center text-[24px] md:text-[30px] lg:text-[46px] w-full py-6">
				L'immobilier en Afrique, Autrement
			</h1>
		</div>
	);
}
