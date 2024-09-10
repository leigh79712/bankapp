import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Trans } from "react-i18next";

export default function Language({ t, lng }) {
  const language = {
    en: "English",
    zh: "繁體中文",
  };
  const [isShow, setIsShow] = useState(false);
  const handlerList = () => {
    setIsShow(!isShow);
  };

  const renderLanguage = () => {
    const Lists = [];

    for (const key in language) {
      Lists.push(
        <li key={key} onClick={() => setIsShow(false)}>
          <Link href={`/${key}/${location.pathname.slice(3)}`}>
            {language[key]}
          </Link>
        </li>
      );
    }
    return Lists;
  };

  return (
    <div className="ml-1">
      <p className="cursor-pointer" onClick={handlerList}>
        {language[lng]}
      </p>
      <Trans i18nKey="languageSwitcher" t={t}>
        {{ lng }}
      </Trans>
      <ul className="list-none m-0 p-0 absolute">
        {isShow && <ul>{renderLanguage()}</ul>}
      </ul>
    </div>
  );
}
