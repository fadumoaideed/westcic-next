import { useState, useEffect } from 'react'
import {
   Box,
   Center,
   Flex,
   Image,
   keyframes,
   SimpleGrid,
   Text
} from '@chakra-ui/react'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import fontWeights from 'styles/fontWeights'
import { Parallax } from 'react-scroll-parallax'
import { SVGFeature, SVGFeatureMobile } from 'components/SVGFeature/SVGFeature'

export const Feature = () => {
   const [mobile, setMobile] = useState<boolean>(false)

   useEffect(() => {
      const updateMobile = () => {
         setMobile(window.innerWidth < 850 ? true : false)
      }

      updateMobile()
      window.addEventListener('resize', updateMobile)
      return () => {
         window.removeEventListener('resize', updateMobile)
      }
   }, [])
   return typeof mobile !== 'undefined' ? (
      mobile ? (
         <MobileView />
      ) : (
         <DesktopView />
      )
   ) : null
}

export default Feature

const MobileView = () => {
   const flow = keyframes`
  0% {
   background-position: 0 50%;
  }
  50% {
   background-position: 100% 50%;
  }
  100% {
   background-position: 0 50%;
  }
`

   return (
      <Box>
         <SimpleGrid columns={1}>
            <Box height={'170px'} pt="20px">
               <AnimationOnScroll animateOnce animateIn="animate__fadeInLeft">
                  <Text fontSize={['lg', 'xl']} color={'gray.500'} mx="50px">
                     Innovations can carry bias that are not{' '}
                     <Text
                        as="span"
                        fontWeight={'bold'}
                        animation={`${flow} 30s ease-in-out infinite`}
                        background={
                           'linear-gradient(-60deg, #904E95 #904E95 #e73c73 #ee7752)'
                        }
                        backgroundClip="text"
                     >
                        inclusive
                     </Text>{' '}
                     inclusive , leading to unintended negative consequences.
                     Businesses miss untapped markets and individuals become
                     excluded.
                  </Text>
               </AnimationOnScroll>
            </Box>
            <Box height="300px">{/* <SVGFeatureMobile /> */}</Box>
            <Box position={'relative'} height={'200px'}>
               <AnimationOnScroll animateOnce animateIn="animate__fadeInLeft">
                  <Text fontSize={['lg', 'xl']} color={'gray.500'} mx="50px">
                     Using human centered design as a tool for innovation means
                     providing solutions to problems rooted in the actual needs
                     of individuals and communities.
                  </Text>
               </AnimationOnScroll>
            </Box>
         </SimpleGrid>
      </Box>
   )
}

const DesktopView = () => {
   return (
      <Box
         height={['800px', '750', '600px', '500px']}
         position={'relative'}
         overflow="hidden"
         mx={['50px']}
      >
         <SimpleGrid
            columns={[1, 1, 3, 3]}
            top={'100px'}
            position={'absolute'}
            spacing="40px"
            spacingY="20px"
         >
            <Parallax translateY={[-20, 30]}>
               <Box height={'300px'}>
                  <AnimationOnScroll animateOnce animateIn="animate__fadeIn">
                     <Text
                        fontSize={['lg', 'xl']}
                        color={'gray.500'}
                        ml="50px"
                        pl="5px"
                     >
                        Innovations can carry bias that are not
                        <span>&nbsp;</span>
                        inclusive , leading to unintended negative consequences.
                        Businesses miss untapped markets and individuals become
                        excluded.
                     </Text>
                  </AnimationOnScroll>
               </Box>
            </Parallax>
            <AnimationOnScroll animateIn="animate__fadeIn">
               <Box position={'relative'} height={'300px'}>
                  <Image
                     left={['0px', '0px', '0px', '20px', '30px']}
                     position={'absolute'}
                     maxHeight={'400px'}
                     src={
                        'https://res.cloudinary.com/westcic/image/upload/v1657285264/venn1_vnad7f.png'
                     }
                  />
                  <Image
                     left={['0px', '0px', '0px', '20px', '30px']}
                     position={'absolute'}
                     maxHeight={'400px'}
                     src={
                        'https://res.cloudinary.com/westcic/image/upload/v1657278092/masked_mypcfh.png'
                     }
                  />

                  <Text
                     bg={
                        'linear-gradient(-60deg, #904E95 #904E95 #e73c73 #ee7752)'
                     }
                     bgClip="text"
                     color={'transparent'}
                     webkit-background-clip="text"
                  >
                     Sustainable
                  </Text>
               </Box>
            </AnimationOnScroll>

            <Parallax speed={8} translateY={[30, -40]}>
               <Box position={'relative'} height={'300px'}>
                  <AnimationOnScroll animateOnce animateIn="animate__fadeIn">
                     <Text
                        color={'gray.500'}
                        position={'absolute'}
                        top={'100px'}
                        fontSize={['lg', 'xl']}
                        fontWeight={fontWeights.thin}
                        ml={'25px'}
                        mr={'50px'}
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
