/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    darkMode: ["class"],
    theme: {
        extend: {
            keyframes: {
                pulse: {
                    "0%": {
                        opacity: 1,
                    },
                    "100%": {
                        opacity: 0,
                    },
                },
            },
            animation: {
                pulse: "pulse 1s linear infinite",
            },
        },
    },
    plugins: [],
};
