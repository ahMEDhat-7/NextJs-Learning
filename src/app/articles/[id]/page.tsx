import ArticleItem from "@/components/articles/ArticleItem";
import { getRandomNumber } from "@/lib/helpers";
import { PageProps } from "@/utils/interfaces";
import { ArticleType } from "@/utils/types";


const SingleArticle = async ({params}:PageProps ) => {

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    const article : ArticleType= await res.json();

  return (
    <section className="page-height container w-full m-auto px-5 pt-8 md:w-3/4 lg:w-2/3">
        <div className="bg-white p-7 rounded-lg">
            <h1 className="text-3xl font-bold text-gray-700 mb-2">{article.title}</h1>
            <div className="text-gray-400">{getRandomNumber(1,28)}/{getRandomNumber(1,12)}/2025</div>
            <p className="text-gray-800 text-xl mt-5">{article.body}</p>
        </div>
    </section>
  )
}

export default SingleArticle