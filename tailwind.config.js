const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    purge: [],
    theme: {
        extend: {
        fontFamily: {
            sans: ['Fredoka One', ...defaultTheme.fontFamily.sans],
        },
        },
    },
    variants: {},
    plugins: [],
};