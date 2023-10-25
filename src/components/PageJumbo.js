import React from "react";
import { Trans, useTranslation } from "react-i18next";

export default function PageJumbo({ titleKey, textKey }) {
  const { t } = useTranslation();
  return (
    <div className="expertise-background">
      <div className="container text-center pt-24">
        <h1 className="underblue">{t(titleKey)}</h1>
        {textKey && (
          <p>
            <Trans i18nKey={textKey} components={[<span className="font-bold" key="0"></span>]} />
          </p>
        )}
      </div>
    </div>
  );
}
