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

      // md: "768px",
      // // => @media (min-width: 768px) { ... }

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
        roboto: ["var(--font-roboto)", "sans-serif"],
        open_sans: ["var(--font-open_sans)", "sans-serif"],
      },
      fontSize: {
        s: ["14px", { lineHeight: "1" }],
        l: ["60px", { lineHeight: "1.2" }],
      },
      colors: {
        customMarsala: {
          DEFAULT: "rgb(88, 29, 34)",
          accent: "rgb(109, 58, 62)",
          accentLight: "rgb(130, 86, 90)",
        },
        customElement: {
          DEFAULT: "rgb(44,89,130)",
        },
      },
      boxShadow: {
        customShadow:
          "0px 1px 6px rgba(46, 47, 66, 0.08), 0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08)",
      },
    },
  },
  plugins: [],
} satisfies Config;

// 44, 15, 145
// 0, 0, 79
// 44,89,130
// 22,119,178
