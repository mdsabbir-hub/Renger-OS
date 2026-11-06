import type { Config } from "tailwindcss";

// Ranger's OS design tokens — dark, minimal, command-center aesthetic.
// Kept intentionally small: we add tokens as real screens need them,
// not speculatively.
const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          bg: "#0a0b0d",       // page background
          panel: "#121317",     // card/panel background
          border: "#23252b",    // hairline borders
        },
        text: {
          primary: "#e8e9ec",
          secondary: "#9a9ca3",
          muted: "#5b5d64",
        },
        status: {
          online: "#3ddc84",
          warn: "#e8b339",
          offline: "#e5484d",
          idle: "#6b7280",
        },
        accent: "#4f7cff",
      },
      fontFamily: {
        mono: ["'JetBrains Mono'", "ui-monospace", "SFMono-Regular", "monospace"],
        sans: ["'Inter'", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
