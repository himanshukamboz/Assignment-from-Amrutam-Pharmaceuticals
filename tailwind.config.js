/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'custom-gradient': 'linear-gradient(to right, #FBFCFB, #F4F7EC)',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter:['Inter', 'sans-serif'],
        nunito:['Nunito','sans-serif']
      },
    },
  },
  plugins: [],
}

