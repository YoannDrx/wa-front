import React from "react";
import { Trans } from "react-i18next";

const Section = ({ title, descriptionKey, bgColor, textColor, colSpan, titleColor, className }) => {
  return (
    <div className={`flex flex-col justify-center p-5 ${bgColor} ${textColor} ${className} md:col-span-${colSpan}`}>
      <h2 className={`text-6xl md:text-4xl lg:text-6xl font-bold whitespace-normal break-words mb-5 ${titleColor || textColor}`}>
        {title}
      </h2>
      <Trans i18nKey={descriptionKey} components={[<span className="font-bold" key="0"></span>]} />
    </div>
  );
};

export default Section;
