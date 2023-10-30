import React from "react";
import { Trans, useTranslation } from "react-i18next";

export default function PageJumbo({ titleKey, textKey, backgroundColor }) {
  const { t } = useTranslation();

  const containerStyle = {
    backgroundColor: backgroundColor ? backgroundColor : "#FFF",
  };

  return (
    <div style={containerStyle}>
      <div className="container text-center pt-24  pb-12">
        <h1 className="underblue">{t(titleKey)}</h1>
        {textKey && (
          <p>
            <Trans
              i18nKey={textKey}
              components={{
                bold: <span className="font-bold" key="0" />,
                nl: (
                  <>
                    <br />
                    <br />
                  </>
                ),
              }}
            />{" "}
          </p>
        )}
      </div>
    </div>
  );
}
