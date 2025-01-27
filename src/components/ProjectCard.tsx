"use client"

import Image from "next/image"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  labels?: string[]
  link?: string
}

export default function ProjectCard({
  title,
  description,
  image,
  labels = [],
  link,
}: ProjectCardProps) {
  return (
    <div
      onClick={() => {
        if (link) {
          window.open(link, "_blank")
        }
      }}
      className="cursor-pointer group relative w-full max-w-sm rounded-xl bg-white p-6 shadow-lg transition-all hover:shadow-xl"
    >
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
      </div>
      {labels.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {labels.map(t => (
            <span
              key={t}
              className="rounded-full bg-gray-100 px-3 py-1 text-xs"
            >
              {t}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}
