import {
   Box,
   Flex,
   Heading,
   Link,
   SimpleGrid,
   Image,
   Text
} from '@chakra-ui/react'

export default function Resources() {
   return (
      <>
         <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={['5xl', '6xl']}
            align="center"
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
                  bottom: 1,
                  left: 0,
                  bg: 'teal.400',
                  zIndex: -1
               }}
            >
               Explore More
            </Text>
         </Heading>
         <SimpleGrid
            columns={[1, 1, 2, 3]}
            spacing={10}
            pt="10px"
            pb="30px"
            px={['50px', '50px', '50px', '50px', '70px']}
            justifyItems={'center'}
         >
            <Box>
               <Link href="https://www.youtube.com/watch?v=It6CiMyS2Tc">
                  <Flex>
                     <Image
                        alt={'feature image'}
                        src={
                           'https://res.cloudinary.com/westcic/image/upload/c_scale,h_350/v1651936496/tedx-talk_c6ttph.png'
                        }
                        objectFit={'cover'}
                        _hover={{
                           transform: 'scale(1.1)',
                           transition: '0.5s ease-out',
                           bg: 'rgba(0,0,0, 0.9)'
                        }}
                     />
                  </Flex>
               </Link>
            </Box>
            <Link href="https://res.cloudinary.com/westcic/raw/upload/v1656191742/Dictionary_of_Gender_Bias_Terminology_1_pa0evf.pptx">
               <Box>
                  <Flex overflow="hidden">
                     <Image
                        alt={'feature image'}
                        src={
                           'https://res.cloudinary.com/westcic/image/upload/c_scale,h_350/v1651929597/gender-bias-terminology-1_y5d5nr.png'
                        }
                        objectFit={'cover'}
                        backgroundPosition={['center']}
                        _hover={{
                           transform: 'scale(1.1)',
                           transition: '0.5s ease-out',
                           bg: 'rgba(0,0,0, 0.9)'
                        }}
                     />
                  </Flex>
               </Box>
            </Link>

            <Box>
               <Link href="https://www.astonsu.com/society/west/">
                  <Flex overflow="hidden">
                     <Image
                        alt={'feature image'}
                        src={
                           'https://res.cloudinary.com/westcic/image/upload/c_scale,h_350/v1656194831/WEST_Aston_society_gubbsv.jpg'
                        }
                        backgroundPosition={['center']}
                        objectFit={'cover'}
                        _hover={{
                           transform: 'scale(1.1)',
                           transition: '0.5s ease-out',
                           backgroundColor: 'rgba(105,105,105, 0.9)'
                        }}
                     />
                  </Flex>
               </Link>
            </Box>
         </SimpleGrid>
      </>
   )
}
