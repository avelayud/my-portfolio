/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand
        brand: {
          primary: "#2643A3",   // Deep product blue
          secondary: "#5E6AD2", // Bright slate blue
          accent: "#E6B800",    // Soft lemon accent
        },

        // Surfaces
        background: "#F7F9FC", // Page background
        surface: "#FFFFFF",    // Cards / panels

        // Text
        text: {
          primary: "#1A1F36",   // Main headings
          secondary: "#4D5566", // Body text
          muted: "#9CA3AF",     // Labels / metadata
        },

        // Subtle lines / dividers
        divider: "#D3DAE6",

        // Optional border color if you ever need it
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
