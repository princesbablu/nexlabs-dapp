import { type Config } from "tailwindcss";

export default {
  darkMode: 'class',
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem'
      },
      colors: {
        'body': '#040800'
      }
    },
  },
  plugins: [
    require('tailwind-children'),
  ]
} satisfies Config;
