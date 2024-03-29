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
         <Flex display="flex" flexDir={'row'} justifyContent="center">
            <Heading
               lineHeight={1.1}
               fontWeight={600}
               fontSize={['5xl', '6xl']}
               pb="25px"
               id="explore"
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
         </Flex>
         <SimpleGrid
            columns={[1, 1, 2, 3]}
            spacing={10}
            pt="10px"
            pb="30px"
            mx={['15px', '30px', '50px', '50px']}
            justifyItems={'center'}
         >
            <Box>
               <Link href="https://www.youtube.com/watch?v=It6CiMyS2Tc">
                  <Flex overflow="hidden">
                     <Image
                        alt={'Tedx talk'}
                        src={
                           'https://res.cloudinary.com/westcic/image/upload/c_scale,h_350/v1651936496/tedx-talk_c6ttph.png'
                        }
                        backgroundPosition={['center']}
                        objectFit={'cover'}
                        _hover={{
                           transform: 'scale(1.1)',
                           transition: '0.5s ease-out',
                           backgroundColor: 'rgba(0,0,0, 0.9)'
                        }}
                     />
                  </Flex>
               </Link>
            </Box>

            <Link
               href="downloads/Dictionary_of_Gender_Bias_Terminology.pdf"
               download="Dictionary_of_Gender_Bias_Terminology"
               target="_blank"
               rel="noreferrer"
            >
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
