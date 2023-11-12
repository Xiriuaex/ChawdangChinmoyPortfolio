/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    screens: {

      'mobile': '200px',
      //(min-width: 200px)

      'tablet': '540px',
      //(min-width: 540px)

      'laptop': '1024px',
      //(min-width: 1024px)

      'desktop': '1025px',
      //(min-width: 1280px)
    },
    fontFamily: {
      'sans': ['Lato', 'sans-serif'],
      
    }
  },
  plugins: [],
}
