import { getPosts } from "@/lib/projects"

// type ProjectSearchQuery = {
//   sortBy: string
// }

type Project = {
  title: string;
  type: string;
  description: string;
  slug: string;
}

const projectposts: Project[]= getPosts()

console.log(projectposts)


export default function ProjectPage() {
  return (
    <main>
      <div>
        <h3>Projects</h3>
        <ul>
          {projectposts.map((project) => {
            return(
              <li key={project.slug}>
                <h4>{project.title}</h4>
              </li>
            )
          })}
        </ul>
      </div>
    </main>
  )
}
