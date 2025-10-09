"use client";
import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { cn } from '@/lib/utils';
import { motion } from "motion/react";

type ServiceCardProps = {
  title: string;
  imageSrc: string;
  icon: React.ReactNode;
  navLink: string;
  className?: string;
};

const variants = {
  hover: {
    height: 200,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 50,
    },
  },
};

function ServiceCard({ title, imageSrc, icon, navLink, className }: ServiceCardProps) {
  const [isHovered, setIsHovered] = React.useState(false);
  const handleMouseEnter = (value: boolean) => {
    setIsHovered(value);
  };

  return (
    <Link
      href={navLink}
      className={cn("relative overflow-hidden rounded-2xl aspect-[883/580]", className)}
      onMouseEnter={() => handleMouseEnter(true)}
      onMouseLeave={() => handleMouseEnter(false)}
    >
      <Image
        src={imageSrc || "/placeholder.svg"}
        width={883}
        height={580}
        alt="Service"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <motion.div
        variants={variants}
        animate={isHovered ? "hover" : "initial"}
        transition={{ delay: 0.2, duration: 0.3 }}
        className="flex items-baseline absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 from-20% to-transparent 
      px-4 lg:px-7 pb-3 md:pb-5 lg:pb-10"
      >
        <div className="w-8 h-8 lg:w-12 lg:h-12 mr-3 lg:mr-6 flex items-center justify-center bg-[#F5F5F5] rounded-2xl">
          {icon}
        </div>
        <span className="text-[#F5F5F5] font-extrabold capitalize text-3xl lg:text-4xl">
          {title}
        </span>
      </motion.div>
    </Link>
  );
}

export default ServiceCard;