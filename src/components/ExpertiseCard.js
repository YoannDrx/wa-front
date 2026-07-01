import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function ExpertiseCard({ image, title, index }) {
  return (
    <div className="group wa-card wa-card-hover relative flex min-h-[330px] h-full flex-col overflow-hidden p-6">
      <div className="absolute -right-14 -top-14 h-40 w-40 rounded-full border border-primary/10 bg-light-blue/45 transition duration-500 group-hover:scale-125" />
      <div className="relative z-10 mb-6 flex items-start justify-between gap-4">
        <span className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-primary/70">{String(index + 1).padStart(2, "0")}</span>
        <span className="flex h-9 w-9 items-center justify-center rounded-[4px] border border-primary/15 text-primary transition duration-300 group-hover:translate-x-1 group-hover:bg-primary group-hover:text-white">
          <FaArrowRight aria-hidden="true" />
        </span>
      </div>
      <h3 className="relative z-10 mb-6 min-h-[5.25rem] text-[1.25rem] leading-tight text-wa-ink">{title}</h3>
      <div className="relative mt-auto flex aspect-square w-full items-center justify-center overflow-hidden rounded-[6px] border border-primary/15 bg-[linear-gradient(145deg,rgba(228,237,241,0.9),rgba(255,255,255,0.82))] p-6">
        <div className="absolute inset-6 rounded-full border border-primary/10" />
        <div className="relative flex h-full w-full items-center justify-center transition-all duration-500 group-hover:-translate-y-1">
          <Image
            src={image}
            alt={title}
            className="h-auto max-h-full w-auto max-w-full object-contain drop-shadow-[0_18px_24px_rgba(17,50,72,0.16)] transition-transform duration-500 group-hover:scale-110"
            width={225}
            height={212}
            sizes="220px"
          />
        </div>
      </div>
    </div>
  );
}
