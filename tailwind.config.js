/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      xs: ["12px", "16px"],
      sm: ["14px", "20px"],
      base: ["16px", "19.5px"],
      lg: ["18px", "21.94px"],
      xl: ["20px", "24.38px"],
      "2xl": ["24px", "29.26px"],
      "3xl": ["28px", "50px"],
      "4xl": ["48px", "58px"],
      "8xl": ["96px", "106px"],
    },

    extend: {
      fontFamily: {
        palanquin: ["Palanquin", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#ECEEFF",
        offwhite: "#FFFAF5",
        orange: "#FF715F",
        black: "#3C3C43",
        softtext: "#626262",
        "slate-gray": "#F6F6F7",
        "pale-blue": "#F5F6FF",
        "white-400": "rgba(255, 255, 255, 0.80)",
      },
      backgroundImage: {
        hero: "url('/assets/hero/hero-bg.png')",
        hero_shape: "url('/assets/hero/shape-1.svg')",
        hero_shape2_light: "url('/assets/hero/shape-2-light.svg')",
        hero_shape2_dark: "url('/assets/hero/shape-2-dark.svg')",
        dots: "url('/assets/dots-light.svg)",
        bg_card: "url('/assets/work/project-bg-light.png')",
        emptyicon: "url('/assets/empty_icon.png')",
      },
      boxShadow: {
        "3xl": "0 10px 40px rgba(0, 0, 0, 0.1)",
      },
      screens: {
        wide: "1440px",
      },
    },
  },
  plugins: [],
};
