import type React from "react"
import Image from "next/image"
import { Building, Home, Briefcase, Users, Lightbulb, PaintBucket } from "lucide-react"
import { motion,useAnimation } from "motion/react"
import { useState } from "react"

type ServiceCardProps = {
  title: string
  imageSrc: string
  icon: React.ReactNode
}
const variants = {
  hover: {
    y: '-50%',
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
  initial: {
    y: 0,
  }
};

function ServiceCard({ title, imageSrc, icon }: ServiceCardProps) {

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
    <div
    onMouseEnter={handleMouseEnter} 
    onMouseLeave={handleMouseLeave}
    
    className="group relative overflow-hidden rounded-2xl">
      {/* Background Image */}
      <div className="relative h-80 w-full">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transformm duration-500 ggroup-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      </div>

      {/* Content */}
      <motion.div
       variants={variants}
       animate={isHovered ? "hover" : "initial"}
       transition={{ delay: 0.1 }}
      className="absolute bottom-[-100px] left-0 p-6 pb-32 w-full group-hover:h-[50px]] group-hover:bg-black/30 group-hover:shadow-sm">
        <div className="flex items-center gap-3">
          {/* Icon Circle */}
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
            <div className="text-white">{icon}</div>
          </div>

          {/* Title */}
          <h3 className="text-xl font-semibold text-white">{title}</h3>
        </div>
      </motion.div>
    </div>
  )
}

export function ServicesSection() {
  const services = [
    {
      title: "Transactions",
      imageSrc: "/assets/images/illustrations/page-accueil/service-1.png",
      icon: <Building size={20} />,
    },
    {
      title: "Expertise & Conseils en immobilier",
      imageSrc: "/assets/images/illustrations/page-accueil/service-1.png",
      icon: <Briefcase size={20} />,
    },
    {
      title: "Syndic de copropriété",
      imageSrc: "/assets/images/illustrations/page-accueil/service-1.png",
      icon: <Users size={20} />,
    },
    {
      title: "Gestion immobilière",
      imageSrc: "/assets/images/illustrations/page-accueil/service-2.png",
      icon: <Home size={20} />,
    },
    {
      title: "Opérations / projets immobiliers",
      imageSrc: "/assets/images/illustrations/page-accueil/service-2.png",
      icon: <Lightbulb size={20} />,
    },
    {
      title: "Home Staging",
      imageSrc: "/assets/images/illustrations/page-accueil/service-2.png",
      icon: <PaintBucket size={20} />,
    },
  ]

  return (
    <section className="py-16">
      <div className="container  mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">Nos services</h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.title} title={service.title} imageSrc={service.imageSrc} icon={service.icon} />
          ))}
        </div>
      </div>
    </section>
  )
}

