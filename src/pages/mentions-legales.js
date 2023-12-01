import React, { useEffect } from "react";
import { useTranslation, Trans } from "react-i18next";
import PageJumbo from "@/components/PageJumbo";
export default function MentionsLegales() {
  const { t } = useTranslation();
  useEffect(() => {}, []);

  const legalSections = ["legalMentions.juridicalInfo", "legalMentions.companyEstablishments", "legalMentions.additionalInfo"];

  const transComponents = {
    h2: <h2 key="0" />,
    h3: <h3 key="1" />,
    p: <p key="2" />,
    strong: <strong key="3" />,
    a: <a key="4" className="text-primary underline" />,
    ul: <ul key="5" />,
    li: <li key="6" />,
    square: <span className="square-blue" key="7" />,
    table: <table className="table" key="8" />,
    th: <th key="9" />,
    td: <td key="10" />,
    thead: <thead key="11" />,
    tbody: <tbody key="12" />,
    tr: <tr key="13" />,
    br: <br key="14" />,
    nl: (
      <>
        <br />
        <br />
      </>
    ),
    bold: <span className="font-bold" key="15" />,
    highlight: <span style={{ backgroundColor: "#E4EDF1" }} key="16" />,
    a: <a key="4" className="text-primary underline" />,
    leftblue: <span className="leftblue" key="17" />,
    blue: <span className="font-bold" style={{ color: "#37749E" }} key="18" />,
  };

  return (
    <div>
      <PageJumbo titleKey={t("legalMentions.title")} textKey={"legalMentions.intro"} />

      <div className="container pb-12">
        {legalSections.map((sectionKey, index) => (
          <div className="mt-8" key={index}>
            <Trans i18nKey={sectionKey} components={transComponents} />
          </div>
        ))}
      </div>
    </div>
  );
}
