const plugin = require('tailwindcss/plugin')

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [
    'src/**/*.vue'
  ],
  theme: {
    extend: {
      colors: {
        'mbm-green': {
          'dark': '#164b39',
          'default': '#247a5d',
          'light': '#91c4b3'
        },
      }
    }
  },
  variants: {},
  plugins: [
    plugin(function({ addBase, theme }) {
      addBase({
        'body': {
          backgroundColor: theme('colors.gray.200'),
          textColor: theme('colors.gray.800'),
          fontWeight: theme('fontWeight.light'),
        },
      })
    }),
  ],
}
