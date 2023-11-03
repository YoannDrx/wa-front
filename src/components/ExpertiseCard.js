import Image from "next/image";
import React from "react";

export default function ExpertiseCard({ image, title }) {
  return (
    <div className="flex flex-col items-center relative">
      <p className="text-center font-bold h-[30px]">{title}</p>
      <div className="border border-black p-2 w-[200px] h-[200px] flex items-center justify-center relative group overflow-hidden">
        <div style={{ backgroundColor: "#E4EDF1" }} className="absolute w-[90%] h-[90%] rounded-full opacity-50"></div>
        <div className="w-full h-full relative p-2 flex items-center justify-center transition-all duration-300">
          <Image
            src={image}
            alt={title}
            className="w-[200px] h-auto object-contain transition-all duration-300 transform group-hover:scale-110 group-hover:object-cover"
            width={0}
            height={0}
            sizes="100vw"
          />
        </div>
      </div>
    </div>
  );
}
