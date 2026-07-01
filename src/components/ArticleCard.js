import Link from "next/link";
import { useTranslation } from "react-i18next";
import { getArticleHref, isExternalHref, localizedArticle } from "../utils/articles";
import { useRouter } from "next/router";
import { FaArrowRight, FaExternalLinkAlt } from "react-icons/fa";

const ArticleCard = ({ article }) => {
  const router = useRouter();
  const { t } = useTranslation();

  article = localizedArticle(article, router.locale);
  const href = getArticleHref(article, router.locale);
  const external = isExternalHref(href);
  const mediaLink = href.startsWith("/media/");
  const Icon = external || mediaLink ? FaExternalLinkAlt : FaArrowRight;

  return (
    <article className="group wa-card wa-card-hover mb-5 w-full overflow-hidden p-5 md:p-7">
      <div className="mb-5 h-px w-full overflow-hidden bg-primary/15">
        <div className="h-full w-1/3 -translate-x-full bg-primary/70 transition duration-700 group-hover:translate-x-[220%]" />
      </div>
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div className="min-w-0">
          <p className="mb-3 text-sm font-bold text-primary">{article.author}</p>
          <h2 className="mb-0 text-2xl font-bold text-wa-ink md:text-3xl">{article.title}</h2>
        </div>
        {article.categories?.length > 0 && <div className="text-sm text-gray-600">{article.categories.join(", ")}</div>}
      </div>

      <p className="mt-5 mb-0 text-[17px] leading-8 text-neutral/90">{article.description}</p>
      <div className="mt-6">
        <Link
          href={href}
          target={external || mediaLink ? "_blank" : undefined}
          rel={external || mediaLink ? "noopener noreferrer" : undefined}
          className="inline-flex items-center gap-2 rounded-[4px] border border-primary/15 px-4 py-3 font-bold text-primary transition hover:border-primary hover:bg-light-blue">
          {t("blog.knowMore")} <Icon aria-hidden="true" className="text-xs" />
        </Link>
      </div>
    </article>
  );
};

export default ArticleCard;
