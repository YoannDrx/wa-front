import React from "react";
import { useTranslation } from "react-i18next";
import ExpertiseCard from "@/components/ExpertiseCard";
import PageJumbo from "@/components/PageJumbo";
import Link from "next/link";
import Head from "next/head";
import RevealGroup from "@/components/RevealGroup";

export default function Expertise() {
  const { t } = useTranslation();

  const expertiseItems = t("expertise.expertiseList", { returnObjects: true });

  return (
    <div className="container mx-auto">
      <Head>
        <title>{t("Expertise")}</title>
        <meta name="description" content={t("expertise.pageDescriptionSEO")} />
      </Head>
      <PageJumbo titleKey={t("expertise.notreExpertise")} textKey={t("expertise.ourGoal")} backgroundColor="#F7FAFB" />
      <div className="pb-14">
        <RevealGroup className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-4" childClassName="h-full">
          {expertiseItems.map((item, index) => (
            <Link href={`/expertise/${t(`${item.slug}`)}/${item.id}`} key={index} className="block h-full">
              <ExpertiseCard image={item.image} title={t(item.title)} index={index} />
            </Link>
          ))}
        </RevealGroup>
      </div>
    </div>
  );
}
