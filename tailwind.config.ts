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
        maggs: {
          orange: "#E65714",
          "orange-deep": "#C4470F",
          "orange-soft": "#FF7A3D",
          black: "#121212",
          ink: "#1A1A1A",
          charcoal: "#2A2A2A",
          steel: "#3D3D3D",
          mist: "#F4F4F4",
          paper: "#FAFAFA",
          mute: "#6B6B6B",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Impact", "Arial Black", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        panel: "0 20px 50px rgba(18,18,18,0.12)",
        glow: "0 0 0 1px rgba(230,87,20,0.25), 0 12px 40px rgba(230,87,20,0.18)",
      },
      backgroundImage: {
        "maggs-diagonal":
          "linear-gradient(135deg, #E65714 0%, #E65714 42%, transparent 42.2%)",
      },
    },
  },
  plugins: [],
};

export default config;
