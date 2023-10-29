import Link from "next/link";

const ArticleCard = ({ article }) => {
  return (
    <div className="bg-white p-4 rounded mb-4 w-full border border-gray-300">
      <div className="flex justify-between">
        <div>
          <h2 className="text-2xl font-bold text-primary">{article.title}</h2>
          <p className="text-sm text-gray-600">{article.author}</p>
        </div>
        <div className="text-sm text-gray-600">{article.categories.join(", ")}</div>
      </div>
      <div className="text-sm text-gray-600 mb-2">{article.tags.join(", ")}</div>
      <p>{article.description}</p>
      <div className="mt-4">
        <Link href={`/article/${article.id}`} className="text-primary hover:underline">
          En savoir plus ➔
        </Link>
      </div>
    </div>
  );
};

export default ArticleCard;
