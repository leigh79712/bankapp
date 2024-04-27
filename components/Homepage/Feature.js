"use client";
import React from "react";
import { useTranslation } from "../../app/i18n/client";
import Image from "next/image";
import bank from "../../public/images/bank.jpeg";
import saving from "../../public/images/saving.jpeg";
import piggybank from "../../public/images/piggybank.jpeg";

export default function Feature({ lng }) {
  const { t } = useTranslation(lng);
  return (
    <div className="">
      <h4 className="uppercase my-4 text-center text-xl text-tiffany-green">
        {t("feature")}
      </h4>
      <h4 className="text-center text-4xl my-4">{t("featureHeader")}</h4>
      <div className="w-10/12 mx-auto my-20 grid grid-cols-[50%_3fr] gap-10 text-center items-center">
        <Image src={bank} height={550} width={880} alt="bankphoto"></Image>

        <div>
          <h4 className="text-3xl mb-5">{t("feature1")}</h4>
          <p>{t("lorem")}</p>
        </div>
        <div>
          <h4 className="text-3xl mb-5">{t("feature2")}</h4>
          <p>{t("lorem")}</p>
        </div>
        <Image src={saving} height={550} width={880} alt="bankphoto"></Image>
        <Image src={piggybank} height={500} width={880} alt="bankphoto"></Image>
        <div>
          <h4 className="text-3xl mb-5">{t("feature3")}</h4>
          <p>{t("lorem")}</p>
        </div>
      </div>
    </div>
  );
}
