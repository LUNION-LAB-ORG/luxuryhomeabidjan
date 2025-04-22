"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import FormLocation from "./form-location"

interface props{
  setIsDrawerOpen: (value: boolean) => void,
  setIsSelectOpen:(value: boolean) => void,
  handleDialogLieuxOpen:(value:boolean) => void,
}

export function DrawerLocation({setIsDrawerOpen,setIsSelectOpen,handleDialogLieuxOpen}:props) {

  return (
    <Drawer onOpenChange={setIsDrawerOpen}>
      <DrawerTrigger asChild>
        <Button className="hover:bg-black hover:text-slate-100 text-lg text-slate-600 font-semibold border-none shadow-none rounded-full p-3 lg:p-7 " variant="outline">Location d'un bien</Button>
      </DrawerTrigger>
      <DrawerContent className="shadcn-drawer">
        <div className="mx-auto w-full max-w-7xl">
          <DrawerHeader>
            <DrawerTitle></DrawerTitle>
          </DrawerHeader>

            <FormLocation setIsSelectOpen={setIsSelectOpen} handleDialogLieuxOpen={handleDialogLieuxOpen}/>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
