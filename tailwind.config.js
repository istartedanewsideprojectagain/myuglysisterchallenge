module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [
    './public/**/*.html',
    './src/**/*.vue',
  ],
  theme: {
    colors: {
      primary:"#883997",
      lightGray: "#bdc3c7",
      base: "#121212",
      transparent: 'transparent',
      white: '#FFF',
      black: '#000',
      red: '#c0392b',
      blue: '#3498db',
      darkBlue: '#2980b9',
      orange: '#e67e22',
      yellow: '#f1c40f',
      green: '#27ae60',
      darkGray: '#7f8c8d',
      icon: '#34495e',
      elevation: {
        1: "#161616",
        2: "#222222",
        3: "#242424",
        4: "#272727",
        6: "#2c2c2c",
        8: "#2d2d2d",
        12: "#323232",
        16: "#353535",
        24: "#373737",
      }
    }
  },
  variants: {},
  plugins: [],
};
