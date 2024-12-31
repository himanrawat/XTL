/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lausanne: ['TWKLausanne', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

