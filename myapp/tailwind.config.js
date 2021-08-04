module.exports = {
  purge: [],
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {
      'sm': {'max':'800px'},
      'lg': {'min':'824px'},
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
