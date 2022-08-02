import { extendTheme } from '@chakra-ui/react'
import breakpoints from './breakpoints'
import colors from './colors'
import fonts from './fonts'
import fontSizes from './fontSizes'
import fontWeights from './fontWeights'
import Button from './componentStyles/Button'
const customTheme = extendTheme({
   breakpoints,
   fonts,
   fontSizes,
   fontWeights,
   colors,
   components: { Button }
})

export default customTheme
