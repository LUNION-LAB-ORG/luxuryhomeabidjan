import ContactForm from "./contact-form";
import ValueCard from "./value-card";

export function ValuesContactSection() {
	return (
		<section className="py-12 md:py-16 text-[#F5F5F5] px-2 md:px-6 bg-[#090909]">
			<div className="container-8xl">
				{/* Heading */}
				<h2
					className="text-center mbb-16 text-xl font-bold leading-tight llg:mb-10 text-[24px] md:text-[30px] lg:text-[36px]">
					LUXURY HOME ABIDJAN,
				</h2>

				<h3 className="text-center font-bold mb-8 lg:mb-10 text-[20px] md:text-[24px] lg:text-[28px] ">
					L'immobilier en Afrique autrement.
				</h3>
				<p className="font-bold mb-8 lg:mb-10 text-[20px] md:text-[24px] lg:text-[28px] ">
					Mettez-nous en relation avec votre projet immobilier
				</p>

				<div className="grid md:grid-cols-4 gap-4">
					{/* Contact Form */}
					<div className="flex-1 md:col-span-2">
						<ContactForm/>
					</div>

					{/* Values Cards */}
					<div className="flex flex-col gap-6 md:col-span-2">
						<ValueCard
							title="Excellence"
							description="Notre équipe se distingue par une performance mesurable et objective.
Bien au-delà d’une simple transaction, elle allie expertise humaine et savoir-faire technique pour offrir une expérience immobilière complète et d’exception."
							imageSrc="/assets/images/user-4.png"
						/>

						<ValueCard
							title="Innovation"
							description="LHA allie élégance, Technologie et durabilité pour offrir une nouvelle vision du luxe immobilier en Afrique."
							imageSrc="/assets/images/user-4.png"
						/>

						<ValueCard
							title="Confidentialité & Sécurité"
							description="La confidentialité et la sécurité sont au cœur de notre engagement.
Chaque transaction est traitée avec la plus grande discrétion, garantissant la protection totale des données et des intérêts de nos clients.
Chez Luxury Home Abidjan, la confiance se construit sur la rigueur, la transparence et le respect absolu de votre vie privée."
							imageSrc="/assets/images/user-4.png"
						/>

						<ValueCard
							title="Transparence"
							description="Chez Luxury Home Abidjan, la transparence guide chacune de nos actions.
Nous privilégions une communication claire, honnête et ouverte à chaque étape du processus immobilier, afin d’instaurer une confiance durable avec nos clients."
							imageSrc="/assets/images/user-4.png"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
