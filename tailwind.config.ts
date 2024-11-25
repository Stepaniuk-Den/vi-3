import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "16px",
          sm: "10px",
          md: "16px",
          lg: "20px",
        },
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "serif"],
        open_sans: ["var(--font-open_sans)", "sans-serif"],
      },
      fontSize: {
        s: ["14px", { lineHeight: "1" }],
        l: ["60px", { lineHeight: "1.2" }],
      },
      // colors: {
      //   background: "var(--background)",
      //   foreground: "var(--foreground)",
      // },
      colors: {
        slate: {
          850: "hsl(222deg 47% 16%)",
        },
        main: {
          sectionBG: "rgb(7, 29, 39)",
          mainBG: "rgb(8, 30, 41)",
        },
        customTeal: {
          DEFAULT: "rgb(27, 130, 141)",
          accent: "rgb(38, 152, 165)",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
