import React from "react";
import logo_light from "../public/images/logo-light.svg";
import logo_dark from "../public/images/logo-dark.svg";
import Image from "next/image";
import { useTheme } from "next-themes";

export default function Logo() {
  const { theme, setTheme } = useTheme();
  return (
    <>
      {theme === "light" ? (
        <Image
          src={logo_light}
          width={200}
          alt="logo-light"
          className="inline"
        />
      ) : (
        <Image src={logo_dark} width={200} alt="logo-dark" className="inline" />
      )}
    </>
  );
}
