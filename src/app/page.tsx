import ProjectCard2 from "@/components/ProjectCard2"
import SocialIcon from "@/components/SocialIcon"
import Image from "next/image"

export default function Home() {
  return (
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
            {/* Company Projects */}
            Work Experience
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* <ProjectCard
              title="ZYYO笔记"
              description="整天半吊子和不学无术的坏孩子,梦想成为庄稼地里的读书人"
              image="/static/item/i1.png"
              href="https://www.xuezuoweb.com/"
            /> */}
            {/* Add other project cards */}

            <ProjectCard2
              title="Carv"
              description="在Carv，我们致力于为全球用户提供高质量的在线学习资源。我们的平台汇集了来自世界各地的优质课程，涵盖了从基础知识到高级技能的各个领域。无论您是初学者还是专业人士，Carv都能为您提供个性化的学习体验，帮助您实现个人和职业发展。"
              image="/webp/carv.webp"
              tech={["React", "Next.js", "Tailwind CSS", "TypeScript"]}
              demo="https://play.carv.io"
              github="https://github.com/fairyMouse/carv"
            />
          </div>
        </section>

        {/* Projects & Skills sections similarly */}
      </div>
    </main>
  )
}
