import { Wifi } from "lucide-react";
import Image from "next/image";

export default function Content(){

    return(
        <div>
        <div className=" px-2 py-10 max-w-7xl mx-auto">
          <h3>Villa Moudoukou, Grand-Bassam: Éléphan house</h3>
          <div className="flex flex-col md:flex-row gap-2 my-7">
            <div className=" md:px-0 md:w-1/2 rounded-3xl md:rounded-l-3xl overflow-hidden">
              <Image
                alt="house"
                className="w-full object-cover"
                src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={500}
                height={500}
              />
            </div>
  
            <div className=" md:px-0 md:w-1/2 grid grid-cols-2 gap-2 rounded-3xl md:rounded-r-3xl overflow-hidden">
              <Image
                alt="house"
                className="w-full object-cover "
                src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={500}
                height={500}
              />
  
              <Image
                alt="house"
                className="w-full object-cover "
                src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={500}
                height={500}
              />
  
              <Image
                alt="house"
                className="w-full object-cover "
                src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={500}
                height={500}
              />
  
              <Image
                alt="house"
                className="w-full object-cover"
                src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={500}
                height={500}
              />
            </div>
          </div>
  
          <div>
              <h3 className="font-semibold text-lg">Logement entier : villa - Grand-Bassam, Côte d’Ivoire</h3>
              <p>14 voyageurs6 chambres6 lits6 salles de bain</p>
          </div>
  
          <div>
              <h3>Ce que propose ce logement</h3>
              <div className="py-10 grid grid-cols-2 gap-4 max-w-md items-center">
  
                  <div className="flex items-center gap-2">
                      <Wifi/>
                      <span>Vue sur le lac</span>
                  </div>
  
                  <div className="flex items-center gap-2">
                      <Wifi/>
                      <span>Vue sur le lac</span>
                  </div>
                  <div className="flex items-center gap-2">
                      <Wifi/>
                      <span>Vue sur le lac</span>
                  </div>
                  <div className="flex items-center gap-2">
                      <Wifi/>
                      <span>Vue sur le lac</span>
                  </div>
                  <div className="flex items-center gap-2">
                      <Wifi/>
                      <span>Vue sur le lac</span>
                  </div>
                  <div className="flex items-center gap-2">
                      <Wifi/>
                      <span>Vue sur le lac</span>
                  </div>
                  <div className="flex items-center gap-2">
                      <Wifi/>
                      <span>Vue sur le lac</span>
                  </div>
              </div>
          
          </div>
        </div>
      </div>
    )
}