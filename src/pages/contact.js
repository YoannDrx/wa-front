import React from "react";
import PageJumbo from "@/components/PageJumbo";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import { Trans, useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();
  return (
    <div>
      <PageJumbo titleKey="INFORMATIONS PRATIQUES" textKey="" />
      <div className="container py-20 flex">
        <div className="w-1/2 px-5">
          <h2 className="text-xl font-bold text-primary">{t("Comment nous trouver")} ?</h2>
          <p className="text-md leading-normal">
            <Trans i18nKey="info-contact" />
          </p>
          <p className="text-md leading-normal">
            <span className="font-bold">{t("Aéroport Charles de Gaulle")} :</span>
            <br />
            {t("Taxi (30 minutes)")}
            <br />
            {t("Le car Air France en direction de l'ETOILE (30 minutes de trajet et 5 minutes à pied)")}
          </p>
          <p className="text-md leading-normal">
            <span className="font-bold">{t("Aéroport d'Orly ")}:</span>
            <br />
            {t("Taxi (40 minutes)")}
            <br />
            {t("Hôtels : De nombreux hôtels à proximité. Réservation possible.")}
          </p>
        </div>
        <div className="w-1/2 px-5">
          <Image src="/assets/contact/map.png" alt="map" width={400} height={400} />
        </div>
      </div>

      <footer className="bg-[#2E2E2E] flex">
        <ContactForm />
        <div className="w-1/2 px-5 relative">
          <iframe
            className="absolute top-0 left-0 h-full w-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6176.75251270067!2d2.2850211641604816!3d48.87446167385674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fed65b1cda3%3A0xd519c95bdb319908!2s26%20Av.%20de%20la%20Grande%20Arm%C3%A9e%2C%2075017%20Paris!5e0!3m2!1sen!2sfr!4v1698349495020!5m2!1sen!2sfr"
            width="800"
            height="600"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            style={{ border: "0", filter: "grayscale(100%)" }}
            allowFullScreen=""></iframe>
        </div>
      </footer>
    </div>
  );
}
