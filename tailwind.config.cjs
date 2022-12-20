module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      keyframes: {
        shrink: {
          '0%': { transform: 'scaleX(40) scaleY(42)' },
          '100%': { transform: 'scale(1)' },
        },
        text: {
          '0%': {
            position: 'relative',
            top: '-72px',
            opacity: '1',
          },
          '100%': { position: 'relative', top: '0', opacity: '1' },
        },
      },
      animation: {
        shrink: 'shrink 0.5s 0.08s ease-out',
        text: 'text 1s 0.7s ease-out forwards',
      },
      colors: {
        'custom-neutral-800': '#232323',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwindcss-animation-delay'),
  ],
};
