import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Music,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-[#0a0e1f] text-white py-12 px-4 md:px-8">
      <div className="container mx-auto">
        {/* Top section */}
        <div className="max-w-6xl gap-0 lg:px-8 mx-auto grid grid-cols-1 lg:grid-cols-2  text-[12px] ">
          {/* Left column */}
          <div className="space-y-8 ">
            {/* Logo and brand */}
            <div className="flex items-center gap-2">
              <Image
                src="/assets/images/icone.png"
                alt="Luxury Home Abidjan Logo"
                width={40}
                height={40}
              />
              <span className="text-[16px] font-semibold">
                LUXURY HOME ABIDJAN
              </span>
            </div>

            {/* Contact info */}

            {/* mobile */}
            <div className="md:hidden sspace-y-4 flex justify-center md:justify-start flex-wrap gap-2 ">
              {/* div1 */}
              <div>
                <div className="mb-2 w-fit px-5 p-2 py-3 flex items-center gap-3 border rounded-full">
                  <div className="flex items-center justify-center">
                    <Phone size={16} />
                  </div>
                  <span>(+225) 07 49 87 17 13</span>
                </div>

                <div className="w-fit px-5  p-2 py-3 flex items-center gap-3 border rounded-full ww-80">
                  <div className="  flex items-center justify-center">
                    <Phone size={16} />
                  </div>
                  <span>(+225) 27 22 23 83 80</span>
                </div>
              </div>

              {/* div2 */}
              <div>
                <div className="mb-2 w-fit px-5 p-2 py-3 text-wrap flex items-center gap-3 border rounded-full ww-80">
                  <div className=" flex items-center justify-center">
                    <Mail size={16} />
                  </div>
                  <span>info@luxuryhomeabidjan.com</span>
                </div>

                <div className="w-fit px-5  py-3 flex items-center gap-3 border rounded-full ww-80 p-2">
                  <div className=" rounded-full border border-white/30 flex items-center justify-center">
                    <MapPin size={16} />
                  </div>
                  <span>Cocody Abidjan, Côte d'Ivoire</span>
                </div>
              </div>
            </div>

            {/* lg */}
            <div className="hidden  sspace-y-4 md:flex justify-center md:justify-start flex-wrap gap-2 ">
              <div className="w-fit px-5 p-2 py-3 flex items-center gap-3 border rounded-full">
                <div className="flex items-center justify-center">
                  <Phone size={16} />
                </div>
                <span>(+225) 07 49 87 17 13</span>
              </div>

              <div className="w-fit px-5 p-2 py-3 text-wrap flex items-center gap-3 border rounded-full ww-80">
                <div className=" flex items-center justify-center">
                  <Mail size={16} />
                </div>
                <span>info@luxuryhomeabidjan.com</span>
              </div>

              <div className="w-fit px-5  p-2 py-3 flex items-center gap-3 border rounded-full ww-80">
                <div className="  flex items-center justify-center">
                  <Phone size={16} />
                </div>
                <span>(+225) 27 22 23 83 80</span>
              </div>

              <div className="w-fit px-5  py-3 flex items-center gap-3 border rounded-full ww-80 p-2">
                <div className=" rounded-full border border-white/30 flex items-center justify-center">
                  <MapPin size={16} />
                </div>
                <span>Cocody Abidjan, Côte d'Ivoire</span>
              </div>
            </div>
          </div>

          {/* Right column - Newsletter */}
          <div className="lg:ml-auto pt-8 lg:pt-0 lg:max-w-sm w-full ">
            <h3 className="text-2xl font-semibold mb-6">Newsletter</h3>
            <div className="space-y-4">
              <Input
                type="email"
                placeholder="Entrez votre adresse mail"
                className="w-full px-4 py-3 rounded-4xl bg-[#1a1f36] border-0 text-white"
              />
              <Button className="w-full bg-white text-black font-medium py-3 rounded-4xl hover:bg-gray-200 transition-colors">
                Envoyer
              </Button>
            </div>
          </div>
        </div>

        {/* Office hours */}
        <div className="text-center text-[12px] my-10">
          <p>Accueil Agence : Lundi au Vendredi de 8h à 18h.</p>
        </div>

        {/* Navigation and social links */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-b border-white/10 py-6 my-6">
          {/* Navigation */}
          <div className="flex gap-8 mb-6 md:mb-0">
            <Link
              href="/nos-biens"
              className="hover:text-gray-300 transition-colors"
            >
              Nos biens
            </Link>
            <Link
              href="/recrutement"
              className="hover:text-gray-300 transition-colors"
            >
              Recrutement
            </Link>
            <Link
              href="/proprietaires"
              className="hover:text-gray-300 transition-colors"
            >
              Propriétaires
            </Link>
          </div>

          {/* Social icons */}
          <div className="flex gap-6">
            <Link href="#" className="hover:text-gray-300 transition-colors">
              <Facebook size={20} />
            </Link>
            <Link href="#" className="hover:text-gray-300 transition-colors">
              <Twitter size={20} />
            </Link>
            <Link href="#" className="hover:text-gray-300 transition-colors">
              <Instagram size={20} />
            </Link>
            <Link href="#" className="hover:text-gray-300 transition-colors">
              <Linkedin size={20} />
            </Link>
            <Link href="#" className="hover:text-gray-300 transition-colors">
              <Music size={20} />
            </Link>
          </div>
        </div>

        {/* Copyright and legal */}
        <div className="flex flex-col md:flex-row justify-between text-sm text-gray-400">
          <div>© 2025 Lunion-Lab.com Tous droits réservés.</div>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link
              href="/conditions"
              className="hover:text-white transition-colors"
            >
              Conditions générales
            </Link>
            <span>•</span>
            <Link
              href="/confidentialite"
              className="hover:text-white transition-colors"
            >
              Avis de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
