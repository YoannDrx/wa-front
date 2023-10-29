import React from "react";
import Image from "next/image";
import PageJumbo from "@/components/PageJumbo";
import { useTranslation } from "react-i18next";
import CareerContactForm from "@/components/CareerContactForm";

export default function Career() {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto">
      <PageJumbo titleKey="Recrutement" textKey="" />
      <div className="container py-20">
        {/* Bloc 1 */}
        <div className="flex flex-wrap md:flex-nowrap items-center">
          <div className="w-full md:w-1/2 flex justify-center mb-4 md:mb-0">
            <Image src="/assets/career/career1.jpg" alt={t("career.image-description")} width={500} height={300} />
          </div>
          <div className="w-full md:w-1/2 pl-4">
            <h2 className="text-4xl font-bold text-primary">{t("career.talents.title")}</h2>
            <h3 className="text-xl text-gray-700">{t("career.talents.subtitle")}</h3>
            <p className="mt-4 text-gray-700">{t("career.talents.paragraph1")}</p>
            <p className="mt-4 text-gray-700">{t("career.talents.paragraph2")}</p>
          </div>
        </div>
        {/* Bloc 2 */}
        <div className="flex flex-wrap md:flex-nowrap">
          <div className="w-full md:w-1/2 pr-4 mb-4 md:mb-0">
            <h2 className="text-4xl font-bold text-primary">{t("career.internship.title")}</h2>
            <h3 className="text-xl">{t("career.internship.subtitle")}</h3>
            <p className="mt-4">{t("career.internship.paragraph1")}</p>
            <p className="mt-4">{t("career.internship.paragraph2")}</p>
          </div>
          <div className="w-full md:w-1/2">
            <Image src="/assets/career/career2.jpg" alt={t("internship.imageDescription")} width={500} height={300} />
          </div>
        </div>
        {/* Bloc 3 */}
        <div className="flex flex-wrap md:flex-nowrap items-center mt-20">
          <div className="w-full md:w-1/2 mb-4 md:mb-0 order-2 md:order-1">
            <CareerContactForm />
          </div>
          <div className="w-full md:w-1/2 pl-4 order-1 md:order-2">
            <h2 className="text-4xl font-bold text-primary">{t("career.admins-and-paralegals.title")}</h2>
            <p className="mt-4 text-gray-700">{t("career.admins-and-paralegals.text")}</p>
            <p className="mt-4 text-gray-700">
              {t("career.admins-and-paralegals.contact")}{" "}
              <span>
                <a href="mailto:info@weil-paris.fr" target="_blank" className="text-primary">
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
