/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    // Añade aquí las rutas a todos tus archivos que usen clases de Tailwind
  ],
  theme: {
    screens: {
      xs: '375px',
      sm: '640px',
      md: '768px',
      lg: '1050px',
      xl: '1280px',
      xxl: '1536px',
      xxxl: '2000px',
    },
    extend: {},
  },
  plugins: [],
}
