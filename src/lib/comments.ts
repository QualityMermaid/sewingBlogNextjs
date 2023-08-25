import { kv } from "@vercel/kv"
import short from "short-uuid"

export async function saveComment(username:string, comment:string, slug:string) {
  const uuid = short.generate()
  const commentObject = JSON.stringify({
    username,
    comment,
    uuid
  })
  kv.set(`comment:${uuid}`, commentObject)
  const commentList = await kv.lpush(`comments:${slug}`, uuid)

  return uuid
}

export async function removeComment(uuid:string, slug:string) {
 console.log(`removing ${uuid}`)

  return
}

export async function getComments(slug: string) {
  const commentIds = await kv.lrange(`comments:${slug}`, 0, -1)
  const commentKeys = commentIds.map((id) => `comment:${id}`)

  if(commentKeys.length < 1){
    return []
  }

  const comments = await kv.mget(...commentKeys)

  return comments
}
