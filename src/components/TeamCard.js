import Image from "next/image";
import React from "react";

export default function TeamCard({ image, name, references, description }) {
  return (
    <div className="bg-white shadow-lg">
      <Image src={image} alt={`${name}`} className="w-full object-cover h-auto" width={200} height={500} />
      <div className=" text-center">
        <h2 className="text-sm underblue mt-2">{name}</h2>
        <h3 className="text-xs p-2">{references}</h3>
        <p className="text-xs text-gray-500">{description}</p>
      </div>
    </div>
  );
}
