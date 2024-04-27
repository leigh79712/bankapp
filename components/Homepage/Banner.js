import React from "react";
import Image from "next/image";
import card_dark from "../../public/images/card-dark.jpeg";
import card_light from "../../public/images/card.jpeg";
import Button from "../Button";

export default function Banner(props) {
  return (
    <div className="px-[10em] my-40 flex flex-col-[2fr_3fr] items-center">
      <div className="w-7/12">
        <h1 className="text-6xl my-5 ">{props.t("bannerH1")}</h1>
        <h4 className="text-3xl my-5">{props.t("bannerH4")}</h4>
        <Button>{props.t("register")}</Button>
      </div>
      {props.theme === "light" ? (
        <Image width={450} height={350} src={card_light} alt="card" />
      ) : (
        <Image width={500} height={350} src={card_dark} alt="card" />
      )}
    </div>
  );
}
