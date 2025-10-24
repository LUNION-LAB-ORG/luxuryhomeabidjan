"use client";

import { Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import SectionTitle from "../SectionTitle";

// 🧩 Interface TypeScript
interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  email?: string; // optionnel
  phone?: string; // optionnel
  socials: {
    linkedin: string;
  };
}

// 🧱 Composant principal
export const TeamSection = () => {
  const teamMembers: TeamMember[] = [
    {
      name: "Morane Boudabes",
      role: "Administrateur Général",
      bio: "Expert en immobilier de luxe avec plus de 15 ans d’expérience à Abidjan.",
      image: "/team/amina.jpg",
      email: "morane.boudabes@luxuryhomeabidjan.com",
      phone: "",
      socials: { linkedin: "#" },
    },
    {
      name: "Christelle Kipre épouse Bossé",
      role: "Administratrice des ventes",
      bio: "Spécialiste des transactions haut de gamme et relations clients premium.",
      image: "/team/jean-marc.jpg",
      email: "christelle.kipré@luxuryhomeabidjan.com",
      phone: "+2250749876501",
      socials: { linkedin: "#" },
    },
    {
      name: "Thibault Gouré",
      role: "Luxury Realtor",
      bio: "Créateur d’expériences raffinées alliant modernité et élégance africaine.",
      image: "/assets/images/team/thibau.PNG",
      email: "thibault.goure@luxuryhomeabidjan.com",
      phone: "+2250103489404",
      socials: { linkedin: "#" },
    },
    {
      name: "Yassine Gueye",
      role: "Luxury Realtor",
      bio: "Ingénieur en gestion de projets immobiliers complexes et durables.",
      image: "/assets/images/team/YASSINE.jpg",
      email: "yassine.gueye@luxuryhomeabidjan.com",
      phone: "+2250749871713",
      socials: { linkedin: "#" },
    },
    {
      name: "Angela Komenan",
      role: "Luxury Realtor",
      bio: "Passionnée de communication et d’image de marque dans l’immobilier de prestige.",
      image: "/team/issa.jpg",
      email: "karine.komenan@luxuryhomeabidjan.com",
      phone: "+2250749876611",
      socials: { linkedin: "#" },
    },
    {
      name: "Aïcha Coulibaly",
      role: "Luxury Realtor",
      bio: "Experte en accompagnement de clients haut de gamme dans leurs acquisitions.",
      image: "/assets/images/team/aicha.jpg",
      email: "aicha.coulibaly@luxuryhomeabidjan.com",
      phone: "+2250749876609",
      socials: { linkedin: "#" },
    },
    {
      name: "Nomel Lasme",
      role: "Juriste",
      bio: "Garant des aspects légaux et contractuels de nos transactions immobilières.",
      image: "/assets/images/team/NOL.JPG",
      socials: { linkedin: "#" },
    },
    {
      name: "Christelle Kra",
      role: "Gestionnaire de biens",
      bio: "Spécialiste de la gestion locative et de l’entretien des propriétés de prestige.",
      image: "/assets/images/team/christelle.jpg",
      email: "kra.christelle@luxuryhomeabidjan.com",
      phone: "+2250749871738",
      socials: { linkedin: "#" },
    },
    {
      name: "Ghislain Amichia",
      role: "Assistant Communication et Marketing",
      bio: "En charge du développement de l’image et de la visibilité de la marque.",
      image: "/team/issa.jpg",
      socials: { linkedin: "#" },
    },
    {
      name: "Rokia Sangaré",
      role: "Assistante Marketing",
      bio: "Participe à la création de campagnes digitales innovantes et élégantes.",
      image: "/team/issa.jpg",
      socials: { linkedin: "#" },
    },
  ];

  // Séparer les lignes
  const firstRow = teamMembers.slice(0, 2);
  const otherRows = teamMembers.slice(2);

  return (
    <section className="px-6 py-16 bg-white font-serif">
      <div className="max-w-7xl mx-auto">
        {/* Titre */}
        <div className="text-center mb-16">
          <SectionTitle
            title="Notre équipe"
            subtitle="Des professionnels passionnés, dédiés à offrir une expérience immobilière d’exception."
          />
        </div>

        {/* Première ligne (2 cartes) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
          {firstRow.map((member, index) => (
            <TeamCard key={index} member={member} />
          ))}
        </div>

        {/* Autres lignes (max 4 cartes) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {otherRows.map((member, index) => (
            <TeamCard key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

// 🧑‍💼 Composant carte membre
const TeamCard = ({ member }: { member: TeamMember }) => (
  <div className="group relative rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col">
    {/* Image */}
    <div className="relative w-full overflow-hidden flex-1">
      <Image
        src={member.image}
        alt={member.name}
        width={2000}
        height={2000}
        className="object-cover h-full w-full transition-transform duration-500 group-hover:scale-105"
      />

      {/* Icônes LinkedIn + Mail (mail s'affiche uniquement si présent) */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-3">
        {/* Lien LinkedIn */}
        <Link
          href={member.socials.linkedin}
          target="_blank"
          className="w-9 h-9 rounded-full flex items-center justify-center text-gray-800 bg-white hover:bg-gray-100"
          aria-label="LinkedIn"
        >
          <Linkedin size={18} />
        </Link>

        {/* Lien Mail — seulement si email existe */}
        {member.email && (
          <a
            href={`mailto:${member.email}`}
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full flex items-center justify-center text-gray-800 bg-white hover:bg-gray-100"
            aria-label="Envoyer un mail"
          >
            <Mail size={18} />
          </a>
        )}
      </div>
    </div>

    {/* Infos texte */}
    <div className="p-5 text-center text-white bg-black">
      <h3 className="font-semibold text-lg text-white uppercase">
        {member.name}
      </h3>
      <p className="text-sm text-gray-400 mt-1">{member.role}</p>
      <p className="text-xs text-gray-300 mt-3 font-light">{member.bio}</p>

      {/* Téléphone cliquable (si présent) */}
      {member.phone && (
        <div className="hidden group-hover:block mt-4 text-xs font-bold text-white opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
          <a
            href={`tel:${member.phone}`}
            className="block mt-1 transition"
          >
            {member.phone}
          </a>
        </div>
      )}
    </div>
  </div>
);
