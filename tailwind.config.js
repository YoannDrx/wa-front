/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/daisyui/dist/**/*.js",
    "node_modules/react-daisyui/dist/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        "2xl": "1280px",
      },
      zIndex: {
        "-10": "-10",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        wa: {
          primary: "#37749E",
          secondary: "#FFFD82",
          accent: "#E84855",
          neutral: "#2E2E2E",
          error: "#E84855",
          "base-100": "#ffffff",
          "primary-content": "#ffffff",
          lightBlue: "#E4EDF1",
        },
      },
      "light",
    ],
  },
};
