import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav({ lng, t }) {
  const activeClasses = "text-orange-1 border-b border-orange-1";

  const classes =
    "zad text-[0.8125rem] leading-[1.5625em] pb-[0.3em] hover:text-orange-1 hover:border-b hover:border-orange-1 transition";

  const activeLinkClasses = `${classes} ${activeClasses}`;

  const pathname = usePathname();

  console.log(pathname);

  return (
    <nav>
      <ul className="flex gap-[2.03125em]">
        <li>
          <Link
            className={`/${lng}` === pathname ? activeLinkClasses : classes}
            href={`/${lng}`}
          >
            {t("home")}
          </Link>
        </li>
        <li>
          <Link
            className={
              `/${lng}/real-estate` === pathname ? activeLinkClasses : classes
            }
            href={`/${lng}/real-estate`}
          >
            {t("real_estate")}
          </Link>
        </li>
        <li>
          <Link
            className={
              `/${lng}/investors` === pathname ? activeLinkClasses : classes
            }
            href={`/${lng}/investors`}
          >
            {t("investor")}
          </Link>
        </li>
        <li>
          <Link
            className={
              `/${lng}/about` === pathname ? activeLinkClasses : classes
            }
            href={`/${lng}/about`}
          >
            {t("about_us")}
          </Link>
        </li>
        <li>
          <Link
            className={
              `/${lng}/reports` === pathname ? activeLinkClasses : classes
            }
            href={`/${lng}/reports`}
          >
            {t("studies_and_reports")}
          </Link>
        </li>
        <li>
          <Link
            className={`/${lng}/q&a` === pathname ? activeLinkClasses : classes}
            href={`/${lng}/q&a`}
          >
            {t("qa")}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
