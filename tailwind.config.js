// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'archivo': ['Archivo', 'sans-serif'],
      },
      colors: {
        'dimmed-gray': '#999',
        'secondary-text': '#666',
        'border-gray': '#f1f1f1',
      },
      boxShadow: {
        'custom-sm': '0 6px 18px rgba(20,20,20,0.04)',
        'custom-md': '0 6px 18px rgba(0,0,0,0.04)',
        'custom-lg': '0 12px 30px rgba(0,0,0,0.06)',
      },
    },
  },
  plugins: [],
}