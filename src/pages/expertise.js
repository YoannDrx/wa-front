import React from "react";
import { useTranslation } from "react-i18next";
import ExpertiseCard from "@/components/ExpertiseCard";
import PageJumbo from "@/components/PageJumbo";

export default function Expertise() {
  const { t } = useTranslation();

  const expertiseItems = [
    { image: "/assets/expertises/droit-social.png", title: t("DROIT SOCIAL & RESTRUCTURATION") },
    { image: "/assets/expertises/fusions-acquisitions.png", title: t("FUSIONS & ACQUISITIONS") },
    { image: "/assets/expertises/corporate.png", title: t("CORPORATE & RÉGLEMENTAIRE") },
    { image: "/assets/expertises/contentieux.png", title: t("CONTENTIEUX, MÉDIATION & ARBITRAGE INTERNATIONAL") },
    { image: "/assets/expertises/procedures-collectives.png", title: t("PROCÉDURES COLLECTIVES") },
    { image: "/assets/expertises/droit-commercial.png", title: t("DROIT COMMERCIAL & CONCURRENCE") },
    { image: "/assets/expertises/ip-it.png", title: t("IP, DROIT DU NUMÉRIQUE, TECH & DATA") },
    { image: "/assets/expertises/droit-penal.png", title: t("DROIT PÉNAL DES AFFAIRES") },
  ];

  return (
    <div>
      <PageJumbo titleKey="NOTRE EXPERTISE" textKey="ourGoal" />
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
