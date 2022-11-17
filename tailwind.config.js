/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
     backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '50%': '50%',
      '16': '6rem',
    },
    extend: {
      // font family
    fontFamily:{
      'Manrope': ['Manrope'],
    },
    // media quries
       screens: {
      'sm': {'max': '720px'},
      // => @media (max-width: 639px) { ... }
      'tb': {'min': '721px', 'max': '1290px'},
      // => @media (min-width: 768px and max-width: 1023px)
      'md': '722px',
      // => @media (min-width: 768px) { ... }
    },
    backgroundImage: {
        'img': "url('../images/bg-pattern.svg')",
        'headImg': "url('../images/pattern-circles.svg')",

      }
    },
  },
  plugins: [],
}
