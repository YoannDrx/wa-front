import React from "react";
import PageJumbo from "@/components/PageJumbo";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import { Trans, useTranslation } from "react-i18next";
import Head from "next/head";

export default function Contact() {
  const { t } = useTranslation();
  return (
    <div>
      <Head>
        <title>{t("Contact")}</title>
        <meta name="description" content={t("contact.pageDescriptionSEO")} />
      </Head>
      <div className="container mx-auto">
        <PageJumbo titleKey={t("contact.informationPratique")} />
        <ContactForm />
        <div className="xl:flex  py-12">
          <div className="w-full lg:w-1/2 px-5">
            <h3 className="text-primary mb-4">{t("contact.commentNousTrouvez")} ?</h3>
            <p>
              <Trans
                i18nKey="contact.info-contact"
                components={{
                  nl: (
                    <>
                      <br />
                      <br />
                    </>
                  ),
                  bold: <span className="font-bold" key="0" />,
                }}
              />
            </p>

            <p>
              <span className="font-bold square-blue">{t("contact.Aéroport Charles de Gaulle")} :</span>
              <br />
              {t("contact.Taxi (30 minutes)")}
            </p>
            <p>
              <span className="font-bold square-blue">{t("contact.Aéroport d'Orly")}:</span>
              <br />
              {t("contact.Taxi (40 minutes)")}
            </p>
            <p>
              <span className="font-bold square-blue">{t("contact.Hotel")}:</span>
              <br />
              {t("contact.reservation")}
            </p>
          </div>
          <div className="w-full sm:w-1/2">
            <Image
              src="/assets/contact/arc-de-triomphe.jpg"
              alt="map"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto "
            />
          </div>
        </div>
      </div>

      <footer className="flex flex-col-reverse md:flex-row w-full bg-[#2E2E2E]">
        <iframe
          className="w-full h-[600px]"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6350.389569082013!2d2.2847212605780385!3d48.874604053500796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fed65b1cda3%3A0xd519c95bdb319908!2s26%20Av.%20de%20la%20Grande%20Arm%C3%A9e%2C%2075017%20Paris!5e0!3m2!1sen!2sfr!4v1701725900445!5m2!1sen!2sfr"
          width=""
          height="600"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          style={{ border: "0" }}
        />
      </footer>
    </div>
  );
}
