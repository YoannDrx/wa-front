import React, { useEffect } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import PageJumbo from "@/components/PageJumbo";

export default function WhoWeAre() {
  const { i18n } = useTranslation();
  const { t } = useTranslation();
  useEffect(() => {}, [i18n.language]);

  return (
    <div className="container mx-auto px-4 md:px-8">
      <PageJumbo titleKey="whoWeAre.presentation" textKey="whoWeAre.firmPresentation" />

      <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-primary p-8 text-white">
          <h2 className="text-3xl font-semibold mb-4">{t("whoWeAre.NOUS SOMMES DEDIES A VOTRE SUCCES")}</h2>
          <p>{t("whoWeAre.nous-sommes-dedies-a-votre-succes-description")}</p>
        </div>

        <div className="bg-white p-8 text-black">
          <h2 className="text-3xl font-semibold mb-4">{t("whoWeAre.NOUS SOMMES INTERNATIONAUX")}</h2>
          <p>{t("whoWeAre.nous-sommes-internationnaux-description")}</p>
        </div>
      </section>

      <section className="relative my-16 h-[400px]">
        <Image src="/assets/who-we-are/salle-de-conference.png" layout="fill" objectFit="cover" alt="Séparateur" />
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-gray-200 p-8 text-black">
          <h2 className="text-3xl font-semibold mb-4">{t("whoWeAre.PLUS LOIN PLUS INTELLIGENT PLUS RAPIDE")}</h2>
          <p>{t("whoWeAre.plus-loin-plus-intelligent-plus-rapide-description")}</p>
        </div>

        <div className="bg-black p-8 text-white">
          <h2 className="text-3xl font-semibold mb-4">{t("whoWeAre.VOTRE CONFIANCE NOUS HONORE")}</h2>
          <p>{t("whoWeAre.votre-confiance-nous-honore-description")}</p>
        </div>
      </section>
    </div>
  );
}
