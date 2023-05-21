/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode:"class",
  theme: {
    extend: {
      gridTemplateColumns: {
        "navDesk": "2fr 4fr 2fr",
        "navMob":"4fr 2fr"
      },
      width: {
        "unset":"unset"
      },
      height: {
        "unset":"unset"
      }
    },


    colors: {
      "backgroundLight": "#E8E0E0",
      "backgroundDark": "#1e1e1e",
      "main-theme": "#EA899A",
      "sec-theme":"#98ea89"
    }
  },
  plugins: [],
}
