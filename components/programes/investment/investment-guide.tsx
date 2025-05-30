import Image from "next/image";

export default function InvestmentGuide() {
  return (
    <div className="container mx-auto px-6 xl:px-16 lg:py-16 pb-24 bg-white">
      {/* Main Heading */}
      <div className="mb-10 lg:mb-16">
        <h1 className="font-bold text-2xl xl:text-7xl md:text-5xl  text-black leading-none mb-2">
          Investissez intelligemment,
          <br />
          faites fructifier votre patrimoine
        </h1>
        <p className="text-gray-600 text-md font-semibold">
          Saisissez les opportunités de l&apos;immobilier et regardez vos
          investissements prospérer
        </p>
      </div>

      {/* card 1 */}
      <div className="flex flex-col xl:flex-row xl:gap-5">
        {/* mobil */}
        <div className="xl:hidden w-fulll flex flex-col mx-auto">
          <div className=" z-10 relative flex gap-4 xl:text-2xl font-bold">
            <span className="text-slate-500 font-bold xl:text-4xl">1</span>
            <h2 className="text-black">Définir son projet et ses objectifs</h2>
          </div>

          {/* Step 2 */}
          <div className=" z-10 relative flex gap-4 xl:text-2xl font-bold">
            <span className="text-slate-500 font-bold xl:text-4xl">2</span>
            <h2 className="text-black">Définir son projet et ses objectifs</h2>
          </div>
        </div>

        <div className="flex flex-row flex-wrap  md:flex-nowrap items-center justify-center gap-4">
          {/* Step 1 */}
          <div className="max-w-sm md:max-w-72 border p-4 font-semibold rounded-3xl flex flex-col gap-6">
            <div className=" flex-shrink-0">
              <Image
                src="/assets/images/illustrations/programs/house-1.png"
                alt="Modern house"
                width={500}
                height={500}
                className="rounded-lg w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col text-md">
              <p className="text-sm text-gray-600 mb-4">
                Avant de vous lancer, il est essentiel de définir clairement vos
                objectifs. Une analyse approfondie de votre projet vous
                permettra d&apos;orienter vos choix stratégiques.
              </p>
              <div className="mmmt-auto">
                <span className="text-gray-400 text-3xl font-semibold">1</span>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="max-w-sm  md:max-w-72 border p-4 font-semibold rounded-3xl flex flex-col gap-6">
            <div className=" flex-shrink-0">
              <Image
                src="/assets/images/illustrations/programs/house-1.png"
                alt="Modern house"
                width={500}
                height={500}
                className="rounded-lg w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col text-md">
              <p className="text-sm text-gray-600 mb-4">
                Avant de vous lancer, il est essentiel de définir clairement vos
                objectifs. Une analyse approfondie de votre projet vous
                permettra d&apos;orienter vos choix stratégiques.
              </p>
              <div className="mmmt-auto">
                <span className="text-gray-400 text-3xl font-semibold">1</span>
              </div>
            </div>
          </div>
        </div>

        <div className="xl:flex hidden flex-col md:flex-row items-center justify-between">
          {/* Step 1 */}
          <div className="flex flex-col xl-flex-row items-center ">
            <div className=" z-10 relative flex gap-4 xl:text-2xl font-bold after:w-24 after:bg-green-900 after:h-[1px] after:absolute after:-right-16 after:top-[60%] after:z-0">
              <span className="text-slate-500 font-bold xl:text-4xl">1</span>
              <h2 className="text-black">
                Définir son projet et ses objectifs
              </h2>
            </div>
            <div className="w-16 flex-grow border-t border-white opacity-0 mml-4"></div>
          </div>

          {/* Step 2 */}
          <div className="flex items-center">
            <div className=" z-10 relative flex gap-4 xl:text-2xl font-bold after:w-24 after:bg-green-900 after:h-[1px] after:absolute after:-right-16 after:top-[60%] after:z-0">
              <span className="text-slate-500 font-bold xl:text-4xl">2</span>
              <h2 className="text-black">
                Définir son projet et ses objectifs
              </h2>
            </div>
            <div className="w-16 flex-grow border-t border-black opacity-0"></div>
          </div>
        </div>
      </div>

      {/* card 2 */}
      <div className="mt-10 flex flex-col xl:flex-row xl:gap-5">
        {/* mobil */}
        <div className="xl:hidden w-fulll flex flex-col mx-auto">
          <div className=" z-10 relative flex gap-4 xl:text-2xl font-bold">
            <span className="text-slate-500 font-bold xl:text-4xl">1</span>
            <h2 className="text-black">Définir son projet et ses objectifs</h2>
          </div>

          {/* Step 2 */}
          <div className=" z-10 relative flex gap-4 xl:text-2xl font-bold">
            <span className="text-slate-500 font-bold xl:text-4xl">2</span>
            <h2 className="text-black">Définir son projet et ses objectifs</h2>
          </div>
        </div>

        <div className="hidden xl:flex flex-col md:flex-row items-center justify-between">
          {/* Step 3 Title */}
          <div className="flex items-center ">
            <div className=" z-10 relative flex gap-4 xl:text-2xl font-bold after:w-24 after:bg-green-900 after:h-[1px] after:absolute after:-right-16 after:top-[60%] after:z-0">
              <span className="text-slate-500 font-bold xl:text-4xl">3</span>
              <h2 className="text-black">
                Définir son projet et ses objectifs
              </h2>
            </div>
            <div className="w-16 flex-grow border-t border-white opacity-0 mml-4"></div>
          </div>

          {/* Step 3 Title */}
          <div className="flex items-center">
            <div className=" z-10 relative flex gap-4 xl:text-2xl font-bold after:w-24 after:bg-green-900 after:h-[1px] after:absolute after:-right-16 after:top-[60%] after:z-0">
              <span className="text-slate-500 font-bold xl:text-4xl">4</span>
              <h2 className="text-black">
                Définir son projet et ses objectifs
              </h2>
            </div>
            <div className="w-16 flex-grow border-t border-black opacity-0"></div>
          </div>
        </div>
        <div className="flex flex-wrap md:flex-nowrap justify-center flex-col md:flex-row gap-4">
          {/* Step 1 */}
          <div className="max-w-sm  md:max-w-72 border p-4 font-semibold rounded-3xl flex flex-col gap-6">
            <div className=" flex-shrink-0">
              <Image
                src="/assets/images/illustrations/programs/house-3.png"
                alt="Modern house"
                width={500}
                height={500}
                className="rounded-lg w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col text-md">
              <p className="text-sm text-gray-600 mb-4">
                Avant de vous lancer, il est essentiel de définir clairement vos
                objectifs. Une analyse approfondie de votre projet vous
                permettra d&apos;orienter vos choix stratégiques.
              </p>
              <div className="mmmt-auto">
                <span className="text-gray-400 text-3xl font-semibold">3</span>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="max-w-sm  md:max-w-72 border p-4 font-semibold rounded-3xl flex flex-col gap-6">
            <div className=" flex-shrink-0">
              <Image
                src="/assets/images/illustrations/programs/house-4.png"
                alt="Modern house"
                width={500}
                height={500}
                className="rounded-lg w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col text-md">
              <p className="text-sm text-gray-600 mb-4">
                Avant de vous lancer, il est essentiel de définir clairement vos
                objectifs. Une analyse approfondie de votre projet vous
                permettra d&apos;orienter vos choix stratégiques.
              </p>
              <div className="mmmt-auto">
                <span className="text-gray-400 text-3xl font-semibold">4</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
