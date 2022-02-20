import { DeepPartial, ComponentStyleConfig } from '@chakra-ui/react'

const Button: DeepPartial<ComponentStyleConfig> = {
   baseStyle: {}, // changes to this affects any other buttons without component styles
   variants: {
      small: {
         bg: 'teal.900',
         color: 'white',
         fontSize: 'xl',
         fontWeight: '600',
         padding: '0px 40px',
         borderRadius: '30px',
         width: '180px',
         height: '50px'
      },
      default: {
         bg: 'yellow',
         color: 'white',
         fontSize: 'xl',
         fontWeight: '600',
         padding: '0px 40px',
         borderRadius: '30',
         width: '180px',
         height: '50px'
      }
   },
   defaultProps: {
      variant: 'small'
   }
}

export default Button
