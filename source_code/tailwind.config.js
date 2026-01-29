/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                display: ['Cormorant Garamond', 'serif'],
                body: ['Manrope', 'sans-serif'],
            },
            colors: {
                cream: '#F5F1E8',
                gold: {
                    50: '#F8F3E8',
                    100: '#E8D5B7',
                    200: '#D9C7A3',
                    300: '#C6A87C',
                    400: '#B89968',
                    500: '#A88B5E',
                    600: '#8B6D47',
                    700: '#6B5335',
                },
                dark: {
                    900: '#0D0D0C',
                    800: '#1A1918',
                    700: '#2A2826',
                },
            },
        },
    },
    plugins: [],
}
