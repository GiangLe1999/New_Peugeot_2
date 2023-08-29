import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#C4161C",
        secondary: "#2b2b2b",
        tertiary: "#0298da",
        lightBg: "#F8FAFC",
        textColor: "#2D2D2D",
      },
      aspectRatio: {
        "22 / 10": "22 / 10",
      },
    },
  },
  plugins: [],
};
export default config;
