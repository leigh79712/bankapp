"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo_light from "../../public/images/logo-light.svg";
import logo_dark from "../../public/images/logo-dark.svg";
import { useTheme } from "next-themes";
import { useTranslation } from "../../app/i18n/client";
import Language from "../Language";
import ThemeButton from "../ThemeButton";

export default function Navbar({ lng }, props) {
  const [opacity, setOpacity] = useState(100);
  const { theme, setTheme } = useTheme();
  const changeTheme = () =>
    theme === "dark" ? setTheme("light") : setTheme("dark");

  const { t } = useTranslation(lng);
  const mouseEnter = (e) => {
    e.target.style.opacity = 1;
    setOpacity(50);
  };

  const mouseOut = (e) => {
    e.target.style.opacity = null;
    setOpacity(100);
  };
  console.log(localStorage.getItem("theme"));
  return (
    <div className="flex h-14 items-center p-8 justify-around">
      {theme === "light" ? (
        <Image src={logo_light} width={150} alt="logo-light" />
      ) : (
        <Image src={logo_dark} width={150} alt="logo-dark" />
      )}

      <div className="flex justify-between uppercase w-3/12 transition-opacity transition">
        {t("links", { returnObjects: true }).map((link, i) => {
          return (
            <div
              className={`transition duration-300 opacity-${opacity} cursor-pointer`}
              key={i}
              onMouseEnter={mouseEnter}
              onMouseOut={mouseOut}
            >
              {link.name}
            </div>
          );
        })}
      </div>
      <div className="flex w-2/12 justify-evenly text-xs items-center">
        <Link className="p-2 bg-tiffany-green rounded text-white" href="">
          {t("register")}
        </Link>
        <Language lng={lng} t={t} />
        <ThemeButton theme={theme} changeTheme={changeTheme} />
      </div>
    </div>
  );
}
