/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-2": "#9757d7",
        "neutrals-8": "#fcfcfd",
        "neutrals-2": "#23262f",
        "neutrals-4": "#777e91",
        "neutrals-6": "#e6e8ec",
        "primary-1": "#3772ff",
      },
      spacing: {},
      fontFamily: {
        "button-1": "'DM Sans'",
      },
      borderRadius: {
        "71xl": "90px",
      },
    },
    fontSize: {
      base: "16px",
      sm: "14px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
