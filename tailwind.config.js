import colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            colors: {
                // to easily manage colors, these groups have 3 gradients
                // default
                // hi -> the lighter one
                // lo -> the darker one
                bg_light: {
                    DEFAULT: colors.gray[200],
                    'hi': '#FFFFFF',
                    'lo': colors.gray[300],
                },
                bg_dark: {
                    DEFAULT: colors.slate[900],
                    'hi': colors.slate[700],
                    'lo': colors.slate[950],
                },
                fg_light: {
                    DEFAULT: '',
                    'hi': '',
                    'lo': '',
                },
                fg_dark: {
                    light: '',
                    'hi': '',
                    'lo': '',
                },
                // these groups may have 2 gradients
                // default
                // dark (optional)
                primary: {
                    DEFAULT: '#4361ee',
                },
                secondary: {
                    DEFAULT: '#805dca',
                },
                success: {
                    DEFAULT: '#00ab55',
                },
                danger: {
                    DEFAULT: '#e7515a',
                },
                warning: {
                    DEFAULT: '#e2a03f',
                },
                info: {
                    DEFAULT: '#2196f3',
                },
            },
            boxShadow: {
                '3xl': '0 2px 2px rgb(224 230 237 / 46%), 1px 6px 7px rgb(224 230 237 / 46%)',
            },
        },
        fontSize: {
            xs: '0.625rem',
            sm: '0.75rem',
            md: '0.8125rem',
            base: '0.875rem',
            lg: '1rem',
            xl: '1.125rem',
            '2xl': '1.25rem',
            '3xl': '1.5rem',
            '4xl': '2rem',
            '5xl': '2.25rem',
            '6xl': '2.5rem',
            '7xl': '3rem',
            '8xl': '4rem',
            '9xl': '6rem',
            '10xl': '8rem'
        },
        screens: {
            sm: '600px',
            md: '960px',
            lg: '1280px',
            xl: '1440px'
        }
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography')
    ],
    darkMode: 'class'
};
