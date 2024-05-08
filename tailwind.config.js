/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGray: '#A8ADB2',
    
        // Add more custom colors as needed
      },
    },
  },
  plugins: [],
}