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
import { Parallax } from 'react-scroll-parallax'

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

const DesktopView = () => {
   const shine = keyframes`
   to {
      background-position: 200% center;
    }
   `
   return (
      <Box
         height={['800px', '750', '600px', '500px']}
         position={'relative'}
         overflow="hidden"
         mx={['0px', '0px', '0px', '100px']}
      >
         <SimpleGrid
            columns={[1, 1, 3, 3]}
            top={'100px'}
            position={'absolute'}
            spacing="40px"
            spacingY="20px"
            mr="50px"
         >
            <Parallax translateY={[-20, 30]}>
               <Box>
                  <Flex>
                     <Text
                        fontSize={['lg', 'xl']}
                        color={'gray.500'}
                        ml="50px"
                        pl="5px"
                     >
                        Innovations can carry bias that are not
                        <span>&nbsp;</span>
                        <Text
                           as={'span'}
                           fontSize={['lg', 'xl']}
                           bg={
                              'linear-gradient(209deg, rgba(63,170,152,0.75) 0%, rgba(75,73,212,0.75) 100%)'
                           }
                           bgClip={'text'}
                           zIndex={3}
                           fontWeight={500}
                           background="-webkit-linear-gradient(209deg, rgba(63,170,152,0.75) 0%, rgba(75,73,212,0.75) 100%)"
                           animation={`${shine} 1s linear infinite`}
                        >
                           inclusive
                        </Text>
                        , leading to unintended negative consequences.
                        Businesses miss untapped markets and individuals become
                        excluded.
                     </Text>
                  </Flex>
               </Box>
            </Parallax>
            <Center position={'relative'} height={'300px'}>
               <Image
                  position={'absolute'}
                  maxHeight={'400px'}
                  src={
                     'https://res.cloudinary.com/westcic/image/upload/v1659211360/venn-diagram-g1_rrjlpc.png'
                  }
               />

               <Text
                  // bg={
                  //    'linear-gradient(209deg, rgba(63,170,152,0.75) 0%, rgba(75,73,212,0.75) 100%)'
                  // }
                  // bgClip={'text'}
                  zIndex={3}
                  fontSize={[20, 20, 25, 30]}
                  fontWeight={500}
                  // background="-webkit-linear-gradient(209deg, rgba(63,170,152,0.75) 0%, rgba(75,73,212,0.75) 100%)"
                  // webkitbackgroundclip="text"
                  // webkittextfillcolor="transparent"
                  color="white"
               >
                  SUSTAINABLE
               </Text>
            </Center>

            <Parallax translateY={[30, -40]}>
               <Box position={'relative'}>
                  <Text
                     color={'gray.500'}
                     position={'absolute'}
                     top={'100px'}
                     fontSize={['lg', 'xl']}
                     fontWeight={500}
                     ml={'25px'}
                     mr={'25px'}
                  >
                     Using human centered design as a tool for innovation means
                     providing solutions to problems rooted in the actual needs
                     of individuals and communities.
                  </Text>
                  {/* </AnimationOnScroll> */}
               </Box>
            </Parallax>
         </SimpleGrid>
      </Box>
   )
}

const MobileView = () => {
   const shine = keyframes`
to {
   background-position: 200% center;
 }
`

   return (
      <Box>
         <SimpleGrid columns={1}>
            <Box pt="40px">
               <Text
                  fontSize={['lg', 'xl']}
                  color={'gray.500'}
                  ml="50px"
                  mr="50px"
                  mb="20px"
               >
                  Innovations can carry bias that are not
                  <span>&nbsp;</span>
                  <Text
                     as={'span'}
                     fontSize={['lg', 'xl']}
                     bg={
                        'linear-gradient(209deg, rgba(63,170,152,0.75) 0%, rgba(75,73,212,0.75) 100%)'
                     }
                     bgClip={'text'}
                     zIndex={3}
                     fontWeight={500}
                     background="-webkit-linear-gradient(209deg, rgba(63,170,152,0.75) 0%, rgba(75,73,212,0.75) 100%)"
                     animation={`${shine} 1s linear infinite`}
                  >
                     inclusive
                  </Text>
                  , leading to unintended negative consequences. Businesses miss
                  untapped markets and individuals become excluded.
               </Text>
            </Box>

            <Center height={'300px'} mx={['50px', '60px', '70px']}>
               <Image
                  position={'absolute'}
                  maxHeight={'300px'}
                  src={
                     'https://res.cloudinary.com/westcic/image/upload/v1659211360/venn-diagram-g1_rrjlpc.png'
                  }
               />
               <Text
                  // bg={
                  //    'linear-gradient(209deg, rgba(63,170,152,0.75) 0%, rgba(75,73,212,0.75) 100%)'
                  // }
                  // bgClip={'text'}
                  zIndex={3}
                  fontSize={30}
                  fontWeight={500}
                  // background="-webkit-linear-gradient(209deg, rgba(63,170,152,0.75) 0%, rgba(75,73,212,0.75) 100%)"
                  // webkitbackgroundclip="text"
                  // webkittextfillcolor="transparent"
                  color="white"
               >
                  Sustainable
               </Text>{' '}
            </Center>
            <Box mt={'20px'} mb={'50px'}>
               <Text fontSize={['lg', 'xl']} color={'gray.500'} mx="50px">
                  Using human centered design as a tool for innovation means
                  providing solutions to problems rooted in the actual needs of
                  individuals and communities.
               </Text>
            </Box>
         </SimpleGrid>
      </Box>
   )
}
