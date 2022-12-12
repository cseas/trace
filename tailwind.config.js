/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [
    require("windy-radix-palette")({
      colors: {
        mauveA: radixColors.mauveA,
        mauveDarkA: radixColors.mauveDarkA,
        red: radixColors.red,
        redDark: radixColors.redDark,
      },
    }),
  ],
};
