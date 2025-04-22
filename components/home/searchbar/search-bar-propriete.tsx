"use client"
import { Search } from "lucide-react"
import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button"
import { DrawerLocation } from "./drop-down-location";
import { DrawerVendre } from "./drop-down-vendre";
import { DrawerAchat } from "./drop-down-achat";

export function SearchBarPropriete() {

  const [dataParams,setDataParams]= useState()

  const [isOpenDialogLieux, setIsOpenDialogLieux] = useState(false)
  const [isOpenSelect, setIsOpenSelect] = useState(false)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
   const [isOpen, setIsOpen] = useState<boolean>(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const drawerJustClosedRef = useRef(false);
    const selectJustClosedRef = useRef(false);
    const DialogLieuxJustClosedRef = useRef(false);


    const handleDialogLieuxOpen = (open: boolean) => {
      setIsOpenDialogLieux(open)
      // Si le drawer vient de se fermer, on active le flag temporaire
      if (!open) {
        DialogLieuxJustClosedRef.current = true
  
        // On réinitialise après 100ms
        setTimeout(() => {
          DialogLieuxJustClosedRef.current = false
        }, 100)
      }
    }

    const handleSelectChange = (open: boolean) => {
      setIsOpenSelect(open)
      // Si le drawer vient de se fermer, on active le flag temporaire
      if (!open) {
        selectJustClosedRef.current = true
  
        // On réinitialise après 100ms
        setTimeout(() => {
          selectJustClosedRef.current = false
        }, 100)
      }
    }

    // Fonction appelée quand le Drawer s’ouvre ou se ferme
    const handleDrawerOpenChange = (open: boolean) => {
      setIsDrawerOpen(open)
  
      // Si le drawer vient de se fermer, on active le flag temporaire
      if (!open) {
        drawerJustClosedRef.current = true
  
        // On réinitialise après 100ms
        setTimeout(() => {
          drawerJustClosedRef.current = false
        }, 100)
      }
    }  

    useEffect(() => {

      function handleClickOutside(event: MouseEvent) {
        const target = event.target as HTMLElement;
      
        if (isDrawerOpen || drawerJustClosedRef.current||isOpenSelect||selectJustClosedRef.current||isOpenDialogLieux||DialogLieuxJustClosedRef.current) return;
        
      
        if (
          !menuRef.current?.contains(target) &&
          !target.closest(".shadcn-drawer")&&
          !target.closest(".select-drower")  && 
          !target.closest(".dialog-lieux")
        ) {
          setIsOpen(false);
        }
      }      
      

      document.addEventListener("mousedown", handleClickOutside)
      return () => {
        document.removeEventListener("mousedown", handleClickOutside)
      }
    }, [])


  return (
    <div className="relative mx-auto container w-full px-2 md:px-4">
      <div className="rounded-full bg-white border-7 border-slate-100 px-6 py-3 my-10 relative  lg:p-4 flex flex-col gap-2 lg:gap-0 lg:flex-row items-center justify-between">

        <div className="relative overflow-auto w-full lg:w-3/5">
          {
            !isOpen&&   <button className="w-full text-xl md:text-2xl font-semibold cursor-pointer" onClick={() => setIsOpen(!isOpen)}>Trouver mon logement ici</button>

          }
        {/* <button className="text-2xl font-semibold cursor-pointer" onClick={() => setIsOpen(!isOpen)}>Trouver mon logement ici</button> */}
        {isOpen && (
        <div
        className="w-full z-20 overflow-auto bg-whitee  top-0 lg:-top-4 left-[0px] "
          ref={menuRef}
          style={{
            // border: "1px solid #ccc",
            // padding: "1rem",
            // marginTop: "0.5rem",
          }}
        >
          <div className="flex ggap-5 lg:gap-0  items-center ">
              <DrawerLocation setIsDrawerOpen={handleDrawerOpenChange} setIsSelectOpen={handleSelectChange} handleDialogLieuxOpen={handleDialogLieuxOpen}/>
              <DrawerVendre setIsDrawerOpen={handleDrawerOpenChange}/>
              <DrawerAchat setIsDrawerOpen={handleDrawerOpenChange}/>
          </div>
        </div>
        ) 
}

        </div>
      
      </div>
    </div>
  )
}

