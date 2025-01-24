import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="w-full max-w-[1000px] flex flex-col p-6">
        {/* Header Section */}
        <header>
          <h1 className="text-5xl font-extrabold my-5">
            Hello, I'm{" "}
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
              href="https://github.com/ZYYO666"
              tip="Github"
              icon={
                <svg
                  t="1704870335945"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="2487"
                  width="22px"
                  height="22px"
                >
                  <path
                    d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9 23.5 23.2 38.1 55.4 38.1 91v112.5c0.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"
                    fill="#000000"
                    p-id="2488"
                  ></path>
                </svg>
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
            {/* <WebsiteIcon /> Website */}
            <svg
              t="1705257422086"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="1891"
              width="26px"
              height="26px"
            >
              <path
                d="M629.333333 202.666667v213.333333h277.333334v448h-512v-213.333333h-277.333334v-448h512z m213.333334 277.333333h-213.333334v170.666667h-170.666666v149.333333h384v-320z m-277.333334-213.333333h-384v320h213.333334v-170.666667h170.666666v-149.333333z m0 213.333333h-106.666666v106.666667h106.666666v-106.666667z"
                fill="#000000"
                p-id="1892"
              ></path>
            </svg>
          </h2>

          <div className="flex flex-wrap gap-5 p-1">
            <ProjectCard
              title="ZYYO笔记"
              description="整天半吊子和不学无术的坏孩子,梦想成为庄稼地里的读书人"
              image="/static/item/i1.png"
              href="https://www.xuezuoweb.com/"
            />
            {/* Add other project cards */}
          </div>
        </section>

        {/* Projects & Skills sections similarly */}
      </div>
    </main>
  )
}

// Components
const SocialIcon = ({ href, tip, icon }) => {
  return (
    <Link
      href={href}
      className="h-[38px] px-3 relative bg-[rgba(249,250,251,0.6)] rounded-md flex gap-1.5 items-center 
      transition-all duration-600 hover:-translate-y-[3px] hover:bg-[rgb(68,120,241)]
      group"
      target="_blank"
    >
      {icon}
      <span
        className="hidden group-hover:flex absolute -top-[35px] -right-[30px] h-[25px] px-2.5 
      items-center bg-inherit rounded text-xs text-white"
      >
        {tip}
      </span>
    </Link>
  )
}

const ProjectCard = ({ title, description, image, href }) => {
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
