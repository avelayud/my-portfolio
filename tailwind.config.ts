// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand & surfaces
        brand: {
          primary: "#4A5FC1",
        },
        background: "#F8F9FB",
        surface: "#FFFFFF",

        // Text
        text: {
          primary: "#222222",
          secondary: "#6B7280",
          muted: "#9CA3AF",
        },

        // Subtle borders (if you ever need them)
        border: {
          subtle: "#E5E7EB",
        },
      },
      borderRadius: {
        // 8px grid
        "av-sm": "8px",
        "av-md": "16px",
        "av-lg": "24px",
      },
      boxShadow: {
        "skeuo-soft": "0 6px 18px rgba(0,0,0,0.10)",
        "skeuo-inner": "inset 0 1px 2px rgba(0,0,0,0.06)",
      },
      fontFamily: {
        sans: [
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
