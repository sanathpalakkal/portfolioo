import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FFFFFF",
        surface: "#F8FAFC",
        ink: "#111827",
        muted: "#6B7280",
        primary: "#2563EB",
        secondary: "#10B981",
        line: "#E5E7EB",
      },
      boxShadow: {
        soft: "0 16px 48px rgba(17, 24, 39, 0.08)",
        card: "0 10px 30px rgba(17, 24, 39, 0.06)",
      },
      borderRadius: {
        soft: "1.25rem",
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};

export default config;
