import AnimatedSection from "@/components/AnimatedSection";
import Button from "@/components/Button";
import PageJumbo from "@/components/PageJumbo";
import ParallaxMedia from "@/components/ParallaxMedia";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Trans, useTranslation } from "react-i18next";
import { FaArrowRight, FaBalanceScale, FaGlobeEurope, FaLayerGroup } from "react-icons/fa";

const copyByLocale = {
  fr: {
    scope: "Domaine d'intervention",
    support: "Un sujet à nous confier ?",
    related: "Autres expertises",
    since: "Depuis 1974",
    international: "International",
    tailored: "Sur mesure",
    all: "Toutes les expertises",
  },
  en: {
    scope: "Practice area",
    support: "A matter to discuss?",
    related: "Related expertise",
    since: "Since 1974",
    international: "International",
    tailored: "Tailored",
    all: "All expertise",
  },
  de: {
    scope: "Tätigkeitsbereich",
    support: "Ein Anliegen für uns?",
    related: "Weitere Expertise",
    since: "Seit 1974",
    international: "International",
    tailored: "Maßgeschneidert",
    all: "Alle Expertisen",
  },
};

const transComponents = {
  nl: (
    <>
      <br />
      <br />
    </>
  ),
  bold: <strong key="0" />,
  highlight: <span className="rounded-[3px] bg-primary px-1.5 py-0.5 text-white" key="1" />,
  a: <a key="2" className="rounded-[3px] bg-primary px-1.5 py-0.5 font-bold text-white underline decoration-white/40 underline-offset-4 transition hover:bg-wa-navy" />,
  leftblue: <span className="leftblue" key="3" />,
  blue: <span className="font-bold text-primary" key="4" />,
  square: <span className="square-blue" key="5" />,
};

export async function getStaticProps({ params, locale }) {
  const translations = require(`../../../lang/${locale}.json`);
  const expertise = translations.expertise.expertiseList.find((item) => item.id.toString() === params.id);

  if (!expertise) {
    return { notFound: true };
  }

  return { props: { expertise } };
}

export async function getStaticPaths() {
  const frItems = require("../../../lang/fr.json").expertise.expertiseList;
  const deItems = require("../../../lang/de.json").expertise.expertiseList;
  const enItems = require("../../../lang/en.json").expertise.expertiseList;

  const paths = [
    ...frItems.map((item) => ({ params: { slug: item.slug, id: item.id.toString() }, locale: "fr" })),
    ...deItems.map((item) => ({ params: { slug: item.slug, id: item.id.toString() }, locale: "de" })),
    ...enItems.map((item) => ({ params: { slug: item.slug, id: item.id.toString() }, locale: "en" })),
  ];

  return { paths, fallback: "blocking" };
}

export default function ExpertisePage({ expertise }) {
  const { i18n, t } = useTranslation();
  const copy = copyByLocale[i18n.language] || copyByLocale.fr;
  const expertiseItems = t("expertise.expertiseList", { returnObjects: true });
  const currentIndex = Array.isArray(expertiseItems) ? expertiseItems.findIndex((item) => item.id.toString() === expertise.id.toString()) : -1;
  const relatedItems =
    currentIndex >= 0
      ? [expertiseItems[currentIndex - 1], expertiseItems[currentIndex + 1]].filter(Boolean)
      : [];

  return (
    <div>
      <Head>
        <title>{t(expertise.title)}</title>
        <meta
          name="description"
          content={t("expertise.metaDescription", {
            title: t(expertise.title),
          })}
        />
      </Head>

      <div className="container">
        <PageJumbo titleKey={t(expertise.title)} textKey={t(expertise.intro)} />
      </div>

      <section className="relative overflow-hidden bg-wa-porcelain/70 py-12 md:py-16">
        <div className="wa-blueprint absolute inset-0 opacity-[0.2]" aria-hidden="true" />
        <div className="container relative grid gap-8 lg:grid-cols-[360px_1fr] lg:items-start">
          <AnimatedSection direction="left" className="lg:sticky lg:top-28">
            <aside className="relative overflow-hidden rounded-[6px] bg-wa-deep p-6 text-white shadow-[0_28px_80px_rgba(17,50,72,0.2)] md:p-7">
              <div className="wa-blueprint absolute inset-0 opacity-[0.08]" aria-hidden="true" />
              <div className="relative">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-light-blue">{copy.scope}</p>
                <ParallaxMedia className="relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-[6px] border border-white/10 bg-white p-8" distance={18}>
                  <div className="absolute inset-8 rounded-full border border-primary/15 bg-light-blue/70" />
                  <Image
                    src={expertise.image}
                    alt={t(expertise.title)}
                    width={300}
                    height={300}
                    className="relative z-10 h-auto max-h-full w-auto max-w-full drop-shadow-[0_24px_30px_rgba(17,50,72,0.18)]"
                    priority
                  />
                </ParallaxMedia>

                <div className="mt-6 grid gap-3">
                  {[
                    { icon: FaBalanceScale, label: copy.since },
                    { icon: FaGlobeEurope, label: copy.international },
                    { icon: FaLayerGroup, label: copy.tailored },
                  ].map(({ icon: Icon, label }) => (
                    <div key={label} className="flex items-center gap-3 border-t border-white/12 pt-3 first:border-t-0 first:pt-0">
                      <span className="flex h-9 w-9 items-center justify-center rounded-[4px] bg-white/10 text-light-blue">
                        <Icon aria-hidden="true" />
                      </span>
                      <span className="font-bold text-white/90">{label}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-7 rounded-[6px] border border-white/12 bg-white/[0.06] p-4">
                  <p className="mb-4 font-bold text-white">{copy.support}</p>
                  <Button href={t("/contact")} color="primary" className="w-full border-white/20 shadow-[0_14px_34px_rgba(0,0,0,0.18)]">
                    {t("Nous contacter")}
                  </Button>
                </div>
              </div>
            </aside>
          </AnimatedSection>

          <div className="min-w-0">
            <AnimatedSection direction="right">
              <article className="relative overflow-hidden rounded-[6px] border border-primary/10 bg-white p-6 shadow-[0_26px_70px_rgba(17,50,72,0.08)] md:p-10">
                <div className="mb-8 flex flex-col gap-4 border-b border-primary/10 pb-6 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="wa-eyebrow mb-2">{copy.scope}</p>
                    <h2 className="mb-0 text-wa-ink">{t(expertise.title)}</h2>
                  </div>
                  <Link href={t("/expertise")} className="inline-flex items-center gap-2 font-bold text-primary transition hover:text-wa-navy">
                    {copy.all}
                    <FaArrowRight aria-hidden="true" className="text-sm" />
                  </Link>
                </div>

                <div className="wa-expertise-content">
                  <p>
                    <Trans i18nKey={expertise.paragraph1} components={transComponents} />
                  </p>
                </div>
              </article>
            </AnimatedSection>

            {relatedItems.length > 0 && (
              <AnimatedSection className="mt-8">
                <div>
                  <h2 className="mb-5 text-xl text-wa-ink md:text-2xl">{copy.related}</h2>
                  <div className="grid gap-4 md:grid-cols-2">
                    {relatedItems.map((item) => (
                      <Link
                        key={item.id}
                        href={`/expertise/${item.slug}/${item.id}`}
                        className="group flex min-h-32 items-center gap-4 rounded-[6px] border border-primary/10 bg-white p-5 shadow-[0_18px_45px_rgba(17,50,72,0.06)] transition hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_26px_65px_rgba(17,50,72,0.12)]">
                        <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[4px] bg-light-blue p-3">
                          <Image src={item.image} alt={t(item.title)} width={60} height={60} className="h-auto max-h-full w-auto max-w-full" />
                        </span>
                        <span className="flex-1 font-bold text-wa-ink transition group-hover:text-primary">{t(item.title)}</span>
                        <FaArrowRight aria-hidden="true" className="text-primary transition group-hover:translate-x-1" />
                      </Link>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
