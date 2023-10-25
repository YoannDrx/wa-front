import React from "react";
import PageJumbo from "@/components/PageJumbo";
import { Trans } from "react-i18next";
import { t } from "i18next";

export default function WhoWeAre() {
  return (
    <div>
      <PageJumbo titleKey="PRESENTATION" textKey="firmPresentation" />
      <div className="container py-20">
        <div className="flex flex-col">
          {/* Section 1 */}
          <div className="flex my-10">
            <h2 className="text-2xl font-bold mr-10">{t("NOUS SOMMES DEDIES A VOTRE SUCCES")}</h2>
            <Trans
              i18nKey={"nous-sommes-dedies-a-votre-succes-description"}
              components={[<span className="font-bold" key="0"></span>]}
            />
          </div>
          {/* Section 2 */}
          <div className="flex flex-row-reverse my-10">
            <h2 className="text-2xl font-bold ml-10">{t("NOUS SOMMES INTERNATIONAUX")}</h2>
            <Trans
              i18nKey={"nous-sommes-internationnaux-description"}
              components={[<span className="font-bold" key="0"></span>]}
            />
          </div>
          {/* Section 3 */}
          <div className="flex my-10">
            <h2 className="text-2xl font-bold mr-10">{t("PLUS LOIN PLUS INTELLIGENT PLUS RAPIDE")}</h2>
            <Trans
              i18nKey={"plus-loin-plus-intelligent-plus-rapide-description"}
              components={[<span className="font-bold" key="0"></span>]}
            />
          </div>
          {/* Section 4 */}
          <div className="flex flex-row-reverse my-10">
            <h2 className="text-2xl font-bold ml-10">{t("VOTRE CONFIANCE NOUS HONORE")}</h2>
            <Trans
              i18nKey={"votre-confiance-nous-honore-description"}
              components={[<span className="font-bold" key="0"></span>]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
