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

      md: "768px",
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
      backgroundImage: {
        customLaser:
          "linear-gradient(90deg, transparent, rgba(88, 29, 34, 0.945), transparent)",
      },
      boxShadow: {
        customShadow:
          "0px 1px 6px rgba(46, 47, 66, 0.08), 0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08)",
        customShadowInput: "0px 6px 8px rgba(44,89,130, 0.33)",
      },
      animation: {
        unfoldIn: "unfoldIn 0.5s ease-out",
        unfoldOut: "unfoldOut 0.5s ease-in",
        burgerIn: "burgerIn 0.5s ease-in-out",
        burgerOut: "burgerOut 0.5s ease-in-out",
        laser: "swipe 0.5s linear infinite",
        textFocusIn: "textFocusIn 1s cubic-bezier(0.55, 0.085, 0.68, 0.53) both",
        textFocusInDelayed: "textFocusIn 2s cubic-bezier(0.55, 0.085, 0.68, 0.53) 1s both",
      },
      keyframes: {
        unfoldIn: {
          "0%": {
            transform: "scaleY(0.005) scaleX(0)",
          },
          "50%": {
            transform: "scaleY(0.005) scaleX(1)",
          },
          "100%": {
            transform: "scaleY(1) scaleX(1)",
          },
        },
        unfoldOut: {
          "0%": {
            transform: "scaleY(1) scaleX(1)",
          },
          "50%": {
            transform: "scaleY(0.005) scaleX(1)",
          },
          "100%": {
            transform: "scaleY(0.005) scaleX(0)",
          },
        },
        burgerIn: {
          "0%": {
            transform: "translateX(-100%)",
          },
          "100%": {
            transform: "translateX(0)",
          },
        },
        burgerOut: {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(-100%)",
          },
        },
        laser: {
          "0%": { left: "-100%" },
          "100%": { left: "100%" },
          // "0%": { transform: "translateX(-100%)" },
          // "100%": { transform: "translateX(100%)" },
        },
        textFocusIn: {
          "0%": { filter: "blur(12px)", opacity: "0" },
          "100%": { filter: "blur(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;

// 44, 15, 145
// 0, 0, 79
// 44,89,130
// 22,119,178
