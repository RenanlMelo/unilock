import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      boxShadow: {
        "card_carousel": "5px 10px 20px rgba(0, 0, 0, 1)",
        "custom-double": 'inset 0 -1520px 100px -50px #00000060, inset 0px 150px 100px -50px #000000aa',
        "sobre_circles": "inset 4px 4px 10px #ffffff70, inset -4px -4px 10px #000",
        "link": "-4px -4px 10px #ffffff50, 4px 4px 10px #00000030",
      }
    },
  },
  plugins: [],
};
export default config;
