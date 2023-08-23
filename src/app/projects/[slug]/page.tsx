import NotFound from "@/app/not-found";
import Comments from "@/components/Comments";
import { getPostBySlug, getPosts } from "@/lib/projects"

type ProjectPageParams = {
  params: {
    slug: string;
  }
}

export function generateStaticParams(){
  const posts = getPosts()
  return posts.map((post)=>({slug: post.slug}))
}

export default function ProjectPage({params}:ProjectPageParams) {
  const project = getPostBySlug(params.slug)

  if(!project){
    return(
      NotFound()
    )
  }

  return (
    <main className="p-3">
      <h2>{project.title}</h2>
      <Comments slug={params.slug}/>

    </main>
  )
}
