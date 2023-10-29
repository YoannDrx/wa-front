import React, { useEffect } from "react";
import PageJumbo from "@/components/PageJumbo";
import { useTranslation } from "react-i18next";
import { t } from "i18next";
import Image from "next/image";
import Section from "@/components/Section";

export default function WhoWeAre() {
  const { i18n } = useTranslation();
  useEffect(() => {}, [i18n.language]);

  const renderSection = (titleKey, descKey, bgColor, textColor, colSpan = 1, titleColor) => (
    <Section
      title={t(titleKey)}
      descriptionKey={descKey}
      bgColor={bgColor}
      textColor={textColor}
      colSpan={colSpan}
      titleColor={titleColor}
      className="my-4"
    />
  );

  return (
    <div className="container mx-auto">
      <PageJumbo titleKey="whoWeAre.presentation" textKey="whoWeAre.firmPresentation" />
      <div className="container py-20">
        <div className="grid grid-cols-2 md:grid-cols-2 gap-0">
          {renderSection(
            "whoWeAre.NOUS SOMMES DEDIES A VOTRE SUCCES",
            "whoWeAre.nous-sommes-dedies-a-votre-succes-description",
            "bg-primary",
            "text-white",
            1
          )}
          {renderSection(
            "whoWeAre.NOUS SOMMES INTERNATIONAUX",
            "whoWeAre.nous-sommes-internationnaux-description",
            "bg-white",
            "text-black",
            3
          )}

          <div className="col-span-full my-4 relative w-full h-[400px]">
            <Image src="/assets/who-we-are/salle-de-conference.png" alt="Séparateur" layout="fill" objectFit="cover" />
          </div>

          {renderSection(
            "whoWeAre.PLUS LOIN PLUS INTELLIGENT PLUS RAPIDE",
            "whoWeAre.plus-loin-plus-intelligent-plus-rapide-description",
            "#E4EDF1",
            "#2E2E2E",
            3
          )}
          {renderSection(
            "whoWeAre.VOTRE CONFIANCE NOUS HONORE",
            "whoWeAre.votre-confiance-nous-honore-description",
            "#2E2E2E",
            "#E4EDF1",
            3
          )}
        </div>
      </div>
    </div>
  );
}
