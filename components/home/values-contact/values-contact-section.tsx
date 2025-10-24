import ContactForm from "./contact-form";
import ValueCard from "./value-card";

export function ValuesContactSection() {
  return (
    <section className="py-12 md:py-16 text-[#F5F5F5] px-2 md:px-6 bg-[#090909]">
      <div className="container-8xl">
        {/* Heading */}
        <h2 className="text-center mbb-16 text-xl font-bold leading-tight llg:mb-10 text-[24px] md:text-[30px] lg:text-[36px]">
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
            <ContactForm />
          </div>

          {/* Values Cards */}
          <div className="flex flex-col gap-6 md:col-span-2">
            <ValueCard
              title="Excellence"
              description="Notre équipe vous garantit un accès permanent à toutes les étapes clés de vos transactions immobilières."
              imageSrc="/assets/images/user-4.png"
            />

            <ValueCard
              title="Innovation"
              description="Parce que la discrétion est la valeur essentielle au cœur de notre métier, confiez nous en toute sérénité vos projets."
              imageSrc="/assets/images/user-4.png"
            />

            <ValueCard
              title="Confidentialité & Sécurité"
              description="Une équipe passionnée qui vous assure une prise en charge immédiate et une relation clientèle privilégiée."
              imageSrc="/assets/images/user-4.png"
            />

            <ValueCard
              title="Transparence"
              description="Une équipe passionnée qui vous assure une prise en charge immédiate et une relation clientèle privilégiée."
              imageSrc="/assets/images/user-4.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
