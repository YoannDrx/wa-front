import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

export default function TeamCard({ image, name, references, description, id }) {
  const { t } = useTranslation();
  return (
    <article className="group bg-white shadow-sm ring-1 ring-black/5 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <Link href={`/team/${id}`} className="block h-full">
        <div className="relative h-[360px] overflow-hidden sm:h-[400px]">
          <Image
            src={image}
            alt={`${name}`}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover object-top transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-[#113248]/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <span className="border border-white px-5 py-3 text-sm font-bold uppercase tracking-wide text-white">
              {t("partenaire.seeProfile")} →
            </span>
          </div>
        </div>
        <div className="text-center p-4">
          <h3 className="underblue mt-2 text-lg">{name}</h3>
          <p className="font-bold mt-2">{references}</p>
          <p className="text-gray-500 mt-2 mb-4">{description}</p>
        </div>
      </Link>
    </article>
  );
}
