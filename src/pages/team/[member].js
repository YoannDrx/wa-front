import React from "react";
import { useRouter } from "next/router";
import PageJumbo from "@/components/PageJumbo";
import Image from "next/image";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { Trans, useTranslation } from "react-i18next";
import Head from "next/head";

const toCamelCase = (str) => {
  if (!str) {
    return "";
  }
  return str.replace(/-([a-z])/g, function (g) {
    return g[1].toUpperCase();
  });
};

const recognitionLogos = {
  brunoWeil: {
    src: "/assets/team/best-lawyers-bruno-weil-2027.png",
    alt: "Bruno Weil recognized by Best Lawyers 2027",
  },
  mathildeHouetWeil: {
    src: "/assets/team/best-lawyers-mathilde-houet-weil-2027.png",
    alt: "Mathilde Houet Weil recognized by Best Lawyers 2027",
  },
};

const Member = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const { member } = router.query;

  const memberKey = toCamelCase(member);
  const memberData = t(`partenaire.members.${memberKey}`, { returnObjects: true });
  const recognitionLogo = recognitionLogos[memberKey];

  if (!memberData || !memberData.name) {
    return <div />;
  }

  return (
    <div>
      <Head>
        <title>{memberData.name}</title>
        <meta
          name="description"
          content={`${memberData.name}, ${memberData.title} - En savoir plus sur les compétences et l'expérience de notre partenaire chez Weil & Associés.`}
        />
      </Head>
      <PageJumbo titleKey={memberData.name} />
      <div className="container grid gap-8 py-12 md:grid-cols-2">
        <div className="mb-4 flex w-full flex-col items-center md:mb-0 md:items-start">
          <div className="w-full overflow-hidden shadow-lg">
            <div className="relative aspect-[2/3] w-full">
              <Image
                src={memberData.image}
                alt={`${memberData.name}`}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover object-top"
              />
            </div>
            <div className="flex w-full flex-col justify-center bg-gray-800 text-gray-300">
              <div className="mx-8">
                <h4 className="leftblue mt-4 text-2xl">{t("partenaire.contact")}</h4>
                <div className="my-4">
                  <div className="flex items-center">
                    <FaEnvelope className="mr-2" /> {memberData.email}
                  </div>
                  <div className="flex items-center mt-2">
                    <FaPhone className="mr-2" /> {memberData.phone}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full text-left">
          {recognitionLogo && (
            <div className="mb-6 flex justify-end">
              <Image
                src={recognitionLogo.src}
                alt={recognitionLogo.alt}
                width={3000}
                height={908}
                sizes="(min-width: 768px) 40vw, 100vw"
                className="h-auto w-full max-w-md"
              />
            </div>
          )}
          <h2 className="text-primary mb-1">{memberData.title}</h2>
          <p className="text-xs text-gray-500">{memberData.label}</p>
          <div className="bg-gray-200 py-4 px-4">
            <div className="flex flex-col md:flex-row justify-around">
              <div>
                <h4 className="font-bold square-blue">{t("partenaire.areaOfResponsibility")}</h4>
                <ul className="ml-4 mt-1">
                  {memberData.responsability.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-4 md:mt-0">
                <h4 className="font-bold square-blue">{t("partenaire.languages")}</h4>
                <ul className="ml-4 mt-1">
                  {memberData.languages.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <p className="mt-8">
            <Trans
              i18nKey={memberData.intro}
              components={{
                nl: (
                  <>
                    <br />
                    <br />
                  </>
                ),
                bold: <span className="font-bold" key="0" />,
                highlight: <span style={{ backgroundColor: "#E4EDF1" }} key="1" />,
                a: <a key="2" />,
                leftblue: <span className="leftblue" key="2" />,
                blue: <span className="font-bold" style={{ color: "#37749E" }} key="3" />,
                square: <span className="square-blue" key="4" />,
              }}
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Member;
