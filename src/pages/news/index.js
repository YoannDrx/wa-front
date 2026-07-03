import ArticleCard from "@/components/ArticleCard";
import PageJumbo from "@/components/PageJumbo";
import Sidebar from "@/components/Sidebar";
import { apiClient } from "@/services/apiClient";
import Head from "next/head";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import AnimatedSection from "@/components/AnimatedSection";

export async function getServerSideProps() {
  const articles = (await apiClient.get("/articles")).data;
  return { props: { articles } };
}

export default function Blog({ articles }) {
  const { t } = useTranslation();
  const [filteredArticles, setFilteredArticles] = useState(articles);

  const setFilter = (filters) => {
    const newFilteredArticles = articles.filter((article) =>
      Object.keys(filters).every((field) =>
        filters[field] ? article[field]?.toLowerCase().includes(filters[field].toLowerCase()) : true
      )
    );
    setFilteredArticles(newFilteredArticles);
  };

  const authors = Array.from(new Set(articles.map((article) => article.author)));

  return (
    <div className="container mx-auto">
      <Head>
        <title>{t("Blog")}</title>
        <meta name="description" content={t("blog.pageDescriptionSEO")} />
      </Head>
      <PageJumbo titleKey={t("blog.articles")} />
      <div className="grid gap-6 pb-14 lg:grid-cols-[280px_1fr]">
        <AnimatedSection direction="left" className="wa-surface h-fit p-5 lg:sticky lg:top-28">
          <Sidebar setFilter={setFilter} authors={authors} categories={[]} />
        </AnimatedSection>
        <div className="min-w-0">
          {filteredArticles.length > 0 ? (
            <div className="flex flex-col">
              {filteredArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          ) : (
            <AnimatedSection className="wa-shell p-7 text-center md:p-10">
              <p className="mb-0 text-[17px] font-semibold text-neutral/75">{t("blog.empty")}</p>
            </AnimatedSection>
          )}
        </div>
      </div>
    </div>
  );
}
