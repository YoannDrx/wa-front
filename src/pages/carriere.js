import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import CareerContactForm from "@/components/CareerContactForm";
import Head from "next/head";

export default function Career() {
  const { t } = useTranslation();

  return (
    <div>
      <Head>
        <title>{t("Carrière")}</title>
        <meta name="description" content={t("career.pageDescriptionSEO")} />
      </Head>
      <div className="container pb-12 pt-16 md:pt-24">
        {/* Bloc 1 */}
        <div className="grid gap-8 pb-12 md:grid-cols-2 md:items-center">
          <div className="mb-4 overflow-hidden md:mb-0">
            <Image
              src="/assets/career/career5.jpg"
              alt={t("career.image-description")}
              width={3000}
              height={2000}
              sizes="(min-width: 768px) 50vw, 100vw"
              className="h-full max-h-[520px] w-full object-cover"
            />
          </div>
          <div className="w-full md:pl-4">
            <h2 className="font-bold text-primary text-center mb-8">{t("career.talents.title")}</h2>
            <h3 className="mb-4">{t("career.talents.subtitle")}</h3>
            <p>{t("career.talents.paragraph1")}</p>
          </div>
        </div>
        {/* Bloc 2 */}
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div className="w-full">
            <h2 className="font-bold text-primary text-center mb-8">{t("career.internship.title")}</h2>
            <h3 className="mb-4">{t("career.internship.subtitle")}</h3>
            <p>{t("career.internship.paragraph1")}</p>
            <p>{t("career.internship.paragraph2")}</p>
          </div>
          <div className="mb-4 overflow-hidden md:mb-0">
            <Image
              src="/assets/career/career6.jpg"
              alt={t("internship.imageDescription")}
              width={4705}
              height={3137}
              sizes="(min-width: 768px) 50vw, 100vw"
              className="h-full max-h-[520px] w-full object-cover"
            />
          </div>
        </div>
        {/* Bloc 3 */}
        <div className="mt-16 grid items-center gap-8 md:mt-20 md:grid-cols-2">
          <div className="order-2 mb-4 w-full md:order-1 md:mb-0">
            <CareerContactForm />
          </div>
          <div className="order-1 w-full text-center md:order-2 md:pl-4">
            <p>
              {t("career.admins-and-paralegals.contact")}
              <span>
                <a href="mailto:info@weil-paris.fr" className="text-primary underline underline-offset-4">
                  info@weil-paris.fr
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
