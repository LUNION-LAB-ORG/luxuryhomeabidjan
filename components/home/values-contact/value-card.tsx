import Image from 'next/image'

type Props = {
  title: string
  description: string
  imageSrc: string
}

export default function ValueCard({ title, description, imageSrc }: Props) {
  return (
    <div className="flex flex-col sm:flex-row text-center sm:text-left items-center gap-4 rounded-3xl h-fit border-1 border-[#F5F5F5] p-6">
      <div className="mb-6">
        <div className="relative h-20 w-20 overflow-hidden rounded-full border-2 border-[#999999]">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div>
        <h3 className="mb-4 text-xl font-semibold">
          {title}
        </h3>
        <p className=" text-md ">
          {description}
        </p>
      </div>
    </div>
  )
}
