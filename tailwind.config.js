/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#EEF2FF',
          100: '#E0E7FF',
          200: '#C7D2FE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#4F46E5',
          700: '#4338CA',
          800: '#312E81',
          900: '#1E293B',
          950: '#0F172A',
        },
        genaixis: {
          canvas: '#0B1120',
          surface: '#121C33',
          panel: '#182447',
          mist: '#EEF2FF',
          ink: '#172554',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
