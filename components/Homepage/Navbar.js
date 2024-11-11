"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useTranslation } from "../../app/i18n/client";
import Language from "../Language";
import ThemeButton from "../ThemeButton";
import Logo from "../Logo";
import useSWR from "swr";

export default function Navbar({ lng }) {
  const [opacity, setOpacity] = useState(100);
  const { theme, setTheme } = useTheme();
  const [loggedIn, setLoggedIn] = useState(false);
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
  const { data, err } = useSWR("/api/user", async function (args) {
    const res = await fetch(args);
    return res.json();
  });

  useEffect(() => {
    if (!data) {
      setLoggedIn(false);
    }
    if (data) {
      setLoggedIn(true);
    }
  }, [data]);

  return (
    <div className="flex h-14 items-center p-8 justify-around">
      <Logo />
      <div className="flex justify-between uppercase w-3/12">
        {t("links", { returnObjects: true }).map((link, i) => {
          return (
            <div
              className={`transition duration-300 opacity-${opacity} cursor-pointer`}
              key={i}
              onMouseEnter={mouseEnter}
              onMouseOut={mouseOut}
              href={"/"}
            >
              {link.name}
            </div>
          );
        })}
      </div>
      <div className="flex w-2/12 justify-evenly text-xs items-center">
        {!loggedIn && (
          <>
            <Link
              className="p-2 bg-tiffany-green rounded text-white"
              href="/register"
            >
              {t("register")}
            </Link>
            <Link href="/login" className="p-2">
              {t("login")}
            </Link>
          </>
        )}
        {loggedIn && (
          <>
            Hi, {data.firstname}
            <Link href={`${data.username}/bankdashboard`}>Dashborad</Link>
            <form action="/logout" method="GET">
              <button type="submit">Logout</button>
            </form>
          </>
        )}

        <Language lng={lng} t={t} />
        <ThemeButton theme={theme} changeTheme={changeTheme} />
      </div>
    </div>
  );
}
