import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const breakpoints = createBreakpoints({
   sm: '40em',
   md: '52em',
   lg: '64em',
   xl: '80em'
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
   // initialColorMode: 'light',
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

const theme = extendTheme(config)

export default theme
