import LanguageSwitcher from "@/components/languageSwithcher";
import { artnoova, readex } from "@/font";
import { dir } from "i18next";
import "../globals.css";
import { Providers } from "../providers";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ params: { lng }, children }) {
  return (
    <html
      lang={lng}
      dir={dir(lng)}
      className={`${readex.variable} ${readex.className} ${artnoova.variable} ${artnoova.className}`}
    >
      <Providers>
        <body>
          <LanguageSwitcher lng={lng} />
          {children}
        </body>
      </Providers>
    </html>
  );
}
