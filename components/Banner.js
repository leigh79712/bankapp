"use client";
import Link from "next/link";
import Image from "next/image";
import logo_light from "../public/images/logo-light.svg";
import logo_dark from "../public/images/logo-dark.svg";
import ThemeButton from "./ThemeButton";
import { useTheme } from "next-themes";
import { useTranslation } from "../app/i18n/client";
import Language from "./Language";

export default function Banner({ lng }) {
  const { theme, setTheme } = useTheme();
  const changeTheme = () =>
    theme === "dark" ? setTheme("light") : setTheme("dark");

  const { t } = useTranslation(lng);

  return (
    <div className="flex h-14 items-center p-8 justify-around">
      {theme === "light" ? (
        <Image src={logo_light} width={150} alt="logo-light" />
      ) : (
        <Image src={logo_dark} width={150} alt="logo-dark" />
      )}

      <div className="flex justify-between w-4/12 uppercase">
        <div>{t("home")}</div>
        <div>{t("feature")}</div>
        <div>{t("operations")}</div>
      </div>
      <div className="flex w-2/12 justify-evenly text-xs items-center">
        <Link className="p-2 bg-tiffany-green rounded" href="">
          {t("register")}
        </Link>
        <Language lng={lng} t={t} />
        <ThemeButton theme={theme} changeTheme={changeTheme} />
      </div>
    </div>
  );
}
