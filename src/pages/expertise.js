import React from "react";
import { useTranslation } from "react-i18next";
import ExpertiseCard from "@/components/ExpertiseCard";
import PageJumbo from "@/components/PageJumbo";

export default function Expertise() {
  const { t } = useTranslation();

  const expertiseItems = [
    { image: "/assets/expertises/droit-social.png", title: t("expertise.droitSocialrestructuration") },
    { image: "/assets/expertises/fusions-acquisitions.png", title: t("expertise.fusionAquisitions") },
    { image: "/assets/expertises/corporate.png", title: t("expertise.corporateReglement") },
    { image: "/assets/expertises/contentieux.png", title: t("expertise.contentieux") },
    { image: "/assets/expertises/procedures-collectives.png", title: t("expertise.procedureColl") },
    { image: "/assets/expertises/droit-commercial.png", title: t("expertise.droitCommercial") },
    { image: "/assets/expertises/ip-it.png", title: t("expertise.droitNumerique") },
    { image: "/assets/expertises/droit-penal.png", title: t("expertise.droitpenal") },
  ];

  return (
    <div className="container mx-auto">
      <PageJumbo titleKey="expertise.notreExpertise" textKey={t("expertise.ourGoal")} />
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
