/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,svelte}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    screens: {
      mdlg: "896px",
    },
    extend: {},
  },
  plugins: [],
};
