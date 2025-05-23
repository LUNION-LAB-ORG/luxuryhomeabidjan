"use client";
import type React from "react";
import Image from "next/image";
import {
  Building,
  Home,
  Briefcase,
  Users,
  Lightbulb,
  PaintBucket,
} from "lucide-react";
import { motion, useAnimation } from "motion/react";
import { useState } from "react";
import Link from "next/link";

type ServiceCardProps = {
  title: string;
  imageSrc: string;
  icon: React.ReactNode;
  navLink: string
};
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
function ServiceCard({ title, imageSrc, icon, navLink }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  function handleMouseEnter() {
    setIsHovered(true);
  }
  function handleMouseLeave() {
    setIsHovered(false);
  }
  const controls = useAnimation();
  function handleMouseEnterControls() {
    controls.start("hover");
  }
  function handleMouseLeaveControls() {
    controls.start("initial");
  }
  return (
    <Link href={navLink}>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="group relative overflow-hidden rounded-2xl"
      >
        {/* Background Image */}
        <div className="relative h-[400px] md:h-[350px] lg:h-[460px] w-fulll">
          <Image
            src={imageSrc || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transformm duration-500 ggroup-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {/* Overlay */}
          <div className="absolute " />
        </div>

        {/* Content */}
        <motion.div
          variants={variants}
          animate={isHovered ? "hover" : "initial"}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="absolute bottom-[-50px]] -bottom-0 h-[300px] left-0 p-6 pb-32 w-full group-hover:h-[50px]] ggroup-hover:bg-black/30 group-hover:shadow-sm iinset-0 bg-gradient-to-t from-black/80 to-transparent"
        >
          <div className="flex items-center gap-3">
            {/* Icon Circle */}
            <div className="flex p-3  hh-10 ww-10 lg:w-18 lg:h-18 items-center justify-center rounded-2xl bg-white bbackdrop-blur-sm shrink-0">
              <div>{icon}</div>
            </div>

            {/* Title */}
            <h3 className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white">
              {title}
            </h3>
          </div>
          {title === "Transactions" && (
            <motion.h4
              variants={variants2}
              animate={isHovered ? "hover" : "initial"}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-lg lg:text-xl text-white pl-16 font-bold"
            >
              (Louer - Acheter - Vendre)
            </motion.h4>
          )}
        </motion.div>
      </div>
    </Link>
  );
}

export function ServicesSection() {
  const services = [
    {
      title: "Transactions",
      imageSrc: "/assets/images/illustrations/page-accueil/service-2.png",
      icon: <Building size={32} />,
      navLink:"/services/transaction"
    },
    {
      title: "Expertise & Conseils en immobilier",
      imageSrc: "/assets/images/illustrations/page-accueil/service-2.png",
      icon: <Briefcase size={32} />,
       navLink:"/services#expertise"
    },
    {
      title: "Syndic de copropriété ",
      imageSrc: "/assets/images/illustrations/page-accueil/service-2.png",
      icon: <Users size={32} />,
       navLink:"/services#syndic"
    },
    {
      title: "Gestion immobilière",
      imageSrc: "/assets/images/illustrations/page-accueil/service-2.png",
      icon: <Home size={32} />,
       navLink:"/services#immobiliere"
    },
    {
      title: "Opérations / projets immobiliers",
      imageSrc: "/assets/images/illustrations/page-accueil/service-2.png",
      icon: <Lightbulb size={32} />,
       navLink:"/services#operations"
    },
    {
      title: "Home Staging",
      imageSrc: "/assets/images/illustrations/page-accueil/service-2.png",
      icon: <PaintBucket size={32} />,
       navLink:"/services#staging"
    },
  ];

  return (
    <section className="py-10 md:py-16">
      <div className="container  mx-auto px-4 lg:px-16">
        <h2 className="mb-12 text-center text-3xl font-bold md:text-5xl">
          Nos services
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              imageSrc={service.imageSrc}
              icon={service.icon}
              navLink={service.navLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
