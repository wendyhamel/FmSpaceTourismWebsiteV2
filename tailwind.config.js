/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './destination/index.html', './crew/index.html', './technology/index.html'],
  theme: {
    extend: {
        fontFamily: {
          'heading': ['Bellefair', 'sans-serif'],
          'sans': ['Barlow\\ Condensed', 'sans-serif'],
        },
        colors: {
            'space-blue': {
                dark: 'rgb(11 13 23)',
                light: 'rgb(208 214 249)'
            }
        },
        fontSize: {
            '.5': '1.1rem',
            '.5xl': '1.375rem',
            '4.5xl': '2.5rem',
            '7.5xl': '5rem',
            'space-4xl-res': 'min(max(5.125rem,20vw),9rem)',
            'space-3xl': '6.25rem',
            'space-2xl': '3.5rem',
            'space-xl': '2rem',
            'space-xl-res': 'min(max(1.125rem,4vw),2rem)',
            'space-lg': '1.75rem',
            'space-lg-res': 'min(max(1rem,4vw),1.75rem)',
            'space-md': '1.2rem',
            'space-md-res': 'min(max(1rem,4.8vw),1.2rem)',
            'space-sm': '1rem',
            'space-xs': '0.875rem',
        },
        letterSpacing: {
            'space-md': '0.06em',
            'space-lg': '0.125em',
            'space-xl': '0.143em',
            'space-2xl': '0.175em'
        },
        lineHeight: {
            'space': '2.025rem',
        },
        spacing: {
            '29': '7.25rem;',
            '30': '7.5625rem;',
            '68': '17rem;',
            '4lh': '4lh',
            '5lh' : '5lh',
            '6lh' : '6lh',
        },
        borderWidth: {
            '3': '3px'
        },
        transitionDuration: {
          '2000': '2000ms'
        },
        transitionTimingFunction: {
            'space': 'cubic-bezier(.24, .46, .74, .82)'
        }
    },
  },
}

