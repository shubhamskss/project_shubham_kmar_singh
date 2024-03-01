/** @type {import('tailwindcss').Config} */
// tailwind.config.js

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html", // Make sure to include the HTML file
  ],
  theme: {
    extend: {},
  },
  purge: {
    // Whitelist Font Awesome classes
    safelist: [
      'fa',
      'fa-lg',
      'fa-thumbs-up',
      'fa-thumbs-down',
      // Add other Font Awesome classes you're using
    ],
  },
  plugins: [],
};
