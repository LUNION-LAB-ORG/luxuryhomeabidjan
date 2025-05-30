"use client";
import { Search } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { DrawerLocation } from "./drop-down-location";
import { DrawerVendre } from "./drop-down-vendre";
import { DrawerAchat } from "./drop-down-achat";
import { AnimatePresence, motion, usePresence } from "motion/react";
import Link from "next/link";
import Image from "next/image";

export function SearchBar() {
  const variants = {
    hidden: { x: -1000 },
    visible: { x: 0 },
    exit: { x: -500 },
  };

  const [dataParams, setDataParams] = useState();

  const [isOpenDialogLieux, setIsOpenDialogLieux] = useState(false);
  const [isOpenSelect, setIsOpenSelect] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const drawerJustClosedRef = useRef(false);
  const selectJustClosedRef = useRef(false);
  const DialogLieuxJustClosedRef = useRef(false);

  const handleDialogLieuxOpen = (open: boolean) => {
    setIsOpenDialogLieux(open);
    // Si le drawer vient de se fermer, on active le flag temporaire
    if (!open) {
      DialogLieuxJustClosedRef.current = true;

      // On réinitialise après 100ms
      setTimeout(() => {
        DialogLieuxJustClosedRef.current = false;
      }, 100);
    }
  };

  const handleSelectChange = (open: boolean) => {
    setIsOpenSelect(open);
    // Si le drawer vient de se fermer, on active le flag temporaire
    if (!open) {
      selectJustClosedRef.current = true;

      // On réinitialise après 100ms
      setTimeout(() => {
        selectJustClosedRef.current = false;
      }, 100);
    }
  };

  // Fonction appelée quand le Drawer s’ouvre ou se ferme
  const handleDrawerOpenChange = (open: boolean) => {
    setIsDrawerOpen(open);

    // Si le drawer vient de se fermer, on active le flag temporaire
    if (!open) {
      drawerJustClosedRef.current = true;

      // On réinitialise après 100ms
      setTimeout(() => {
        drawerJustClosedRef.current = false;
      }, 100);
    }
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as HTMLElement;

      if (
        isDrawerOpen ||
        drawerJustClosedRef.current ||
        isOpenSelect ||
        selectJustClosedRef.current ||
        isOpenDialogLieux ||
        DialogLieuxJustClosedRef.current
      )
        return;

      if (
        !menuRef.current?.contains(target) &&
        !target.closest(".shadcn-drawer") &&
        !target.closest(".select-drower") &&
        !target.closest(".dialog-lieux")
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative mt-10 md:mt-20  mx-auto container w-full px-2 md:px-14">
      <div className="rounded-full bg-white border-7 border-stone-100 px-5 lg:px-2 py-3 my-10 relative  lg:py-2 flex flex-col gap-2 lg:gap-0 lg:flex-row items-center justify-between">
        <div className="relative overflow-auto w-full ">
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="ppx-2 z-10 flex justify-between items-center cursor-pointer"
          >
            <span className="w-ful lg:pl-15 text-md md:text-[28px] font-bold cursor-pointer">
              Trouver mon logement ici
            </span>

            <div className="flex gap-12">
              <div className="hidden lg:flex items-center gap-4">
                <Image
                  // className="w-[50px]"
                  src="/assets/images/icons/user1a.png"
                  alt="user"
                  height={50}
                  width={50}
                />
                <span>Accédez au filtrage</span>
              </div>

              <div className="hidden lg:flex items-center gap-2 text-stone-400 p-5 px-7 bg-stone-800 rounded-4xl">
                <Search className="h-4 w-4" />
                <span>Rechercher</span>
              </div>
            </div>

            <span className="lg:hidden">
              <Search className="h-5 w-5 md:h-7 md:w-7" />
            </span>
          </div>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                variants={variants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.3 }}
                className="absolute z-20 w-fit overflow-auto bg-white -top-2 lg:-top-0"
                ref={menuRef}
              >
                <div className="flex items-center ">
                  <DrawerLocation
                    service="location"
                    setIsDrawerOpen={handleDrawerOpenChange}
                    setIsSelectOpen={handleSelectChange}
                    handleDialogLieuxOpen={handleDialogLieuxOpen}
                  />
                  <DrawerAchat
                    service="achat"
                    setIsDrawerOpen={handleDrawerOpenChange}
                    setIsSelectOpen={handleSelectChange}
                    handleDialogLieuxOpen={handleDialogLieuxOpen}
                  />
                  {/* <div className="text-nowrap w-fit  lg:hover:bg-black lg:hover:text-slate-100 lg:text-lg text-slate-600 font-semibold border-none shadow-none rounded-full  lg:px-5 lg:py-4">
                    <Link href="#">Vendre un bien</Link>
                  </div> */}
                  {/* <DrawerVendre setIsDrawerOpen={handleDrawerOpenChange}/> */}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
