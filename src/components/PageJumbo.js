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
                nl: (
                  <>
                    <br />
                    <br />
                  </>
                ),
                bold: <span className="font-bold" key="0" />,
                highlight: <span style={{ backgroundColor: "#E4EDF1" }} key="1" />,
                a: <a key="2" />,
                leftblue: <span className="leftblue" key="2" />,
                blue: <span className="font-bold" style={{ color: "#37749E" }} key="3" />,
              }}
            />
          </p>
        )}
      </div>
    </div>
  );
}
