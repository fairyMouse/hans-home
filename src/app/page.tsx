import ProjectCard from "@/components/ProjectCard"
import SocialIcon from "@/components/SocialIcon"
import Image from "next/image"

export default function Home() {
  // const projects = [
  //   {
  //     title: "项目 1",
  //     description: "这是一个关于 React 和 Tailwind CSS 的项目示例。",
  //     imageUrl: "/webp/carv.webp",
  //     projectUrl: "https://example.com",
  //     technologies: ["React", "Tailwind CSS", "JavaScript"],
  //   },
  //   {
  //     title: "项目 2",
  //     description: "这是一个关于 Node.js 和 Express 的后端项目。",
  //     imageUrl: "/webp/carv.webp",
  //     projectUrl: "https://example.com",
  //     technologies: ["Node.js", "Express", "MongoDB"],
  //   },
  // ]
  return (
    // <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-10">
    //   <div className="container mx-auto px-4">
    //     <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">
    //       我的过往项目
    //     </h1>
    //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    //       {projects.map((project, index) => (
    //         <ProjectCard2 key={index} {...project} />
    //       ))}
    //     </div>
    //   </div>
    // </div>
    <main className="flex min-h-screen flex-col items-center">
      <div className="w-full max-w-[1000px] flex flex-col p-6">
        {/* Header Section */}
        <header>
          <h1 className="text-5xl font-extrabold my-5">
            Hello, I&apos;m{" "}
            <span
              className="gradientText"
              // className="bg-gradient-to-r from-[#607df1] via-[#e0321b] to-black bg-clip-text text-transparent"
            >
              Hans
            </span>
          </h1>

          <p className="text-xl mt-2">
            👦 <span className="text-[#2b3ce2] font-extrabold">Full Stack</span>{" "}
            Developer / Studying at{" "}
            <span className="text-[#2b3ce2] font-extrabold">Sias</span>
          </p>

          <p className="text-xl mt-2">
            📝 The only way to do
            <span className="text-[#2b3ce2] font-extrabold bg-[#f4f4f4] rounded mx-1 px-1.5 py-0.5 text-sm">
              great
            </span>
            is to
            <span className="text-[#2b3ce2] font-extrabold bg-[#f4f4f4] rounded mx-1 px-1.5 py-0.5 text-sm">
              love
            </span>
            what you do.
          </p>

          {/* Social Icons */}
          <div className="flex flex-wrap gap-2.5 mt-8">
            <SocialIcon
              href="https://github.com/fairyMouse"
              tip="Github"
              icon={
                <Image
                  src="/svg/social/github.svg"
                  alt="Github"
                  width={22}
                  height={22}
                />
              }
            />
            {/* Add other social icons similarly */}
          </div>

          {/* Snake Animation */}
          <div className="w-full mt-4">
            <Image
              src="/static/svg/snake-Light.svg"
              alt="Snake animation"
              width={1000}
              height={200}
            />
          </div>
        </header>

        {/* Websites Section */}
        <section>
          <h2 className="flex items-center gap-2.5 text-2xl font-extrabold my-5">
            <Image src="/svg/link.svg" alt="Website" width={26} height={26} />
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProjectCard
              title="Carv"
              link="https://carv.io/"
              description="在Carv，为您提供个性化的学习体验，帮助您实现个人和职业发展。"
              image="/webp/carv.webp"
              labels={["React", "Tailwind CSS", "TypeScript", "Material UI"]}
            />
            <ProjectCard
              title="OFF GRID"
              link="https://www.offgrid.day/"
              description=""
              image="/webp/carv.webp"
              labels={[
                "React",
                "Next.js",
                "Tailwind CSS",
                "TypeScript",
                "Material UI",
                "React Native",
                "Expo",
              ]}
            />
          </div>
        </section>

        <section>
          <h2 className="flex items-center gap-2.5 text-2xl font-extrabold my-5">
            <Image src="/svg/link.svg" alt="Website" width={26} height={26} />
            Side Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProjectCard
              title="Web3 Examples"
              description="学习Web3的示例项目"
              link="https://web3.feihan.cc/"
              image="/images/web3.jpg"
              labels={["Web3", "Solidity", "Wagmi", "React", "Next.js"]}
            />
          </div>
        </section>
      </div>
    </main>
  )
}
