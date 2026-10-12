/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#080a18',
        slate: '#11152a',
        violet: '#9d7bff',
        electric: '#6b8cff',
        aqua: '#72e6d2',
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 50px rgba(157, 123, 255, 0.2)',
      },
    },
  },
  plugins: [],
}
