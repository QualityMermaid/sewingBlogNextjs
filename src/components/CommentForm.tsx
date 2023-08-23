"use client"
import { useRouter } from "next/navigation"
import { useTransition } from "react"


export default function CommentForm({slug, username}: {slug:string, username:string}) {
  const router = useRouter()
  const [isPending, startTransistion] = useTransition()

  async function handleFormSubmit(event:React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    // @ts-ignore
    const comment = event.target.comment.value

    const formData = new FormData()
    formData.append("username", username)
    formData.append("comment", comment)

    const options = {body: formData, method: "POST"}
    const res = await fetch(`/api/comments/${slug}`, options)

    // @ts-ignore
    event.target.comment.value = ""

    startTransistion(()=>{
      router.refresh()
    })
  }
  return (
    <form onSubmit={handleFormSubmit} className="flex flex-col p-1 m-2">
      <p>Commenting as {username}</p>
      <label htmlFor="comment">Comment</label>
      <textarea className="bg-gray-300 text-black" name="comment" cols={30} rows={20} required></textarea>
      <button className="hover:text-blue-600" type="submit" disabled={isPending}>
        {isPending ? "Submitting..." : "Submit"}
      </button>
    </form>
  )
}
