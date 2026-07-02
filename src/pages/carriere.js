import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import CareerContactForm from "@/components/CareerContactForm";
import Head from "next/head";
import AnimatedSection from "@/components/AnimatedSection";
import PageJumbo from "@/components/PageJumbo";
import ParallaxMedia from "@/components/ParallaxMedia";
import { FaEnvelope, FaFileAlt, FaShieldAlt } from "react-icons/fa";

const applicationCopyByLocale = {
  fr: {
    title: "Candidature spontanée",
    text: "Transmettez-nous les éléments utiles via le formulaire, ou écrivez directement au cabinet si votre dossier est déjà prêt.",
    emailLabel: "Écrire au cabinet",
    points: ["CV et lettre de motivation", "Étude confidentielle du profil", "Retour selon les besoins du cabinet"],
  },
  en: {
    title: "Open application",
    text: "Send the relevant details through the form, or contact the firm directly if your application is already prepared.",
    emailLabel: "Email the firm",
    points: ["CV and cover letter", "Confidential profile review", "Reply according to firm needs"],
  },
  de: {
    title: "Initiativbewerbung",
    text: "Senden Sie uns die relevanten Unterlagen über das Formular oder schreiben Sie der Kanzlei direkt, wenn Ihre Bewerbung bereits vorbereitet ist.",
    emailLabel: "Kanzlei kontaktieren",
    points: ["Lebenslauf und Anschreiben", "Vertrauliche Prüfung des Profils", "Rückmeldung je nach Bedarf der Kanzlei"],
  },
};

export default function Career() {
  const { i18n, t } = useTranslation();
  const locale = i18n.language?.split("-")[0] || "fr";
  const applicationCopy = applicationCopyByLocale[locale] || applicationCopyByLocale.fr;

  return (
    <div>
      <Head>
        <title>{t("Carrière")}</title>
        <meta name="description" content={t("career.pageDescriptionSEO")} />
      </Head>
      <div className="container">
        <PageJumbo titleKey={t("career.recrutement")} textKey={t("career.intro")} />
      </div>
      <div className="container pb-16">
        <div className="grid gap-8 pb-14 md:grid-cols-2 md:items-center">
          <AnimatedSection direction="left" className="mb-4 md:mb-0">
            <ParallaxMedia className="relative overflow-hidden rounded-[6px] shadow-[0_24px_60px_rgba(17,50,72,0.12)]" distance={30}>
              <Image
                src="/assets/career/career5.jpg"
                alt={t("career.image-description")}
                width={3000}
                height={2000}
                sizes="(min-width: 768px) 50vw, 100vw"
                className="h-[420px] w-full object-cover md:h-[540px]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(11,35,50,0.42))]" />
            </ParallaxMedia>
          </AnimatedSection>
          <AnimatedSection direction="right" className="wa-shell w-full p-7 md:p-10">
            <span className="wa-eyebrow">{t("career.talents.title")}</span>
            <h2 className="mb-6 mt-4 font-bold text-primary">{t("career.talents.title")}</h2>
            <h3 className="mb-4">{t("career.talents.subtitle")}</h3>
            <p className="wa-prose mb-0">{t("career.talents.paragraph1")}</p>
          </AnimatedSection>
        </div>

        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <AnimatedSection direction="left" className="wa-shell order-2 w-full p-7 md:order-1 md:p-10">
            <span className="wa-eyebrow">{t("career.internship.title")}</span>
            <h2 className="mb-6 mt-4 font-bold text-primary">{t("career.internship.title")}</h2>
            <h3 className="mb-4">{t("career.internship.subtitle")}</h3>
            <p className="wa-prose">{t("career.internship.paragraph1")}</p>
            {t("career.internship.paragraph2") && <p className="wa-prose mb-0">{t("career.internship.paragraph2")}</p>}
          </AnimatedSection>
          <AnimatedSection direction="right" className="order-1 mb-4 md:order-2 md:mb-0">
            <ParallaxMedia className="relative overflow-hidden rounded-[6px] shadow-[0_24px_60px_rgba(17,50,72,0.12)]" distance={-28}>
              <Image
                src="/assets/career/career6.jpg"
                alt={t("internship.imageDescription")}
                width={4705}
                height={3137}
                sizes="(min-width: 768px) 50vw, 100vw"
                className="h-[420px] w-full object-cover md:h-[540px]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,35,50,0.08),transparent_50%,rgba(11,35,50,0.36))]" />
            </ParallaxMedia>
          </AnimatedSection>
        </div>

        <div className="relative mt-16 grid items-stretch gap-8 overflow-hidden rounded-[6px] bg-wa-ink p-4 md:mt-20 md:grid-cols-[1.08fr_0.92fr] md:p-8">
          <div className="wa-blueprint absolute inset-0 opacity-[0.08]" aria-hidden="true" />
          <AnimatedSection direction="left" className="order-2 mb-4 w-full md:order-1 md:mb-0">
            <CareerContactForm />
          </AnimatedSection>
          <AnimatedSection direction="right" className="relative order-1 flex w-full text-white md:order-2 md:pl-4">
            <div className="flex w-full flex-col justify-between rounded-[6px] border border-white/15 bg-white/[0.06] p-7 md:p-9">
              <div>
                <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-[4px] bg-light-blue text-wa-deep">
                  <FaEnvelope aria-hidden="true" />
                </span>
                <h2 className="text-white">{applicationCopy.title}</h2>
                <p className="text-white/80">{applicationCopy.text}</p>
                <a
                  href="mailto:info@weil-paris.fr"
                  className="inline-flex items-center gap-2 rounded-[4px] border border-white/20 px-4 py-3 font-bold text-light-blue transition hover:border-light-blue hover:bg-light-blue hover:text-wa-deep">
                  <FaEnvelope aria-hidden="true" />
                  {applicationCopy.emailLabel}
                </a>
              </div>

              <div className="mt-8 grid gap-3">
                {applicationCopy.points.map((point, index) => {
                  const Icon = index === 0 ? FaFileAlt : FaShieldAlt;
                  return (
                    <div key={point} className="flex items-center gap-3 border-t border-white/12 pt-3 first:border-t-0 first:pt-0">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[4px] bg-white/10 text-light-blue">
                        <Icon aria-hidden="true" />
                      </span>
                      <span className="text-sm font-bold text-white/85">{point}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
