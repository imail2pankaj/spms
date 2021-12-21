const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    purge: [
        "./storage/framework/views/*.php",
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
            },
            display: ["group-hover"],
        },
    },
    variants: {
        extend: {
            opacity: ["disabled"],
        },
        opacity: ({ after }) => after(['disabled'])
    },
    plugins: [require("@tailwindcss/forms")],
};