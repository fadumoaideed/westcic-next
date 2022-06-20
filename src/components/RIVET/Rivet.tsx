import {
   Flex,
   SimpleGrid,
   Text,
   Stack,
   Heading,
   Container,
   Box,
   Center
} from '@chakra-ui/layout'
import {
   Avatar,
   AvatarBadge,
   AvatarGroup,
   useColorModeValue
} from '@chakra-ui/react'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import { ParallaxBanner } from 'react-scroll-parallax'
import Image from 'next/image'

export function Rivet() {
   return (
      <Container id="rivet" maxW={'1600px'} py={12}>
         <SimpleGrid columns={{ base: 1, md: 2 }} spacing={'20'} px="100px">
            <Flex overflow="hidden" height="350px">
               <ParallaxBanner
                  layers={[
                     {
                        image: 'https://res.cloudinary.com/westcic/image/upload/v1640045427/plant-bulb_u9nge3.jpg',
                        speed: -15
                     }
                  ]}
               />
            </Flex>
            {/* <Flex overflow="hidden">
               <Image
                  alt={'feature image'}
                  src={
                     'https://res.cloudinary.com/westcic/image/upload/v1640045427/plant-bulb_u9nge3.jpg'
                  }
                  objectFit={'cover'}
                  _hover={{
                     transform: 'scale(1.1)',
                     transition: '0.5s ease-out'
                  }}
               />
            </Flex> */}
         </SimpleGrid>
      </Container>
   )
}

export default Rivet
