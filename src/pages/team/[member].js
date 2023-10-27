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
    experience: "Expérience du collaborateur",
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
      <div className="container py-20 flex">
        <div className="w-1/2 flex flex-col items-start">
          <Image src={memberData.image} alt={`${memberData.name}`} width={300} height={600} />
          <div className="flex flex-col items-start bg-gray-800 text-gray-300 w-full" style={{ width: 300 }}>
            <h4>Contact :</h4>
            <div className="flex items-center">
              <FaEnvelope className="mr-2" /> {memberData.email}
            </div>
            <div className="flex items-center mt-2">
              <FaPhone className="mr-2" /> {memberData.phone}
            </div>
          </div>
        </div>
        <div className="w-1/2 ml-4">
          <h2>{memberData.title}</h2>
          <p>{memberData.label}</p>
          <h3>Expérience</h3>
          <p>{memberData.experience}</p>
          <p>{memberData.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Member;
