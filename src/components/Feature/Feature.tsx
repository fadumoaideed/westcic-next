import React from 'react'
import {
   Box,
   Container,
   Flex,
   Heading,
   SimpleGrid,
   Stack,
   Text
} from '@chakra-ui/react'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import fontWeights from 'styles/fontWeights'
import { Parallax, useParallax } from 'react-scroll-parallax'
import SVGFeature from 'components/SVGFeature/SVGFeature'

function Feature() {
   return (
      <Box height={['800px', '750', '600px', '500px']} position={'relative'}>
         <Heading
            position={'absolute'}
            fontSize={'6xl'}
            left={'50px'}
            top="10px"
         >
            Lorem Ipsum
         </Heading>

         <SimpleGrid
            columns={[1, 3, 3]}
            top={'80px'}
            position={'absolute'}
            spacing="40px"
         >
            <Parallax translateY={[-5, 40]}>
               <Box>
                  <AnimationOnScroll animateIn="animate__fadeIn">
                     <Text fontSize={['lg', 'xl']} color={'gray.500'} pl="50px">
                        Using human centered design as a tool for innovation
                        means providing solutions to problems to that are rooted
                        in actual needs. We ideate, we itterate and we implement
                        solutions that impact indivduals and communities
                     </Text>
                  </AnimationOnScroll>
               </Box>
            </Parallax>
            <Box position={'relative'}>
               <SVGFeature />
            </Box>

            <Parallax speed={8}>
               <Box position={'relative'}>
                  <AnimationOnScroll animateIn="animate__fadeIn">
                     <Text
                        color={'gray.500'}
                        // align="justify"
                        position={'absolute'}
                        top={'100px'}
                        right={'0px'}
                        fontSize={['lg', 'xl']}
                        fontWeight={fontWeights.thin}
                        pr={'50px'}
                     >
                        Sometimes innoative solutions inheritly have bias and
                        unintended, occationally exculde groups
                     </Text>
                  </AnimationOnScroll>
               </Box>
            </Parallax>
         </SimpleGrid>
      </Box>
   )
}

export default Feature
