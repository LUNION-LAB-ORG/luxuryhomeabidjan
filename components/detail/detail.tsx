'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Details() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    '/images/villa-main.jpg', // Remplacez par vos images réelles
    '/images/villa-living.jpg',
    '/images/villa-bedroom.jpg',
    '/images/villa-kitchen.jpg',
  ];

  const features = [
    { icon: '🏠', label: '3 Chambres' },
    { icon: '🛁', label: '2 salles de bain' },
    { icon: '🚗', label: '2 Garages' },
    { icon: '📏', label: '150 m²' },
  ];

  const amenities = [
    { category: 'Interior Details', items: ['Hardwood floors', 'Luxury'] },
    { category: 'Outdoor Details', items: ['Deck yard', 'Garage Attached', 'Pool'] },
    { category: 'Utilities', items: ['Cable TV', 'Heating', 'Ventilation'] },
    { category: 'Other Features', items: ['Close Accessible', 'Fireplace', 'Washer and dryer'] },
    { category: '', items: ['Gym', 'Media Room', 'Basketball court', 'Hot tub'] },
    { category: '', items: ['Electricity', 'Natural Gas', 'Water'] },
    { category: '', items: ['Elevator', 'Smoke detectors', 'WiFi'] },
  ];

  return (
    <div className="min-h-screen">
      {/* Header / Navbar */}
      <header className="navbar">
        <div className="flex items-center space-x-4">
          <Image src="/logo.svg" alt="Luxury Home Abidjan" width={30} height={30} />
          <span className="font-bold text-sm">LUXURY HOME ABIDJAN</span>
        </div>
        <nav className="nav-links">
          <a href="#" className="text-blue-600 font-medium">Accueil</a>
          <a href="#">Qui sommes-nous</a>
          <a href="#">Nos offres</a>
          <a href="#">Programmes</a>
          <a href="#">Services</a>
          <a href="#">Contacts</a>
        </nav>
        <div className="flex items-center space-x-2">
          <Image src="/avatar.png" alt="User" width={24} height={24} className="rounded-full" />
          <span className="text-xs">Assistance M. LIA</span>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-6 py-8">
        <div className="flex justify-between items-start mb-4">
          <h1 className="text-2xl font-bold">Villa CANDEL</h1>
          <p className="text-sm text-gray-600 max-w-md">
            Luxury Home Abidjan est un cabinet d'expertise et de conseil immobilier qui vous accompagne dans l'évaluation et l'élaboration de vos projets.
          </p>
        </div>
        <div className="relative rounded-xl overflow-hidden h-[500px] bg-gray-200">
          <Image
            src={slides[currentSlide]}
            alt="Villa Candel"
            fill
            className="object-cover"
          />
          <button
            onClick={() => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/50 p-2 rounded-full"
          >
            ❮
          </button>
          <button
            onClick={() => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/50 p-2 rounded-full"
          >
            ❯
          </button>
        </div>
      </section>

      {/* Découvrez la Villa CANDEL */}
      <section className="px-6 py-8">
        <h2 className="text-xl font-bold mb-6">Découvrez la Villa CANDEL</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {slides.map((src, index) => (
            <div key={index} className="rounded-xl overflow-hidden h-[300px] bg-gray-200">
              <Image src={src} alt={`Vue ${index + 1}`} fill className="object-cover" />
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-4 space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-black' : 'bg-gray-300'}`}
            />
          ))}
        </div>
      </section>

      {/* A propos */}
      <section className="px-6 py-8">
        <h2 className="text-xl font-bold mb-6">A propos</h2>
        
        {/* Aperçu */}
        <div className="bg-white rounded-xl p-4 shadow-sm mb-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold">Aperçu</h3>
            <div className="text-xs text-gray-500">Mis à jour le 4 octobre 2021</div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
            {features.map((feat, idx) => (
              <div key={idx} className="flex items-center">
                <span className="icon">{feat.icon}</span>
                <span>{feat.label}</span>
              </div>
            ))}
          </div>
          <div className="flex items-start space-x-4">
            <div className="flex-1">
              <p className="text-sm text-gray-700 mb-4">
                Profitant d'un emplacement idéal au cœur de la Riviera Golf Beverly Hills à quelques minutes seulement des écoles françaises, la villa duplex BAILL neuve et de haut standing présente de très belles prestations. Le lumineux salon donne sur une terrasse et se place au carénage d'Abidjan. La rampe des escaliers en verre design, les trois chambres spacieuses et la cuisine moderne marbrée font de cette villa un espace de vie agréable.
              </p>
              <div className="text-xl font-bold mb-2">500.000 FCFA par nuitée</div>
            </div>
            <div className="hidden md:block">
              <Image src={slides[0]} alt="Villa preview" width={150} height={150} className="rounded-lg object-cover" />
            </div>
          </div>
          <button className="btn-reserver w-full md:w-auto mt-4">Réserver</button>
        </div>

        {/* Commodités */}
        <div className="bg-gray-50 rounded-xl p-6">
          <h3 className="font-semibold mb-4">Commodités</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {amenities.map((category, idx) => (
              <div key={idx} className="space-y-2">
                {category.category && <h4 className="text-sm font-medium text-gray-500">{category.category}</h4>}
                <ul className="space-y-1">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-center text-sm">
                      <span className="icon">✔️</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer mt-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between mb-8">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center space-x-2 mb-4">
                <Image src="/logo.svg" alt="Luxury Home Abidjan" width={30} height={30} />
                <span className="font-bold text-sm">LUXURY HOME ABIDJAN</span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="icon">📞</span>
                  <span>+(225) 07 48 87 17 13</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="icon">📧</span>
                  <span>info@luxuryhomeabidjan.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="icon">📱</span>
                  <span>+(225) 07 00 00 00 00</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="icon">📍</span>
                  <span>Cocody Abidjan, Côte d'Ivoire</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Newsletter</h4>
              <form className="flex flex-col space-y-2">
                <input
                  type="email"
                  placeholder="Entrez votre adresse mail"
                  className="px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-400"
                />
                <button
                  type="submit"
                  className="bg-white text-black font-medium py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Envoyer
                </button>
              </form>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-xs">
            <div className="mb-4 md:mb-0">
              Accueil Agence : Lundi au Vendredi de 8h à 18h
            </div>
            <div className="flex space-x-4">
              <a href="#">Propriétaires</a>
              <a href="#">Recrutement</a>
              <a href="#">Nos biens</a>
            </div>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#">Facebook</a>
              <a href="#">Twitter</a>
              <a href="#">Instagram</a>
              <a href="#">LinkedIn</a>
            </div>
          </div>
          <div className="mt-6 text-xs text-gray-400 flex justify-between">
            <span>© 2025 Luxury Lab.com Tous droits réservés.</span>
            <span>Conditions générales • Avis de confidentialité</span>
          </div>
        </div>
      </footer>
    </div>
  );
}