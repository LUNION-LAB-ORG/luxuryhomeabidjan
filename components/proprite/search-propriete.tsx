import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function SearchPropriete() {
  return (
    <div className=" ">
      <div className="container w-full flex ">
        <div className="mx-auto">
          <Tabs defaultValue="account" className=" relative w-[400px]">
            <TabsList className="border-2">
              <TabsTrigger value="Type-logement" asChild>
                <Popover>
                  <PopoverTrigger>Open</PopoverTrigger>
                  <PopoverContent>
                    Place content for the popover here.
                  </PopoverContent>
                </Popover>
              </TabsTrigger>
              <TabsTrigger value="piece">Nombre pieces</TabsTrigger>
              <TabsTrigger value="emplacement">Emplacement</TabsTrigger>
              <TabsTrigger value="budget">Budget</TabsTrigger>
              <TabsTrigger value="reservation">Reservation</TabsTrigger>
            </TabsList>
            {/* <TabsContent  className="absolute" value="Type-logement"> Type-logement.</TabsContent>
          <TabsContent className="absolute" value="piece">piece.</TabsContent>
          <TabsContent  className="absolute" value="emplacement">emplacement.</TabsContent>
          <TabsContent  className="absolute" value="budget">budget.</TabsContent>
          <TabsContent  className="absolute" value="reservation">reservation.</TabsContent> */}
          </Tabs>
        </div>
      </div>
    </div>
  );
}
