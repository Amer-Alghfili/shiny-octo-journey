"use client";

import { useTranslation } from "@/i18n/client";
import Link from "next/link";
import Linkedin from "../svg/linkedin";
import Twitter from "../svg/twitter";
import Whatsapp from "../svg/whatsapp";

export default function Footer({ lng }) {
  const { t } = useTranslation(lng, "translation");

  return (
    <footer className="max-w-[75em] m-auto">
      <div className="flex flex-wrap justify-between items-end mt-[12.8125em]">
        <img
          src="/img/logo.png"
          width="252"
          height="69"
          alt="logo"
          className="translate-x-[3.5em] md:translate-x-0"
        />
        <div className="flex gap-[12.8125em]">
          <ul className="flex flex-col gap-2">
            <li>
              <Link className="text-[1.125rem] text-[#101820]" href={`/${lng}`}>
                {t("home")}
              </Link>
            </li>
            <li>
              <Link
                className="text-[1.125rem] text-[#101820]"
                href={`/${lng}/real-estate`}
              >
                {t("real_estate")}
              </Link>
            </li>
            <li>
              <Link
                className="text-[1.125rem] text-[#101820]"
                href={`/${lng}/investors`}
              >
                {t("investor")}
              </Link>
            </li>
          </ul>
          <ul className="flex flex-col gap-2">
            <li>
              <Link
                className="text-[1.125rem] text-[#101820]"
                href={`/${lng}/about`}
              >
                {t("about_us")}
              </Link>
            </li>
            <li>
              <Link
                className="text-[1.125rem] text-[#101820]"
                href={`/${lng}/reports`}
              >
                {t("studies_and_reports")}
              </Link>
            </li>
            <li>
              <Link
                className="text-[1.125rem] text-[#101820]"
                href={`/${lng}/q&a`}
              >
                {t("qa")}
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="zad flex flex-wrap gap-[2em] justify-between border-t border-t-black mt-[5.6875em] pt-[1em]">
        <div className="flex items-center">
          <ul className="flex flex-wrap items-center gap-[5.579375em]">
            <li>
              <Link href="#">{t("terms")}</Link>
            </li>
            <li>
              <Link href="#">{t("privacy")}</Link>
            </li>
            <li>
              {t("copywright", {
                prefix: "©",
                postfix: new Date().getFullYear(),
              })}
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-[2.104375em]">
          <Link href="#">
            <Whatsapp width="19.37" height="19.37" color="black" />
          </Link>
          <Link href="#">
            <Linkedin width="19.37" height="19.37" color="black" />
          </Link>
          <Link href="#">
            <Twitter width="19.37" height="19.37" color="black" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
