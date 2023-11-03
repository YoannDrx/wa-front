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
  const requiredCV = t("errorMessages.requiredCV");
  const requiredLetter = t("errorMessages.requiredLetter");

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm();

  const uploadedCV = watch("cv");
  const uploadedLetter = watch("letter");

  const onSubmit = async (data) => {
    try {
      // TODO : emailjs ?
      console.log(data);
      reset();
    } catch (error) {
      console.log("Erreur lors de l'envoi du formulaire :", error);
    }
  };

  const removeFile = (fieldName) => {
    setValue(fieldName, null);
  };

  return (
    <div className="bg-primary p-8 ">
      <h2 className="mb-1">{t("career.career-contact-form.title")}</h2>
      <p className="text-white">{t("career.career-contact-form.text")}</p>
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
          <label className="block text-white mb-2">{t("career.career-contact-form.placeholder.cv")}</label>
          <div className="flex items-center">
            <input
              className="w-full p-2 text-black bg-white focus:border-2 focus:border-gray-800"
              type="file"
              accept=".pdf,.doc,.docx"
              {...register("cv", { required: requiredCV })}
            />
            {uploadedCV && uploadedCV.length > 0 && (
              <button type="button" className="ml-2 text-red-500 hover:text-red-600" onClick={() => removeFile("cv")}>
                {t("Supprimer")}
              </button>
            )}
          </div>
          {errors.cv && <span className="text-xs text-red-500">{errors.cv.message}</span>}
        </div>

        <div className="mb-4">
          <label className="block text-white mb-2">{t("career.career-contact-form.placeholder.letter")}</label>
          <div className="flex items-center">
            <input
              className="w-full p-2 text-black bg-white focus:border-2 focus:border-gray-800"
              type="file"
              accept=".pdf,.doc,.docx"
              {...register("letter", { required: requiredLetter })}
            />
            {uploadedLetter && uploadedLetter.length > 0 && (
              <button type="button" className="ml-2 text-red-500 hover:text-red-600" onClick={() => removeFile("letter")}>
                {t("Supprimer")}
              </button>
            )}
          </div>
          {errors.letter && <span className="text-xs text-red-500">{errors.letter.message}</span>}
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
