/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "scheme-dark-blue": '#0c0a3e',
        "scheme-green": '#00a38c',
        "scheme-green-dark": '#009ba0',
        "scheme-dark": '#2f4858',
        "scheme-purple": "#7b1e7a",
        "scheme-maroon": "#b33f62",
        "scheme-red": "#f9564f",
        'scheme-yellow': '#f3c677',
      },
    },
  },

  plugins: [],
}
