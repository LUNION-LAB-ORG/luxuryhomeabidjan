import Image from "next/image"

export default function TeamSection() {
  const teamMembers = [
    {
      id: 1,
      name: "Nom du Chef",
      title: "Intitulé de poste",
      description:
        "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      avatar: "/assets/images/illustrations/qui-sommes-nous/team1.png",
      position: "right",
    },
    {
      id: 2,
      name: "Nom de l'Assistante",
      title: "Intitulé de poste",
      description:
        "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      avatar: "/assets/images/illustrations/qui-sommes-nous/team2.png",
      position: "left",
    },
    {
      id: 3,
      name: "Nom du membre",
      title: "Intitulé de poste",
      description:
        "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      avatar: "/assets/images/illustrations/qui-sommes-nous/team3.png",
      position: "right",
    },
    {
      id: 4,
      name: "Nom du membre",
      title: "Intitulé de poste",
      description:
        "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      avatar: "/assets/images/illustrations/qui-sommes-nous/team4.png",
      position: "left",
    },
    {
      id: 5,
      name: "Nom du membre",
      title: "Intitulé de poste",
      description:
        "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      avatar: "/assets/images/illustrations/qui-sommes-nous/team5.png",
      position: "right",
    },
    {
      id: 6,
      name: "Nom du membre",
      title: "Intitulé de poste",
      description:
        "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      avatar: "/assets/images/illustrations/qui-sommes-nous/team6.png",
      position: "left",
    },
    {
      id: 7,
      name: "Nom du membre",
      title: "Intitulé de poste",
      description:
        "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      avatar: "/assets/images/illustrations/qui-sommes-nous/team7.png",
      position: "right",
    },
    {
      id: 8,
      name: "Nom du membre",
      title: "Intitulé de poste",
      description:
        "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      avatar: "/assets/images/illustrations/qui-sommes-nous/team8.png",
      position: "left",
    },
  ]

  return (
    <section className="py-12 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">Notre équipe</h2>

      <div className="space-y-12">
        {teamMembers.map((member) => {
          const isEven = member.id % 2 === 0;

          return (
            <div
              key={member.id}
              className={`flex flex-col md:flex-row ${
                isEven ? "md:flex-row-reverse" : ""
              } items-center gap-6`}
            >
              <div className={`w-full text-center md:w-1/2 ${isEven ? "md:text-left" : "md:text-right"}`}>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{member.title}</p>
                <p className="text-gray-700 text-sm">{member.description}</p>
              </div>

              <div className="w-20 h-20 shrink-0">
                <Image
                  src={member.avatar}
                  alt={member.name}
                  width={80}
                  height={80}
                  className="rounded-full border-2 border-gray-200"
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
