/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Caminho para os arquivos React
  ],

  theme: {
    extend: {
      keyframes: {
        'monster-pulse': {
          '0%, 100%': { transform: 'scale(0.95)', opacity: '0.8' },
          '70%': { transform: 'scale(1.1)', opacity: '1' },
        },
      },
      animation: {
        'monster-pulse': 'monster-pulse 2s infinite',
      },
    },
  },
  plugins: [],
}