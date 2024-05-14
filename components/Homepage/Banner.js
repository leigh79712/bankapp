"use client";
import React from "react";
import Image from "next/image";
import card_dark from "../../public/images/card-dark.jpeg";
import card_light from "../../public/images/card.jpeg";
import Button from "../Button";
import { useTranslation } from "../../app/i18n/client";
import { useTheme } from "next-themes";

export default function Banner({ lng }) {
  const { theme, setTheme } = useTheme();
  const { t } = useTranslation(lng);

  return (
    <div className="px-[10em] my-40 flex flex-col-[2fr_3fr] items-center">
      <div className="w-7/12">
        <h1 className="text-6xl my-5 ">{t("bannerH1")}</h1>
        <h4 className="text-3xl my-5">{t("bannerH4")}</h4>
        <Button>{t("register")}</Button>
      </div>
      {theme === "light" ? (
        <Image width={450} height={350} src={card_light} alt="card" />
      ) : (
        <Image width={500} height={350} src={card_dark} alt="card" />
      )}
    </div>
  );
}
