/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-dark-2": "#2b2b2b",
        "primary-500": "#1c56c6",
        "others-white": "#fff",
        "greyscale-300": "rgba(224, 224, 224, 0.85)",
        "alerts-status-error": "#c82626",
        "alerts-status-success": "#23b229",
        "alerts-status-button-disabled": "#1d56ca",
        gray: {
          "100": "#2c2c2c",
          "200": "#0c1c40",
          "300": "rgba(255, 255, 255, 0.7)",
        },
        "greyscale-600": "#757575",
        "greyscale-500": "rgba(158, 158, 158, 0.6)",
        "dark-dark-1": "#212121",
        "dark-dark-3": "#3d3d44",
        royalblue: "#006fee",
        "text-2": "#f3f3f3",
        "greyscale-700": "#616161",
        "others-black": "#000",
        "primary-100": "#e9f0ff",
      },
      spacing: {},
      fontFamily: {
        "body-medium-medium": "Urbanist",
      },
      borderRadius: {
        "81xl": "100px",
        "981xl": "1000px",
        "341xl": "360px",
      },
    },
    fontSize: {
      base: "16px",
      lg: "18px",
      sm: "14px",
      xl: "20px",
      "5xl": "24px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
