import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const breakpoints = createBreakpoints({
   sm: '40em',
   md: '52em',
   lg: '64em',
   xl: '80em'
})

const colors = {
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
   fonts: {
      body: 'Inter',
      heading: 'Inter'
   },
   breakpoints
}

const theme = extendTheme({ colors })

export default theme
