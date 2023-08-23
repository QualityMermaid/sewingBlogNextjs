"use client"
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";

import React from 'react'

export default function LogButton() {
  const {userId} = useAuth()

  return (
      <div>
      {!userId && <Link className="text-lime-600" href="/sign-up">SignIn</Link>}
      </div>
    )
}
