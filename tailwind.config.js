module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        breathing: {
          "0%, 100%": { transform: "scale(1.7)" },
          "50%": { transform: "scale(2)" }, // Aumentamos a escala
        },
        glow: {
          "0%, 100%": { 
            filter: "drop-shadow(0 0 8px rgba(99, 102, 241, 0.8))",
          },
          "50%": {
            filter: "drop-shadow(0 0 15px rgba(99, 102, 241, 0.9)) brightness(1.1)",
          }
        }
      },
      animation: {
        breathing: "breathing 2s infinite ease-in-out",
        glow: "glow 2s infinite ease-in-out"
      },
    },
  },
  plugins: [],
};