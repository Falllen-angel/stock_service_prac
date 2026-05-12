import { Link } from "react-router-dom"

type Props = {
  link: string,
  title: string
}

export default function NavBtn({ link, title }: Props) {
  return <Link className={`
    flex
    align-middle
    items-center
    justify-center
    w-20 
    rounded-lg
    bg-[#9303C5]
    `} to={link}>{title}</Link>
}