"use client";
import React from "react";
import Image from "next/image";
import { useTranslation } from "../../app/i18n/client";
import icon1 from "../../public/images/icon1.png";
import icon2 from "../../public/images/icon2.png";
import icon3 from "../../public/images/icon3.png";

export default function Operation({ lng }) {
  const { t } = useTranslation(lng);
  return (
    <div>
      <h4 className="uppercase my-4 text-center text-xl text-tiffany-green">
        {t("operations")}
      </h4>
      <h4 className="text-center text-4xl my-4">{t("operationHeader")}</h4>
      <div className="w-10/12 mx-auto my-10 flex">
        <div className="w-1/3 mr-3">
          <Image src={icon1} width={350} height={200} alt=""></Image>
          <h3 className="text-xl my-3">{t("operation1")}</h3>
          <p className="text-sm w-10/12">{t("lorem")}</p>
        </div>
        <div className="w-1/3 mr-3">
          <Image src={icon2} width={350} height={200} alt=""></Image>
          <h3 className="text-xl my-3">{t("operation2")}</h3>
          <p className="text-sm w-10/12">{t("lorem")}</p>
        </div>
        <div className="w-1/3 mr-3">
          <Image src={icon3} width={350} height={200} alt=""></Image>
          <h3 className="text-xl my-3">{t("operation3")}</h3>
          <p className="text-sm w-10/12">{t("lorem")}</p>
        </div>
      </div>
    </div>
  );
}
