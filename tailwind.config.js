const { nextui } = require("@nextui-org/theme");
/** @type {import('tailwindcss').Config} */
// "./src/**/*.{js,jsx,ts,tsx}",

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js",
    "jsx",
    "ts",
    "tsx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|checkbox|link|listbox|select|skeleton|slider|toggle|ripple|spinner|divider|popover|scroll-shadow).js"
  ],
  theme: {
    extend: {},
  },
  plugins: [nextui()],
};
