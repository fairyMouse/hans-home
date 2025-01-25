import Image from "next/image"

interface ProjectCardProps {
  title: string
  description: string
  tech: string[]
  image: string
  demo?: string
  github?: string
}

export default function ProjectCard2({
  title,
  description,
  tech,
  image,
  demo,
  github,
}: ProjectCardProps) {
  return (
    <div className="group relative w-full max-w-sm rounded-xl bg-white p-6 shadow-lg transition-all hover:shadow-xl">
      {/* Image */}
      <div className="relative h-48 overflow-hidden rounded-lg">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="mt-4">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>

        {/* Tech Stack */}
        <div className="mt-3 flex flex-wrap gap-2">
          {tech.map(t => (
            <span
              key={t}
              className="rounded-full bg-gray-100 px-3 py-1 text-sm"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-4 flex gap-3">
          {demo && (
            <a href={demo} className="text-blue-600 hover:underline">
              Live Demo
            </a>
          )}
          {github && (
            <a href={github} className="text-gray-600 hover:underline">
              Source Code
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
