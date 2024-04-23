"use client";
import React from "react";
import Image from "next/image";

import Sun from "../public/images/icons/sun.svg";
import Moon from "../public/images/icons/moon.svg";

export default function ThemeButton(props) {
  return (
    <button onClick={props.changeTheme}>
      {props.theme === "light" ? <Image src={Moon} /> : <Image src={Sun} />}
    </button>
  );
}
