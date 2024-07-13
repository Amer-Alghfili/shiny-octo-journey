"use client";

import { useTranslation } from "@/i18n/client";
import { Button } from "@nextui-org/react";
import Hamburger from "hamburger-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Nav from "./Nav";

export default function Header({ lng }) {
  const { t } = useTranslation(lng, "translation");

  return (
    <>
      <div className="block lg:hidden">
        <header className="flex justify-between items-center gap-[2em]">
          <Logo />
          <BurgerIcon lng={lng} t={t} />
        </header>
      </div>
      <div className="hidden lg:block">
        <header className="flex justify-between items-center gap-[3em] px-[2em] lg:px-[4em] xl:px-[8.5em]">
          <Logo />
          <Nav lng={lng} t={t} />
          <Button className="zad bg-orange-1 text-white text-[0.8125rem] font-normal rounded-[20px] px-[3em] shrink-0">
            {t("download_now")}
          </Button>
        </header>
      </div>
    </>
  );
}

function Logo() {
  return (
    <Link href="/">
      <img src="/img/logo.png" width="200" height="80" alt="logo" />
    </Link>
  );
}

function BurgerIcon({ lng, t }) {
  const [isOpen, setOpen] = React.useState(false);

  const pathname = usePathname();

  React.useEffect(
    function closeBurgerOnLinkClick() {
      if (isOpen) {
        setOpen(false);
      }
    },
    [pathname]
  );

  return (
    <div className="relative">
      <Hamburger color="#FF642D" toggled={isOpen} toggle={setOpen} />
      {isOpen && (
        <Nav
          className="absolute top-[3em] start-[-4em] end-[-4em] bg-white py-[2em] rounded-lg shadow-2xl border border-[rgb(218, 218, 218)]"
          lng={lng}
          t={t}
          mobile={true}
        />
      )}
    </div>
  );
}
