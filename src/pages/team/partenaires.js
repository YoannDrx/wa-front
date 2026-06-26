import React from "react";
import { useTranslation } from "react-i18next";
import PageJumbo from "@/components/PageJumbo";
import TeamCard from "@/components/TeamCard";
import Head from "next/head";

export default function Partners() {
  const { t } = useTranslation();

  const teamMembers = t("partenaire.members", { returnObjects: true });
  const teamMemberKeys = Object.keys(teamMembers);

  return (
    <div className="container mx-auto">
      <Head>
        <title>{t("Nos associés")}</title>
        <meta name="description" content={t("partenaire.pageDescriptionSEO")} />
      </Head>
      <PageJumbo titleKey={t("partenaire.nosAssocies")} textKey={t("partenaire.teamPresentation")} backgroundColor="#E4EDF1" />
      <div className="py-12">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {teamMemberKeys.map((key, index) => {
            const member = teamMembers[key];
            return (
              <TeamCard
                key={index}
                image={member.image}
                name={member.name}
                references={member.title}
                description={member.references}
                id={member.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
