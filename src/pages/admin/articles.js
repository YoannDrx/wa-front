import Button from "@/components/Button";
import { apiClient } from "@/services/apiClient";
import Head from "next/head";
import { useTranslation } from "react-i18next";
import AdminLayout from "@/components/AdminLayout";
import AnimatedSection from "@/components/AnimatedSection";

export async function getServerSideProps({ params, locale }) {
  const articles = (await apiClient.get("/articles")).data;
  return { props: { articles } };
}

const EditableField = ({ name, value }) => (
  <div className="border-t border-primary/10 py-3 first:border-t-0">
    <span className="mr-2 text-sm font-bold uppercase tracking-[0.12em] text-primary">{name}</span>
    <span className="text-neutral/90">{value}</span>
  </div>
);

export default function Articles({ articles }) {
  const { t } = useTranslation();

  const deleteArticle = (id) => async () => {
    if (confirm(`Supprimer l'article ${id} ?`)) {
      await apiClient.delete(`/articles/${id}`);
    }
  };

  return (
    <div>
      <Head>
        <title>{t("admin.adminArticles.title")}</title>
        <meta name="description" content={t("admin.adminArticles.pageDescriptionSEO")} />
      </Head>
      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <h1>Tous les articles</h1>
        <Button color="primary" href={`/admin/article`} size="lg">
          Ajouter un article
        </Button>
      </div>
      {articles.map((article) => (
        <AnimatedSection key={article.id} className="wa-card mb-5 p-5 md:p-6">
          <div className="mb-4 flex flex-col justify-between gap-3 md:flex-row md:items-center">
            <span className="wa-eyebrow">#{article.id}</span>
            <div className="flex flex-wrap gap-2">
              <Button color="error" onClick={deleteArticle(article.id)} size="sm">
                Supprimer
              </Button>
              <Button color="primary" href={`/admin/articles/${article.id}`} size="sm">
                Modifier
              </Button>
            </div>
          </div>

          <EditableField name={"title_fr"} value={article.title_fr} />
          <EditableField name={"title_en"} value={article.title_en} />
          <EditableField name={"title_de"} value={article.title_de} />
          <EditableField name={"description_fr"} value={article.description_fr} />
          <EditableField name={"description_en"} value={article.description_en} />
          <EditableField name={"description_de"} value={article.description_de} />
          <EditableField name={"author"} value={article.author} />
          <EditableField name={"link"} value={article.link} />
        </AnimatedSection>
      ))}
    </div>
  );
}

Articles.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};
