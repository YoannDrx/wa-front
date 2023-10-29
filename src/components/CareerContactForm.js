import React from "react";
import { useTranslation } from "react-i18next";

const CareerContactForm = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-primary p-8 ">
      <h2 className="text-2xl text-neutral mb-1">{t("career.career-contact-form.title")}</h2>
      <h3 className="text-sm text-white">{t("career.career-contact-form.text")}</h3>
      <form className="mt-4">
        <div className="mb-4">
          <input
            className="w-full p-2  text-black bg-white focus:border-2 focus:border-gray-800 placeholder-gray-400 text-sm"
            type="text"
            placeholder={t("career.career-contact-form.placeholder.name")}
          />
        </div>
        <div className="mb-4">
          <input
            className="w-full p-2 text-black bg-white focus:border-2 focus:border-gray-800 placeholder-gray-400 "
            type="email"
            placeholder={t("career.career-contact-form.placeholder.email")}
          />
        </div>
        <div className="mb-4">
          <input
            className="w-full p-2 text-black bg-white focus:border-2 focus:border-gray-800 placeholder-gray-400"
            type="text"
            placeholder={t("career.career-contact-form.placeholder.subject")}
          />
        </div>
        <div className="mb-4">
          <textarea
            className="w-full p-2  text-black bg-white focus:border-2 focus:border-gray-800"
            rows="4"
            placeholder={t("career.career-contact-form.placeholder.message")}
          />
        </div>
        <div className="mt-4">
          <button className="w-full p-2 bg-white text-primary  hover:bg-gray-300">
            {t("career.career-contact-form.placeholder.send")}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CareerContactForm;
