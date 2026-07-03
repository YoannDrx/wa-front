import AnimatedSection from "@/components/AnimatedSection";
import PageJumbo from "@/components/PageJumbo";
import Head from "next/head";
import { Trans, useTranslation } from "react-i18next";
import { FaArrowUp, FaEnvelope, FaFileAlt, FaShieldAlt } from "react-icons/fa";

const copyByLocale = {
  fr: {
    summary: "Sommaire",
    document: "Document",
    contact: "Contact",
    contactText: "Une question sur ce document ?",
    email: "info@weil-paris.fr",
    top: "Haut de page",
    details: "Informations du cabinet",
  },
  en: {
    summary: "Contents",
    document: "Document",
    contact: "Contact",
    contactText: "Question about this document?",
    email: "info@weil-paris.fr",
    top: "Back to top",
    details: "Firm information",
  },
  de: {
    summary: "Inhalt",
    document: "Dokument",
    contact: "Kontakt",
    contactText: "Fragen zu diesem Dokument?",
    email: "info@weil-paris.fr",
    top: "Zum Seitenanfang",
    details: "Informationen der Kanzlei",
  },
};

const stripTags = (value) => value.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();

const getSectionTitle = (value, fallback) => {
  const heading = value.match(/<h[23][^>]*>(.*?)<\/h[23]>/i)?.[1];
  return stripTags(heading || value) || fallback;
};

const getSectionId = (key) => key.replace(/[^a-z0-9]+/gi, "-").replace(/^-|-$/g, "");

const legalTransComponents = {
  br: <br />,
  h2: <h2 key="0" />,
  h3: <h3 key="1" />,
  p: <p key="2" />,
  strong: <strong key="3" />,
  bold: <strong key="4" />,
  a: <a key="5" className="wa-link" />,
  ul: <ul key="6" />,
  li: <li key="7" />,
  square: <span className="square-blue" key="8" />,
  table: <table key="9" />,
  th: <th key="10" />,
  td: <td key="11" />,
  thead: <thead key="12" />,
  tbody: <tbody key="13" />,
  tr: <tr key="14" />,
  highlight: <span className="bg-light-blue px-1" key="15" />,
  leftblue: <span className="leftblue" key="16" />,
  blue: <span className="font-bold text-primary" key="17" />,
  nl: (
    <>
      <br />
      <br />
    </>
  ),
};

export default function LegalDocumentPage({ titleKey, descriptionKey, introKey, sections }) {
  const { i18n, t } = useTranslation();
  const copy = copyByLocale[i18n.language] || copyByLocale.fr;
  const sectionMeta = sections.map((sectionKey, index) => ({
    key: sectionKey,
    id: getSectionId(sectionKey),
    title: getSectionTitle(t(sectionKey), `${copy.document} ${index + 1}`),
  }));

  return (
    <div id="top">
      <Head>
        <title>{t(titleKey)}</title>
        <meta name="description" content={t(descriptionKey)} />
      </Head>
      <div className="container">
        <PageJumbo titleKey={t(titleKey)} textKey={introKey} />
      </div>

      <section className="relative bg-wa-porcelain/70 pb-16 pt-2">
        <div className="wa-blueprint absolute inset-0 opacity-[0.22]" aria-hidden="true" />
        <div className="container relative grid gap-7 lg:grid-cols-[290px_1fr] lg:items-start">
          <aside className="lg:sticky lg:top-28 lg:max-h-[calc(100svh-7rem)] lg:overflow-y-auto lg:pr-1">
            <AnimatedSection direction="left" className="wa-shell p-5">
              <div className="mb-5 flex items-center gap-3 border-b border-primary/10 pb-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-[4px] bg-primary text-white">
                  <FaFileAlt aria-hidden="true" />
                </span>
                <div>
                  <p className="mb-0 text-xs font-bold uppercase tracking-[0.18em] text-primary">{copy.document}</p>
                  <p className="mb-0 text-sm font-bold text-wa-ink">{t(titleKey)}</p>
                </div>
              </div>

              <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-primary">{copy.summary}</p>
              <nav className="flex flex-col gap-1" aria-label={copy.summary}>
                {sectionMeta.map((section, index) => (
                  <a
                    key={section.key}
                    href={`#${section.id}`}
                    className="group grid grid-cols-[2rem_1fr] items-start gap-2 rounded-[4px] px-2 py-2 text-sm text-neutral/78 transition hover:bg-light-blue hover:text-primary">
                    <span className="font-mono text-xs font-bold text-primary/55 transition group-hover:text-primary">{String(index + 1).padStart(2, "0")}</span>
                    <span>{section.title}</span>
                  </a>
                ))}
              </nav>

              <div className="mt-6 border-t border-primary/10 pt-5">
                <div className="flex gap-3 rounded-[6px] bg-wa-porcelain p-4">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-[4px] bg-wa-deep text-white">
                    <FaShieldAlt aria-hidden="true" />
                  </span>
                  <div>
                    <p className="mb-1 text-sm font-bold text-wa-ink">{copy.details}</p>
                    <p className="mb-0 text-sm leading-6 text-neutral/75">Weil & Associés, 26 Avenue de la Grande Armée, 75017 Paris</p>
                  </div>
                </div>
                <a href="mailto:info@weil-paris.fr" className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-primary transition hover:text-wa-navy">
                  <FaEnvelope aria-hidden="true" />
                  {copy.email}
                </a>
              </div>
            </AnimatedSection>
          </aside>

          <main className="min-w-0">
            <div className="grid gap-5">
              {sectionMeta.map((section, index) => (
                <AnimatedSection key={section.key} as="section" id={section.id} className="scroll-mt-28">
                  <article className="wa-legal-card">
                    <div className="mb-5 flex items-center justify-between gap-4 border-b border-primary/10 pb-4">
                      <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-primary/70">{String(index + 1).padStart(2, "0")}</span>
                      <a href="#top" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-primary/70 transition hover:text-primary">
                        <FaArrowUp aria-hidden="true" />
                        {copy.top}
                      </a>
                    </div>
                    <div className="wa-legal-content">
                      <Trans i18nKey={section.key} components={legalTransComponents} />
                    </div>
                  </article>
                </AnimatedSection>
              ))}
            </div>
          </main>
        </div>
      </section>
    </div>
  );
}
