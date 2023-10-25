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
          <Trans i18nKey="ourGoal" components={[<span className="font-bold" key="0"></span>]} />
        </p>
      </div>
    </div>
  );
};

export default function WhoWeAre() {
  const { t } = useTranslation();
  const expertiseItems = [
    { image: "/assets/home/image-test.jpg", title: t("DROIT SOCIAL & RESTRUCTURATION") },
    { image: "/assets/home/image-test.jpg", title: t("FUSIONS & ACQUISITIONS") },
    { image: "/assets/home/image-test.jpg", title: t("CORPORATE & RÉGLEMENTAIRE") },
    { image: "/assets/home/image-test.jpg", title: t("CONTENTIEUX, MÉDIATION & ARBITRAGE INTERNATIONAL") },
    { image: "/assets/home/image-test.jpg", title: t("PROCÉDURES COLLECTIVES") },
    { image: "/assets/home/image-test.jpg", title: t("DROIT COMMERCIAL & CONCURRENCE") },
    { image: "/assets/home/image-test.jpg", title: t("IP, DROIT DU NUMÉRIQUE, TECH & DATA") },
    { image: "/assets/home/image-test.jpg", title: t("DROIT PÉNAL DES AFFAIRES") },
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
