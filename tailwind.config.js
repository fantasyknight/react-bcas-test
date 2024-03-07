/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        dark: "#131722",
        gray: "#6a6d78",
        "gray-100": "#f0f3fa",
      },
      fontSize: {
        xs: "0.75rem",
        sm: "1rem",
        md: "1.25rem",
        lg: "1.5rem",
        'xl': "3rem",
        '2xl': "4rem",
        '3xl': "6rem"
      },
      screens: {
        'xxl': '1440px'
      }
    }
  },
  plugins: [],
};
