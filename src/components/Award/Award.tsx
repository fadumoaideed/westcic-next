import {
   Box,
   Container,
   Flex,
   Heading,
   SimpleGrid,
   Stack,
   Text
} from '@chakra-ui/layout'
import { Image } from '@chakra-ui/react'
import { AnimationOnScroll } from 'react-animation-on-scroll'

function Award() {
   return (
      <Box>
         <Container id="award" maxW={'1600px'} py={12}>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={'20'} px="100px">
               <Stack spacing={'20px'}>
                  <AnimationOnScroll
                     animateOnce={false}
                     animateIn="animate__slideInLeft"
                  >
                     <Heading fontSize={'6xl'}>Lorem Ipsum</Heading>
                  </AnimationOnScroll>
                  <AnimationOnScroll
                     animateOnce={false}
                     animateIn="animate__slideInLeft"
                  >
                     <Text color={'gray.500'} fontSize={'xl'} pr="10px">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore
                        consetetur sadipscing elitr, sed diam nonumy eirmod
                        tempor invidunt ut labore consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore
                        consetetur sadipscing elitr, sed diam nonumy eirmod
                        tempor invidunt ut labore.
                     </Text>
                  </AnimationOnScroll>
               </Stack>
               <Flex overflow="hidden">
                  <Image
                     alt={'feature image'}
                     src={
                        'https://res.cloudinary.com/westcic/image/upload/v1651922580/section1v1.1_o6zdqo.png'
                     }
                     objectFit={'cover'}
                     _hover={{
                        transform: 'scale(1.1)',
                        transition: '0.5s ease-out'
                     }}
                  />
               </Flex>
            </SimpleGrid>
         </Container>
      </Box>
   )
}

export default Award
