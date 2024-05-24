"use client";

import { useTranslation } from "@/i18n/client";
import { Button } from "@nextui-org/react";
import Nav from "./Nav";

export default function Header({ lng }) {
  const { t } = useTranslation(lng, "translation");

  return (
    <header className="flex justify-between items-center px-[8.5em]">
      <img src="/img/logo.png" width="200" height="80" alt="logo" />
      <Nav lng={lng} t={t} />
      <Button className="zad bg-orange-1 text-white text-[0.8125rem] font-normal rounded-[20px] px-[3em]">
        {t("download_now")}
      </Button>
    </header>
  );
}
