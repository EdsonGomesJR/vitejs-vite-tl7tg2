/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx', './index.html'],
  theme: {
    screens: {
      mobile: { max: '640px' },
      // => @media (min-width: 640px) { ... }
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      pmarker: ['SUPER PUNCH', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        galaxy: "url('galaxy.png')",
        'nlw-gradient':
          'linear-gradient(89.86deg, #9572FC 8.76%, #43e7ad 88%, #E1D55D 2%)',
        'game-gradient':
          'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.88%)',
      },
      textColor: {},
    },
  },
  plugins: [],
};

/**background: linear-gradient(89.86deg, #9572FC 23.08%, #43E7AD 33.94%, #E1D55D 44.57%),
linear-gradient(0deg, #FFFFFF, #FFFFFF);
 */
