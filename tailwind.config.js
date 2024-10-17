/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        dance: 'bounce 4s infinite',
        hug: 'bicik 4s infinite',
        gradient: 'gradient 15s ease infinite',
        shad: 'BorderFras 3s ease infinite',
      },
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(5%)', animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)' },
          '50%': { transform: 'translateY(0%)', animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)' },
        },
        bicik: {
          "0%, 100%": {backgroundColor: "#aaa"},
          "10%": {backgroundColor: "linear-gradient(270deg, #ff7f50, #1e90ff, #ff7f50)"},
          "20%": {backgroundColor: "#a0a"},
          "30%": {backgroundColor: "#0aa"},
          "30%": {backgroundColor: "#0aa"},
          "70%": {backgroundColor: "#5a4"},
          "80%": {backgroundColor: "#054"},
          "90%": {backgroundColor: "#011"},
        },
        gradient: {
          '0%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0% 50%' },
        },
        BorderFras: {
          "0%": {"border-color" : "blue", "box-shadow" : "10px 10px 200px blue", transform: "translateY(0)"},
          "25%": {"border-color" : "yellow", "box-shadow" : "10px 10px 200px yellow"},
          "50%": {"border-color" : "orrange", "box-shadow" : "10px 10px 200px orrange",transform:"translateY(20px)"},
          "75%": {"border-color" : "green", "box-shadow" : "10px 10px 200px green"},
          "100%": {"border-color" : "red", "box-shadow" : "10px 10px 200px red", transform: "translateY(0)"},
        }
      }
    },
  },
  plugins: [],
}