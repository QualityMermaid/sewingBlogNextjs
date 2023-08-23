import { getPostsByMade, getPosts } from "@/lib/projects"
import Image from "next/image"

type GalleryPageParams = {
  params: {
    made: string
  }
}

export function generateStaticParams(){
  const posts = getPosts()
  return posts.map((post)=>({made: post.made}))
}

export default function GalleryPage({params}:GalleryPageParams) {
  const galleryImages = getPostsByMade(params.made)
  console.log(galleryImages)

  return (
    <main>
      <h2 className="text-2xl text-center text-blue-600">Gallery</h2>
      {galleryImages.map((project) => {
            return(
              <div key={project.slug}>
                <Image src={project.finishedbag} alt="bag" width={300} height={300}></Image>
              </div>
            )
          })}
    </main>
  )
}
