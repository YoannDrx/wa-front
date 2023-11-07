import ArticleCard from "@/components/ArticleCard";
import PageJumbo from "@/components/PageJumbo";
import Sidebar from "@/components/Sidebar";
import axios from "axios";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export async function getStaticProps({ params, locale }) {
  const articles = (await axios.get('/articles')).data
  return { props: { articles } };
}

export default function Blog({articles}) {
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
      <PageJumbo titleKey={t("blog.articles")} />
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-64 p-4 md:mr-4 md:mb-4 mb-4 md:order-1" style={{ backgroundColor: "#E4EDF1" }}>
          <Sidebar setFilter={setFilter} authors={authors} categories={[]} />
        </div>
        <div className="flex-grow md:order-1">
          {filteredArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
}
