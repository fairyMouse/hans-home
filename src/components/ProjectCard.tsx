import Image from "next/image"
import Link from "next/link"

const ProjectCard = ({
  title,
  description,
  image,
  href,
}: {
  title: string
  description: string
  image: string
  href: string
}) => {
  return (
    <Link
      href={href}
      className="flex bg-[rgba(249,250,251,0.6)] rounded-lg p-[18px] h-[110px] 
      w-full md:w-[calc(50%-30px)] transition-all duration-500 hover:-translate-y-1
      hover:bg-[rgba(240,241,241,0.6)]"
      target="_blank"
    >
      <div className="h-full w-4/5 transition-all duration-400">
        <h3 className="text-lg font-normal transition-all duration-400 hover:text-2xl">
          {title}
        </h3>
        <p className="text-sm mt-2 text-[#7e7e7e]">{description}</p>
      </div>
      <div className="overflow-hidden transition-all duration-400 flex justify-center items-center w-1/5 h-full">
        <Image
          src={image}
          alt={title}
          width={44}
          height={44}
          className="transition-all duration-100 hover:rotate-45"
        />
      </div>
    </Link>
  )
}

export default ProjectCard
