import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0F1113",
          elevated: "#16181B",
          border: "#24272B",
          hair: "#1D2023",
        },
        paper: {
          DEFAULT: "#EDEDEC",
          muted: "#93979E",
          dim: "#6B6E74",
        },
        brass: {
          DEFAULT: "#C9A063",
          soft: "#C9A06320",
          bright: "#DCB783",
        },
        sage: {
          DEFAULT: "#7FB69E",
          soft: "#7FB69E1F",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      maxWidth: {
        content: "72rem",
        prose: "38rem",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
      },
      animation: {
        blink: "blink 1.1s step-start infinite",
      },
    },
  },
  plugins: [],
};

export default config;
