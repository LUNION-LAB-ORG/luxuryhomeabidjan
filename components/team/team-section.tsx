import Image from "next/image";

// Composant TeamSection (à insérer dans votre page)
export const TeamSection = () => {
  const teamMembers = [
    {
      name: "Amina KOUADIO",
      role: "Fondatrice & CEO",
      bio: "Expert en immobilier de luxe avec plus de 15 ans d’expérience à Abidjan.",
      image: "/team/amina.jpg",
      socials: { linkedin: "#", instagram: "#" },
    },
    {
      name: "Jean-Marc DIALLO",
      role: "Directeur Commercial",
      bio: "Spécialiste des transactions haut de gamme et relations clients premium.",
      image: "/team/jean-marc.jpg",
      socials: { linkedin: "#", instagram: "#" },
    },
    {
      name: "Fatoumata TRAORÉ",
      role: "Architecte d’Intérieur",
      bio: "Créatrice d’espaces raffinés alliant modernité et élégance africaine.",
      image: "/team/fatoumata.jpg",
      socials: { linkedin: "#", instagram: "#" },
    },
    {
      name: "Serge KOFFI",
      role: "Responsable Technique",
      bio: "Ingénieur en gestion de projets immobiliers complexes et durables.",
      image: "/team/serge.jpg",
      socials: { linkedin: "#", instagram: "#" },
    },
     {
      name: "Serge KOFFI",
      role: "Responsable Technique",
      bio: "Ingénieur en gestion de projets immobiliers complexes et durables.",
      image: "/team/serge.jpg",
      socials: { linkedin: "#", instagram: "#" },
    },
  ];

  return (
    <section className="px-6 py-16 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Titre élégant */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light tracking-wide text-gray-900 mb-4">
            Notre Équipe
          </h2>
          <div className="w-24 h-0.5 bg-gray-800 mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto font-light">
            Des professionnels passionnés, dédiés à offrir une expérience immobilière d’exception.
          </p>
        </div>

        {/* Grille des membres */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Image avec effet de zoom subtil */}
              <div className="relative h-72 w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay socials (apparaît au survol) */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-3">
                  <a
                    href={member.socials.linkedin}
                    className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-gray-800 hover:bg-gray-100"
                    aria-label="LinkedIn"
                  >
                    <span className="text-sm">in</span>
                  </a>
                  <a
                    href={member.socials.instagram}
                    className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-gray-800 hover:bg-gray-100"
                    aria-label="Instagram"
                  >
                    <span>📷</span>
                  </a>
                </div>
              </div>

              {/* Infos */}
              <div className="p-5 text-center">
                <h3 className="font-semibold text-lg text-gray-900">{member.name}</h3>
                <p className="text-sm text-gray-500 mt-1">{member.role}</p>
                <p className="text-xs text-gray-600 mt-3 font-light">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};