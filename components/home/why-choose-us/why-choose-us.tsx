import Image from "next/image"

export function WhyChooseUs() {
  return (
    <section className="w-full px-2 md:px-6 py-16">
      <div className=" bg-black container mx-auto lg:pl-10 py-10 rounded-2xl">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 ">
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-6 px-4 text-white lg:pr-12">
            <h2 className="text-4xl font-bold leading-tight tracking-tighter md:text-5xl">Pourquoi nous choisir ?</h2>

            <div className="space-y-1 text-white/90">
              <p>
                Parce que la Côte d&apos;Ivoire connaît un engouement et une effervescence immobilière incroyable, une
                demande toujours grandissante : vous proposer les meilleurs biens disponibles sur le marché
                s&apos;inscrit dans notre démarche.
              </p>

              <p>
                Notre éthique est une approche qualitative, esthétique et attentive du bien, afin de vous le proposer au
                prix juste.
              </p>

              <p>
                Chez LHA le client passe avant l&apos;agence, nous avons développé une véritable approche conseil, basée
                sur une expertise aussi bien sur le plan administratif, juridique, que comptable et financier.
              </p>

              <p>
                Particuliers, professionnels, institutionnels, notre équipe s&apos;engage à vous fournir transparence et
                confidentialité avant, pendant et après votre projet.
              </p>
            </div>

            <div className=" md:pt-6">
              <div className="h-[1px] md:h-1 w-full bg-slate-300" />
              <div className="pt-6 text-lg font-semibold uppercase tracking-wider">
                <p>Notre philosophie s&apos;applique à tous nos clients.</p>
                <p>Notre fierté : votre satisfaction</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
      
          <div className="relative flex items-center w-full px-4 lg:p-0">
            {/* Image du bas, décalée à gauche */}
                 <div className="hidden lg:block lg:absolute  w-full hh-full h-[85%]  rounded-3xl iinset-0 left-[-30px] z-0">
                  <Image
                  className="rounded-3xl"
                    src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Image de fond"
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 640px) 100vw, 25vw"
                  />
                </div>

                {/* Image du haut */}
                <div className="relative z-10 w-full hh-full h-[500px] ">
                  <Image
                  className="rounded-3xl lg:rounded-s-3xl"
                    src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Image superposée"
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 640px) 100vw, 25vw"
                  />
                </div>
          </div>
        </div>
      </div>
    </section>
  )
}

