import { ArticleType } from "@/utils/types";
import { NextRequest, NextResponse } from "next/server"


export async function GET(request:NextRequest) {
     const res = await fetch('https://jsonplaceholder.typicode.com/posts',
    {
      cache:"no-store"
    }
  );
  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }

  const articles : ArticleType[] = await res.json();

  return NextResponse.json(articles,{status:200})
    
}

export async function POST(request:NextRequest) {
  const body = await request.json();
  console.log(body);
  return NextResponse.json({message:"created." },{status:201});
  
}