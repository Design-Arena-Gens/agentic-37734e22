import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "ui-monospace", "monospace"],
      },
      colors: {
        base: "#030712",
        primary: "#0EA5A1",
        accent: "#7C3AED",
        muted: {
          DEFAULT: "rgba(148, 163, 184, 0.6)",
          foreground: "rgba(226, 232, 240, 0.8)",
        },
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(circle at 20% -10%, rgba(124, 58, 237, 0.2), transparent 40%), radial-gradient(circle at 80% 0%, rgba(14, 165, 161, 0.18), transparent 45%)",
      },
      boxShadow: {
        glow: "0 0 120px rgba(14, 165, 161, 0.35)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        fadeUp: "fadeUp 800ms ease forwards",
      },
    },
  },
  plugins: [],
};
export default config;
