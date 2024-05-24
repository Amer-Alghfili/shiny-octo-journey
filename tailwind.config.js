import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        readex: ["var(--font-readex)"],
        artnoova: ["var(--font-artnoova)"],
        display: {
          en: "artnoova",
          ar: "readex",
        },
        body: "readex",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        zad: {
          extend: "light",
          colors: {
            orange: {
              1: "#FF642D",
              2: "#FF7442",
              3: "#FF8357",
              4: "#FF936C",
              5: "#FFA281",
              6: "#FFB196",
              7: "#FFC1AB",
              8: "#FFD0C0",
              9: "#FFE0D5",
              10: "#FFEFEA",
            },
            violet: {
              1: "#7D73FF",
              2: "#8A81FF",
              3: "#978FFF",
              4: "#A49DFF",
              5: "#B1ABFF",
              6: "#BEB9FF",
              7: "#CBC7FF",
              8: "#D8D5FF",
              9: "#E5E3FF",
              10: "#F2F1FF",
            },
            red: "#EB3300",
            gray: {
              1: "#667180",
              2: "#7A8799",
              3: "#8F9EB2",
            },
            "light-gray": {
              1: "#C2D2E8",
              2: "#C2D2E8",
              3: "#E0E8F3",
            },
            black: "#101820",
            blue: "#00C8FF",
          },
        },
      },
    }),
  ],
};
