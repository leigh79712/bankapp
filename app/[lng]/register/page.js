"use client";
import React from "react";
import Link from "next/link";
import Logo from "../../../components/Logo";
import Input from "../../../components/Input";
import Label from "../../../components/Label";
import { useTranslation } from "../../i18n/client";

export default function page({ params: { lng } }) {
  const { t } = useTranslation(lng);

  return (
    <div>
      <form
        className="w-1/3 mx-auto text-center mt-20 p-10 rounded shadow-lg shadow-indigo-600/60"
        action=""
      >
        <Logo />
        <h1 className="text-xl my-5 mx-auto">{t("register")}</h1>

        <Label htmlFor="username">{t("usernameText")}</Label>
        <Input type="text" name="username" placeholder={t("usernameText")} />
        <Label htmlFor="firstname">{t("firstName")}</Label>
        <Input type="text" name="firstname" placeholder={t("firstName")} />
        <Label htmlFor="lastname">{t("lastName")}</Label>
        <Input type="text" name="lastname" placeholder={t("lastName")} />
        <Label htmlFor="password">{t("passwordText")}</Label>
        <Input
          type="password"
          placeholder={t("passwordText")}
          name="password"
        />
        <Label htmlFor="confirm">{t("doublecheck")}</Label>
        <Input type="password" placeholder={t("doublecheck")} name="confirm" />
        <Label htmlFor="username">{t("mail")}</Label>
        <Input type="email" placeholder={t("mail")} name="email" />
        <input
          type="submit"
          className="block w-1/3 bg-tiffany-green text-white rounded border-none my-10 mx-auto h-8"
        />
        <p>
          {t("already")}{" "}
          <Link href="/login" className="mx-2 text-indigo-200">
            {t("login")}
          </Link>
        </p>
      </form>
    </div>
  );
}
