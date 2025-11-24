import React from 'react';

const Programmes = () => {
  return (
    <div className="font-sans antialiased">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <div className="text-sm font-medium">Accueil</div>
            <div className="text-sm font-medium">Nos Villas</div>
            <div className="text-sm font-medium">Notre Projet</div>
            <div className="text-sm font-medium">Contact</div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-2-2 1.41-1.41L10 14.17l3.59 3.59L15 16.34l-2-2 1.41-1.41L16 14.17l3.59 3.59L21 16.34l-2-2 1.41-1.41L22 14.17l-3.59-3.59L17 9.17l-2-2 1.41-1.41L18 6.34l-3.59-3.59L13 1.34l-2-2 1.41-1.41L14 0.34l3.59 3.59L19 5.34l2 2 1.41 1.41L24 10.17l-3.59 3.59L19 15.17l-2 2 1.41 1.41L17 20.17l-3.59-3.59L12 15.17l-2 2 1.41 1.41L10 20.17l-3.59-3.59L5 15.17l-2-2 1.41-1.41L6 10.17l3.59 3.59L11 15.17l2 2z"/>
              </svg>
            </div>
            <div className="text-sm font-medium">EN</div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden">
        <img 
          src="https://placehold.co/1920x1080" 
          alt="Project Overview" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center">
            VOUS MÉRITEZ<br />UN HÉRITAGE
          </h1>
          <div className="mt-8">
            <img 
              src="https://placehold.co/200x200" 
              alt="Logo" 
              className="w-20 h-20 mx-auto"
            />
            <p className="text-lg mt-4">Les Résidences<br />MANGROVE</p>
          </div>
        </div>
      </section>

      {/* Villa Candel Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <img 
                src="https://placehold.co/800x600" 
                alt="Villa Candel" 
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-2xl font-bold mb-4">La Villa CANDEL</h2>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/2">
                    <img 
                      src="https://placehold.co/300x200" 
                      alt="Villa Interior" 
                      className="w-full h-auto rounded-lg mb-4"
                    />
                  </div>
                  <div className="md:w-1/2">
                    <h3 className="text-xl font-semibold mb-2">Villa Duplex Haut Standing</h3>
                    <p className="text-sm mb-4">Description of the villa features and amenities.</p>
                    <div className="mb-4">
                      <div className="flex items-center mb-2">
                        <span className="text-sm">Surface: 450m²</span>
                      </div>
                      <div className="flex items-center mb-2">
                        <span className="text-sm">Chambres: 4</span>
                      </div>
                      <div className="flex items-center mb-2">
                        <span className="text-sm">Piscine: Oui</span>
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-red-600 mb-4">€1,200,000</div>
                    <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors">
                      En savoir plus
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Villa Vicennia Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="flex flex-col justify-center">
              <h2 className="text-2xl font-bold mb-4">La Villa VICENNIA</h2>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/2">
                    <h3 className="text-xl font-semibold mb-2">Villa Duplex Haut Standing</h3>
                    <p className="text-sm mb-4">"L'architecture évolutive s'intègre parfaitement au cadre naturel"</p>
                    <div className="mb-4">
                      <div className="flex items-center mb-2">
                        <span className="text-sm">Surface: 420m²</span>
                      </div>
                      <div className="flex items-center mb-2">
                        <span className="text-sm">Chambres: 3</span>
                      </div>
                      <div className="flex items-center mb-2">
                        <span className="text-sm">Piscine: Oui</span>
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-red-600 mb-4">€950,000</div>
                    <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors">
                      En savoir plus
                    </button>
                  </div>
                  <div className="md:w-1/2">
                    <img 
                      src="https://placehold.co/300x200" 
                      alt="Floor Plan" 
                      className="w-full h-auto rounded-lg mb-4"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://placehold.co/800x600" 
                alt="Villa Vicennia" 
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-lg mb-8">
              Nos conseillers en ventes et Sions de luxe mettent à votre disposition une veille permanente pour accompagner propriétaires et investisseurs dans la recherche de biens parfaitement adaptés à leurs besoins.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <img 
                src="https://placehold.co/600x400" 
                alt="Consultation Meeting" 
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div>
              <img 
                src="https://placehold.co/600x400" 
                alt="Team Discussion" 
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                LE LUXE,<br />VOTRE QUOTIDIEN
              </h2>
              <div className="mt-8">
                <img 
                  src="https://placehold.co/100x100" 
                  alt="Logo" 
                  className="w-12 h-12 mx-auto"
                />
              </div>
            </div>
            <div>
              <img 
                src="https://placehold.co/600x400" 
                alt="Luxury Villa" 
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Emplacement</h2>
          <div className="bg-gray-200 rounded-lg h-80 mb-6">
            <img 
              src="https://placehold.co/1200x400" 
              alt="Map" 
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="flex justify-center">
            <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors">
              Voir sur Google Maps
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">INSCRIPTION NEWSLETTER</h3>
              <form className="space-y-4">
                <input 
                  type="email" 
                  placeholder="Votre adresse email" 
                  className="w-full px-4 py-2 bg-gray-800 rounded-md text-white"
                />
                <input 
                  type="text" 
                  placeholder="Nom" 
                  className="w-full px-4 py-2 bg-gray-800 rounded-md text-white"
                />
                <input 
                  type="text" 
                  placeholder="Prénom" 
                  className="w-full px-4 py-2 bg-gray-800 rounded-md text-white"
                />
                <button className="w-full bg-white text-black px-6 py-2 rounded-md hover:bg-gray-200 transition-colors">
                  Envoyer
                </button>
              </form>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Newsletter</h3>
              <p className="mb-4">Recevez nos dernières actualités et offres exclusives.</p>
              <form className="space-y-4">
                <input 
                  type="email" 
                  placeholder="Votre adresse email" 
                  className="w-full px-4 py-2 bg-gray-800 rounded-md text-white"
                />
                <button className="w-full bg-white text-black px-6 py-2 rounded-md hover:bg-gray-200 transition-colors">
                  S'inscrire
                </button>
              </form>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Contact</h3>
              <p className="mb-2">Email: contact@mangrove.com</p>
              <p className="mb-2">Téléphone: +33 1 23 45 67 89</p>
              <p className="mb-4">Adresse: 123 Rue de la Luxe, Paris, France</p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.991 4.367 10.982 10.211 11.854v-8.384H7.078v-3.47h3.064V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.632 23.043 24 18.06 24 12.073z"/>
                  </svg>
                </div>
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 00-1.887-1.887 10 10 0 00-6.867-6.867A10 10 0 009.57 0 10 10 0 000 9.57 10 10 0 004.57 23.953a10 10 0 006.867 6.867 10 10 0 006.867-6.867 10 10 0 001.887-1.887 10 10 0 000-13.714 10 10 0 00-1.887-1.887zM12 21.35l-1.45-1.32C5.4 15.36 6.18 9.72 11.46 7.22l1.32-.61 1.32.61c5.28 2.5 6.06 8.14.91 12.81L12 21.35z"/>
                  </svg>
                </div>
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.55v-5.57c0-1.33-.477-2.243-1.694-2.243-1.218 0-1.694.913-1.694 2.243v5.57h-3.55V9.29h3.55v1.553c.5-.747 1.406-1.203 2.596-1.203 1.756 0 3.098 1.137 3.098 3.278v6.734zM6.093 9.29H2.54v11.164h3.553V9.29zM4.316 0C1.454 0 0 1.454 0 4.316c0 2.863 1.454 4.317 4.316 4.317 2.863 0 4.317-1.454 4.317-4.317C8.633 1.454 7.179 0 4.316 0z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-sm text-gray-400">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div>© 2023 Mangrove Residences. Tous droits réservés.</div>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <div>Mentions légales</div>
                <div>Politique de confidentialité</div>
                <div>Conditions générales</div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Programmes;