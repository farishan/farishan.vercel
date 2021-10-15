module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'brand-dark': '#222831',
        'brand-medium-dark': '#393E46',
        'brand-primary': '#FFD369',
        'brand-light': '#EEEEEE'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
