import Button from "@/components/Button";
import DE from "@/components/lang/DE";
import FR from "@/components/lang/FR";
import UK from "@/components/lang/UK";
import { apiClient } from "@/services/apiClient";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import AdminLayout from "@/components/AdminLayout";

export default function ArticleEdit() {
  const [article, setArticle] = useState({});
  const router = useRouter();
  const { id } = router.query;
  const { t } = useTranslation();

  useEffect(() => {
    if (!id) return;

    (async () => {
      let { data, error } = await apiClient.get(`/articles/${id}`);
      if (!error) {
        setArticle(data);
      }
    })();
  }, [id]);

  const submit = async (e) => {
    e.preventDefault();

    const { data, error } = await apiClient.put(`/articles/${id}`, article);
    if (!error) {
      router.push("/admin/articles");
    }
  };

  const bbRegister = (name) => ({
    id: name,
    name,
    value: article[name],
    onChange: (e) => setArticle({ ...article, [name]: e.target.value }),
  });
  const fieldClassName = "wa-form-field border-primary/20";

  if (!article.id) {
    return <div />;
  }

  return (
    <div>
      <Head>
        <title>{t("admin.editArticle.title")} </title>
        <meta name="description" content={t("admin.editArticle.pageDescriptionSEO")} />
      </Head>
      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <h1 className="mb-0">Modification article #{article.id}</h1>
        <Button color="ghost" href="/admin/articles">
          Tous les articles
        </Button>
      </div>

      <form className="flex flex-col gap-6" onSubmit={submit}>
        <section className="wa-card p-5 md:p-6">
          <h2 className="mb-6 text-xl">Français</h2>
          <label htmlFor="title_fr" className="mb-2 flex items-center gap-2 text-lg font-bold">
            <FR id={3398541422121} /> Titre
          </label>
          <input {...bbRegister("title_fr")} className={fieldClassName} />
          <label htmlFor="description_fr" className="mb-2 mt-5 flex items-center gap-2 text-lg font-bold">
            <FR id={3398541424574} /> Description
          </label>
          <textarea {...bbRegister("description_fr")} className={fieldClassName} rows={4} />
        </section>

        <section className="wa-card p-5 md:p-6">
          <h2 className="mb-6 text-xl">English</h2>
          <label htmlFor="title_en" className="mb-2 flex items-center gap-2 text-lg font-bold">
            <UK id={339854142452} /> Title
          </label>
          <input {...bbRegister("title_en")} className={fieldClassName} />
          <label htmlFor="description_en" className="mb-2 mt-5 flex items-center gap-2 text-lg font-bold">
            <UK id={38101848985} /> Description
          </label>
          <textarea {...bbRegister("description_en")} className={fieldClassName} rows={4} />
        </section>

        <section className="wa-card p-5 md:p-6">
          <h2 className="mb-6 text-xl">Deutsch</h2>
          <label htmlFor="title_de" className="mb-2 flex items-center gap-2 text-lg font-bold">
            <DE id={339854142653} /> Titre
          </label>
          <input {...bbRegister("title_de")} className={fieldClassName} />
          <label htmlFor="description_de" className="mb-2 mt-5 flex items-center gap-2 text-lg font-bold">
            <DE id={33985414289896} /> Description
          </label>
          <textarea {...bbRegister("description_de")} className={fieldClassName} rows={4} />
        </section>

        <section className="wa-card p-5 md:p-6">
          <h2 className="mb-6 text-xl">Publication</h2>
          <label htmlFor="author" className="mb-2 flex items-center gap-2 text-lg font-bold">
            Auteur
          </label>
          <input {...bbRegister("author")} className={fieldClassName} />
          <label htmlFor="link" className="mb-2 mt-5 flex items-center gap-2 text-lg font-bold">
            Lien
          </label>
          <input {...bbRegister("link")} className={fieldClassName} />
        </section>

        <div className="flex justify-end mt-4">
          <Button color="primary" type="submit" size="lg">
            Envoyer
          </Button>
        </div>
      </form>
    </div>
  );
}

ArticleEdit.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};
