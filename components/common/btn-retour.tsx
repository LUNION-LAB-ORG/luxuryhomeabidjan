'use client'; // si tu es dans un composant dans app/

import { useRouter } from 'next/navigation';
import { ChevronLeft } from 'lucide-react'; // ou autre icône
import React from 'react';

const BtnRetour = ({ text }: { text: string }) => {
  const router = useRouter();

  return (
    <div
      className="text-black font-bold px-2 sm:px-4 lg:px-14 mb-6 lg:mb-10 flex items-center gap-2 cursor-pointer"
      onClick={() => router.back()}
    >
      <ChevronLeft />
      <h1 className="text-[18px] md:text-[26px] lg:text-[36px]">{text}</h1>
    </div>
  );
};

export default BtnRetour;
