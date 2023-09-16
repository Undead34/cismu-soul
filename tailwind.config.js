/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      padding: {
        18: "72px",
      },
      width: {
        57: "228px",
        58: "232px",
        66: "280px",
      },
    },
  },
  plugins: [],
};
