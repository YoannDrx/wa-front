import Image from "next/image";
import React from "react";

export default function TeamCard({ image, name, references, description }) {
  return (
    <div className="bg-white shadow-lg">
      <Image src={image} alt={`${name}`} className="w-full object-cover h-48" width={200} height={500} />
      <div className=" text-center">
        <h2 className="text-sm underblue mt-2">{name}</h2>
        <p className="text-sm m-0">{references}</p>
        <p className="text-xs text-gray-500 mb-2">{description}</p>
      </div>
    </div>
  );
}
