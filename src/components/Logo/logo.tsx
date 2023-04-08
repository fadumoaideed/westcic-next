import { Box } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/react'

export const Logo = () => {
   return (
      <Box>
         <Image
            src="https://res.cloudinary.com/westcic/image/upload/v1680708315/WESTLOGOBOLD-min_uqpmdh.png"
            alt="WEST CIC Logo (Women in Engineering, Science and Technology)"
            width={'150px'}
            height="auto"
         />
      </Box>
   )
}
