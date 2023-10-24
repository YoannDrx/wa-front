import Image from "next/image";
import { useState } from "react";
import Button from "./Button";
import { t } from "i18next";

export default function ArticleCard({ backgroundImage, date, title, href }) {
  const [isHovered, setIsHovered] = useState(false);
  const day = new Date(date).getDate();
  const month = new Date(date).toLocaleString("fr-FR", { month: "short" }).toUpperCase().replace(".", "");

  return (
    <div
      className="relative w-80 h-64 overflow-hidden cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <Image
        src={backgroundImage}
        alt="Article Background"
        className="absolute w-full h-full object-cover"
        layout="fill"
        objectFit="cover"
      />
      <div
        className={`absolute bottom-0 left-0 w-full h-1/4 bg-black bg-opacity-80 transition-all duration-500 ${
          isHovered ? "h-full" : "h-1/4"
        }`}>
        <div className="flex justify-between items-center h-16">
          <div className="flex flex-grow items-center pl-2">
            <h3 className="text-white text-xs">{title}</h3>
          </div>
          <div className="bg-primary min-w-16 min-h-16 flex flex-col justify-center items-center px-4">
            <h3 className="text-white font-bold text-xl">{day}</h3>
            <h3 className="text-white text-xs">{month}</h3>
          </div>
        </div>
        {isHovered && (
          <div className="text-white p-4 flex flex-col justify-between h-3/4 pt-2">
            <div className="overflow-hidden line-clamp-5 text-gray-300 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam asperiores iste totam vero earum aliquid ducimus
              vel dolor delectus distinctio et, facere quos illum temporibus recusandae illo pariatur, ad labore.
            </div>
            <Button href={href} color="primary" className="self-center mt-4 w-2/5">
              {t("En savoir plus")}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
