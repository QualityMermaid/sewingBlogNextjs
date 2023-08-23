import Link from "next/link";

export default function Footer(){
  return(
    <footer>
      <div className="text-center text-blue-600"><span className="text-lime-500">&copy;</span> Jessica Bane</div>
      <Link className="flex float-right p-2" href="/contact">Contact</Link>
    </footer>
  )
}