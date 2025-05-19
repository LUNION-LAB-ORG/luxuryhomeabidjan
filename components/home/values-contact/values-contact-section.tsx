import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function ValuesContactSection() {
  return (
    <section className="bg-white  py-12 md:py-16 text-white  px-2 md:px-6">
      <div className="bg-black container mx-auto py-10 px-4 md:px-16 rounded-2xl">
        {/* Heading */}
        <h2 className="w-fit mbb-16 text-center text-xl font-bold leading-tight llg:mb-10 text-[24px] md:text-[30px] lg:text-[36px] ">
         LUXURY HOME ABIDJAN,
        </h2>

        <h3 className="font-bold mb-8 lg:mb-10 text-[20px] md:text-[24px] lg:text-[28px] ">
          les clés de chez vous sont chez nous.
        </h3>
        <p className="font-bold mb-8 lg:mb-10 text-[20px] md:text-[24px] lg:text-[28px] ">
          Mettez-nous en relation avec votre projet immobilier
        </p>

        <div className="flex flex-col lg:flex-row gap-4">
          
        {/* Contact Form */}
        <div className="flex-1  rrounded-3xl bborder-2  p-8 md:p-12">
          {/* <h3 className="mb-8 text-center text-xl font-medium">Le bien qui correspond à votre demande</h3> */}
          <div className="flex-1 pt-16">
            {/* Form Fields */}
            <div>
            <div className=" grid grid-cols-2 gap-6">
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
          </div>  
        </div>


          {/* Values Cards */}
          <div className="max-w-[550px] flex flex-col gap-6">
            {/* Transparency Card */}
            <div className="flex gap-4 rounded-3xl h-fit border-2 p-6">
              <div className="mb-6 ">
                <div className="relative h-20 w-20 overflow-hidden rounded-full border-2 border-gray-700">
                  <Image src="/assets/images/user-4.png" alt="Transparency avatar" fill className="object-cover" />
                </div>
              </div>
              <div>
                    <h3 className="mb-4 text-centerr text-xl font-semibold">Transparence</h3>
              <p className=" text-md ">
                Notre équipe vous garantit un accès permanent à toutes les étapes clés de vos transactions immobilières.
              </p>

              </div>
          
            </div>

            {/* Confidentiality Card */}

             <div className="flex gap-4 rounded-3xl h-fit border-2 p-6">
              <div className="mb-6 ">
                <div className="relative h-20 w-20 overflow-hidden rounded-full border-2 border-gray-700">
                  <Image src="/assets/images/user-4.png" alt="Transparency avatar" fill className="object-cover" />
                </div>
              </div>
              <div>
                    <h3 className="mb-4 text-centerr text-xl font-semibold">Confidentialité</h3>
              <p className=" text-md ">
               Parce que la discrétion est la valeur essentielle au cœur de notre métier, confiez nous en toute sérénité
                vos projets.              </p>

              </div>
          
            </div>

            {/* Availability Card */}
               <div className="flex gap-4 rounded-3xl h-fit border-2 p-6">
              <div className="mb-6 ">
                <div className="relative h-20 w-20 overflow-hidden rounded-full border-2 border-gray-700">
                  <Image src="/assets/images/user-4.png" alt="Transparency avatar" fill className="object-cover" />
                </div>
              </div>
              <div>
                    <h3 className="mb-4 text-centerr text-xl font-semibold">Disponibilité & réactivité</h3>
              <p className=" text-md ">
                             Une équipe passionnée qui vous assure une prise en charge immédiate et une relation clientèle privilégiée.
            </p>

              </div>
          
            </div>

               {/* Availability Card */}
               <div className="flex gap-4 rounded-3xl h-fit border-2 p-6">
              <div className="mb-6 ">
                <div className="relative h-20 w-20 overflow-hidden rounded-full border-2 border-gray-700">
                  <Image src="/assets/images/user-4.png" alt="Transparency avatar" fill className="object-cover" />
                </div>
              </div>
              <div>
                    <h3 className="mb-4 text-centerr text-xl font-semibold">Disponibilité & réactivité</h3>
              <p className=" text-md ">
                             Une équipe passionnée qui vous assure une prise en charge immédiate et une relation clientèle privilégiée.
            </p>

              </div>
          
            </div>


          </div>

        </div>

      </div>
    </section>
  )
}

