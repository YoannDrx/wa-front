import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

export default function TeamCard({ image, name, references, description }) {
  const { t } = useTranslation();
  return (
    <div className="bg-white shadow-lg relative group">
      <Link href={`/team/${name}`}>
        <Image src={image} alt={`${name}`} width={0} height={0} sizes="100vw" className="w-full h-auto" />
        <div className="text-center">
          <h3 className="underblue mt-2">{name}</h3>
          <p className="font-bold">{references}</p>
          <p className="text-gray-500">{description}</p>
        </div>
        {/* Overlay Hover */}
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100">
          <button className="text-white font-bold">{t("partenaire.seeProfile")} →</button>
        </div>
      </Link>
    </div>
  );
}
