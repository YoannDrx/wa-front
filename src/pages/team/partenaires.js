import React from "react";
import { useTranslation } from "react-i18next";
import PageJumbo from "@/components/PageJumbo";
import TeamCard from "@/components/TeamCard";
import { teamData } from "@/data/teamData";

export default function Partners() {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto">
      <PageJumbo titleKey={t("partenaire.nosAssocies")} textKey={t("partenaire.teamPresentation")} backgroundColor="#E4EDF1" />
      <div className="py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {teamData.map((member, index) => (
            <TeamCard
              key={index}
              image={member.image}
              name={member.name}
              references={member.title}
              description={member.references}
              id={member.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
