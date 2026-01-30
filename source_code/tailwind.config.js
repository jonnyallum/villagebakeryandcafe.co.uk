/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                display: ['Cormorant Garamond', 'serif'],
                body: ['Manrope', 'sans-serif'],
            },
            colors: {
                cream: '#F5F1E8',
                olive: {
                    50: '#F9FAF4',
                    100: '#F0F4E3',
                    200: '#E2E9C6',
                    300: '#C8D395', // The "Olive Glow"
                    400: '#ADC068',
                    500: '#91A44D',
                    600: '#708038',
                    700: '#525E28',
                },
                // Alias Gold to Olive for backward compatibility
                gold: {
                    50: '#F9FAF4',
                    100: '#F0F4E3',
                    200: '#E2E9C6',
                    300: '#C8D395',
                    400: '#ADC068',
                    500: '#91A44D',
                    600: '#708038',
                    700: '#525E28',
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
};
