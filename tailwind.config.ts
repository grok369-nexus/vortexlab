import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#08090d",
        panel: "#11131b",
        violet: "#9b8cff",
        cyan: "#73e4e0",
      },
      fontFamily: {
        sans: ["Arial", "Helvetica", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;