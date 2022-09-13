import { useState, useEffect } from 'react'
import {
   Box,
   Container,
   Flex,
   Heading,
   Image,
   SimpleGrid,
   Stack,
   Text
} from '@chakra-ui/react'
//TODO: combine impact and hcd section into one so it explain both
//
const Feature = () => {
   const [mobile, setMobile] = useState<boolean>(false)

   useEffect(() => {
      const updateMobile = () => {
         setMobile(window.innerWidth < 750 ? true : false)
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
   return (
      <Container maxW={'8xl'}>
         <Stack
            align={'center'}
            spacing={{ base: 8, md: 10 }}
            direction={{ base: 'row', md: 'row' }}
            mx={['20px', '30px', '45px']}
            mb="30px"
         >
            <Stack flex={1} spacing={{ base: 10, md: 10 }}>
               <Heading
                  lineHeight={1.1}
                  fontWeight={600}
                  fontSize={['5xl', '6xl']}
                  pb="20px"
               >
                  <Text
                     as={'span'}
                     position={'relative'}
                     _after={{
                        content: "''",
                        width: 'full',
                        height: '30%',
                        position: 'absolute',
                        bottom: -1,
                        left: 0,
                        bg: 'teal.400',
                        zIndex: -1
                     }}
                  >
                     Human-centered design as a tool for innovation
                  </Text>
               </Heading>
               <Text color={'gray.500'} fontSize="xl">
                  Human centered design sits at the intersection of innovation
                  and the real needs of individuals and communities.
               </Text>
            </Stack>
            <Flex
               flex={1}
               justify={'center'}
               align={'center'}
               position={'relative'}
            >
               <Image
                  maxHeight="400px"
                  alt={'feature image'}
                  src={
                     'https://res.cloudinary.com/westcic/image/upload/v1659211360/venn-diagram-g1_rrjlpc.png'
                  }
                  objectFit={'fill'}
                  align={'center'}
               />
            </Flex>
         </Stack>
      </Container>
   )
}

const MobileView = () => {
   return (
      <SimpleGrid mx="20px" columns={[1, 2]}>
         <Box>
            <Heading
               mt="20px"
               lineHeight={1.1}
               fontWeight={600}
               fontSize={['2.6rem', '5xl', '6xl']}
               pb="25px"
            >
               <Text
                  as={'span'}
                  position={'relative'}
                  _after={{
                     content: "''",
                     width: 'full',
                     height: '30%',
                     position: 'absolute',
                     bottom: -1,
                     left: 0,
                     bg: 'teal.400',
                     zIndex: -1
                  }}
               >
                  Human-centered design as a tool for innovation
               </Text>
            </Heading>
            <Text color={'gray.500'} fontSize="xl">
               Human centered design sits at the intersection of innovation and
               the real needs of individuals and communities.
            </Text>
         </Box>

         <Flex
            flex={1}
            justify={'center'}
            align={'center'}
            position={'relative'}
         >
            <Image
               alt={'feature image'}
               src={
                  'https://res.cloudinary.com/westcic/image/upload/v1659211360/venn-diagram-g1_rrjlpc.png'
               }
               maxHeight="400px"
               objectFit={'cover'}
               align={'center'}
               h={'auto'}
            />
         </Flex>
      </SimpleGrid>
   )
}
{
   /* <Box>
<Flex>
   <Text
      fontSize={['lg', 'xl']}
      color={'gray.500'}
      ml="50px"
      pl="5px"
   >
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
                  </Text>
         </Text> 
      Using human centered design as a tool for innovation means
      providing solutions to problems rooted in the actual needs
      of individuals and communities.
   </Text>
</Flex>
</Box> */
}
