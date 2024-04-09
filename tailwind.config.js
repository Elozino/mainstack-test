/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        degularRegular: ["Degular_Regular", "sans"],
        degularMedium: ["Degular_Medium", "sans"],
        degularSemibold: ["Degular_SemiBold"],
        degularBold: ["Degular_Bold", "sans"],
        degular: ["Degular_Black", "sans"],
      },
      colors: {
        gray_50: "#EFF1F6",
        gray_400: "#56616B",
        gray_100: "#EFF1F6",
        gray_500: "#5c6670",
        gray_600: "#131316",
        black_300: "#131316",
        green_50: "#E3FCF2",
        red_50: "#F9E3E0",
      },
      boxShadow: {
        navbar: "0px 2px 4px 0px #2D3B430D, 0px 2px 6px 0px #2D3B430F",
        sidebar: "0px 6px 12px 0px #5C738314, 0px 4px 8px 0px #5C738314",
        multiInput:
          " 0px 8px 16px 4px #BCC4CC1A, 0px 12px 24px 0px #DBDEE51A, 0px 16px 32px 0px #DBDEE51A",
      },
    },
  },
  variants: {
    extend: {
      filter: ['hover'],
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.filter-white': {
          filter: 'brightness(0) invert(1) sepia(0) saturate(0) hue-rotate(0)',
        },
      };
      addUtilities(newUtilities, ['hover']);
    },
  ],
};
