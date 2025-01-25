import Link from "next/link"

const SocialIcon = ({
  href,
  tip,
  icon,
}: {
  href: string
  tip: string
  icon: React.ReactNode
}) => {
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

export default SocialIcon
