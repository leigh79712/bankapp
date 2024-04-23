"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo_light from "../public/images/logo-light.png";
import logo_dark from "../public/images/logo-dark.png";
import ThemeButton from "./ThemeButton";
import { useTheme } from "next-themes";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const changeTheme = () =>
    theme == "dark" ? setTheme("light") : setTheme("dark");
  return (
    <div className="flex h-14 items-center p-8 justify-evenly">
      {theme === "light" ? (
        <Image src={logo_light} width={130} alt="logo-light" />
      ) : (
        <Image src={logo_dark} width={130} alt="logo-dark" />
      )}

      <div className="flex justify-between w-4/12 uppercase">
        <div>Home</div>
        <div>Feature</div>
        <div>Operations</div>
      </div>
      <div className="flex">
        <Link href="">Registers</Link>
        <ThemeButton theme={theme} changeTheme={changeTheme} />
      </div>
    </div>
  );
}
