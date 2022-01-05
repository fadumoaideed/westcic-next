import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const breakpoints = createBreakpoints({
   sm: '40em', //640px
   md: '52em', //800px
   lg: '64em', //1024px
   xl: '80em' //1280
})

// const components = {
//    Button: {
//      // setup light/dark mode component defaults
//      baseStyle: props => ({
//        dialog: {
//          bg: mode('white', '#141214')(props),
//        },
//      }),
//    },
//  };

const config = {
   initialColorMode: 'light',
   //useSystemColorMode: false,
   breakpoints,
   brand: {
      50: '#d8ffff',
      100: '#acffff',
      200: '#7dffff',
      300: '#4dffff',
      400: '#28ffff',
      500: '#18e5e6',
      600: '#00b2b3',
      700: '#007f80',
      800: '#004d4e',
      900: '#001b1d'
   },
   // fonts: {
   //    body: 'Inter',
   //    heading: 'Inter'
   // },
   // fonts: {
   //    body: "system-ui, sans-serif",
   //    heading: "Georgia, serif",
   //    mono: "Menlo, monospace",
   //  },
   //  fontSizes: {
   //    xxxs: "0.45rem",
   //    xxs: "0.60rem",
   //    xs: "0.75rem",
   //    sm: "0.875rem",
   //    md: "1rem",
   //    lg: "1.125rem",
   //    xl: "1.25rem",
   //    "2xl": "1.5rem",
   //    "3xl": "1.875rem",
   //    "4xl": "2.25rem",
   //    "5xl": "3rem",
   //    "6xl": "3.75rem",
   //    "7xl": "4.5rem",
   //    "8xl": "6rem",
   //    "9xl": "8rem",
   //  },
   //  fontWeights: {
   //    hairline: 100,
   //    thin: 200,
   //    light: 300,
   //    normal: 400,
   //    medium: 500,
   //    semibold: 600,
   //    bold: 700,
   //    extrabold: 800,
   //    black: 900,
   //  },
   styles: {
      global: {
         html: {
            bg: 'white',
            p: '0'
         },
         body: {
            bg: 'white',
            m: '0',
            p: '0'
         }
      }
   }
}

const theme = extendTheme({ config })

export default theme
