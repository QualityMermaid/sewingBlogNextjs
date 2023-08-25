import {WEBSITE_URL} from "config"
import CommentForm from "./CommentForm"
import {UserButton, currentUser} from "@clerk/nextjs"
import type { User } from "@clerk/nextjs/api";
import Link from "next/link";
import { handlee, merienda } from "@/fonts/fonts";
// import Remove from "./Remove";


export default async function Comments({slug}:{slug:string}) {
  const user: User | null = await currentUser();

  {/* @ts-ignore*/}
  let comments = []

  try{
    const commentsRes = await fetch(`${WEBSITE_URL}/api/comments/${slug}`, {next:{revalidate: 4}})
    comments = await commentsRes.json()
  } catch(error) {
    console.log(error)
  }

  return(
    <div className="p-4">
      <h3>I would love to know what you think of this project.</h3>
      <UserButton afterSignOutUrl={`redirect=/projects/${slug}`}/>
      {/* @ts-ignore*/}
      {user ? <CommentForm slug={slug} username={user.username}/> : <p>Please  <Link className={`${merienda.className} text-green-400 hover:text-blue-500`} href={`/sign-up?redirect=/projects/${slug}`}>sign-in</Link> to add a comment</p>}
      <h3 className={`${merienda.className} text-xl text-blue-500 p-2`}>Comments</h3>
      {/* @ts-ignore*/}
      {comments.map((comment) => {
        return (
            <div className="border border-green-400 p-1 m-2" key={comment.uuid}>
                <h3 className="text-xl text-blue-400 p-1">{comment.username}</h3>
                <p className="p-2">{comment.comment}</p>
                {/* <Remove uuid={comment.uuid}/> */}
                {/* <p>{comment.uuid}</p> */}
            </div>
        )
      })}
    </div>
  )
}