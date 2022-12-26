module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontSize: { md: '22px' },
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
        yellow: {
          '0%': {
            position: 'absolute',
            left: '96px',
            width: '0px',
            opacity: '0',
          },
          '100%': {
            position: 'absolute',
            left: '96px',
            width: '38.9rem',
            opacity: '1',
          },
        },
        red: {
          '0%': { left: '127px', top: '160px', width: '622px', height: '75px' },
          '50%': { borderRadius: '50%' },
          '100%': {
            left: '60px',
            top: '235px',
            width: '229px',
            height: '229px',
            borderRadius: '50%',
            backgroundColor: '#DD3939',
          },
        },
        star: {
          '0%': {
            position: 'absolute',
            left: '-20px',
            top: '260px',
            opacity: 0.4,
          },
          '100%': {
            position: 'absolute',
            left: '24px',
            top: '24px',
            opacity: 0.7,
          },
        },
        heart: {
          '0%': {
            position: 'absolute',
            left: '10px',
            top: '10px',
            transform: 'scale(0)',
          },
          '100%': {
            position: 'absolute',
            left: '96px',
            top: '144px',
            transform: 'scale(1)',
          },
        },
        heartBg: {
          '0%': { display: 'flex', zIndex: '50', opacity: '0.5' },
          '100%': { display: 'none', zIndex: '0', opacity: '0.5' },
        },

        heartScale: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(40)' },
        },
        starOne: {
          '0%': { left: '30px', top: '64px', opacity: '1' },
          '100%': { left: '12px', top: '0', opacity: '1' },
        },
        starTwo: {
          '0%': { top: '-56px', right: '28px', opacity: '1' },
          '100%': { top: '0', right: '16px', opacity: '1' },
        },
        successText: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        shrink: 'shrink 0.5s 0.08s ease-out',
        text: 'text 1s 0.7s ease-out forwards',
        yellow: 'yellow 0.3s ease-out forwards',
        red: 'red 0.5s forwards',
        star: 'star 0.4s forwards',
        heart: 'heart 0.5s forwards',
        heartBg: 'heartBg 1s ease-out forwards',
        heartScale: 'heartScale 1s ease-out',
        starOne: 'starOne 0.5s 1.5s ease-out forwards',
        starTwo: 'starTwo 0.5s 1.5s ease-out forwards',
        successText: 'successText 0.3s 1s ease-out forwards',
      },
      colors: {
        'custom-neutral-800': '#232323',
        'custom-zinc-600': '#626262',
        'custom-orange-600': '#F15524',
        'custom-cyan-600': '#1289AE',
        'custom-cyan-700': '#208298',
        'custom-lime-300': '#D6D16E',
      },
    },
    fontFamily: {
      anonymous: 'Anonymous Pro',
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwindcss-animation-delay'),
  ],
};
