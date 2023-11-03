import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

export default function TeamCard({ image, name, references, description }) {
  const { t } = useTranslation();
  return (
    <div className="bg-white shadow-lg relative group">
      <Link href={`/team/${name}`}>
        <Image src={image} alt={`${name}`} className="w-full " width={200} height={500} />
        <div className="text-center">
          <h2 className="text-sm underblue mt-2">{name}</h2>
          <h3 className="text-xs p-2">{references}</h3>
          <p className="text-xs text-gray-500">{description}</p>
        </div>
        {/* Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100">
          <button className="text-white font-bold">{t("partenaire.seeProfile")} →</button>
        </div>
      </Link>
    </div>
  );
}
