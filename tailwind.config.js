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
        "navMob":"8fr 1.5fr"
      },
      width: {
        "unset":"unset"
      },
      height: {
        "unset":"unset"
      }
    },


    colors: {
      "backgroundLight": "#eaeaec",
      "backgroundDark": "#1e1e1e",
      "main-theme": "#ea8484",
      "sec-theme":"#98ea89",
      "borders-dark":"#e8e0e03c"
    }
  },
  plugins: [],
}
