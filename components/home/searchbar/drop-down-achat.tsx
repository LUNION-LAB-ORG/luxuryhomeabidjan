"use client"

import * as React from "react"
import { Minus, Plus } from "lucide-react"
// import { Bar, BarChart, ResponsiveContainer } from "recharts"

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

const data = [
  {
    goal: 400,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 239,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 349,
  },
]

interface props{
  setIsDrawerOpen: (value: boolean) => void,
  setIsSelectOpen:(value: boolean) => void,
  handleDialogLieuxOpen:(value:boolean) => void,
  service:string
}


export function DrawerAchat({setIsDrawerOpen,setIsSelectOpen,handleDialogLieuxOpen,service}:props) {
  const [goal, setGoal] = React.useState(350)

  function onClick(adjustment: number) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)))
  }

  return (
      <Drawer onOpenChange={setIsDrawerOpen}>
          <DrawerTrigger asChild>
            <Button className="lg:hover:bg-black lg:hover:text-slate-100 lg:text-lg text-slate-600 font-semibold border-none shadow-none rounded-full  lg:p-7 " variant="outline">Location d'un bien</Button>
          </DrawerTrigger>
          <DrawerContent className="shadcn-drawer">
            <div className="mx-auto w-full max-w-7xl">
              <DrawerHeader>
                <DrawerTitle></DrawerTitle>
              </DrawerHeader>
                <FormLocation service={service} setIsSelectOpen={setIsSelectOpen} handleDialogLieuxOpen={handleDialogLieuxOpen}/>
            </div>
          </DrawerContent>
        </Drawer>
  )
}
