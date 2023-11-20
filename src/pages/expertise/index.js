import React from "react";
import { useTranslation } from "react-i18next";
import ExpertiseCard from "@/components/ExpertiseCard";
import PageJumbo from "@/components/PageJumbo";
import Link from "next/link";
import fr from "../../lang/fr.json";

export default function Expertise() {
  const { t } = useTranslation();

  const expertiseItems = t("expertise.expertiseList", { returnObjects: true });

  return (
    <div className="container mx-auto">
      <PageJumbo titleKey={t("expertise.notreExpertise")} textKey={t("expertise.ourGoal")} />
      <div className="py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {expertiseItems.map((item, index) => (
            <Link href={`/expertise/${item.slug}`} key={index}>
              <ExpertiseCard image={item.image} title={t(item.title)} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
