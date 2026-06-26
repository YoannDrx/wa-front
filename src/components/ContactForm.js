import Button from "@/components/Button";
import { apiClient } from "@/services/apiClient";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

const appendFiles = (formData, key, files) => {
  Array.from(files || []).forEach((file) => {
    formData.append(key, file);
  });
};

const fieldClassName =
  "w-full border border-gray-600 bg-[#2E2E2E] px-3 py-3 text-white placeholder:text-gray-500 focus:border-primary focus:outline-none";

const ContactForm = () => {
  const { t } = useTranslation();
  const [status, setStatus] = useState("idle");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (values) => {
    setStatus("sending");

    try {
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("email", values.email);
      formData.append("subject", values.subject);
      formData.append("message", values.message);
      appendFiles(formData, "attachment", values.attachment);

      await apiClient.post("/contacts", formData);
      reset();
      setStatus("success");
    } catch (error) {
      console.error("Error sending contact form:", error);
      setStatus("error");
    }
  };

  return (
    <div className="flex min-w-0 justify-center overflow-hidden px-4 py-10">
      <div className="min-w-0 w-full max-w-xl">
        <h3 className="underblue mb-8 text-center text-white">{t("contact.contactForm.restonEnContact")}</h3>
        <form onSubmit={handleSubmit(onSubmit)} id="contact-form" className="space-y-5">
          <div>
            <label className="mb-2 block text-xs font-bold text-neutral-200" htmlFor="name">
              {t("contact.contactForm.name")}
            </label>
            <input
              {...register("name", { required: t("errorMessages.requiredName") })}
              className={fieldClassName}
              id="name"
              type="text"
              autoComplete="name"
              placeholder="John Doe"
            />
            {errors.name && <span className="mt-2 block text-xs text-red-300">{errors.name.message}</span>}
          </div>

          <div>
            <label className="mb-2 block text-xs font-bold text-neutral-200" htmlFor="email">
              {t("contact.contactForm.email")}
            </label>
            <input
              {...register("email", {
                required: t("errorMessages.requiredEmail"),
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: t("errorMessages.invalidEmail"),
                },
              })}
              className={fieldClassName}
              id="email"
              type="email"
              autoComplete="email"
              placeholder="john@doe.com"
            />
            {errors.email && <span className="mt-2 block text-xs text-red-300">{errors.email.message}</span>}
          </div>

          <div>
            <label className="mb-2 block text-xs font-bold text-neutral-200" htmlFor="subject">
              {t("career.career-contact-form.placeholder.subject")}
            </label>
            <input
              {...register("subject", { required: t("errorMessages.requiredSubject") })}
              className={fieldClassName}
              id="subject"
              type="text"
            />
            {errors.subject && <span className="mt-2 block text-xs text-red-300">{errors.subject.message}</span>}
          </div>

          <div>
            <label className="mb-2 block text-xs font-bold text-neutral-200" htmlFor="message">
              {t("contact.contactForm.message")}
            </label>
            <textarea
              {...register("message", { required: t("errorMessages.requiredMessage") })}
              className={fieldClassName}
              id="message"
              placeholder={t("contact.contactForm.placeholderMessage")}
              rows={5}
            />
            {errors.message && <span className="mt-2 block text-xs text-red-300">{errors.message.message}</span>}
          </div>

          <div>
            <label className="mb-2 block text-xs font-bold text-neutral-200" htmlFor="attachment">
              {t("formStatus.optionalAttachment")}
            </label>
            <input
              {...register("attachment")}
              className="w-full border border-gray-600 bg-[#2E2E2E] px-3 py-3 text-sm text-white file:mr-4 file:border-0 file:bg-white file:px-4 file:py-2 file:text-primary"
              id="attachment"
              type="file"
            />
          </div>

          {status === "success" && <p className="mb-0 text-sm text-green-200">{t("formStatus.success")}</p>}
          {status === "error" && <p className="mb-0 text-sm text-red-200">{t("formStatus.error")}</p>}

          <div className="flex justify-end">
            <Button type="submit" className="min-w-40" color="primary" disabled={status === "sending"}>
              {status === "sending" ? t("formStatus.sending") : t("Envoyer")}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
