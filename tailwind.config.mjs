/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-estedad)", ...fontFamily.sans],
      },
      colors: {
        primary: "var(--color-primary)",
        red: "var(--color-red)",
        red_light: "var(--color-red-light)",
        orange: "var(--color-orange)",
        orange_light: "var(--color-orange-light)",
        green: "var(--color-green)",
        green_light: "var(--color-green-light)",
        purple: "var(--color-purple)",
        purple_light: "var(--color-purple-light)",
        gray_1: "var(--color-gray-1)",
        gray_2: "var(--color-gray-2)",
        gray_3: "var(--color-gary-3)",
      },
    },
  },
  plugins: [],
};
