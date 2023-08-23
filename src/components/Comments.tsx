import {WEBSITE_URL} from "config"
import CommentForm from "./CommentForm"
import {currentUser} from "@clerk/nextjs"
import type { User } from "@clerk/nextjs/api";
import Link from "next/link";

export default async function Comments({slug}:{slug:string}) {
  const user: User | null = await currentUser();

  {/* @ts-ignore*/}
  let comments = []

  try{
    const commentsRes = await fetch(`/api/comments/${slug}`, {next:{revalidate: 4}})
    comments = await commentsRes.json()
  } catch(error) {
    console.log(error)
  }

  return(
    <div>
      <h3>Comment</h3>
      {/* @ts-ignore*/}
      {user ? <CommentForm slug={slug} username={user.username}/> : <Link href="/sign-up">Please sign-in to comment</Link>}
      <h3>Comments</h3>
      {/* @ts-ignore*/}
      {comments.map((comment) => {
        return (
            <li className="border border-blue-400 p-1 m-2" key={comment.uuid}>
                <h3 className="text-xl text-fuchsia-400 p-1">{comment.username}</h3>
                <p className="p-2">{comment.comment}</p>
            </li>
        )
      })}
    </div>
  )
}