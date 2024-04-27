"use client";
import React from "react";
import { useTranslation } from "../../app/i18n/client";
import Button from "../Button";

export default function JoinToday({ lng }) {
  const { t } = useTranslation(lng);

  return (
    <div className="text-center my-20">
      <h4 className="text-center text-4xl">{t("operationHeader")}</h4>
      <div className="my-20">
        <Button>{t("joinUs")}</Button>
      </div>
    </div>
  );
}
