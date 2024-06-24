/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{'green':'#507255', 'beige':'#FEEFE5', 'green-light':'#7BAF82'},
      backgroundImage: {
        'gradient-1': 'linear-gradient(90deg, #FEEFE5, #507255)',
        'gradient-2': 'linear-gradient(45deg, #FEEFE5, #A6B6A1, #507255)',
      }
  },
    
  },
  plugins: [],
}

