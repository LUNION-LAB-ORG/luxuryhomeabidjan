import Image from "next/image"

export default function LogoShowcase() {
  const partners = [
    { name: "Orange", logo: "/assets/images/illustrations/page-accueil/logo1.png" },
    { name: "MTN", logo: "/assets/images/illustrations/page-accueil/logo2.png" },
    { name: "CIE", logo: "/assets/images/illustrations/page-accueil/logo3.png" },
    { name: "ACI", logo: "/assets/images/illustrations/page-accueil/logo4.png" },
    { name: "NSIA", logo: "/assets/images/illustrations/page-accueil/logo5.png" },
    { name: "ISSIS", logo: "/assets/images/illustrations/page-accueil/logo6.png" },
    { name: "LHA", logo: "/assets/images/illustrations/page-accueil/logo7.png" },
  ]

  return (
    <section className="px-4 py-12 md:py-16">
      <div className="container  mx-auto">
        <h2 className="text-2xl  font-bold text-center mb-10">Ils nous ont fait confiance</h2>
        <div className="flex flex-wrap justify-center items-center gap-2 ">
          {partners.map((partner) => (
            <div key={partner.name} className="w-12 md:w-24 mdd:h-28 flexs items-center justify-center">
              <Image
                src={partner.logo || "/placeholder.svg"}
                alt={`${partner.name} logo`}
                width={80}
                height={80}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

