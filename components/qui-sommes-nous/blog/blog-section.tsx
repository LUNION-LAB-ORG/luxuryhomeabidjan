"use client"

// import { useState } from "react"
import Image from "next/image"
// import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

type BlogPost = {
    id: number
    title: string
    date: string
    image: string
    url: string
  }

export default function BlogSection() {
//   const [currentPage, setCurrentPage] = useState(1)


  

  const blogPosts: { residences: BlogPost[]; conseils: BlogPost[]; gestion: BlogPost[] } = {
    residences: [
      {
        id: 1,
        title: "Principes du design d'intérieur",
        date: "29 Déc 2024",
        image: "/assets/images/illustrations/qui-sommes-nous/blog1.png",
        url: "/blog/principes-design-interieur",
      },
      {
        id: 2,
        title: "Les essentiels du design d'intérieur",
        date: "29 Déc 2024",
        image: "/assets/images/illustrations/qui-sommes-nous/blog2.png",
        url: "/blog/essentiels-design-interieur",
      },
      {
        id: 3,
        title: "Principes du design d'intérieur",
        date: "29 Déc 2024",
        image: "/assets/images/illustrations/qui-sommes-nous/blog3.png",
        url: "/blog/principes-design-interieur-2",
      },
      {
        id: 4,
        title: "Principes du design d'intérieur",
        date: "29 Déc 2024",
        image: "/assets/images/illustrations/qui-sommes-nous/blog4.png",
        url: "/blog/principes-design-interieur-3",
      },
    ],
    conseils: [
      {
        id: 1,
        title: "Comment choisir son bien immobilier",
        date: "28 Déc 2024",
        image: "/assets/images/illustrations/qui-sommes-nous/blog1.png",
        url: "/blog/choisir-bien-immobilier",
      },
      {
        id: 2,
        title: "Investir à Abidjan: Guide complet",
        date: "27 Déc 2024",
        image: "/assets/images/illustrations/qui-sommes-nous/blog2.png",
        url: "/blog/investir-abidjan",
      },
    ],
    gestion: [
      {
        id: 1,
        title: "Gérer efficacement sa propriété",
        date: "26 Déc 2024",
        image: "/assets/images/illustrations/qui-sommes-nous/blog1.png",
        url: "/blog/gerer-propriete",
      },
      {
        id: 2,
        title: "Maximiser le rendement locatif",
        date: "25 Déc 2024",
        image: "/assets/images/illustrations/qui-sommes-nous/blog2.png",
        url: "/blog/rendement-locatif",
      },
    ],
  }

  return (
    <section className="py-12 container mx-auto px-2 md:px-4 lg:px-16">
      <h2 className="text-3xl font-bold text-center mb-8">Blog</h2>

      <Tabs defaultValue="residences" className=" w-full overflow-hidden">
        <TabsList className=" cursor-pointer !shadow-none bg-white lg:gap-46 mx-auto  mb-8">
          <TabsTrigger
            value="residences"
            className=" !stroke-stone-500  !text-[14px] !lg:text-[18px] cursor-pointer   ttext-gray-700 ring-0 shadow-none border-b-primary bborder-b-2 ddata-[state=active]:border-b-2 ddata-[state=active]:border-b-primary rounded-none"
          >
          Résidences
           
           
          </TabsTrigger>
          <TabsTrigger
            value="conseils"
            className="stroke-stone-500 !text-[14px] !lg:text-[18px]  cursor-pointer ml-4 text-xl text-gray-700 ring-0 shadow-none border-b-primary ddata-[state=active]:border-b-2 ddata-[state=active]:border-primary rounded-none"
          >
            Conseils
          </TabsTrigger>
          <TabsTrigger
            value="gestion"
            className="!stroke-stone-500 !text-[14px] !lg:text-[18px]  cursor-pointer ml-4 text-xl text-gray-700 ring-0 shadow-none border-b-primary ddata-[state=active]:border-b-2 ddata-[state=active]:border-primary rounded-none"
          >
            Gestion immobilière
          </TabsTrigger>
        </TabsList>

        <TabsContent value="residences">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {blogPosts.residences.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="conseils">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {blogPosts.conseils.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="gestion">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {blogPosts.gestion.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="flex justify-center mt-8">
        <div className="flex bg-gray-400 rounded-4xl gap-2">
          <Button
          // variant={currentPage === 2 ? "default" : "outline"}
          variant="default"
            size="sm"
            className="rounded-4xl w-8 h-8 p-4 bg-black"
            // onClick={() => setCurrentPage(1)}
          >
            1
          </Button>
          <Button
            // variant={currentPage === 2 ? "default" : "outline"}
            variant="default"
            size="sm"
            className="rounded-4xl w-8 h-8 p-4 bg-gray-400"
            // onClick={() => setCurrentPage(2)}
          >
            2
          </Button>
        </div>
      </div>
    </section>
  )
}

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <div className="overflow-hidden rounded-3xl group">
      <div className="relative h-[400px] ">
        <Image src={post.image} alt={post.title} fill className="object-cover" />
        <div className="absolute top-2 right-2 bg-white/80 p-1.5 rounded-full opacity-80 group-hover:opacity-100 transition-opacity">
          <ExternalLink size={16} />
        </div>
        <div className="absolute left-0 bottom-0 p-4">
        <p className="text-sm text-white">{post.date}</p>
        <h3 className="font-semibold text-white mt-1">{post.title}</h3>
        </div>
      </div>
      
    </div>
  )
}

