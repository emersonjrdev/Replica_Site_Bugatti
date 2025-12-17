/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bugatti-black': '#000000',
        'bugatti-white': '#FFFFFF',
        'bugatti-green': '#00FF00',
      },
    },
  },
  plugins: [],
}

