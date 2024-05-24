import { Readex_Pro } from "next/font/google";
import localFont from "next/font/local";

export const readex = Readex_Pro({
  variable: "--font-readex",
  subsets: ["arabic", "latin"],
});

export const artnoova = localFont({
  src: [
    {
      path: "./public/fonts/Artnoova-Bold.ttf",
      weight: "700",
      style: "bold",
    },
    {
      path: "./public/fonts/Artnoova-Light.ttf",
      weight: "300",
    },
    {
      path: "./public/fonts/Artnoova-Medium.ttf",
      weight: "500",
    },
    {
      path: "./public/fonts/Artnoova-Regular.ttf",
      weight: "400",
    },
    {
      path: "./public/fonts/Artnoova-Semibold.ttf",
      weight: "600",
    },
  ],
  variable: "--font-artnoova",
  display: "swap",
});
