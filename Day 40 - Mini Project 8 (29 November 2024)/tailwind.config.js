/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "black-cstm": "#1A1A1A",
        "gray-cstm": "#667085",
        "purple-cstm": {
          100: "#F9F5FF",
          200: "#6941C6"
        },
        "red-cstm": {
          100: "#FDF2FA",
          200: "#C11574",
        },
        "blue-cstm": {
          100: "#EEF4FF",
          200: "#3538CD",
        },
        "green-cstm": {
          100: "#ECFDF3",
          200: "#027A48",
        },
        "orange-cstm": {
          100: "#FFF6ED",
          200: "#C4320A",
        },
        "dark-mode-cstm": "#090D1F",
      },
    },
  },
  plugins: [],
};
