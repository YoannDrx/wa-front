import Image from "next/image";
import React from "react";

export default function ExpertiseCard({ image, title }) {
  return (
    <div className="group relative flex h-full flex-col items-center border border-black/10 bg-white p-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <p className="mb-5 flex min-h-16 items-center justify-center font-bold">{title}</p>
      <div className="relative flex h-[190px] w-[190px] items-center justify-center overflow-hidden border border-black/20 p-4">
        <div className="absolute h-[88%] w-[88%] rounded-full bg-light-blue opacity-80" />
        <div className="relative flex h-full w-full items-center justify-center transition-all duration-300">
          <Image
            src={image}
            alt={title}
            className="h-auto max-h-full w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-110"
            width={225}
            height={212}
            sizes="190px"
          />
        </div>
      </div>
    </div>
  );
}
