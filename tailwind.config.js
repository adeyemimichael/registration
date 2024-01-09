/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'
  ,
  'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'

],
  theme: {
    extend: {
      fontFamily: {
        'brico': ['Bricolage Grotesque', 'sans-serif'],
        'lex':[' Lexend Deca', 'sans-serif']
      },
    },
  },
  plugins: [ require('flowbite/plugin')],
}

