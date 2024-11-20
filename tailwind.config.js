/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        black: {
          DEFAULT: "#000",
          1: "#050505",
          2: "#171717",
        },
        white: {
          DEFAULT: "#FFF",
          1: "#f5f5f5",
          2: "#dbdbdb",
        },
      },
      fontFamily: {
        oswald: ["var(--font-oswald)", ...fontFamily.sans],
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities }) {
      addBase({});
      addComponents({
        ".container": {
          "@apply mx-auto px-5 xl:max-w-[73.5rem]": {},
        },
        ".h1": {
          "@apply font-semibold text-[1.85rem] leading-[2.25rem] xs:text-[2.25rem] xs:leading-[2.85rem] sm:text-[2.85rem] sm:leading-[3.25rem] md:text-[3.5rem] md:leading-[4rem] lg:text-[4rem] lg:leading-[4.5rem] tracking-wider":
            {},
        },
        ".button": {
          "@apply text-xs tracking-wider": {},
        },
      });
      addUtilities({
        ".section__y": {
          "@apply py-5": {},
        },
        ".padding-content": {
          "@apply p-3 sm:p-5 md:p-7": {},
        },
      });
    }),
  ],
};
