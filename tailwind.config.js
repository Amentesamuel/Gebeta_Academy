import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                poppins: '"Poppins", sans-serif',
                montserrat: '"Montserrat", sans-serif',
                Raleway: '""Raleway", sans-serif;',
                sourGummy: '"Sour Gummy", sans-serif',
                nunito: '"Nunito", sans-serif',
            },

            colors: {
                background: "#ffffff",
                foreground: "#f3f8fc",
                button: "#066ac8",
                background2: "#f9f9f9",
                cardOrange: "#fef9f6",
                footer: "#efefef",
            },
            keyframes: {
                customBounce: {
                  '0%, 100%': { transform: 'translateY(0)' },
                  '50%': { transform: 'translateY(-30px)' }, // Customize the bounce height here
                },
              },
            animation: {
                'slow-bounce': 'customBounce 10s infinite',
              },
        },
    },

    plugins: [forms],
};
