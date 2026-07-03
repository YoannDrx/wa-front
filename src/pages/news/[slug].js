import Head from "next/head";
import PageJumbo from "@/components/PageJumbo";
import AnimatedSection from "@/components/AnimatedSection";
import Button from "@/components/Button";
import Link from "next/link";
import { apiClient } from "@/services/apiClient";
import { findArticleBySlug, getArticleHref, isExternalHref, localizedArticle } from "@/utils/articles";
import { useTranslation } from "react-i18next";

export async function getServerSideProps({ params, locale }) {
  try {
    const articles = (await apiClient.get("/articles")).data;
    const article = findArticleBySlug(articles, params.slug, locale);

    if (!article) {
      return { notFound: true };
    }

    const localized = localizedArticle(article, locale);
    const href = getArticleHref(article, locale);

    return {
      props: {
        article: localized,
        externalHref: isExternalHref(href) ? href : "",
      },
    };
  } catch (error) {
    console.error("Error fetching article:", error);
    return { notFound: true };
  }
}

const BlogPage = ({ article, externalHref }) => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto pb-16">
      <Head>
        <title>{article.title}</title>
        <meta name="description" content={article.description} />
      </Head>
      <PageJumbo titleKey={article.title} />
      <div className="grid gap-8 lg:grid-cols-[1fr_320px] lg:items-start">
        <AnimatedSection direction="left" className="wa-shell p-6 md:p-9">
          {article.author && <p className="wa-eyebrow mb-5">{article.author}</p>}
          <p className="wa-prose mb-0">{article.description}</p>
          {externalHref && (
            <div className="mt-8">
              <Button href={externalHref} target="_blank" rel="noopener noreferrer" color="primary" size="lg">
                {t("blog.knowMore")}
              </Button>
            </div>
          )}
        </AnimatedSection>
        <AnimatedSection direction="right" className="wa-surface p-6 lg:sticky lg:top-28">
          <Link href="/news" className="wa-link">
            {t("blog.articles")}
          </Link>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default BlogPage;
