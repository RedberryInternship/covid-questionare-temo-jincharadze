module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-animation-delay'),
    require('@tailwindcss/forms'),
  ],
};
