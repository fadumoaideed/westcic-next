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
//TODO: Mobile vs desktop view
function Feature() {
   return (
      <Box
         height={['800px', '750', '600px', '500px']}
         position={'relative'}
         overflow="hidden"
      >
         {/* <Container>
            <Heading
               position={'absolute'}
               fontSize={'6xl'}
               left={'50px'}
               top="10px"
               pb="20px"
            >
               Lorem Ipsum
            </Heading>
         </Container> */}

         <SimpleGrid
            columns={[1, 1, 3, 3]}
            top={'100px'}
            position={'absolute'}
            spacing="40px"
            spacingY="20px"
         >
            <Parallax translateY={[-20, 30]}>
               <Box height={'300px'} b>
                  <AnimationOnScroll animateIn="animate__fadeIn">
                     <Text
                        fontSize={['lg', 'xl']}
                        color={'gray.500'}
                        ml="50px"
                        pl="5px"
                     >
                        Innovations can carry bias that are not inclusive,
                        leading to unintended negative consequences. Businesses
                        miss untapped markets and individuals become excluded.
                     </Text>
                  </AnimationOnScroll>
               </Box>
            </Parallax>

            <Box position={'relative'} height={'300px'} top={'-50px'}>
               <SVGFeature />
            </Box>

            <Parallax speed={8} translateY={[30, -40]}>
               <Box position={'relative'} height={'300px'}>
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
                        Using human centered design as a tool for innovation
                        means providing solutions to problems rooted in the
                        actual needs of individuals and communities.
                     </Text>
                  </AnimationOnScroll>
               </Box>
            </Parallax>
         </SimpleGrid>
      </Box>
   )
}

export default Feature
