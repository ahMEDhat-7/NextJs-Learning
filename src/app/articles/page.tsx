import ArticleItem from "@/components/articles/ArticleItem";
import Pagination from "@/components/articles/Pagination";
import { ArticleType } from "@/utils/types";


const getArticles = async () :Promise<ArticleType[]> => {
  
  await new Promise((resolve)=>setTimeout(resolve,2000));
  const res = await fetch('https://jsonplaceholder.typicode.com/posts',
    {
      cache:"no-store"
    }
  );
  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }
  return res.json();
}

const Articles = async () => {
  const articles : ArticleType[] = await getArticles();
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