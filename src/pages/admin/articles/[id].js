import Button from "@/components/Button";
import DE from "@/components/lang/DE";
import FR from "@/components/lang/FR";
import UK from "@/components/lang/UK";
import { apiClient } from "@/services/apiClient";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

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
  const fieldClassName = "w-full border border-gray-300 bg-white p-3 focus:border-primary focus:outline-none";

  if (!article.id) {
    return <div />;
  }

  return (
    <div className="container py-12">
      <Head>
        <title>{t("admin.editArticle.title")} </title>
        <meta name="description" content={t("admin.editArticle.pageDescriptionSEO")} />
      </Head>
      <h1>Modification article #{article.id}</h1>

      <form className="flex flex-col gap-6" onSubmit={submit}>
        <div>
          <label htmlFor="title_fr" className="flex text-2xl gap-2 items-center">
            <FR id={3398541422121} /> Titre
          </label>
          <input {...bbRegister("title_fr")} className={fieldClassName} />
        </div>
        <div>
          <label htmlFor="title_en" className="flex text-2xl gap-2 items-center">
            <UK id={339854142452} /> Title
          </label>
          <input {...bbRegister("title_en")} className={fieldClassName} />
        </div>
        <div>
          <label htmlFor="title_de" className="flex text-2xl gap-2 items-center">
            <DE id={339854142653} /> Titre
          </label>
          <input {...bbRegister("title_de")} className={fieldClassName} />
        </div>

        <div>
          <label htmlFor="description_fr" className="flex text-2xl gap-2 items-center">
            <FR id={3398541424574} /> Description
          </label>
          <textarea {...bbRegister("description_fr")} className={fieldClassName} rows={4} />
        </div>
        <div>
          <label htmlFor="description_en" className="flex text-2xl gap-2 items-center">
            <UK id={38101848985} /> Description
          </label>
          <textarea {...bbRegister("description_en")} className={fieldClassName} rows={4} />
        </div>
        <div>
          <label htmlFor="description_de" className="flex text-2xl gap-2 items-center">
            <DE id={33985414289896} /> Description
          </label>
          <textarea {...bbRegister("description_de")} className={fieldClassName} rows={4} />
        </div>
        <div>
          <label htmlFor="author" className="flex text-2xl gap-2 items-center">
            Auteur
          </label>
          <input {...bbRegister("author")} className={fieldClassName} />
        </div>
        <div>
          <label htmlFor="link" className="flex text-2xl gap-2 items-center">
            Lien
          </label>
          <input {...bbRegister("link")} className={fieldClassName} />
        </div>

        <div className="flex justify-end mt-4">
          <Button color="primary" type="submit">
            Envoyer
          </Button>
        </div>
      </form>
    </div>
  );
}
