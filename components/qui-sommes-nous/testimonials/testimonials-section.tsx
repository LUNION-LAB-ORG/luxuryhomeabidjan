"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Facebook, Quote } from "lucide-react"

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      id: 1,
      quote:
        "Tout se passe bien pour l'instant. L'appartement est super! Le personnel est sympa... Je suis suis totalement satisfait",
      author: "Username",
      platform: "facebook",
    },
    {
      id: 2,
      quote: "Service exceptionnel et propriété magnifique. Je recommande vivement Luxury Home Abidjan!",
      author: "Client2",
      platform: "facebook",
    },
    {
      id: 3,
      quote: "Une expérience immobilière sans stress. L'équipe a été très professionnelle du début à la fin.",
      author: "Client3",
      platform: "facebook",
    },
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  return (
    <section className="px-2 lg:px-26">
      <div className="pt-10 lg:pt-16 lg:py-4 lg:pl-14 gap-4 lg:gap-46 container mx-auto my-6 flex flex-col lg:flex-row items-center border border-gray-400 rounded-4xl shadow-sm">
      <h2 className="lg:hidden pb-6 text-2xl font-bold text-start">Ce que disent nos clients</h2>

      <div className="flex items-center gap-4 ppx-10">
            <div className="flex -space-x-2">
              <Avatar className="border-2 border-background">
                <AvatarImage src="/assets/images/illustrations/qui-sommes-nous/user1.png" alt="Avatar" />
                <AvatarFallback>A1</AvatarFallback>
              </Avatar>
              <Avatar className="border-2 border-background">
                <AvatarImage src="/assets/images/illustrations/qui-sommes-nous/user2.png" alt="Avatar" />
                <AvatarFallback>A2</AvatarFallback>
              </Avatar>
              <Avatar className="border-2 border-background">
                <AvatarImage src="/assets/images/illustrations/qui-sommes-nous/user3.png" alt="Avatar" />
                <AvatarFallback>A3</AvatarFallback>
              </Avatar>
              <Avatar className="border-2 border-background">
                <AvatarImage src="/assets/images/illustrations/qui-sommes-nous/user4.png" alt="Avatar" />
                <AvatarFallback>A4</AvatarFallback>
              </Avatar>
            </div>
            <span className="font-bold text-md">+ 10 commentaires</span>
        </div>
      <Card className="max-w-2xl border-none ring-0 shadow-none">
         <h2 className="hidden lg:block pl-4 text-2xl font-bold text-start">Ce que disent nos clients</h2>
        
        <CardContent className="space-y-8 ">
          <div className="flex gap-4 items-start lg:pb-8">
            <Quote className="text-muted-foreground shrink-0 mt-1" size={24} />
            <p className="text-lg font-semibold text-gray-500">{testimonials[currentTestimonial].quote}</p>
          </div>

          <div className="border-t border-gray-400 pt-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="bg-blue-600 rounded-full p-1.5">
                <Facebook size={16} className="text-white" />
              </div>
              <span>{testimonials[currentTestimonial].author}</span>
            </div>

            <div className="flex gap-2">
              <Button variant="outline" size="icon" className="rounded-full h-8 w-8" onClick={prevTestimonial}>
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Previous testimonial</span>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full h-8 w-8" onClick={nextTestimonial}>
                <ChevronRight className="h-4 w-4" />
                <span className="sr-only">Next testimonial</span>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      </div>
         
    </section>
  )
}

