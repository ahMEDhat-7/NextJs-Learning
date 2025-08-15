import { ArticleType } from '@/utils/types'
import Link from 'next/link'
import React from 'react'

interface ArticleProps {
    article: ArticleType;
}

const ArticleItem = ({article}:ArticleProps) => {
  return (
     <div key={article.id} className="my-1 p-5 border-gray-500 hover:bg-slate-200 w-full md:w-2/5 lg:w-1/4 rounded-lg shadow-lg ">
        <h3 className="text-xl font-semibold text-gray-900 line-clamp-1">{article.title}</h3>
        <p className="my-2 text-xl text-gray-700 p-1 line-clamp-3">{article.body}</p>
        <Link href={`/articles/${article.id}`} className="text-xl bg-purple-700 hover:text-purple-500 w-full block text-center p-1 text-white rounded-lg">
        Read More
        </Link>
    </div>
  )
}

export default ArticleItem