"use client"
import Image from "next/image"
import React from "react"

const ProjectCard2 = ({
  title,
  description,
  imageUrl,
  projectUrl,
  technologies,
}: {
  title: string
  description: string
  imageUrl: string
  projectUrl: string
  technologies: string[]
}) => {
  return (
    <div
      className="relative overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl cursor-pointer"
      onClick={() => window.open(projectUrl, "_blank")}
    >
      {/* 项目图片 */}
      <Image src={imageUrl} alt={title} className="w-full h-48 object-cover" />

      {/* 卡片内容 */}
      <div className="p-6 bg-white dark:bg-gray-800">
        {/* 项目标题 */}
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {title}
        </h3>

        {/* 项目描述 */}
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
          {description}
        </p>

        {/* 使用的技术栈 */}
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* 悬停时的遮罩层 */}
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
        <span className="text-white text-lg font-semibold">查看项目</span>
      </div>
    </div>
  )
}

export default ProjectCard2
