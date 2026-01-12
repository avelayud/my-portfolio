/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand
        brand: {
          primary: "#2643A3",   // Deep product blue
          secondary: "#5E6AD2", // Bright slate blue
          accent: "#E6B800",    // Soft lemon accent (use sparingly)
        },

        // Surfaces
        background: "#F7F9FC",
        surface: "#FFFFFF",

        // Text
        text: {
          primary: "#1A1F36",
          secondary: "#4D5566",
          tertiary: "#6B7280", // <- added (fixes text-text-tertiary)
          muted: "#9CA3AF",
        },

        // Lines / borders
        divider: "#D3DAE6",
        border: {
          subtle: "#D3DAE6",
        },
      },

      borderRadius: {
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
