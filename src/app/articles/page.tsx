import ArticleItem from "@/components/articles/ArticleItem";
import Pagination from "@/components/articles/Pagination";
import { ArticleType } from "@/utils/types";
import { GET } from "../api/articles/route";



const Articles = async () => {
  
  const articles : ArticleType[] = await GET("/api/articles");
  return (
    <section className="container m-auto px-5">     
        <div className="flex flex-wrap justify-between items-center gap-7">
          {articles.map((article: ArticleType) => (
            <ArticleItem key={article.id} article={article} />
        ))}
        </div>
        <Pagination />
      
    </section>
  )
}

export default Articles