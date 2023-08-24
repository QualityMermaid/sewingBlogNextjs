import { SignUp } from "@clerk/nextjs";

type RedirectParams = {
  searchParams:{redirect: string}
}
 
export default function Page({searchParams}: RedirectParams) {
  return <SignUp
    redirectUrl={searchParams.redirect}
    appearance={{
    elements: {
      formButtonPrimary:
      "bg-lime-500 hover:bg-blue-600 text-black"
    }
  }} />;
  
}