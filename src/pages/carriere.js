import React from "react";
import Image from "next/image";
import PageJumbo from "@/components/PageJumbo";
import { useTranslation } from "react-i18next";
import CareerContactForm from "@/components/CareerContactForm";

export default function Career() {
  const { t } = useTranslation();

  return (
    <div>
      <PageJumbo titleKey={t("career.recrutement")} textKey={t("career.intro")} />
      <div className="container pb-12">
        {/* Bloc 1 */}
        <div className="flex flex-wrap md:flex-nowrap sm:pb-12 gap-8">
          <div className=" xs:w-1/2 flex xs:justify-center mb-4 md:mb-0">
            <Image
              src="/assets/career/career1.jpg"
              alt={t("career.image-description")}
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full md:pl-4">
            <h2 className="font-bold text-primary text-center mb-8">{t("career.talents.title")}</h2>
            <h3 className="mb-4">{t("career.talents.subtitle")}</h3>
            <p>{t("career.talents.paragraph1")}</p>
            <p>{t("career.talents.paragraph2")}</p>
          </div>
        </div>
        {/* Bloc 2 */}
        <div className="flex flex-wrap  md:flex-nowrap  gap-8">
          <div className="w-full xs:w-1/2 ">
            <h2 className="font-bold text-primary text-center mb-8">{t("career.internship.title")}</h2>
            <h3 className="mb-4">{t("career.internship.subtitle")}</h3>
            <p>{t("career.internship.paragraph1")}</p>
            <p>{t("career.internship.paragraph2")}</p>
          </div>
          <div className="w-full xs:w-1/2 xs:justify-center">
            <Image
              src="/assets/career/career2.jpg"
              alt={t("internship.imageDescription")}
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-full object-cover content-center"
            />
          </div>
        </div>
        {/* Bloc 3 */}
        <div className="flex flex-wrap md:flex-nowrap items-center mt-20  gap-8">
          <div className="w-full md:w-1/2 mb-4 md:mb-0 order-2 md:order-1">
            <CareerContactForm />
          </div>
          <div className="w-full text-center md:w-1/2 pl-4 order-1 md:order-2">
            <h2 className="text-primary">{t("career.admins-and-paralegals.title")}</h2>
            <p>{t("career.admins-and-paralegals.text")}</p>
            <p>
              {t("career.admins-and-paralegals.contact")}
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
