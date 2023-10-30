import Image from "next/image";
import React from "react";

export default function ExpertiseCard({ image, title, circleColor = "bg-blue-500" }) {
  return (
    <div className="flex flex-col items-center relative">
      <h3 className="text-center mb-0 text-xs h-[50px] flex items-center justify-center">{title}</h3>
      <div className="border border-black p-2 w-[200px] h-[200px] flex items-center justify-center relative group overflow-hidden">
        <div style={{ backgroundColor: "#E4EDF1" }} className="absolute w-[90%] h-[90%] rounded-full opacity-50"></div>
        <div className="w-full h-full relative z-10 p-2 flex items-center justify-center transition-all duration-300">
          <Image
            src={image}
            alt={title}
            className="object-contain transition-all duration-300 transform group-hover:scale-110 group-hover:object-cover"
            width={200}
            height={200}
          />
        </div>
      </div>
    </div>
  );
}
