import React from "react";
import { useRouter } from "next/router";
import PageJumbo from "@/components/PageJumbo";
import Image from "next/image";
import { FaEnvelope, FaPhone } from "react-icons/fa";

const fetchMemberData = (memberName) => {
  const mockData = {
    name: memberName,
    image: "/assets/team/Bruno-Weil.png",
    title: "Avocat (1999)",
    label: "LL.M. European Business - Law (Pallas Consortium)",
    description:
      'Being active since fifteen years as lawyer of mid-sized or international corporations which are present or active in France, Bruno Weil is your primary contact at our firm for any matter which deals with IP, IT or NTCs, his main field of expertise. As such, he intervenes as your advisor or counsel before courts for instances involving patent, trademark or copyright infringements, as well as any negotiation on license agreement or know-how transfer. In his capacity as counsel, he successfully represented several major US or German listed companies before French courts, notably in complex multimillion patent infringement lawsuits. Former correspondent for France of the editor KLUWER LAW INTERNATIONAL, as reporter for the "patent" section of the "EU IP CASES" database published by KLUWER under www.kluwereuipcases.com, he is also member of several international associations dealing with IP and new technologies, such as Licensing Executive Society - LES - Germany, GRUR and ITECHLAW. Bruno Weil is also active in other instances such as company restructuring or during takeovers. His day to day practice also involves court cases, for any business related lawsuits. His primary goal consists in successfully elaborating the soundest economical strategy for our client\'s interests to prevail. Besides French, he is fluent in German and English. An amateur drummer and percussionist, he is married and father of two daughters. Bruno recently published an article on the legal framework of trade secrecy in France : The protection of trade secrecy is strengthened under French law (2019)',
    email: "bweil@weil-paris.fr",
    phone: "+33 (0)1.44.15.98.98",
  };
  return mockData;
};

const Member = () => {
  const router = useRouter();
  const { member } = router.query;
  const memberData = fetchMemberData(member);

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
          <p className="mt-8">{memberData.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Member;
