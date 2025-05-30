"use client";
import type React from "react";
import Image from "next/image";
import {
  Building,
  Home,
  Briefcase,
  Lightbulb,
  PaintBucket,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import Link from "next/link";

type ServiceCardProps = {
  title: string;
  imageSrc: string;
  icon: React.ReactNode;
  navLink: string;
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
function ServiceCard({ title, imageSrc, icon, navLink }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  function handleMouseEnter() {
    setIsHovered(true);
  }
  function handleMouseLeave() {
    setIsHovered(false);
  }
  const style = navLink == "/services#expertise" ? "w-full" : "md:w-[49%]";
  return (
    <Link className={`w-full ${style} `} href={navLink}>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="group relative overflow-hidden rounded-2xl"
      >
        {/* Background Image */}
        {navLink == "/services#expertise" ? (
          <motion.div
            variants={variantsExpert}
            animate={isHovered ? "hover" : "initial"}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="relative h-[400px] md:h-[350px] lg:h-[460px] w-fulll"
          >
            <Image
              src={imageSrc || "/placeholder.svg"}
              alt={title}
              fill
              className="object-cover transition-transformm duration-500 ggroup-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            {/* Overlay */}
            <div className="absolute " />
          </motion.div>
        ) : (
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
        )}

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
            <h3 className="leading-7 xl:leading-10 text-[24px] sm:text-[26px] lg:text-[30px] llg:text-4xl xl:text-[40px] font-bold text-white">
              {title}
            </h3>
          </div>
          {title === "Transactions" && (
            <motion.h4
              variants={variants2}
              animate={isHovered ? "hover" : "initial"}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-lg lg:text-xl text-white pl-16 xl:pl-22 font-bold"
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
    {
      title: "Expertise & Conseils",
      imageSrc: "/assets/images/illustrations/page-accueil/expert.jpg",
      icon: <Briefcase size={32} />,
      navLink: "/services#expertise",
    },
    // {
    //   title: "Syndic de copropriété ",
    //   imageSrc: "/assets/images/illustrations/page-accueil/service-2.png",
    //   icon: <Users size={32} />,
    //    navLink:"/services#syndic"
    // },
  ];

  return (
    <section className="py-10 md:py-16 ">
      <div className="ccontainer mx-auto px-4 lg:px-16">
        <h2 className="mb-6 lg:mb-10 font-bold px-2 sm:px-4 lg:px-14 text-[24px] md:text-[30px] lg:text-[36px]">
          Explorez nos services
        </h2>

        <div className="ggrid flex justify-between flex-col md:flex-wrap gap-6 md:gap-y-6 md:gap-x-2 md:flex-row ">
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
