import { DeepPartial, Theme } from '@chakra-ui/react'

const Button: DeepPartial<Theme['components']['Button']> = {
   baseStyle: {
      lineHeight: 'none',
      borderRadius: '30',
      fontWeight: '20px',
      _focus: {
         boxShadow: 'sm'
      },
      _hover: {
         _disabled: {
            bg: 'grey'
         }
      }
   },
   // Two sizes: sm and md
   sizes: {
      sm: {
         h: 7,
         minW: 8,
         fontSize: 'sm',
         px: 10
      },
      md: {
         h: 9,
         minW: 10,
         fontSize: 'md',
         px: 10
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
