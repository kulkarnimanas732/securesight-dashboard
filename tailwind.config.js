/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
      sans: ['Plus Jakarta Sans', 'sans-serif'],
      dm: ['DM Sans', 'sans-serif'],
    },
    },
  },
  plugins: [],
};

export default config;
