/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
// tailwind.config.js
module.exports = {
  // Other configuration options...
  plugins: [
    require('@tailwindcss/blend-mode'),
    // Other plugins if any...
  ],
};
