// module.exports = {
//   plugins: {
//     tailwindcss: {},
//     'postcss-import': {},
    
//     'tailwindcss/nesting': 'postcss-nesting',
//     autoprefixer: {},
//   },
// }


module.exports = {
  plugins: [
      'postcss-import',
      'tailwindcss/nesting',
      'tailwindcss',
      'autoprefixer',
  ]
}