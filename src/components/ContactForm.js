import React from "react";
import Button from "@/components/Button";
import { useTranslation } from "react-i18next";

const ContactForm = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full py-10 flex justify-center">
      <div className="w-full md:w-2/3 sm:w-2/3 lg:w-1/2">
        <h2 className="text-xl font-bold underblue text-white text-center mb-5">{t("Restons en Contact")}</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-600 text-xs font-bold mb-2" htmlFor="name">
              {t("Nom")}
            </label>
            <input
              className="bg-[#2E2E2E] text-gray-600 placeholder-gray-600 w-full py-2 px-3 border border-gray-600 focus:border-primary rounded"
              id="name"
              type="text"
              placeholder="John Doe"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 text-xs font-bold mb-2" htmlFor="email">
              {t("Email")}
            </label>
            <input
              className="bg-[#2E2E2E] text-gray-600 placeholder-gray-600 w-full py-2 px-3 border border-gray-600 focus:border-primary rounded"
              id="email"
              type="email"
              placeholder="John@Doe.com"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 text-xs font-bold mb-2" htmlFor="message">
              {t("Message")}
            </label>
            <textarea
              className="bg-[#2E2E2E] text-gray-600 placeholder-gray-600 w-full py-2 px-3 border border-gray-600 focus:border-primary rounded"
              id="message"
              placeholder={t("Écrivez ici votre message")}
              rows="4"></textarea>
          </div>
          <div className="flex justify-end">
            <Button className={"w-40"} color="primary">
              {t("Envoyer")}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
