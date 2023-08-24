import {WEBSITE_URL} from "config"
import CommentForm from "./CommentForm"
import {UserButton, currentUser} from "@clerk/nextjs"
import type { User } from "@clerk/nextjs/api";
import Link from "next/link";
import LogButton from "./LogButton";

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
    <div>
      <h3>Comment</h3>
      <LogButton/>
      <UserButton afterSignOutUrl={`redirect=/projects/${slug}`}/>
      {/* @ts-ignore*/}
      {user ? <CommentForm slug={slug} username={user.username}/> : <Link href={`/sign-in?redirect=/projects/${slug}`}>Please sign-in to comment</Link>}
      <h3>Comments</h3>
      {/* @ts-ignore*/}
      {comments.map((comment) => {
        return (
            <div className="border border-green-400 p-1 m-2" key={comment.uuid}>
                <h3 className="text-xl text-blue-400 p-1">{comment.username}</h3>
                <p className="p-2">{comment.comment}</p>
            </div>
        )
      })}
    </div>
  )
}