/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
theme: {
  extend: {
    animation: {
      'logo-entry': 'zoomRotate 1.2s ease-out',
    },
    keyframes: {
      zoomRotate: {
        '0%': { transform: 'scale(0) rotate(0deg)', opacity: '0' },
        '100%': { transform: 'scale(1) rotate(360deg)', opacity: '1' },
      },
    },
  },
}
