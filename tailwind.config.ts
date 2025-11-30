import type { Config } from 'tailwindcss';
import tailwindcssAnimate from 'tailwindcss-animate';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'spin-slow-reverse': 'spin 20s linear infinite reverse',
        'spin-fast': 'spin 2s linear infinite',
        scroll: 'scroll 40s linear infinite',
        'grid-pulse': 'grid-pulse 6s linear infinite',
        'grid-ray-1': 'grid-ray 12s linear infinite',
        'grid-ray-2': 'grid-ray 12s linear infinite -3s',
        'grid-ray-3': 'grid-ray 12s linear infinite -6s',
        tilt: 'tilt 10s infinite linear',
        marquee: 'marquee linear infinite',
      },
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'grid-pulse': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.3' },
        },
        'grid-ray': {
          '0%, 100%': { transform: 'rotate(0deg) translateX(40%)', opacity: '0.2' },
          '50%': { transform: 'rotate(180deg) translateX(40%)', opacity: '1' },
        },
        tilt: {
          '0%, 50%, 100%': {
            transform: 'rotate(0deg)',
          },
          '25%': { transform: 'rotate(0.5deg)' },
          '75%': { transform: 'rotate(-0.5deg)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [tailwindcssAnimate],
};
export default config;