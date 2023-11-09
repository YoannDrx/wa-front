import React, { useState } from "react";
import Image from "next/image";
import Button from "./Button";
import { useIsMobile } from "../utils/useIsMobile";
import { useArticleCardContext } from "../../contexts/ArticleCardContext";
import { useTranslation } from "react-i18next";

export default function ArticleHomeCard({ backgroundImage, date, title, link, description }) {
  const [isHovered, setIsHovered] = useState(false);
  const isMobile = useIsMobile();
  const { t } = useTranslation();
  const { openedCard, setOpenedCard } = useArticleCardContext();

  const day = new Date(date).getDate();
  const month = new Date(date).toLocaleString("fr-FR", { month: "short" }).toUpperCase().replace(".", "");

  const toggleHover = () => {
    if (isMobile) {
      setIsHovered(!isHovered);
      setOpenedCard(title);
    }
  };

  return (
    <div
      className="relative w-80 h-64 overflow-hidden"
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
      onClick={toggleHover}>
      <Image
        src={backgroundImage}
        alt="Article Background"
        className="absolute w-full h-auto object-cover"
        width={0}
        height={0}
        sizes="100vw"
        layout="fill"
        objectFit="cover"
      />
      <div
        className={`absolute bottom-0 left-0 w-full h-1/4 bg-black bg-opacity-80 transition-all duration-500 ${
          isHovered ? "h-full" : "h-1/4"
        }`}>
        <div className="flex justify-between items-center h-16">
          <div className="flex-1 min-w-0">
            <h3 className="text-white text-xs break-words pl-2 pr-2">{title}</h3>
          </div>
          <div className="flex-shrink-0 bg-primary min-w-16 min-h-16 flex flex-col justify-center items-center px-4">
            <h3 className="text-white font-bold text-xl">{day}</h3>
            <h3 className="text-white text-xs">{month}</h3>
          </div>
        </div>
        {isHovered && (
          <div className="text-white p-4 flex flex-col justify-between h-3/4 pt-2">
            <div className="overflow-hidden line-clamp-5 text-gray-300 text-sm">{description}</div>
            <Button href={link} color="primary" className="self-center mt-4 w-2/5 cursor-pointer pr-1 pl-1">
              {t("En savoir plus")}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
