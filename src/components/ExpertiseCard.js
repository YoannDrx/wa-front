import Image from "next/image";
import React from "react";

export default function ExpertiseCard({ image, title }) {
  return (
    <div className="flex flex-col items-center">
      <h3 className="text-center mb-0 text-xs h-[50px] flex items-center justify-center">{title}</h3>
      <div>
        <Image src={image} alt={title} objectFit="cover" width={300} height={300} />
      </div>
    </div>
  );
}
