/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Extendemos el tema para agregar colores y animaciones personalizadas
      colors: {
        'gemini-blue': '#4285F4',
        'gemini-purple': '#9B27AF',
        'dark-bg': '#0a0a0f', // Un fondo oscuro casi negro para resaltar el degradado
      },
      animation: {
        'gradient-pan': 'gradient-pan 6s ease infinite',
        'subtle-float': 'subtle-float 6s ease-in-out infinite',
      },
      keyframes: {
        'gradient-pan': {
          '0%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0% 50%' },
        },
        'subtle-float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
