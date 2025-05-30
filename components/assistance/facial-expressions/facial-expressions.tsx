"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const facialExpressions = [
  { id: 1, name: "Thumbs Up", src: "/assets/images/illustrations/assistance/1.png" },
  { id: 2, name: "Serious", src: "/assets/images/illustrations/assistance/2.png" },
  { id: 3, name: "Waving", src: "/assets/images/illustrations/assistance/3.png" },
  { id: 4, name: "Thinking", src: "/assets/images/illustrations/assistance/4.png" },
  { id: 5, name: "Star Eyes", src: "/assets/images/illustrations/assistance/5.png" },
  { id: 6, name: "Neutral", src: "/assets/images/illustrations/assistance/6.png" },
  { id: 7, name: "Peace", src: "/assets/images/illustrations/assistance/7.png" },
  { id: 8, name: "Happy", src: "/assets/images/illustrations/assistance/8.png" },
  { id: 9, name: "Angry", src: "/assets/images/illustrations/assistance/9.png" },
  { id: 10, name: "Party", src: "/assets/images/illustrations/assistance/10.png" },
  { id: 11, name: "Cool", src: "/assets/images/illustrations/assistance/11.png" },
  { id: 12, name: "Glasses", src: "/assets/images/illustrations/assistance/12.png" },
  { id: 13, name: "Thumbs Up 2", src: "/assets/images/illustrations/assistance/13.png" },
  { id: 14, name: "Smirk", src: "/assets/images/illustrations/assistance/14.png" },
  { id: 15, name: "Smile", src: "/assets/images/illustrations/assistance/15.png" },
  { id: 16, name: "Double Thumbs", src: "/assets/images/illustrations/assistance/16.png" },
  { id: 17, name: "Pointing", src: "/assets/images/illustrations/assistance/17.png" },
  { id: 18, name: "Serious 2", src: "/assets/images/illustrations/assistance/18.png" },
  { id: 19, name: "Calm", src: "/assets/images/illustrations/assistance/19.png" },
  { id: 20, name: "Thumbs Up 3", src: "/assets/images/illustrations/assistance/20.png" },
  { id: 21, name: "Focused", src: "/assets/images/illustrations/assistance/21.png" },
  { id: 22, name: "Masked", src: "/assets/images/illustrations/assistance/22.png" },
  { id: 23, name: "Waving 2", src: "/assets/images/illustrations/assistance/23.png" },
  { id: 24, name: "Pointing 2", src: "/assets/images/illustrations/assistance/24.png" },
  { id: 25, name: "Smile 2", src: "/assets/images/illustrations/assistance/25.png" },
  { id: 26, name: "Smile 3", src: "/assets/images/illustrations/assistance/26.png" },
]

export default function FacialExpressions() {
  return (
    <div className="max-w-6xl mx-auto p-6 bg-white">
      <h2 className="text-2xl font-bold text-center mb-8">Expressions du visage</h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-9 gap-4">
        {facialExpressions.map((expression) => (
          <div key={expression.id} className="flex flex-col items-center">
            <Avatar className="w-16 h-16">
              <AvatarImage src={expression.src} alt={expression.name} />
              <AvatarFallback>{expression.name.substring(0, 2)}</AvatarFallback>
            </Avatar>
          </div>
        ))}
      </div>
    </div>
  )
}
