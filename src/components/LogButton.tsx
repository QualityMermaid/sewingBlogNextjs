"use client"
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import { IoMdLogIn } from 'react-icons/io';


import React from 'react'

export default function LogButton() {
  const {userId} = useAuth()

  return (
      <div>
      {!userId && <Link className="text-lime-600 flex items-center" href="/sign-up">SignIn<div><IoMdLogIn/></div></Link>}
      </div>
    )
}
