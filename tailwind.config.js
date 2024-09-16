import plugin from 'tailwindcss/plugin';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}" ,

  ],
  theme: {
    extend: {
      fontFamily: {
        "cormorant": ['Cormorant', 'sans-serif']
      },
      colors:{
        'beige': '#F4EFEC',
      }
    },
  },
  plugins: [
  ],
}