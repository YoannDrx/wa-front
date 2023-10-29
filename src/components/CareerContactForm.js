import React from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import Button from "./Button";

const CareerContactForm = () => {
  const { t } = useTranslation();

  const requiredName = t("errorMessages.requiredName");
  const requiredEmail = t("errorMessages.requiredEmail");
  const invalidEmail = t("errorMessages.invalidEmail");
  const requiredSubject = t("errorMessages.requiredSubject");
  const requiredMessage = t("errorMessages.requiredMessage");

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      // TODO : emailjs ?
      console.log(data);
      reset();
    } catch (error) {
      console.log("Erreur lors de l'envoi du formulaire :", error);
    }
  };

  return (
    <div className="bg-primary p-8 ">
      <h2 className="text-2xl text-neutral mb-1">{t("career.career-contact-form.title")}</h2>
      <h3 className="text-sm text-white">{t("career.career-contact-form.text")}</h3>
      <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <input
            className="w-full p-2  text-black bg-white focus:border-2 focus:border-gray-800"
            type="text"
            placeholder={t("career.career-contact-form.placeholder.name")}
            {...register("name", { required: requiredName })}
          />
          {errors.name && <span className="text-xs text-red-500">{errors.name.message}</span>}
        </div>
        <div className="mb-4">
          <input
            className="w-full p-2  text-black bg-white focus:border-2 focus:border-gray-800"
            type="email"
            placeholder={t("career.career-contact-form.placeholder.email")}
            {...register("email", {
              required: requiredEmail,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: invalidEmail,
              },
            })}
          />
          {errors.email && <span className="text-xs text-red-500">{errors.email.message}</span>}
        </div>
        <div className="mb-4">
          <input
            className="w-full p-2  text-black bg-white focus:border-2 focus:border-gray-800"
            type="text"
            placeholder={t("career.career-contact-form.placeholder.subject")}
            {...register("subject", { required: requiredSubject })}
          />
          {errors.subject && <span className="text-xs text-red-500">{errors.subject.message}</span>}
        </div>
        <div className="mb-4">
          <textarea
            className="w-full p-2  text-black bg-white focus:border-2 focus:border-gray-800"
            rows="4"
            placeholder={t("career.career-contact-form.placeholder.message")}
            {...register("message", { required: requiredMessage })}
          />
          {errors.message && <span className="text-xs text-red-500">{errors.message.message}</span>}
        </div>
        <div className="flex xs: justify-center md:justify-end mt-4">
          <Button type="submit" className={"w-40 btn btn-outline bg-white font-bold"} color="primary">
            {t("Envoyer")}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CareerContactForm;
