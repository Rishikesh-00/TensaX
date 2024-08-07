/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        noigrotesk: ['NoiGrotesk', 'sans-serif'], // Add your custom font here
      },
    }
  },
  plugins: []
};