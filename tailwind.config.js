/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        primary : "#EA1179"
      }
    },
    screens: {
      'sm': '640px',    // Mode mobile
      'md': '768px',    // Anda dapat menyesuaikan nilai ini agar mode desktop dimulai lebih awal
      'lg': '1024px',
      'xl': '1280px',
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
}

