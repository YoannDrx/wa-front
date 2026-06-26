import { apiClient } from "@/services/apiClient";
import { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { useTranslation } from "react-i18next";
import Button from "./Button";

const fieldClassName = "w-full border border-white/30 bg-white p-3 text-black focus:border-neutral focus:outline-none";

const appendFiles = (formData, key, files) => {
  Array.from(files || []).forEach((file) => {
    formData.append(key, file);
  });
};

const CareerContactForm = () => {
  const { t } = useTranslation();
  const [status, setStatus] = useState("idle");
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
    control,
  } = useForm();

  const uploadedCV = useWatch({ control, name: "cv" });
  const uploadedLetter = useWatch({ control, name: "letter" });

  const onSubmit = async (values) => {
    setStatus("sending");

    try {
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("email", values.email);
      formData.append("subject", values.subject);
      formData.append("message", values.message || values.subject);
      appendFiles(formData, "cv", values.cv);
      appendFiles(formData, "letter", values.letter);

      await apiClient.post("/contacts", formData);
      reset();
      setStatus("success");
    } catch (error) {
      console.error("Error sending career form:", error);
      setStatus("error");
    }
  };

  return (
    <div className="bg-primary p-6 text-white md:p-8">
      <h2 className="mb-2">{t("career.career-contact-form.title")}</h2>
      <p className="text-white/90">{t("career.career-contact-form.text")}</p>
      <form className="mt-6 space-y-5" onSubmit={handleSubmit(onSubmit)} id="career-contact-form">
        <div>
          <input
            className={fieldClassName}
            type="text"
            autoComplete="name"
            placeholder={t("career.career-contact-form.placeholder.name")}
            {...register("name", { required: t("errorMessages.requiredName") })}
          />
          {errors.name && <span className="mt-2 block text-xs text-red-100">{errors.name.message}</span>}
        </div>

        <div>
          <input
            className={fieldClassName}
            type="email"
            autoComplete="email"
            placeholder={t("career.career-contact-form.placeholder.email")}
            {...register("email", {
              required: t("errorMessages.requiredEmail"),
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: t("errorMessages.invalidEmail"),
              },
            })}
          />
          {errors.email && <span className="mt-2 block text-xs text-red-100">{errors.email.message}</span>}
        </div>

        <div>
          <input
            className={fieldClassName}
            type="text"
            placeholder={t("career.career-contact-form.placeholder.subject")}
            {...register("subject", { required: t("errorMessages.requiredSubject") })}
          />
          {errors.subject && <span className="mt-2 block text-xs text-red-100">{errors.subject.message}</span>}
        </div>

        <div>
          <textarea
            className={fieldClassName}
            rows={5}
            placeholder={t("career.career-contact-form.placeholder.message")}
            {...register("message", { required: t("errorMessages.requiredMessage") })}
          />
          {errors.message && <span className="mt-2 block text-xs text-red-100">{errors.message.message}</span>}
        </div>

        <div>
          <label className="mb-2 block text-white">{t("career.career-contact-form.placeholder.cv")}</label>
          <input
            className="w-full border border-white/30 bg-white p-3 text-sm text-black file:mr-4 file:border-0 file:bg-primary file:px-4 file:py-2 file:text-white"
            type="file"
            accept=".pdf,.doc,.docx"
            {...register("cv", { required: t("errorMessages.requiredCV") })}
          />
          {uploadedCV?.length > 0 && <span className="mt-2 block text-xs text-white/80">{uploadedCV[0].name}</span>}
          {errors.cv && <span className="mt-2 block text-xs text-red-100">{errors.cv.message}</span>}
        </div>

        <div>
          <label className="mb-2 block text-white">{t("career.career-contact-form.placeholder.letter")}</label>
          <input
            className="w-full border border-white/30 bg-white p-3 text-sm text-black file:mr-4 file:border-0 file:bg-primary file:px-4 file:py-2 file:text-white"
            type="file"
            accept=".pdf,.doc,.docx"
            {...register("letter", { required: t("errorMessages.requiredLetter") })}
          />
          {uploadedLetter?.length > 0 && <span className="mt-2 block text-xs text-white/80">{uploadedLetter[0].name}</span>}
          {errors.letter && <span className="mt-2 block text-xs text-red-100">{errors.letter.message}</span>}
        </div>

        {status === "success" && <p className="mb-0 text-sm text-green-100">{t("formStatus.success")}</p>}
        {status === "error" && <p className="mb-0 text-sm text-red-100">{t("formStatus.error")}</p>}

        <div className="flex justify-center md:justify-end">
          <Button type="submit" className="min-w-40 bg-white font-bold text-primary hover:bg-light-blue" color="ghost" disabled={status === "sending"}>
            {status === "sending" ? t("formStatus.sending") : t("Envoyer")}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CareerContactForm;
