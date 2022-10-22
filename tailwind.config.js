/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'shuvoit-bg': '#F4F5FA',
        'primary':'#F3603C'
      },
    },
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Helvetica'],
      'body': ['"Open Sans"'],
    }
  },
  plugins: [],
}
