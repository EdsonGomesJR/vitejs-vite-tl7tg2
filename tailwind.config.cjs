/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx', './index.html'],
  theme: {
    // screens: {
    //   // mobile: { raw: '(max-height: 760px),(min-width:320px)' },
    //   //       @media (min-width:320px)  { /* smartphones, iPhone, portrait 480x320 phones */ }
    //   mobile: { min: '320px' },
    //   xl: { min: '320px' },
    //   mobile: { min: '320px' },
    //   mobile: { min: '320px' },
    //   mobile: { min: '320px' },
    //   mobile: { min: '320px' },

    //   // @media (min-width:481px)  { /* portrait e-readers (Nook/Kindle), smaller tablets @ 600 or @ 640 wide. */ }
    //   // @media (min-width:641px)  { /* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */ }
    //   // @media (min-width:961px)  { /* tablet, landscape iPad, lo-res laptops ands desktops */ }
    //   // @media (min-width:1025px) { /* big landscape tablets, laptops, and desktops */ }
    //   // @media (min-width:1281px) { /* hi-res laptops and desktops */ }
    // },
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
