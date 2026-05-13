import type { ReactNode } from "react"
import { Link } from "react-router-dom"

type Props = {
  link: string,
  children: ReactNode,
  color: string,
}

export default function NavBtn({ link, children, color }: Props) {
  return <Link className={`
    w-20 
    h-fit
    flex
    align-middle
    items-center
    justify-center
    rounded-lg
    bg-[${color}]
    caret-amber-600
    `} to={link}>{children}</Link>
}