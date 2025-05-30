import Image from "next/image";

export default function PropertyCategories() {
  return (
    <div className="px-4 lg:px-18 mx-auto py-6 lg:py-10 bg-white">
      {/* Commercial Residences Banner */}
      <div className="relative w-full h-[250px] mb-12 rounded-3xl overflow-hidden">
        <Image
          src="/assets/images/illustrations/programs/buildings.png"
          alt="Résidences à usage commercial"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h2 className="text-white text-3xl font-medium">
            Résidences à usage commercial
          </h2>
        </div>
      </div>

      {/* Categories with hover effect */}
      <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
        {/* Residential Complexes */}
        <div className="group relative h-64 cursor-pointer">
          {/* Background image that appears on hover */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Image
              src="/assets/images/illustrations/programs/buildings.png"
              alt="Complexes résidentiels"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          {/* Text that's always visible but changes position on hover */}
          <div className="absolute inset-0 flex items-center justify-center group-hover:items-end group-hover:pb-8 transition-all duration-300">
            <h3 className="text-gray-700 group-hover:text-white text-xl font-medium">
              Complexes résidentiels
            </h3>
          </div>
        </div>

        {/* Apartments */}
        <div className="group relative h-64 cursor-pointer">
          <div className="absolute inset-0 rounded-2xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Image
              src="/assets/images/illustrations/programs/cocody-danga.png"
              alt="Appartements"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          <div className="absolute inset-0 flex items-center justify-center group-hover:items-end group-hover:pb-8 transition-all duration-300">
            <h3 className="text-gray-700 group-hover:text-white text-xl font-medium">
              Appartements
            </h3>
          </div>
        </div>

        {/* Villas */}
        <div className="group relative h-64 cursor-pointer">
          <div className="absolute inset-0 rounded-2xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Image
              src="/assets/images/illustrations/programs/rivera-stella.png"
              alt="Villas"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          <div className="absolute inset-0 flex items-center justify-center group-hover:items-end group-hover:pb-8 transition-all duration-300">
            <h3 className="text-gray-700 group-hover:text-white text-xl font-medium">
              Villas
            </h3>
          </div>
        </div>

        {/* Vacation Homes */}
        <div className="group relative h-64 cursor-pointer">
          <div className="absolute inset-0 rounded-2xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Image
              src="/assets/images/illustrations/programs/bonsai.png"
              alt="Maisons de vacances"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          <div className="absolute inset-0 flex items-center justify-center group-hover:items-end group-hover:pb-8 transition-all duration-300">
            <h3 className="text-gray-700 group-hover:text-white text-xl font-medium">
              Maisons de vacances
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}