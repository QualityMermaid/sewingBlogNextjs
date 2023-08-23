import { getPostsByMade, getPosts } from "@/lib/projects"
import Image from "next/image"

export default function GalleryPage() {
  const galleryImages = getPostsByMade()
  console.log(galleryImages)

  return (
    <main className="p-2">
      <h2 className="text-4xl text-center p-2 text-green-600">Gallery</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {galleryImages.map((project) => {
            return(
              <div className="border border-solid border-blue-400 p-3 m-4 w-80 h-90 flex justify-center items-center" key={project.slug}>
                <Image placeholder="blur" blurDataURL={`/_next/image?url=${project.finisheditem}&w=16&q=1`} src={project.finisheditem? project.finisheditem: ""} alt="bag" width="300" height="300"/>
              </div>
            )
          })}
      </div>
    </main>
  )
}
