import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

export default function TeamCard({ image, name, references, description, id }) {
  const { t } = useTranslation();
  return (
    <div className="bg-white shadow-lg group">
      <Link href={`/team/${id}`}>
        <div className="relative  h-[400px] overflow-hidden">
          <Image src={image} alt={`${name}`} width={0} height={0} layout="fill" className="object-cover object-top" />
          {/* Overlay Hover */}
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100">
            <button className="text-white font-bold">{t("partenaire.seeProfile")} →</button>
          </div>
        </div>
        <div className="text-center p-4">
          <h3 className="underblue mt-2 text-lg">{name}</h3>
          <p className="font-bold mt-2">{references}</p>
          <p className="text-gray-500 mt-2 mb-4">{description}</p>
        </div>
      </Link>
    </div>
  );
}
