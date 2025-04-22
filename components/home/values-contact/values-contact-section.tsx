import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function ValuesContactSection() {
  return (
    <section className="bg-white  py-16 text-white  px-2 md:px-6">
      <div className="bg-black container mx-auto py-10 px-4 md:px-16 rounded-2xl">
        {/* Heading */}
        <h2 className="mb-16 text-center text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
          LUXURY HOME ABIDJAN, les clés de chez vous
          <br />
          sont chez nous.
        </h2>

        {/* Values Cards */}
        <div className="mb-16 grid gap-6 md:grid-cols-3">
          {/* Transparency Card */}
          <div className="rounded-3xl border-2 p-6">
            <div className="mb-6 ">
              <div className="relative h-20 w-20 overflow-hidden rounded-full border-2 border-gray-700">
                <Image src="/assets/images/user-4.png" alt="Transparency avatar" fill className="object-cover" />
              </div>
            </div>
            <h3 className="mb-4 text-centerr text-xl font-semibold">Transparence</h3>
            <p className=" text-md ">
              Notre équipe vous garantit un accès permanent à toutes les étapes clés de vos transactions immobilières.
            </p>
          </div>

          {/* Confidentiality Card */}
          <div className="rounded-3xl border-2  p-6">
            <div className="mb-6 ">
              <div className="relative h-20 w-20 overflow-hidden rounded-full border-2 border-gray-700">
                <Image
                  src="/assets/images/user-3.png"
                  alt="Confidentiality avatar"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <h3 className="mb-4  text-xl font-semibold">Confidentialité</h3>
            <p className=" text-md">
              Parce que la discrétion est la valeur essentielle au cœur de notre métier, confiez nous en toute sérénité
              vos projets.
            </p>
          </div>

          {/* Availability Card */}
          <div className="rounded-3xl border-2 p-6">
            <div className="mb-6">
              <div className="relative h-20 w-20 overflow-hidden rounded-full border-2 border-gray-700">
                <Image src="/assets/images/user-2.png" alt="Availability avatar" fill className="object-cover" />
              </div>
            </div>
            <h3 className="mb-4 text-xl font-semibold">Disponibilité & réactivité</h3>
            <p className="text-sm">
              Une équipe passionnée qui vous assure une prise en charge immédiate et une relation clientèle privilégiée.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className=" rounded-3xl border-2  p-8 md:p-12">
          <h3 className="mb-8 text-center text-xl font-medium">Le bien qui correspond à votre demande</h3>

          <div className="grid gap-8 md:grid-cols-2 pt-16">
            {/* Form Fields */}
            <div>
            <div className="grid grid-cols-2 gap-6">
              <div className="grid gap-4 ">
                <label className="text-sm font-medium">Type de la demande</label>
                <Select  >
                  <SelectTrigger className="border-gray-800 bg-black text-white">
                    <SelectValue placeholder="Sélectionnez" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="achat">Achat</SelectItem>
                    <SelectItem value="location">Location</SelectItem>
                    <SelectItem value="investissement">Investissement</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-4">
                <label className="text-sm font-medium">Emplacement</label>
                <Input
                  placeholder="Écrivez la zone"
                  className="border-gray-800 bg-black text-white placeholder:text-gray-500"
                />
              </div>

              <div className="grid gap-4">
                <label className="text-sm font-medium">Superficie (m²)</label>
                <Input
                  placeholder="Écrivez la superficie"
                  className="border-gray-800 bg-black text-white placeholder:text-gray-500"
                />
              </div>

              <div className="grid gap-4">
                <label className="text-sm font-medium">Nombre de pièces</label>
                <div className="flex items-center">
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-gray-800 bg-black text-white hover:bg-gray-900"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <div className="flex-1 text-center">01</div>
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-gray-800 bg-black text-white hover:bg-gray-900"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="grid gap-4">
                <label className="text-sm font-medium">Budget min</label>
                <Input
                  placeholder="Écrivez la somme"
                  className="border-gray-800 bg-black text-white placeholder:text-gray-500"
                />
              </div>

              <div className="grid gap-4">
                <label className="text-sm font-medium">Budget max</label>
                <Input
                  placeholder="Écrivez la somme"
                  className="border-gray-800 bg-black text-white placeholder:text-gray-500"
                />
              </div>

              <div className="grid gap-4">
                <label className="text-sm font-medium">Identité</label>
                <Select>
                  <SelectTrigger className="border-gray-800 bg-black text-white">
                    <SelectValue placeholder="Genre" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="monsieur">Monsieur</SelectItem>
                    <SelectItem value="madame">Madame</SelectItem>
                    <SelectItem value="autre">Autre</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Input
                placeholder="Votre nom"
                className="border-gray-800 bg-black text-white placeholder:text-gray-500"
              />

              <Input
                placeholder="Votre prénom"
                className="border-gray-800 bg-black text-white placeholder:text-gray-500"
              />

              <Input
                placeholder="Votre email"
                type="email"
                className="border-gray-800 bg-black text-white placeholder:text-gray-500"
              />

              <Input
                placeholder="Votre numéro"
                type="tel"
                className="border-gray-800 bg-black text-white placeholder:text-gray-500"
              />
{/* 
              <div className="grid gap-4">
                <label className="text-sm font-medium">Besoin</label>
                <Select>
                  <SelectTrigger className="border-gray-800 bg-black text-white">
                    <SelectValue placeholder="Sélectionnez le type de bien" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="appartement">Appartement</SelectItem>
                    <SelectItem value="maison">Maison</SelectItem>
                    <SelectItem value="villa">Villa</SelectItem>
                    <SelectItem value="terrain">Terrain</SelectItem>
                  </SelectContent>
                </Select>
              </div> */}

            </div>
            <Button className="mt-4 w-full rounded-2xl bg-white text-black hover:bg-white/90">Soumettre ma demande</Button>

            </div>
          

            {/* Image */}
            <div className="hidden md:block">
             
               <div className="relative flex justify-center items-center w-full px-4 lg:p-0">
                         {/* Image du bas, décalée à gauche */}
                              <div className="hidden lg:block lg:absolute  w-[90%] h-full  rounded-3xl iinset-0 top-[-40px] z-0">
                               <Image
                               className="rounded-3xl"
                                 src="https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                 alt="Image de fond"
                                 fill
                                 style={{ objectFit: 'cover' }}
                                 sizes="(max-width: 640px) 100vw, 25vw"
                               />
                             </div>
             
                             {/* Image du haut */}
                             <div className="relative z-10 w-full hh-full h-[500px] ">
                               <Image
                               className="rounded-3xl lg:rounded-s-3xl"
                                 src="https://images.unsplash.com/photo-1464146072230-91cabc968266?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                 alt="Image superposée"
                                 fill
                                 style={{ objectFit: 'cover' }}
                                 sizes="(max-width: 640px) 100vw, 25vw"
                               />
                             </div>
                       </div>



              {/* <div className="relative h-full w-full overflow-hidden rounded-2xl">
                <Image src="/assets/images/illustrations/page-accueil/Rectangle32.png" alt="Luxury bedroom" fill className="object-cover" />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

