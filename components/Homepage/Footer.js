"use client";
import React from "react";
import { useTranslation } from "../../app/i18n/client";
import Link from "next/link";
import Image from "next/image";
import icon from "../../public/images/favicon.svg";
export default function Footer({ lng }) {
  const { t } = useTranslation(lng);
  return (
    <div className="text-center my-10">
      {t("footerLinks", { returnObjects: true }).map((link, i) => {
        return (
          <Link className="mx-4 my-9" href="" key={i}>
            {link.name}
          </Link>
        );
      })}
      <Image className="mx-auto my-10" src={icon} width={200} height={200} />

      <p className="text-l">© Copyright by Jie Lin Yang and Jerry Tsai</p>
    </div>
  );
}
