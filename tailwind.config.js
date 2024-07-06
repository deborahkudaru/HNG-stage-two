/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        customBlue: "#093858",
      },

    
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
        sans2: ["Josefin Sans", "sans-serif"]
      },
    },
  },
  plugins: [],
};
