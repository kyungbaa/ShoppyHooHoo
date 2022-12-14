/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#212121',
      },
      backgroundImage: {
        banner: `url('../public/images/banner.jpeg')`,
      },
    },
  },
  plugins: [],
};
