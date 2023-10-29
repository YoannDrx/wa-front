import React from "react";
import { useTranslation } from "react-i18next";
import PageJumbo from "@/components/PageJumbo";
import TeamCard from "@/components/TeamCard";

export default function Partners() {
  const { t } = useTranslation();

  const teamMembers = [
    {
      image: "/assets/team/Bruno-Weil.png",
      name: "BRUNO WEIL",
      references: "AVOCAT (1999)",
      description: "LL.M. European Business Law (Pallas Consortium)",
    },
    {
      image: "/assets/team/Eric-Weil.png",
      name: "ERIC WEIL",
      references: "Avocat (1996), Rechtsanwalt (1999), Attorney at Law (2002)",
      description: "LL.M. (Berlin et Duke-Law)",
    },
    {
      image: "/assets/team/Patricia-Vincent.png",
      name: "PATRICIA VINCENT",
      references: "Avocat (2005)",
      description: "LL.M. (Postdam)",
    },
    {
      image: "/assets/team/Mathilde-Houet-Weil.png",
      name: "MATHILDE HOUET-WEIL",
      references: "Avocat (1996), Attorney at Law (2002)",
      description: "LL.M. (Duke-Law)",
    },
    {
      image: "/assets/team/Heinz-Weil.png",
      name: "HEINZ WEIL",
      references: "Avocat (1986), Rechtsanwalt (1971)",
      description: "Ancien Président du Conseil des Barreaux de l'Union Européenne (CCBE)",
    },
  ];

  return (
    <div className="container mx-auto">
      <PageJumbo titleKey="partenaire.nosAssocies" textKey="partenaire.teamPresentation" backgroundColor="#E4EDF1" />
      <div className="container py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {teamMembers.map((member, index) => (
            <TeamCard
              key={index}
              image={member.image}
              name={member.name}
              references={member.references}
              description={member.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
