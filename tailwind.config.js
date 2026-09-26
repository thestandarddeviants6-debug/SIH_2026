/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#082B63",
          50: "#EAF1FB",
        },
        brandBlue: {
          DEFAULT: "#0878D1",
          bright: "#1689E5",
        },
        brandGreen: {
          DEFAULT: "#079447",
        },
        teal: {
          DEFAULT: "#008A86",
        },
        skyLight: "#EAF6FF",
        skyFaint: "#F4FAFF",
        greenFaint: "#EAF9F0",
        saffron: "#F39A28",
      },
      fontFamily: {
        sans: ["'Inter'", "'Noto Sans Devanagari'", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1500px",
      },
      keyframes: {
        fadeSlideUp: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-slide-up": "fadeSlideUp 0.7s ease-out both",
        "fade-in": "fadeIn 0.9s ease-out both",
      },
    },
  },
  plugins: [],
};
