import NotFound from "@/app/not-found";
import Comments from "@/components/Comments";
import { merienda } from "@/fonts/fonts";
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
      <h2 className={`${merienda.className} text-3xl p-2`}>{project.title}</h2>
      <Image className="mx-auto p-2 h-60 w-fit" placeholder="blur" blurDataURL={`/_next/image?url=${project?.images}&w=16&q=1`} src={`${project?.images}`} alt={`${project?.title}`} width={200} height={200}/>     
      <p className="text-center p-2">{project.description}</p>
      <p className="text-right"> Click <Link className={`${merienda.className} text-xl  text-green-500 hover:text-blue-500`} href={project.link}>HERE</Link> for the site and pattern.</p>
      <div dangerouslySetInnerHTML={{ __html: project.body.html }} className="prose-h3:text-blue-500 prose-p:m-2 prose-img:w-3/4 prose-img:p-3 prose-img:m-auto dark:prose-invert p-2 prose-ul:grid prose-ul:grid-cols-1 md:prose-ul:grid-cols-2 "></div> 
      <Comments slug={params.slug}/>
    </main>
  )
}
