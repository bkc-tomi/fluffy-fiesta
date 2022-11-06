/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        bounce: {
          "0%, 100%": {
            transform: "translateY(-12px)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(0)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
          }
        }
      } 
    },
    colors: {
      transparent: 'transparent',
      butter: "#FEDC3D",
      black: "#000000",
      azure: "#01ABAA",
      fuchsia: "#c026d3",
      peach: "#FEA680",
      cream: "#F7FFD9",
      pink: "#ec4899",
      violet: "#8b5cf6",
      white: "#f8fafc",
    }
  },
  plugins: [],
}
