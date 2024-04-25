/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["client/**/*.{html,js,vue}"],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
    },
    extend: {
      colors: {
        "theme-brand": "rgb(var(--theme-brand) / <alpha-value>)",
        "theme-background": "rgb(var(--theme-background) / <alpha-value>)",
        "theme-background-elevated":
          "rgb(var(--theme-background-elevated) / <alpha-value>)",
        "theme-background-tint":
          "rgb(var(--theme-background-tint) / <alpha-value>)",
        "theme-background-highlight":
          "rgb(var(--theme-background-highlight) / <alpha-value>)",
        "theme-background-hover":
          "rgb(var(--theme-background-hover) / <alpha-value>)",
        "theme-text": "rgb(var(--theme-text) / <alpha-value>)",
        "theme-text-muted": "rgb(var(--theme-text-muted) / <alpha-value>)",
        "theme-text-very-muted":
          "rgb(var(--theme-text-very-muted) / <alpha-value>)",
        "theme-shadow": "rgb(var(--theme-shadow) / <alpha-value>)",
        "theme-border": "rgb(var(--theme-border) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};