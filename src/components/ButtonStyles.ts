export const ButtonStyles = {
   //FIXME:component styles doesnt work
   // The styles all button have in common
   baseStyle: {
      fontWeight: 'bold',
      textTransform: 'uppercase',
      borderRadius: 'base' // <-- border radius is same for all variants and sizes
   },
   // Two sizes: sm and md
   sizes: {
      sm: {
         fontSize: 'sm',
         px: 5, // <-- px is short for paddingLeft and paddingRight
         py: 4 // <-- py is short for paddingTop and paddingBottom
      },
      md: {
         fontSize: 'md',
         px: 7, // <-- these values are tokens from the design system
         py: 5 // <-- these values are tokens from the design system
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
      transition: 'all 200ms ease',
      _hover: {
         boxShadow: 'sm',
         transform: 'scale(1.02)'
      }
   }
}
