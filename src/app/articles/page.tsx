import ArticleItem from "@/components/articles/ArticleItem";
import { ArticleType } from "@/utils/types";


const getArticles = async () :Promise<ArticleType[]> => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
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
      
    </section>
  )
}

export default Articles