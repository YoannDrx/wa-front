import React from "react";
import Button from "@/components/Button";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      console.log("Form Data:", data);
      // TODO : emailjs ?
      reset();
    } catch (error) {
      console.log("Erreur lors de l'envoi du formulaire :", error);
    }
  };

  const requiredName = t("errorMessages.requiredName");
  const requiredEmail = t("errorMessages.requiredEmail");
  const requiredMessage = t("errorMessages.requiredMessage");

  return (
    <div className="py-10 flex justify-center">
      <div className="md:w-2/3 sm:w-2/3 xs:w-2/3">
        <h3 className="underblue text-white text-center mb-5">{t("contact.contactForm.restonEnContact")}</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-neutral-200 text-xs font-bold mb-2" htmlFor="name">
              {t("contact.contactForm.name")}
            </label>
            <input
              {...register("name", { required: requiredName })}
              className="bg-[#2E2E2E] text-white placeholder-gray-600 w-full py-2 px-3 border border-gray-600 focus:border-primary rounded"
              id="name"
              type="text"
              placeholder="John Doe"
            />
            {errors.name && <span className="text-xs text-red-500">{errors.name.message}</span>}
          </div>
          <div className="mb-4">
            <label className="block text-neutral-200 text-xs font-bold mb-2" htmlFor="email">
              {t("contact.contactForm.email")}
            </label>
            <input
              {...register("email", { required: requiredEmail })}
              className="bg-[#2E2E2E] text-white placeholder-gray-600 w-full py-2 px-3 border border-gray-600 focus:border-primary rounded"
              id="email"
              type="email"
              placeholder="John@Doe.com"
            />
            {errors.email && <span className="text-xs text-red-500">{errors.email.message}</span>}
          </div>
          <div className="mb-4">
            <label className="block text-neutral-200 text-xs font-bold mb-2" htmlFor="message">
              {t("contact.contactForm.message")}
            </label>
            <textarea
              {...register("message", { required: requiredMessage })}
              className="bg-[#2E2E2E] text-white placeholder-gray-600 w-full py-2 px-3 border border-gray-600 focus:border-primary rounded"
              id="message"
              placeholder={t("contact.contactForm.placeholderMessage")}
              rows="4"></textarea>
            {errors.message && <span className="text-xs text-red-500">{errors.message.message}</span>}
          </div>
          <div className="flex justify-end">
            <Button type="submit" className={"w-40"} color="primary">
              {t("Envoyer")}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
