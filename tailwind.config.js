/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './destination.html', './destination/index.html'],
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
            'space-lg': '0.125em', // preset 5 & preset 8
            'space-xl': '0.143em', // preset 7
        },
        lineHeight: {
            'space': '2.025rem', // preset 9
        },
        spacing: {
            '30': '7rem;', //112px
            '68': '17rem;', // 272px
            2: '0.5rem', // for 2 use 0.tw class -> 0.5
            4: '1rem', // for 4 use tw class -> 1
            8: '2rem', // for 8 use tw class -> 2
            12: '3rem', // for 12 use tw class -> 3
            16: '4rem', // for 16 use tw class -> 4
            24: '6rem', // for 24 use tw class -> 6
            32: '8rem', // for 32 use tw class -> 8
            40: '10rem', // for 40 use tw class -> 10
            48: '12rem', // for 48 use tw class -> 12
            64: '16rem', // for 64 use tw class -> 16
            80: '20rem', // for 80 use tw class -> 20
            96: '24rem', // for 96 use tw class -> 24
            128: '32rem', // for 128 use tw class -> 32
        },
        borderWidth: {
            '3': '3px'
        }
    },
  },
}

