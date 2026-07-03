import Head from "next/head";
import Button from "@/components/Button";

const archiveUrls = {
  "190702-Protection_of_Trade_Secrecy_under_French_Law.pdf":
    "https://web.archive.org/web/20230124174206id_/https://weil-paris.fr/media/190702-Protection_of_Trade_Secrecy_under_French_Law.pdf",
  "new_law_eases_redeployment_obligations_in_France.pdf":
    "https://web.archive.org/web/20210116182319id_/http://weil-paris.fr/media/new_law_eases_redeployment_obligations_in_France.pdf",
  "social_media_france_2013.pdf":
    "https://web.archive.org/web/20210116165905id_/http://weil-paris.fr/media/social_media_france_2013.pdf",
};

const copy = {
  fr: {
    title: "Document indisponible",
    eyebrow: "Archive",
    description:
      "Ce document historique n'est pas disponible dans les fichiers actuels du site. Il doit être réhébergé ou remplacé par un lien public valide.",
    articles: "Retour aux articles",
    contact: "Nous contacter",
  },
  en: {
    title: "Document unavailable",
    eyebrow: "Archive",
    description: "This historical document is not available in the current site files. It needs to be rehosted or replaced with a valid public link.",
    articles: "Back to articles",
    contact: "Contact us",
  },
  de: {
    title: "Dokument nicht verfügbar",
    eyebrow: "Archiv",
    description:
      "Dieses historische Dokument ist in den aktuellen Website-Dateien nicht verfügbar. Es muss neu gehostet oder durch einen gültigen öffentlichen Link ersetzt werden.",
    articles: "Zurück zu den Artikeln",
    contact: "Kontakt",
  },
};

export async function getServerSideProps({ params, locale, res }) {
  const filePath = Array.isArray(params.path) ? params.path.join("/") : params.path;
  const filename = decodeURIComponent(filePath || "");

  if (archiveUrls[filename]) {
    return {
      redirect: {
        destination: archiveUrls[filename],
        permanent: false,
      },
    };
  }

  res.statusCode = 404;

  return { props: { filename, labels: copy[locale] || copy.fr } };
}

export default function LegacyMediaRedirect({ filename, labels }) {
  return (
    <main className="container mx-auto py-16 md:py-24">
      <Head>
        <title>{labels.title}</title>
        <meta name="robots" content="noindex" />
      </Head>

      <section className="wa-shell mx-auto max-w-3xl p-7 text-center md:p-10">
        <p className="wa-eyebrow mb-4">{labels.eyebrow}</p>
        <h1 className="mb-5">{labels.title}</h1>
        {filename && <p className="mb-5 break-words text-sm font-bold text-primary">{filename}</p>}
        <p className="wa-prose mx-auto max-w-2xl">{labels.description}</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href="/news" color="primary">
            {labels.articles}
          </Button>
          <Button href="/contact" color="ghost">
            {labels.contact}
          </Button>
        </div>
      </section>
    </main>
  );
}
