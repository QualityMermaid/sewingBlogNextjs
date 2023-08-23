import { getPosts } from "@/lib/projects"
import Link from "next/link";

// type ProjectSearchQuery = {
//   sortBy: string
// }

type Project = {
  title: string;
  craft: string;
  description: string;
  images: string;
  made: boolean;
  finishedbag: string;
  link: string;
  slug: string;
}

const projectposts: Project[]= getPosts()

export default function ProjectsPage() {
  return (
    <main>
      <div>
        <h3>Projects</h3>
        <ul>
          {projectposts.map((project) => {
            return(
              <li key={project.slug}>
                <Link href={`/projects/${project.slug}`}>
                <h4>{project.title}</h4>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </main>
  )
}
