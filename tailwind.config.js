/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#eff6ff',
                    100: '#dbeafe',
                    200: '#bfdbfe',
                    300: '#93c5fd',
                    400: '#60a5fa',
                    500: '#3b82f6',
                    600: '#2563eb',
                    700: '#1d4ed8',
                    800: '#1e40af',
                    900: '#1e3a8a',
                },
                government: {
                    blue: '#1e40af',
                    orange: '#f97316',
                    green: '#16a34a',
                }
            },
            spacing: {
                '18': '4.5rem',
                '22': '5.5rem',
                '26': '6.5rem',
            },
            fontSize: {
                'kiosk-xs': ['1rem', '1.5rem'],
                'kiosk-sm': ['1.125rem', '1.75rem'],
                'kiosk-base': ['1.25rem', '1.875rem'],
                'kiosk-lg': ['1.5rem', '2rem'],
                'kiosk-xl': ['1.875rem', '2.25rem'],
                'kiosk-2xl': ['2.25rem', '2.5rem'],
                'kiosk-3xl': ['3rem', '1'],
            },
            minHeight: {
                'touch': '60px',
            },
            minWidth: {
                'touch': '60px',
            }
        },
    },
    plugins: [],
}
