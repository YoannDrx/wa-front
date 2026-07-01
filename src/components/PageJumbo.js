import React from "react";
import { Trans, useTranslation } from "react-i18next";
import AnimatedSection from "@/components/AnimatedSection";

export default function PageJumbo({ titleKey, textKey, backgroundColor }) {
  const { t } = useTranslation();

  const containerStyle = {
    backgroundColor: backgroundColor ? backgroundColor : "transparent",
  };

  return (
    <div className="relative isolate my-6 overflow-hidden rounded-[6px] border border-primary/10 px-4 py-12 text-center shadow-[0_24px_70px_rgba(17,50,72,0.07)] md:my-8 md:py-16" style={containerStyle}>
      <div className="wa-blueprint absolute inset-0 -z-10 opacity-70" aria-hidden="true" />
      <div className="absolute left-8 top-8 -z-10 h-24 w-px bg-primary/20" aria-hidden="true" />
      <div className="absolute bottom-8 right-8 -z-10 h-px w-28 bg-primary/20" aria-hidden="true" />
      <AnimatedSection duration={0.92}>
        <h1 className="underblue mx-auto max-w-5xl text-wa-ink">{t(titleKey)}</h1>
      </AnimatedSection>
      {textKey && (
        <AnimatedSection delay={0.1} className="mx-auto max-w-5xl rounded-[6px] border border-primary/15 bg-white/[0.82] p-5 text-[17px] leading-8 shadow-[0_18px_50px_rgba(17,50,72,0.08)] backdrop-blur md:p-8">
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
        </AnimatedSection>
      )}
    </div>
  );
}
