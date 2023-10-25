import React from "react";
import { Trans, useTranslation } from "react-i18next";
import ExpertiseCard from "@/components/ExpertiseCard"; // Assurez-vous de créer ce composant

const ExpertiseJumbo = () => {
  const { t } = useTranslation();

  return (
    <div className="expertise-background">
      <div className="container text-center pt-24">
        <h1 className="underblue">{t("NOTRE EXPERTISE")}</h1>
        <p>
          {t(
            "Our goal is very simple : To provide successful businesses, individuals and entreprenors with high-level tailored services to solve their problems. The law is constantely evolving, along with related developments in your industry and the larger economy, may affect you and your business. That’s why we are making a point to always go further, work smarter and always act swiftly with your best interest in mind and greatest attention to detail."
          )}
        </p>
      </div>
    </div>
  );
};

export default function WhoWeAre() {
  const { t } = useTranslation();
  const expertiseItems = [
    { image: "/assets/home/image-test.jpg", title: t("Droit social & Restructurations") },
    { image: "/assets/home/image-test.jpg", title: t("Fusions & acquisitions") },
    { image: "/assets/home/image-test.jpg", title: t("Corporate & Regulatory") },
    { image: "/assets/home/image-test.jpg", title: t("Contentieux,\n Médiation & Arbitrage international") },
    { image: "/assets/home/image-test.jpg", title: t("Procédures collectives") },
    { image: "/assets/home/image-test.jpg", title: t("Droit commercial & Concurrence") },
    { image: "/assets/home/image-test.jpg", title: t("IP, Droit du numérique, Tech & Data") },
    { image: "/assets/home/image-test.jpg", title: t("Droit pénaldes affaires") },
  ];

  return (
    <div>
      <ExpertiseJumbo />
      <div className="container py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {expertiseItems.map((item, index) => (
            <ExpertiseCard key={index} image={item.image} title={item.title} />
          ))}
        </div>
      </div>
    </div>
  );
}
