import React, { useEffect } from "react";
import Image from "next/image";
import { useTranslation, Trans } from "react-i18next";
import PageJumbo from "@/components/PageJumbo";

export default function MentionsLegales() {
  const { i18n } = useTranslation();
  const { t } = useTranslation();
  useEffect(() => {}, [i18n.language]);

  return (
    <div>
      <PageJumbo titleKey={t("footer.mentionsLegales")} textKey={t("footer.infosMentionsLegales")} />
      <div className="container pb-12">
        <Trans
          i18nKey="footer.legalMentionsContent"
          components={{
            nl: (
              <>
                <br />
                <br />
              </>
            ),
            a: <a href="https://weil-paris.fr/" />,
          }}
        />
      </div>
    </div>
  );
}
