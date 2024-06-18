/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./color_lib/**/*.{html,js}"],
  theme: {
    screens: {
      mm:'375px',
      ml:'425px',
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        'primary': '#FF9100',
        'secondary':'#5e5e5e'
      },

      fontFamily: {
        'Gideon-Roman': ['Gideon-Roman',]
      },

      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '3rem',
          xl: '0rem',
        },

      },
    },
  },
  plugins: [],
}
