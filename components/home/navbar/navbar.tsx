"use client"

import * as React from "react"
import Link from "next/link"
import { CircleUserRound, Menu } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"

const navItems = [
  { name: "Accueil", href: "/" },
  { name: "Qui sommes-nous", href: "/qui-sommes-nous" },
  { name: "Programmes", href: "/programmes" },
  { name: "Services", href: "/services" },
  // { name: "Contacts", href: "/contacts" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200",
        isScrolled ? "bg-white shadow-sm" : "bg-white",
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-2 lg:px-6">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2">
          <Image
                src="/assets/images/icone-1.png" // Remplace par le chemin de ton image
                alt="Avatar"
                width={24} // Ajuste la taille
                height={24}
                className="h-6 w-6"
            />
            <span className="hidden font-bold sm:inline-block">LUXURY HOME ABIDJAN</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex md:items-center md:gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Assistance Button */}
        <Link href="/assistance" className="hidden lg:flex md:items-center md:gap-2 hover:opacity-80 transition">
          <Image
            src="/assets/images/user.png"
            alt="Avatar"
            width={24}
            height={24}
            className="h-6 w-6"
          />
          <span className="text-sm font-medium ">Assistance M. LHA</span>
        </Link>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
          <SheetHeader>
          <SheetTitle>
            
          </SheetTitle>
          <SheetDescription>
          <Link href="/assistance" className="flex items-center gap-2">
            <Image
                src="/assets/images/user.png" // Remplace par le chemin de ton image
                alt="Avatar"
                width={24} // Ajuste la taille
                height={24}
                className="h-6 w-6"
            />
            <span className="text-sm font-medium ">Assistance M. LHA</span>
            </Link>
          </SheetDescription>
        </SheetHeader>

            <div className="px-4 grid gap-6 py-6">
          
              <div className="grid gap-3">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-sm font-medium transition-colors hover:text-primary"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

