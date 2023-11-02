import React from "react";
import { useTranslation } from "react-i18next";
import ExpertiseCard from "@/components/ExpertiseCard";
import PageJumbo from "@/components/PageJumbo";
import Link from "next/link";
import { expertiseItems } from "@/data/expertiseData";

export default function Expertise() {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto">
      <PageJumbo titleKey="expertise.notreExpertise" textKey={t("expertise.ourGoal")} />
      <div className="container py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {expertiseItems.map((item, index) => (
            <Link href={`/expertise/${t(item.id)}`} key={index}>
              <ExpertiseCard image={item.image} title={t(item.titleKey)} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
