/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./node_modules/flowbite/**/*.js",
    ],
    theme: {
        colors: {
            'default-color': '#42b40e',
            'default-color-dark': '#2e780c',
        },
        extend: {},
    },
    plugins: [require("flowbite/plugin")],
};
