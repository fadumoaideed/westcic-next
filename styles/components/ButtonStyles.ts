const Button = {
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
         px: 4, // <-- px is short for paddingLeft and paddingRight
         py: 3 // <-- py is short for paddingTop and paddingBottom
      },
      md: {
         fontSize: 'md',
         px: 6, // <-- these values are tokens from the design system
         py: 4 // <-- these values are tokens from the design system
      }
   },
   // Two variants: outline and solid
   variants: {
      outline: {
         border: '3px solid',
         borderColor: 'black',
         color: 'blue',
         transition: 'all 200ms ease',
         _hover: {
            boxShadow: 'sm',
            transform: 'scale(1.02)'
         }
      },
      solid: {
         bg: 'white',
         color: 'teal.700',
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
