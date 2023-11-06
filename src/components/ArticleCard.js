import Link from "next/link";
import { useTranslation } from "react-i18next";

const ArticleCard = ({ article }) => {
  const { t } = useTranslation();
  return (
    <div className="bg-white p-4 rounded-none mb-4 w-full border border-gray-300">
      <div className="flex justify-between">
        <div>
          <h2 className="text-2xl font-bold text-primary">{article.title}</h2>
          <p className="text-sm text-gray-600">{article.author}</p>
        </div>
        <div className="text-sm text-gray-600">{article.categories?.join(", ")}</div>
      </div>

      <p>{article.description}</p>
      <div className="mt-4">
        <Link href={`/news/${article.id}`} className="text-primary hover:underline">
          {t("blog.knowMore")} ➔
        </Link>
      </div>
    </div>
  );
};

export default ArticleCard;
