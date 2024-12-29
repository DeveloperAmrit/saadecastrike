/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      keyframes: {
        underline: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },
      animation: {
        underline: 'underline 0.5s ease-in-out forwards',
      },
    },
  },
  plugins: [],
}

