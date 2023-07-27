/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'dark': '#0e162c',
      'white': '#ffff',
      'gray': '#333333',
      "muted": "#6c757d",
    },
  },
  plugins: [],
  fontFamily: {
    'mono': ['ui-monospace', 'SFMono-Regular'],
  }
}