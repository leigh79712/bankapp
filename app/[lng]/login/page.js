"use client";
import React from "react";
import Logo from "../../../components/Logo";

import Link from "next/link";
import Input from "../../../components/Input";
import Label from "../../../components/Label";
import { useTranslation } from "../../i18n/client";

export default function page({ params: { lng } }) {
  const { t } = useTranslation(lng);

  return (
    <div className="">
      <form
        className="w-1/3 mx-auto border text-center mt-20 p-10 rounded shadow-lg shadow-indigo-600/60"
        action=""
      >
        <Logo />

        <h1 className="text-xl my-5 mx-auto">Sign In</h1>

        <Label htmlFor="username">{t("usernameText")}</Label>
        <Input type="text" placeholder={t("usernameText")} />
        <Label htmlFor="username">{t("passwordText")}</Label>
        <Input type="password" placeholder={t("passwordText")} />
        <input
          type="submit"
          className="block w-1/3 bg-tiffany-green text-white rounded border-none my-10 mx-auto h-8"
        />
        <p>
          {t("account")}{" "}
          <Link href="/register" className="mx-2 text-indigo-300">
            {t("register")}
          </Link>
        </p>
      </form>
    </div>
  );
}
