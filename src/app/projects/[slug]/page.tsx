import NotFound from "@/app/not-found";
import Comments from "@/components/Comments";
import { getPostBySlug, getPosts } from "@/lib/projects"
import Image from "next/image"
import Link from "next/link";

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
      <Image className="mx-auto p-2 h-60 w-fit" placeholder="blur" blurDataURL={`/_next/image?url=${project?.images}&w=16&q=1`} src={`${project?.images}`} alt={`${project?.title}`} width={200} height={200}/>     
      <p>{project.description}</p>
      <p>Click <Link className="text-xl hover:text-blue-500" href={project.link}>HERE</Link> for the site and pattern.</p>
      <div dangerouslySetInnerHTML={{ __html: project.body.html }} className="prose dark:prose-invert p-1"></div> 
      <Comments slug={params.slug}/>
    </main>
  )
}
