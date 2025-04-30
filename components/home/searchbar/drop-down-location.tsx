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
  service:string
}

export function DrawerLocation({setIsDrawerOpen,setIsSelectOpen,handleDialogLieuxOpen,service}:props) {

  return (
    <Drawer onOpenChange={setIsDrawerOpen}>
      <DrawerTrigger asChild>
        <Button className="lg:hover:bg-black  lg:hover:text-slate-100 lg:text-lg text-stone-600 font-semibold border-none shadow-none rounded-full  lg:p-7 " variant="outline">Location d'un bien</Button>
      </DrawerTrigger>
      <DrawerContent className="shadcn-drawer overflow-y-auto max-w-[1430] mx-auto bg-stone-100 h-[600px] lg:px-22 ppx-8 py-0 mb-0 overflow-hidden">
        <div className="mx-auto w-full pb-0 mb-0 overflow-auto">
          <DrawerHeader>
            <DrawerTitle></DrawerTitle>
          </DrawerHeader>
            <FormLocation service={service} setIsSelectOpen={setIsSelectOpen} handleDialogLieuxOpen={handleDialogLieuxOpen}/>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
