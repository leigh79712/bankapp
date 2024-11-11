"use client";
import React from "react";
import Logo from "../Logo";

import Link from "next/link";
import Input from "../Input";
import Label from "../Label";
import { useTranslation } from "../../app/i18n/client";

export default function Login({ lng }) {
  const { t } = useTranslation(lng);
  return (
    <form
      method="POST"
      action="/login"
      className="w-1/3 mx-auto border text-center mt-20 p-10 rounded shadow-lg shadow-indigo-600/60"
    >
      <Logo />

      <h1 className="text-xl my-5 mx-auto">{t("login")}</h1>

      <Label htmlFor="username">{t("usernameText")}</Label>
      <Input type="text" name="username" placeholder={t("usernameText")} />
      <Label htmlFor="username">{t("passwordText")}</Label>
      <Input type="password" name="password" placeholder={t("passwordText")} />
      <input
        type="submit"
        value={t("login")}
        className="block w-1/3 bg-tiffany-green text-white rounded border-none my-10 mx-auto h-8"
      />
      <p>
        {t("account")}{" "}
        <Link href="/register" className="mx-2 text-indigo-300">
          {t("register")}
        </Link>
      </p>
    </form>
  );
}
