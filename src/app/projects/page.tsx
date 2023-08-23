import { getPosts } from "@/lib/projects"
import Link from "next/link";
import Image from "next/image"

// type ProjectSearchQuery = {
//   sortBy: string
// }

type Project = {
  title: string;
  craft: string;
  description: string;
  images: string;
  made: boolean;
  finisheditem: string;
  link: string;
  slug: string;
}

const projectposts: Project[]= getPosts()

export default function ProjectsPage() {
  return (
    <main className="p-2">
      <div>
      <h2 className="text-4xl text-center p-2 text-green-600">Projects</h2>
        <p>Here is a list of my current projects and ones I plan on making</p>
        <p>Select a Project to see more details</p>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
          {projectposts.map((project) => {
            return(
              <li className="border border-solid border-blue-400 p-3 m-4 w-80 h-90 flex justify-center items-center " key={project.slug}>
                <Link href={`/projects/${project.slug}`}>
                <Image placeholder="blur" blurDataURL={`/_next/image?url=${project.images}&w=16&q=1`}  src={project.images} width={300} height={300} alt={project.title}/>
                <h4 className="text-center pt-2">{project.title}</h4>

                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </main>
  )
}
