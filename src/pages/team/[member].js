import React from "react";
import { useRouter } from "next/router";
import PageJumbo from "@/components/PageJumbo";
import Image from "next/image";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { teamData } from "@/data/teamData";
import { Trans } from "react-i18next";

const Member = () => {
  const router = useRouter();
  const { member } = router.query;

  const memberData = teamData.find((m) => m.id === member) || {};

  if (!memberData.name) {
    return <div>Membre non trouvé</div>;
  }

  return (
    <div>
      <PageJumbo titleKey={memberData.name} />
      <div className="container py-12 flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start mb-4 md:mb-0">
          <div className="relative w-full">
            <Image src={memberData.image} alt={`${memberData.name}`} width={600} height={1200} layout="responsive" />
            <div className="bg-gray-800 text-gray-300 w-full flex justify-center flex-col items-left">
              <div className="mx-8">
                <h4 className="leftblue mt-4 text-2xl">Contact</h4>
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
        <div className="w-full md:w-1/2 text-left">
          <h2 className="text-primary mb-1">{memberData.title}</h2>
          <p className="text-xs text-gray-500">{memberData.label}</p>
          <div className="bg-gray-200 py-4 px-4">
            <div className="flex flex-col md:flex-row justify-around">
              <div>
                <h4 className="font-bold square-blue">Areas of responsibility</h4>
                <ul className="ml-4 mt-1">
                  <li>IP – IT</li>
                  <li>Litigation and Arbitration</li>
                  <li>Corporate Law</li>
                </ul>
              </div>
              <div className="mt-4 md:mt-0">
                <h4 className="font-bold square-blue">Languages</h4>
                <ul className="ml-4 mt-1">
                  <li>French</li>
                  <li>German</li>
                  <li>English</li>
                </ul>
              </div>
            </div>
          </div>
          <p className="mt-8">
            <Trans
              i18nKey={memberData.description}
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
