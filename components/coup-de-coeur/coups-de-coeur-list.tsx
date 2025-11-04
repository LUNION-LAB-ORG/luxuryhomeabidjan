'use client';
import React, { useRef } from 'react';
import CoupDeCoeurCard from '@/components/coup-de-coeur/coup-de-coeur-card';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { useCoupDeCoeurList } from '@/features/properties/hooks/useCoupDeCoeurList';

function CoupsDeCoeurList() {
  const container = useRef<HTMLDivElement | null>(null);
  const {
    coupDeCoeur,
    coupDeCoeurLoading,
  } = useCoupDeCoeurList();

  useGSAP(() => {
    if (!container.current) return;

    const cards = gsap.utils.toArray('[data-coup-card]') as HTMLElement[];

    cards.forEach((card, index) => {
      const fromDirection = index % 2 === 0 ? -30 : 30; // gauche / droite

      gsap.from(card, {
        x: fromDirection,
        opacity: 0,
        duration: 0.5,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 90%',
          // toggleActions: "play none none reverse",
          // markers: true
        },
      });
    });
  }, { scope: container });

  if (!coupDeCoeur && !coupDeCoeurLoading) {
    return <div>Aucun coup de cœur disponible.</div>;
  }

  return (
    <div ref={container} className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full py-4">
      {coupDeCoeurLoading ? (
        Array.of(1, 2, 3, 4).map((index) => (
          <CoupDeCoeurSkeleton key={index}/>
        ))
      ) : coupDeCoeur!.map((bien, _) => (
        <CoupDeCoeurCard key={bien.id} propriete={bien} idx={_ + 1} data-coup-card />
      ))}
    </div>
  );
}

const CoupDeCoeurSkeleton = () => {
  return (
    <div
         className="relative ring-1 ring-slate-200 overflow-hidden group cursor-pointer transition-all duration-500 w-full bg-white">
      <div
        className="w-full lg:h-[600px] md:h-[480px] h-[500px] flex items-center justify-center bg-gray-200 animate-pulse">
        <div className="max-h-[400px] w-auto bg-gray-300 animate-pulse rounded-lg"></div>
      </div>
    </div>
  )
}

export default CoupsDeCoeurList;