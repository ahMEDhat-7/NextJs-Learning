"use client";
import Link from "next/link";
import { ErrorProps } from "@/utils/errors";

const ArticleError = ({error,reset}:ErrorProps) => {
  return (
    
    <div className="pt-7 items-center">
        <div className="text-3xl font-semibold text-red-600">
        <h1>Custom Article Error Page</h1>
            Something went wrong.
        </div>
        <h2>Error Message: {error.message}</h2>
        <button onClick={() => reset()} className="font-bold bg-blue-500 hover:cursor-pointer hover:bg-blue-700 text-white py-2 px-4 rounded-full mt-4">
            Try Again
        </button>
        <Link href="/" className="text-xl text-blue-600 hover:underline mt-6 block">
            Go back to <span>Home</span>
        </Link>
    </div>
  )
}

export default ArticleError