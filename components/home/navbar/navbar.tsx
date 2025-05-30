"use client";

import * as React from "react";
import Link from "next/link";
import {
  Briefcase,
  Building,
  Home,
  Menu,
  Phone,
  Users,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Accueil", href: "/", icon: <Home size={18} /> },
  {
    name: "Qui sommes-nous",
    href: "/qui-sommes-nous",
    icon: <Users size={18} />,
  },
  { name: "Programmes", href: "/programmes", icon: <Building size={18} /> },
  { name: "Services", href: "/services", icon: <Briefcase size={18} /> },
  { name: "Contacts", href: "/contacter", icon: <Phone size={18} /> },
];
export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200",
        isScrolled ? "backdrop-blur-md bg-white/80 shadow-sm" : "bg-white"
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-6">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/assets/images/icone-1.png" // Remplace par le chemin de ton image
              alt="Avatar"
              width={24} // Ajuste la taille
              height={24}
              className="size-8 w-8 sm:size-6"
            />
            <span className="hidden font-bold sm:inline-block">
              LUXURY HOME ABIDJAN
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex md:items-center md:gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm font-semibold text-muted-foreground transition-colors hover:text-primary",
                pathname === item.href && "text-primary"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Assistance Button */}
        <Link
          href="/assistance"
          className="hidden border bg-white border-gray-200 rounded-xl shadow-md py-1 px-4 lg:flex justify-center items-center gap-2 hover:opacity-80 transition"
        >
          <Image
            src="/assets/images/user.png"
            alt="Avatar"
            width={24}
            height={24}
            className="size-10"
          />
          <span className="text-sm font-bold text-blue-500">Assistance M. LHA</span>
        </Link>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden rounded-full hover:bg-gray-100 transition-colors duration-200"
            >
              <Menu className="size-8" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>

          <SheetContent
            side="right"
            className="w-72 sm:w-80 border-l border-gray-200"
          >
            <SheetHeader className="space-y-4 pb-4 border-b border-gray-100">
              <SheetTitle className="text-xl font-bold">
                Votre Espace Immobilier
              </SheetTitle>
              <SheetDescription className="pb-2">
                <SheetClose className="w-full" asChild>
                  <Link
                    href="/assistance"
                    className="flex items-center gap-3 p-1 border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 bg-white"
                  >
                    <div className="rounded-full p-1">
                      <Image
                        src="/assets/images/user.png"
                        alt="Avatar"
                        width={24}
                        height={24}
                        className="size-10"
                      />
                    </div>
                    <span className="text-sm font-bold text-blue-600">
                      Assistance M. LHA
                    </span>
                  </Link>
                </SheetClose>
              </SheetDescription>
            </SheetHeader>

            <nav className="mt-6 px-2">
              <div className="space-y-2">
                {navItems.map((item) => (
                  <SheetClose asChild key={item.name}>
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center px-4 py-3 rounded-lg font-medium transition-all duration-200 text-muted-foreground hover:bg-black/10 hover:text-black hover:pl-5",
                        pathname === item.href && "text-primary"
                      )}
                    >
                      {item.icon && (
                        <span className="mr-3 text-gray-500">{item.icon}</span>
                      )}
                      {item.name}
                    </Link>
                  </SheetClose>
                ))}
              </div>
            </nav>

            {/* <div className="absolute bottom-4 left-0 right-0 px-6">
              <Button
                variant="outline"
                className="w-full justify-center gap-2 border-gray-200"
                onClick={() => console.log("Contact support")}
              >
                <Phone className="size-4" />
                <span>Nous contacter</span>
              </Button>
            </div> */}
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
