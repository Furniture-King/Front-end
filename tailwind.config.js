module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'color-font-black': '#232426',
        'color-font-gray': '#BBBFC8',
        'color-font-white': '#F7F7F7',
        'color-bg-darkBlue': '#151F33',
        'color-bg-darkBrown': '#2A2419',
        'color-bg-lightBrown': '#847A68',
        'color-bg-light': '#F9F5EC',
        'color-bg-ultraLight': '#FCFAF7'
      },
      fontFamily: {
        raleway: ['Raleway'],
        poiretOne: ['"Poiret One"']
      },
      screens: {
        xs: '500px'
      }
    }
  },
  variants: {
    extend: {
      extend: { backgroundColor: ['responsive', 'hover', 'focus', 'active'] }
    }
  },
  plugins: [require('daisyui')],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false
  }
}

// variants: {
//   extend: { backgroundColor: ['responsive', 'hover', 'focus', 'active']}
// }
