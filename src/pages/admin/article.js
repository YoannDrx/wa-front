import FR from "@/components/lang/FR";
import UK from "@/components/lang/UK";
import DE from "@/components/lang/DE";

import Button from "@/components/Button";
import { apiClient } from "@/services/apiClient";
import { useRouter } from "next/router";
import Head from "next/head";
import { useTranslation } from "react-i18next";
import AdminLayout from "@/components/AdminLayout";

export default function NewArticle(params) {
  const { t } = useTranslation();

  const router = useRouter();
  const submit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);

    let { data, error } = await apiClient.post("/articles", formProps);
    if (!error) {
      router.push("/admin/articles");
    }
  };

  const fieldClassName = "wa-form-field border-primary/20";

  return (
    <div>
      <Head>
        <title>{t("admin.newArticle.title")}</title>
        <meta name="description" content={t("admin.newArticle.pageDescriptionSEO")} />
      </Head>
      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <h1 className="mb-0">Nouvel article</h1>
        <Button color="ghost" href="/admin/articles">
          Tous les articles
        </Button>
      </div>

      <form className="flex flex-col gap-6" onSubmit={submit}>
        <section className="wa-card p-5 md:p-6">
          <h2 className="mb-6 text-xl">Français</h2>
          <label htmlFor="title_fr" className="mb-2 flex items-center gap-2 text-lg font-bold">
            <FR id={3588875139811} /> Titre
          </label>
          <input id="title_fr" name="title_fr" className={fieldClassName} />
          <label htmlFor="description_fr" className="mb-2 mt-5 flex items-center gap-2 text-lg font-bold">
            <FR id={35888139814} /> Description
          </label>
          <textarea id="description_fr" name="description_fr" className={fieldClassName} rows={4} />
        </section>

        <section className="wa-card p-5 md:p-6">
          <h2 className="mb-6 text-xl">English</h2>
          <label htmlFor="title_en" className="mb-2 flex items-center gap-2 text-lg font-bold">
            <UK id={3588847139812} /> Title
          </label>
          <input id="title_en" name="title_en" className={fieldClassName} />
          <label htmlFor="description_en" className="mb-2 mt-5 flex items-center gap-2 text-lg font-bold">
            <UK id={35888139815} /> Description
          </label>
          <textarea id="description_en" name="description_en" className={fieldClassName} rows={4} />
        </section>

        <section className="wa-card p-5 md:p-6">
          <h2 className="mb-6 text-xl">Deutsch</h2>
          <label htmlFor="title_de" className="mb-2 flex items-center gap-2 text-lg font-bold">
            <DE id={3588887139813} /> Titre
          </label>
          <input id="title_de" name="title_de" className={fieldClassName} />
          <label htmlFor="description_de" className="mb-2 mt-5 flex items-center gap-2 text-lg font-bold">
            <DE id={35888139816} /> Description
          </label>
          <textarea id="description_de" name="description_de" className={fieldClassName} rows={4} />
        </section>

        <section className="wa-card p-5 md:p-6">
          <h2 className="mb-6 text-xl">Publication</h2>
          <label htmlFor="author" className="mb-2 flex items-center gap-2 text-lg font-bold">
            Auteur
          </label>
          <input id="author" name="author" className={fieldClassName} />
          <label htmlFor="link" className="mb-2 mt-5 flex items-center gap-2 text-lg font-bold">
            Lien
          </label>
          <input id="link" name="link" className={fieldClassName} />
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

NewArticle.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};
