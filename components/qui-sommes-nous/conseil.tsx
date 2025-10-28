import Image from "next/image";

export default function Conseil() {

	return (
		<section className="relative container px-2 sm:px-4 md:px-4 lg:px-16 py-20 bg-stone-100  ">
			<div className="relative h-[400px] lg:h-[630px]  mmx-auto mmd:px-4 llg:px-16 ">
				<Image
					className="w-full h-full object-cover rounded-4xl"
					alt="image lieux "
					height={500}
					width={500}
					src="/assets/images/img/expertise-img1.jpg"
				/>
				<div className="absolute bottom-0 bg-black rounded-b-4xl w-full">
					<p
						className="relative text-white text-center font-bold px-2 sm:px-4 lg:px-10 md:text-[24px] lg:text-[30px] py-6">
						ECOUTER afin de COMPRENDRE, CONSEILLER et ACCOMPAGNER <br/> sont les étapes clés de la démarche LHA.
					</p>
				</div>
			</div>
		</section>
	)
}