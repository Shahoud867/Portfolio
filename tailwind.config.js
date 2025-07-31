/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        lavender: {
          50: '#FAF5FF',
          400: '#B794F6',
          500: '#9F7AEA',
          600: '#805AD5',
        },
        charcoal: {
          800: '#2D3748',
          900: '#1A202C',
        }
      },
      fontFamily: {
        'mono': ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #9F7AEA, 0 0 10px #9F7AEA, 0 0 15px #9F7AEA' },
          '100%': { boxShadow: '0 0 10px #9F7AEA, 0 0 20px #9F7AEA, 0 0 30px #9F7AEA' },
        }
      }
    },
  },
  plugins: [],
}