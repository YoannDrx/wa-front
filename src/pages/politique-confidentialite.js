import React, { useEffect } from "react";
import { useTranslation, Trans } from "react-i18next";
import PageJumbo from "@/components/PageJumbo";
import Head from "next/head";

export default function PolitiqueConfidentialite() {
  const { i18n } = useTranslation();
  const { t } = useTranslation();
  useEffect(() => {}, [i18n.language]);

  const policySections = [
    "privacyPolicy.definition",
    "privacyPolicy.terms-and-conditions",
    "privacyPolicy.service-description",
    "privacyPolicy.contractual-limitations",
    "privacyPolicy.intellectual-property",
    "privacyPolicy.limitations-of-liability",
    "privacyPolicy.personal-data-management",
    "privacyPolicy.data-collection-responsible",
    "privacyPolicy.data-processing-types",
    "privacyPolicy.access-rectification-opposition-rights",
    "privacyPolicy.non-disclosure-of-personal-data",
    "privacyPolicy.incident-notification",
    "privacyPolicy.security",
    "privacyPolicy.hyperlinks-cookies-tags",
    "privacyPolicy.cookies",
    "privacyPolicy.internet-tags",
    "privacyPolicy.applicable-law",
  ];

  const transComponents = {
    br: <br />,
    h2: <h2 key="0" />,
    h3: <h3 key="1" />,
    bold: <span className="font-bold" key="2" />,
    highlight: <span style={{ backgroundColor: "#E4EDF1" }} key="3" />,
    a: <a key="4" className="text-primary underline" />,
    leftblue: <span className="leftblue" key="5" />,
    blue: <span className="font-bold" style={{ color: "#37749E" }} key="6" />,
    square: <span className="square-blue" key="7" />,
    ul: <ul key="8" />,
    li: <li key="9" />,
    nl: (
      <>
        <br />
        <br />
      </>
    ),
  };

  return (
    <div>
      <Head>
        <title>{t("privacyPolicy.title")}</title>
        <meta name="description" content={t("privacyPolicy.pageDescriptionSEO")} />
      </Head>
      <PageJumbo titleKey={t("privacyPolicy.title")} textKey={t("privacyPolicy.intro")} />
      <div className="container pb-12">
        {policySections.map((sectionKey, index) => (
          <div className="mt-8" key={index}>
            <Trans i18nKey={sectionKey} components={transComponents} />
          </div>
        ))}
      </div>
    </div>
  );
}
