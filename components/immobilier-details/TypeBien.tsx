export default function TypeBien() {
  return (
    <section className="container  mx-auto px-4 pt-10 pb-20 lg:px-14">
      <div className="grid gap-5 md:grid-cols-2 font-bold text-stone-600">
        {/* div1 */}
        <div className="bg-stone-100 p-10 rounded-[50px]">
          <h3 className="pb-4 text-[24px] md:text-[30px] ">
            Nos types de biens
          </h3>
          <ul className="flex flex-col space-y-2">
            <li>Appartements</li>
            <li>Hébergements</li>
            <li>Terrains</li>
            <li>Villas</li>
            <li>Villas duplex</li>
          </ul>
        </div>
        {/* div2 */}
        <div className="bg-stone-100 p-10 rounded-[50px]">
          <h3 className="pb-4 text-[24px] md:text-[30px] ">
            Nos zones de disponibilités
          </h3>
          <ul className="flex flex-col space-y-2">
            <li>Abidjan</li>
            <li>Hébergements</li>
            <li>Terrains</li>
            <li>Villas</li>
            <li>Villas duplex</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
