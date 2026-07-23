/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        coffee: {
          50: '#FDF8F5',
          100: '#F7ECE1',
          200: '#EBD5C1',
          500: '#A66E38',
          700: '#673918',
          800: '#42220C',
          900: '#231206',
        },
        gold: {
          400: '#F3C623',
          500: '#D4AF37',
          600: '#AA8B22',
        },
      },
      fontFamily: {
        sans: ['var(--font-jakarta)', 'sans-serif'],
        serif: ['var(--font-playfair)', 'serif'],
      },
    },
  },
  plugins: [],
};