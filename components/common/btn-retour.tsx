import { ChevronLeft } from "lucide-react"
import Link from "next/link"

const BtnRetour = ({text}:{text:string}) => {

  return( 
        <div className="text-black font-bold px-2 sm:px-4 lg:px-14 mb-6 lg:mb-10 flex items-center gap-2">
            <Link href="..">
             <ChevronLeft  />
            </Link>
            <h1 className="  text-[18px] md:text-[26px] lg:text-[36px]">{text}</h1>
        </div>
  )

}

export default BtnRetour