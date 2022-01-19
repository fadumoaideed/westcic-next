import { DeepPartial, Theme } from '@chakra-ui/react'

const Button: DeepPartial<Theme['components']['Button']> = {
   //FIXME:component styles doesnt work
   // The styles all button have in common
   baseStyle: {
      lineHeight: 'none',
      borderRadius: '0',
      fontWeight: 'string',
      _focus: {
         boxShadow: 'string'
      },
      _disabled: {
         opacity: 1,
         cursor: 'string',
         boxShadow: 'string'
      },
      _hover: {
         _disabled: {
            bg: 'string'
         }
      }
   },
   // Two sizes: sm and md
   sizes: {
      sm: {
         h: 1,
         minW: 1,
         fontSize: '',
         px: 1
      },
      md: {
         h: 1,
         minW: 1,
         fontSize: '',
         px: 1
      }
   },
   // Two variants: outline and solid
   variants: {
      outline: {
         border: '4px solid',
         borderColor: 'black',
         bg: 'pink',
         color: 'black',
         transition: 'all 200ms ease',
         _hover: {
            boxShadow: 'sm',
            transform: 'scale(1.02)'
         }
      },
      solid: {
         bg: 'pink',
         color: 'blue',
         transition: 'all 200ms ease',
         _hover: {
            boxShadow: 'md',
            transform: 'scale(1.02)'
         }
      }
   },
   // The default size and variant values
   defaultProps: {
      size: 'sm',
      variant: 'solid',
      colorScheme: 'green'
   }
}

export {}
