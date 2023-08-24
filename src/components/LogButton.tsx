"use client"
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import { IoMdLogIn } from 'react-icons/io';
import { useEffect, useRef } from "react";
import { useRouter } from "next/router";

export default function LogButton() {
  const urlRef = useRef<string>("")
  // const { pathname } = useRouter()
  useEffect(() => {
    console.log(window.location.href)
    urlRef.current = window.location.href
  }, [])
  const {userId} = useAuth()

  return (
      <div>
      {!userId && <Link className="text-lime-600 flex items-center" href={`/sign-in?redirect=${urlRef.current}`}>SignIn<div><IoMdLogIn/></div></Link>}
      </div>
    )
}
