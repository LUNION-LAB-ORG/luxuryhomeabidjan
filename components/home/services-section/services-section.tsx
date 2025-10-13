"use client";
import ServiceCard from "@/components/home/services-section/service-card";
import {
	Briefcase,
	Building,
	Home,
	Lightbulb,
	PaintBucket,
} from "lucide-react";
const variants = {
	hover: {
		y: 20,
		transition: {
			type: "spring",
			stiffness: 200,
			damping: 50,
		},
	},
	initial: {
		y: "50%",
	},
};

const variantsExpert = {
	hover: {
		y: -50,
		transition: {
			type: "spring",
			stiffness: 200,
			damping: 50,
		},
	},
	initial: {
		y: 0,
	},
};

const variants2 = {
	hover: {
		opacity: 1,
		transition: {
			type: "spring",
			stiffness: 300,
			damping: 50,
		},
	},
	initial: {
		opacity: 1,
	},
};

// function ServiceCard({title, imageSrc, icon, navLink}: ServiceCardProps) {
// 	const [isHovered, setIsHovered] = useState(false);
//
// 	function handleMouseEnter() {
// 		setIsHovered(true);
// 	}
//
// 	function handleMouseLeave() {
// 		setIsHovered(false);
// 	}
//
// 	const style = navLink == "/services#expertise" ? "w-full" : "md:w-[49%]";
// 	return (
// 		<Link className={`w-full ${style} `} href={navLink}>
// 			<div
// 				onMouseEnter={handleMouseEnter}
// 				onMouseLeave={handleMouseLeave}
// 				className="group relative overflow-hidden rounded-2xl"
// 			>
// 				{/* Background Image */}
// 				{navLink == "/services#expertise" ? (
// 					<motion.div
// 						variants={variantsExpert}
// 						animate={isHovered ? "hover" : "initial"}
// 						transition={{delay: 0.2, duration: 0.5}}
// 						className="relative h-[400px] md:h-[350px] lg:h-[460px] w-fulll"
// 					>
// 						<Image
// 							src={imageSrc || "/placeholder.svg"}
// 							alt={title}
// 							fill
// 							className="object-cover transition-transformm duration-500 ggroup-hover:scale-105"
// 							sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
// 						/>
// 						{/* Overlay */}
// 						<div className="absolute "/>
// 					</motion.div>
// 				) : (
// 					<div className="relative h-[400px] md:h-[350px] lg:h-[460px] w-fulll">
// 						<Image
// 							src={imageSrc || "/placeholder.svg"}
// 							alt={title}
// 							fill
// 							className="object-cover transition-transformm duration-500 ggroup-hover:scale-105"
// 							sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
// 						/>
// 						{/* Overlay */}
// 						<div className="absolute "/>
// 					</div>
// 				)}
//
// 				{/* Content */}
// 				<motion.div
// 					variants={variants}
// 					animate={isHovered ? "hover" : "initial"}
// 					transition={{delay: 0.2, duration: 0.5}}
// 					className="absolute bottom-[-50px]] -bottom-0 h-[300px] left-0 p-6 pb-32 w-full group-hover:h-[50px]] ggroup-hover:bg-black/30 group-hover:shadow-sm iinset-0 bg-gradient-to-t from-black/80 to-transparent"
// 				>
// 					<div className="flex items-center gap-3">
// 						{/* Icon Circle */}
// 						<div
// 							className="flex p-3  hh-10 ww-10 lg:w-18 lg:h-18 items-center justify-center rounded-2xl bg-white bbackdrop-blur-sm shrink-0">
// 							<div>{icon}</div>
// 						</div>
//
// 						{/* Title */}
// 						<h3
// 							className="leading-7 xl:leading-10 text-[24px] sm:text-[26px] lg:text-[30px] llg:text-4xl xl:text-[40px] font-bold text-white">
// 							{title}
// 						</h3>
// 					</div>
// 					{title === "Transactions" && (
// 						<motion.h4
// 							variants={variants2}
// 							animate={isHovered ? "hover" : "initial"}
// 							transition={{delay: 0.2, duration: 0.5}}
// 							className="text-lg lg:text-xl text-white pl-16 xl:pl-22 font-bold"
// 						>
// 							(Louer - Acheter - Vendre)
// 						</motion.h4>
// 					)}
// 				</motion.div>
// 			</div>
// 		</Link>
// 	);
// }

export function ServicesSection() {
	const services = [
		{
			title: "Transactions",
			imageSrc: "/assets/images/illustrations/page-accueil/service-2.png",
			icon: <Building size={32} />,
			navLink: "/services/transaction",
		},
		{
			title: "Gestion & Syndic  ",
			imageSrc: "/assets/images/illustrations/page-accueil/service-2.png",
			icon: <Home size={32} />,
			navLink: "/services#immobiliere",
		},
		{
			title: "Opérations / projets",
			imageSrc: "/assets/images/illustrations/page-accueil/service-2.png",
			icon: <Lightbulb size={32} />,
			navLink: "/services#operations",
		},
		{
			title: "Home Staging",
			imageSrc: "/assets/images/illustrations/page-accueil/service-2.png",
			icon: <PaintBucket size={32} />,
			navLink: "/services#staging",
		},
	];

	return (
		<section className="container-8xl mt-16">
			<h2 className="mb-6 lg:mb-10 font-bold text-[24px] md:text-[30px] lg:text-[36px]">
				Explorez nos services
			</h2>

			<div className="grid md:grid-cols-2 gap-8">
				{services.map((service) => (
					<ServiceCard
						key={service.title}
						title={service.title}
						imageSrc={service.imageSrc}
						icon={service.icon}
						navLink={service.navLink}
					/>
				))}
				<ServiceCard
					title="Expertise & Conseils"
					imageSrc="/assets/images/illustrations/page-accueil/expert.jpg"
					icon={<Briefcase size={32} />}
					navLink="/services#expertise"
					className="md:col-span-2 md:aspect-[1785/580]"
				/>
			</div>
		</section>
	);
}
