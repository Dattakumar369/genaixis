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
        /* Logo-aligned: electric blue accent + deep navy ink on black */
        brand: {
          50: '#E8F3FF',
          100: '#C5E0FF',
          200: '#8FC4FF',
          300: '#5BABFF',
          400: '#3B9EFF',
          500: '#2B7FE8',
          600: '#1E5BB8',
          700: '#1A448C',
          800: '#142F5C',
          900: '#0C1A33',
          950: '#060D18',
        },
        genaixis: {
          canvas: '#000000',
          surface: '#060B14',
          panel: '#0C1424',
          mist: '#E8F3FF',
          ink: '#1A448C',
          glow: '#3B9EFF',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'brand-x': 'linear-gradient(180deg, #3B9EFF 0%, #1A448C 100%)',
      },
    },
  },
  plugins: [],
};
