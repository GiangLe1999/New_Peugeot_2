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
        textColor: "#54595f",
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "120ch",
          },
        },
      },
      aspectRatio: {
        "22 / 10": "22 / 10",
      },
      boxShadow: {
        stickyBtns: "0px 0px 1px 1px rgba(192, 192, 192, 0.3)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
