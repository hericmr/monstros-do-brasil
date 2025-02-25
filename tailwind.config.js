/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Caminho para os arquivos React
  ],
    theme: {
      extend: {
        keyframes: {
          breathing: {
            "0%, 100%": { transform: "scale(1)" },
            "50%": { transform: "scale(1.1)" },
          },
        },
        animation: {
          breathing: "breathing 1s infinite ease-in-out",
        },
      },
    },
    plugins: [],
  };
  