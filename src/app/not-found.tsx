import Link from "next/link";

export default function NotFound() {
    return (
      <>
      <div className="text-center pb-4 m-2">
          <h2 className=" text-xl"> <span className="text-3xl text-red-600 ">404</span> Page not found</h2>
          <h3 className=" text-xl "> Click <Link className=" text-2xl text-blue-600 hover:text-green-500" href="/">HERE</Link> to go back to homepage</h3>
      </div>      
      </>
    );
  }