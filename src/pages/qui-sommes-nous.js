import React, { useEffect } from "react";
import Image from "next/image";
import { useTranslation, Trans } from "react-i18next";
import PageJumbo from "@/components/PageJumbo";

export default function WhoWeAre() {
  const { i18n } = useTranslation();
  const { t } = useTranslation();
  useEffect(() => {}, [i18n.language]);

  return (
    <div>
      <PageJumbo titleKey={t("whoWeAre.presentation")} textKey={t("whoWeAre.firmPresentation")} />
      <div className="container pb-12">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Bloc 1 */}
          <div className="bg-primary p-8 text-white">
            <h2 className="mb-4 break-words">
              <Trans i18nKey="whoWeAre.NOUS SOMMES DEDIES A VOTRE SUCCES" />
            </h2>
            <p>
              <Trans
                i18nKey="whoWeAre.nous-sommes-dedies-a-votre-succes-description"
                components={{
                  nl: (
                    <>
                      <br />
                      <br />
                    </>
                  ),
                }}
              />
            </p>
          </div>
          {/* Bloc 2 */}
          <div className="bg-white p-8 text-black border border-primary">
            <h2 className="text-primary mb-4 break-words">
              <Trans i18nKey="whoWeAre.NOUS SOMMES INTERNATIONAUX" />
            </h2>
            <p>
              <Trans
                i18nKey="whoWeAre.nous-sommes-internationnaux-description"
                components={{
                  nl: (
                    <>
                      <br />
                      <br />
                    </>
                  ),
                }}
              />
            </p>
          </div>
        </section>

        <Image
          src="/assets/who-we-are/Salle-de-conference.png"
          alt="Séparateur"
          width={0}
          height={0}
          className="w-full h-auto"
          sizes="100vw"
        />

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Bloc 3 */}
          <div className="bg-gray-200 p-8 text-black">
            <h2 className="mb-4">
              <Trans i18nKey="whoWeAre.PLUS LOIN PLUS INTELLIGENT PLUS RAPIDE" />
            </h2>
            <p>
              <Trans
                i18nKey="whoWeAre.plus-loin-plus-intelligent-plus-rapide-description"
                components={{
                  nl: (
                    <>
                      <br />
                      <br />
                    </>
                  ),
                }}
              />
            </p>
          </div>
          {/* Bloc 4 */}
          <div className="bg-primary p-8 text-white">
            <h2 className="mb-4">
              <Trans i18nKey="whoWeAre.VOTRE CONFIANCE NOUS HONORE" />
            </h2>
            <p>
              <Trans
                i18nKey="whoWeAre.votre-confiance-nous-honore-description"
                components={{
                  nl: (
                    <>
                      <br />
                      <br />
                    </>
                  ),
                }}
              />
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
