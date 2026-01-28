import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Amedicase brand colors
        amedicase: {
          red: "#D01127",
          redLight: "#d4283c",
          redDark: "#CD1B30",
          blue: "#1E3A8A",
          blueLight: "#2D4EAE",
          blueDark: "#223E8C",
          bg: "#f1f5ff",
          text: "#0b1737",
          textLight: "#6175ad",
        },
      },
      fontFamily: {
        sans: ['var(--font-instrument-sans)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
