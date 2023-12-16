/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    screens: {
      'tablet': '681px',
      // => @media (min-width: 681px) { ... }
      'phone': '579px',
      'lg': '1440px'
    },
    extend: {},
  },
  plugins: [],
}

