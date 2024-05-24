"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

export default function LanguageSwitcher({ lng }) {
  const newLng = lng === "ar" ? "en" : "ar";

  const pathname = usePathname();
  const searchParams = useSearchParams();

  let queryParam = "";
  for (const key of searchParams.keys()) {
    const value = searchParams.get(key);
    queryParam += key + "=" + value + "&";
  }

  return (
    <Link
      href={`/${newLng}/${pathname
        .split("/")
        .splice(2)
        .join("/")}?${queryParam}`}
    >
      {lng === "ar" ? "EN" : "العربية"}
    </Link>
  );
}
