/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './destination/index.html', './crew/index.html', './technology/index.html'],
  theme: {
    extend: {
        fontFamily: {
          'heading': ['Bellefair', 'sans-serif'], // preset 1 2 3 4 6
          'sans': ['Barlow\\ Condensed', 'sans-serif'], // preset 5 7 8 9
        },
        colors: {
            'space-blue': {
                dark: 'rgb(11 13 23)', // blue 900
                light: 'rgb(208 214 249)' // blue 300
            }
        },
        fontSize: {
            'space-4xl': '9rem', // preset 1
            'space-4xl-res': 'min(max(5.125rem,20vw),9rem)', // preset 1 responsive
            'space-3xl': '6.25rem', // preset 2
            'space-3xl-res': 'min(max(3rem,15vw),6.25rem)', // preset 2 responsive
            'space-2xl': '3.5rem', // preset 3
            'space-xl': '2rem', // preset 4
            'space-xl-res': 'min(max(1.125rem,4vw),2rem)', // preset 4 responsive
            'space-lg': '1.75rem', // preset 5 & preset 6
            'space-lg-res': 'min(max(1rem,4vw),1.75rem)', // preset 5 & preset 6 responsive
            'space-md': '1.2rem', // preset 9
            'space-md-res': 'min(max(1rem,4.8vw),1.2rem)', // preset 9 responsive
            'space-sm': '1rem', // preset 8
            'space-xs': '0.875rem', // preset 7
        },
        letterSpacing: {
            'space-md': '0.06em',
            'space-lg': '0.125em', // preset 5 & preset 8
            'space-xl': '0.143em', // preset 7
            'space-2xl': '0.175em'
        },
        lineHeight: {
            'space': '2.025rem', // preset 9
        },
        spacing: {
            '30': '7.25rem;', //116px
            '68': '17rem;', // 272px
        },
        borderWidth: {
            '3': '3px'
        }
    },
  },
}

