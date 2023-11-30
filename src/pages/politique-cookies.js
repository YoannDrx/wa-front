import React, { useEffect } from "react";
import Image from "next/image";
import { useTranslation, Trans } from "react-i18next";
import PageJumbo from "@/components/PageJumbo";

export default function PolitiqueCookies() {
  const { i18n } = useTranslation();
  const { t } = useTranslation();
  useEffect(() => {}, [i18n.language]);

  return (
    <div>
      <PageJumbo titleKey={t("footer.politiqueCookies")} textKey={t("intro à trouver")} />
      <div className="container pb-12">
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
      </div>
    </div>
  );
}
