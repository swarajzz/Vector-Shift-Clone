/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      boxShadow: {
        'purple': "#cecffc 0px 0px 0px 2px",
        'purple-2': "#cecffc 0px 0px 0px 4px"
      }
    },
  },
  plugins: [],
};
