/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        textColor: "#fff",
        primaryColor: "#f5ba13",
      },

      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        mcLaren: ["McLaren", "sans-serif"],
      },

      boxShadow: {
        "header-shadow": "0 0 10px 0 rgba(0, 0, 0, 0.3)",
        "note-shadow": "0 2px 5px #ccc",
        "form-shadow": "0 1px 5px rgb(138, 137, 137)",
      },
    },
  },
  plugins: [],
};
