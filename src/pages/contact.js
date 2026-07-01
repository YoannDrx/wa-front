import React from "react";
import PageJumbo from "@/components/PageJumbo";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import { Trans, useTranslation } from "react-i18next";
import Head from "next/head";
import AnimatedSection from "@/components/AnimatedSection";
import ParallaxMedia from "@/components/ParallaxMedia";
import RevealGroup from "@/components/RevealGroup";
import { FaCarSide, FaHotel, FaMapMarkerAlt, FaSubway } from "react-icons/fa";

const contactCards = [
  { icon: FaMapMarkerAlt, title: "26 Avenue", text: "75017 Paris" },
  { icon: FaSubway, titleKey: "contact.commentNousTrouvez", text: "Metro Argentine" },
  { icon: FaCarSide, titleKey: "contact.Aéroport Charles de Gaulle", textKey: "contact.Taxi (30 minutes)" },
  { icon: FaHotel, titleKey: "contact.Hotel", textKey: "contact.reservation" },
];

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
        <div className="grid gap-10 pb-14 xl:grid-cols-[0.92fr_1.08fr] xl:items-center">
          <AnimatedSection direction="left" className="wa-shell px-6 py-7 md:px-9 md:py-10">
            <span className="wa-eyebrow">{t("contact.commentNousTrouvez")}</span>
            <h2 className="mb-6 mt-4 text-primary">{t("contact.commentNousTrouvez")} ?</h2>
            <div className="wa-prose">
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
            </div>

            <RevealGroup className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2" childClassName="h-full" stagger={0.06}>
              {contactCards.map(({ icon: Icon, title, titleKey, text, textKey }) => (
                <div key={title || titleKey} className="flex h-full gap-3 rounded-[6px] border border-primary/[0.12] bg-light-blue/40 p-4">
                  <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-[4px] bg-primary text-white">
                    <Icon aria-hidden="true" />
                  </span>
                  <div>
                    <p className="mb-1 font-bold text-wa-ink">{titleKey ? t(titleKey) : title}</p>
                    <p className="mb-0 text-sm leading-6 text-neutral/75">{textKey ? t(textKey) : text}</p>
                  </div>
                </div>
              ))}
            </RevealGroup>
          </AnimatedSection>
          <AnimatedSection direction="right">
            <ParallaxMedia className="relative overflow-hidden rounded-[6px] shadow-[0_24px_60px_rgba(17,50,72,0.14)]" distance={30}>
              <Image
                src="/assets/contact/arc-de-triomphe.jpg"
                alt="map"
                width={1024}
                height={576}
                sizes="(min-width: 1280px) 50vw, 100vw"
                className="h-[420px] w-full object-cover md:h-[560px]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(11,35,50,0.52))]" />
            </ParallaxMedia>
          </AnimatedSection>
        </div>
      </div>

      <section className="bg-wa-ink py-10 md:py-16">
        <div className="container grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <AnimatedSection direction="left" className="overflow-hidden rounded-[6px] border border-white/10">
            <iframe
              className="h-[420px] min-w-0 w-full lg:h-[640px]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6350.389569082013!2d2.2847212605780385!3d48.874604053500796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fed65b1cda3%3A0xd519c95bdb319908!2s26%20Av.%20de%20la%20Grande%20Arm%C3%A9e%2C%2075017%20Paris!5e0!3m2!1sen!2sfr!4v1701725900445!5m2!1sen!2sfr"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: "0" }}
            />
          </AnimatedSection>
          <AnimatedSection direction="right">
            <ContactForm />
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
