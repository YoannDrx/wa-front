import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

export default function TeamCard({ image, name, references, description, id }) {
  const { t } = useTranslation();
  return (
    <article className="group wa-card wa-card-hover flex h-full overflow-hidden">
      <Link href={`/team/${id}`} className="flex h-full w-full flex-col">
        <div className="relative h-[360px] shrink-0 overflow-hidden sm:h-[410px]">
          <Image
            src={image}
            alt={`${name}`}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover object-top transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-wa-ink/65 via-transparent to-transparent opacity-80" />
          <div className="absolute inset-0 flex items-center justify-center bg-[#113248]/74 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100">
            <span className="rounded-[4px] border border-white px-5 py-3 text-sm font-bold uppercase tracking-wide text-white">
              {t("partenaire.seeProfile")} →
            </span>
          </div>
        </div>
        <div className="flex flex-1 flex-col p-5 text-center">
          <h3 className="underblue mt-2 min-h-[4.5rem] text-lg">{name}</h3>
          <p className="mb-3 mt-2 min-h-[3rem] font-bold text-primary">{references}</p>
          <p className="mb-0 mt-auto text-gray-500">{description}</p>
        </div>
      </Link>
    </article>
  );
}
