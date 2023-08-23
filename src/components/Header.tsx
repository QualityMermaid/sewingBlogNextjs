import { merienda, handlee } from "@/fonts/fonts"
import Link from "next/link"

export default function Header(){
  return(
    <header className={`${merienda.className} sticky top-0 left-0 right-0  w-ful p-4`}>
      <h1 className={`${handlee.className} text-blue-600 text-5xl text-center`}>Crafts by Bane</h1>
      <nav className="m-2">
        <ul className="flex gap-3 justify-center">
          <li className=""><Link href="/">Home</Link></li>
          <li><Link href="/projects">Projects</Link></li>
          <li><Link href="/gallery">Gallery</Link></li>
        </ul>
      </nav>
    </header>
  )
}